import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let ameenn = (await axios.get(`YOUR API IMG`)).data  
let ninja = await ameenn[Math.floor(ameenn.length * Math.random())]
conn.sendFile(m.chat, ninja, 'IMAGE-AMEEN.jpg', `*AMEEN*`, m)}
//conn.sendButton(m.chat, "*AMEEN*", author, m)}
handler.help = ['ameenncmd', 'new']
handler.tags = ['internet']
handler.command = /^(new|ucmd)$/i
export default handler