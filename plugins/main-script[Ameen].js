import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
    let Ameen = 'https://telegra.ph/file/aba12083d53dc30f5ccc9.jpg'
    
  let Nivedya = `
┌─❖
│「 *𝐊𝐄𝐈𝐊𝐎 𝐌𝐎𝐉𝐎🌩️*」
│
│     🛠️Made By
│              AmeenInt㋡ 
│         
└┬❖ 「 *⚠️ SCRIPT* 」
  │
  │☞ *💫OWNER:* 𝐂𝐚𝐥𝐜𝐢𝐅𝐞𝐫 
  │
  │☞ *🌬️OPARATOR:* Balram
  │
  └─────────────┈ ⳹
  `
let Niya = "© 𝐂𝐚𝐥𝐜𝐢𝐅𝐞𝐫⚡"
conn.sendButton(m.chat, Nivedya, Niya, Ameen, [], null, [['BOT SCRIPT ㋡', 'https://GitHub.com/CalciFer-Howl/KEIKO-V5']], m)
m.react('🎟️')
}
handler.help = ['main']
handler.command = ['sc', 'repo']

export default handler
