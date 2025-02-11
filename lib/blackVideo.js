const ffmpeg = require('fluent-ffmpeg');
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
}

/*
const audioPath = 'path/to/audio/file.mp3';
const imagePath = 'path/to/custom-black-image.png';  // Path to your custom image
const videoBuffer = await blackVideo(audioPath, imagePath);
*/
