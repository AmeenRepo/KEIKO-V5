
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./AMEEN-SER/AMEEN/${pickRandom(["ser", "babe", "hihi", "meme", "meera", "ninja", "thuli"])}.mp3`

m.reply( `👻Hello ${taguser} 🤍`)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(.men|@916238768108)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
