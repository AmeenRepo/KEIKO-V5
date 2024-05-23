import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Mrimperfect7/api/IMPU/BOT-JSON/aesthetic.js`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*AESTHETIC IMAGES BY IMPU SER*`, m)} 
//conn.sendButton(m.chat, "*AESTHETIC IMAGES BY IMPU SER*", author, url, [['🫴🏻 NEXT 🥀', `${usedPrefix + command}`]], m)}
handler.help = ['aes']
handler.tags = ['img']
handler.command = /^(aes)$/i
export default handler
