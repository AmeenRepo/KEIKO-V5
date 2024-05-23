import displayLoadingScreen from '../lib/loading.js'
import fetch from 'node-fetch'
import { delay } from '@whiskeysockets/baileys'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw `Uhm.. What Do You Want To Say?`
    m.react('🌬️')
    //await displayLoadingScreen(conn, m.chat)

    const prompt = encodeURIComponent(text)
    let apiurl = `https://ultimetron.guruapi.tech/gpt4?prompt=${prompt}`

    const result = await fetch(apiurl)
    const response = await result.json()
    console.log(response)
    const textt = response.result.reply
    await typewriterEffect(conn, m, m.chat, textt)
  } catch (error) {
    console.error(error)
    m.reply('Oops! Something Went Wrong. , We Are Trying Had To Fix It Asap')
  }
}
handler.help = ['gemini <text>']
handler.tags = ['tools']
handler.command = /^(gpt4)$/i

export default handler

async function typewriterEffect(conn, quoted, from, text) {
  let { key } = await conn.sendMessage(from, { text: 'Thinking...' }, { quoted: quoted })

  for (let i = 0; i < text.length; i++) {
    const noobText = text.slice(0, i + 1)
    await conn.relayMessage(
      from,
      {
        protocolMessage: {
          key: key,
          type: 14,
          editedMessage: {
            conversation: noobText,
          },
        },
      },
      {}
    )

    await delay(100) // Adjust the delay time (in milliseconds) as needed
  }
}
