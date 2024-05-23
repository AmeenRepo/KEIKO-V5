let handler = async (m, { conn, text, usedPrefix, command }) => {
  //To get sender's name
   let name = m.pushName || conn.getName(m.sender);
  
  // Define the content
  let mainImg = "https://raw.githubusercontent.com/AmeenRepo/DURGA-MD/main/AMEEN-SER/AMEEN.png"; // Main image URL
  let smallImg = "https://raw.githubusercontent.com/AmeenRepo/DURGA-MD/main/AMEEN-SER/AMEEN.png"; // Small image URL
  let smallText = "I'M Alive Now"; // Small text
  let mainText = "AMEEN-SER"; // Main text
  let audioUrl = "https://raw.githubusercontent.com/AmeenRepo/DURGA-MD/main/src/mp3/AmeenAlive.mp3"; // Audio URL
  // Construct the message
  let con = {
    key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) },
    message: {
      contactMessage: {
        displayName: `${name}`, // Replace with the desired display name
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  };

  let doc = {
    audio: {
      url: audioUrl
    },
    mimetype: 'audio/mp4',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: "DURGA-MD",
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: smallText,
        body: mainText,
        thumbnailUrl: smallImg, // Small image
        sourceUrl: 'https://github.com/AmeenRepo/DURGA-MD',
        mediaType: 1,
        renderLargerThumbnail: false,
        mediaUrl: mainImg // Main image
      }
    }
  };

  // Send the message
  await conn.sendMessage(m.chat, doc, { quoted: con });
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler;
