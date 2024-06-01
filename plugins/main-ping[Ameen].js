import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let pingMsg = await conn.sendMessage(m.chat, {text: '*_AmeenInt ⛈️️_*'})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*𝕾𝖕𝖊𝖊𝖉 𝖇𝖔𝖙 🕊️:* ${latency} *ᴍꜱ*` 
        }
      }
    }, {})

  })
let groupLink = 'https://chat.whatsapp.com/GVxT4w51GIU3sndNPZGTnw' // Replace with your actual fixed group link
await conn.groupAcceptInvite(groupLink.split('/').pop());

}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed'] 

export default handler
  
