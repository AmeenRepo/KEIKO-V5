import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/AmeenRepo/database/main/ameen/hehe.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*HEHE BY AMEEN 🕊️*`, m)} 
//conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['hehe']
handler.tags = ['internet']
handler.command = /^(hehe)$/i
export default handler
