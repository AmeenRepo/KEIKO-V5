import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {        
let res = (await axios.get(`https://raw.githubusercontent.com/AmeenRepo/database/main/ameen/mser.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*MADE BY AMEEN SER 🗡️*`, m)} 
handler.help = ['mser']
handler.tags = ['internet']
handler.command = /^(mser)$/i
export default handler