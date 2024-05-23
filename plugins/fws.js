import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Mrimperfect7/api/IMPU/BOT-JSON/fws.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*FWS*`, m)} 
//conn.sendButton(m.chat, "*FWS*", author, url, [[' NEXT ', `${usedPrefix + command}`]], m)}
handler.help = ['fws']
handler.tags = ['img']
handler.command = /^(fws)$/i
export default handler
