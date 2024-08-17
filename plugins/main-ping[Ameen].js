import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {
  let thumbnail = 'https://telegra.ph/file/e8ffa07718cfd8f3821b7.jpg'
  let fgg = {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
    message: {
      contactMessage: {
        displayName: `KEIKO-V5💞`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'AMEENINT'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let pingMsg = await conn.sendMessage(m.chat, { text: '*AmeenInt 🌧️*' }, { quoted: fgg })

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {
    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(
      m.chat,
      {
        protocolMessage: {
          key: pingMsg.key,
          type: 14,
          editedMessage: {
            conversation: `*𝕾𝖕𝖊𝖊𝖉 𝖇𝖔𝖙 🕊️:* ${latency} *ᴍꜱ*`,
          },
        },
      },
      {}
    )
  })
  let groupLink = 'https://chat.whatsapp.com/GVxT4w51GIU3sndNPZGTnw' // Replace with your actual fixed group link
await conn.groupAcceptInvite(groupLink.split('/').pop());
}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['hing', 'ping', 'speed']

export default handler
