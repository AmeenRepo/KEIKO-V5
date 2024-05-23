import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Mrimperfect7/api/IMPU/BOT-JSON/fpp.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*fpp*`, m)} 
//conn.sendButton(m.chat, "*fpp*", author, url, [['NEXT ', `${usedPrefix + command}`]], m)}
handler.help = ['fpp']
handler.tags = ['img']
handler.command = /^(fpp)$/i
export default handler
