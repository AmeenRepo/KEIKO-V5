/*const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

async function blackVideo(audioPath, imagePath) {
    const outputPath = 'temp_video.mp4';

    return new Promise((resolve, reject) => {
        if (!fs.existsSync(imagePath)) {
            return reject(new Error("Image file does not exist"));
        }

        
        ffmpeg()
            .input(audioPath) // Input the audio file
            .inputOption('-t 30') // Set video duration (adjust based on audio length)
            .input(imagePath) // Input the custom black image
            .outputOptions('-vf', 'movie=' + imagePath + ' [watermark]; [in][watermark] overlay=W-w-10:H-h-10 [out]') // Overlay image as background
            .audioCodec('aac') // Use AAC audio codec
            .output(outputPath) // Output video path
            .on('end', () => {
                // Once the video is created, read it into a buffer
                fs.readFile(outputPath, (err, data) => {
                    if (err) return reject(err);
                    resolve(data); // Return video as a buffer
                    fs.unlinkSync(outputPath); // Cleanup the temporary video file
                });
            })
            .on('error', (err) => {
                reject(err); // Reject the promise if there's an error
            })
            .run();
    });
} */

/*
const audioPath = 'path/to/audio/file.mp3';
const imagePath = 'path/to/custom-black-image.png';  // Path to your custom image
const videoBuffer = await blackVideo(audioPath, imagePath);
*/
import { promises } from 'fs'
import { join } from 'path'
import { spawn } from 'child_process'

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
  return new Promise(async (resolve, reject) => {
    try {
      let tmp = join(global.__dirname(import.meta.url), '../tmp', +new Date() + '.' + ext)
      let out = tmp + '.' + ext2
      await promises.writeFile(tmp, buffer)
      spawn('ffmpeg', ['-y', '-i', tmp, ...args, out])
        .on('error', reject)
        .on('close', async code => {
          try {
            await promises.unlink(tmp)
            if (code !== 0) return reject(code)
            resolve({
              data: await promises.readFile(out),
              filename: out,
              delete() {
                return promises.unlink(out)
              },
            })
          } catch (e) {
            reject(e)
          }
        })
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * Convert Audio to Video with a Black Image as Background
 * @param {Buffer} audioBuffer Audio Buffer
 * @param {Buffer} imageBuffer Image Buffer (Used as background)
 * @param {String} audioExt Audio File Extension (e.g., 'mp3', 'ogg')
 * @param {String} imageExt Image File Extension (e.g., 'jpg', 'png')
 * @returns {Promise<{data: Buffer, filename: String, delete: Function}>}
 */
function blackVideo(audioBuffer, imageBuffer, audioExt, imageExt) {
  return new Promise(async (resolve, reject) => {
    try {
      const tmpAudioPath = join(global.__dirname(import.meta.url), '../tmp', +new Date() + '.' + audioExt);
      const tmpImagePath = join(global.__dirname(import.meta.url), '../tmp', +new Date() + '.' + imageExt);
      const tmpOutputPath = tmpAudioPath + '.mp4';

      // Write the audio and image buffers to temporary files
      await promises.writeFile(tmpAudioPath, audioBuffer);
      await promises.writeFile(tmpImagePath, imageBuffer);

      // Use ffmpeg to combine the audio and image
      spawn('ffmpeg', [
        '-y',
        '-t', '30', // Set video duration (adjust this as needed)
        '-i', tmpAudioPath, // Input the audio file
        '-i', tmpImagePath, // Input the image file
        '-c:v', 'libx264',
        '-c:a', 'aac',
        '-ab', '128k',
        '-ar', '44100',
        '-vf', `movie=${tmpImagePath} [watermark]; [in][watermark] overlay=W-w-10:H-h-10 [out]`,
        tmpOutputPath, // Output video file
      ])
        .on('error', reject)
        .on('close', async code => {
          try {
            if (code !== 0) return reject(code);

            // Read the generated video into a buffer
            const videoData = await promises.readFile(tmpOutputPath);

            resolve({
              data: videoData,
              filename: tmpOutputPath,
              delete: async () => {
                // Cleanup temporary files
                await promises.unlink(tmpAudioPath);
                await promises.unlink(tmpImagePath);
                await promises.unlink(tmpOutputPath);
              },
            });
          } catch (e) {
            reject(e);
          }
        });
    } catch (e) {
      reject(e);
    }
  });
}

export { blackVideo, ffmpeg };
