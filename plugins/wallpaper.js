import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Mrimperfect7/api/IMPU/BOT-JSON/wallpaper.js`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*WALLPAPER BY IMPU SER*`, m)} 
//conn.sendButton(m.chat, "*WALLPAPER*", author, url, [['🖼️ NEXT 🖼️', `${usedPrefix + command}`]], m)}
handler.help = ['wal']
handler.tags = ['img']
handler.command = /^(wal)$/i
export default handler
