import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/image/.test(mime)) {
    let url = await webp2png(await q.download())
    await conn.updateProfilePicture(conn.user.jid, { url }).then(_ => m.reply('Success Update Profile Picture'))
  } else if (args[0] && /https?:\/\//.test(args[0])) {
    await conn.updateProfilePicture(conn.user.jid, { url: args[0] }).then(_ => m.reply('Success Update Profile Picture'))
  } else throw 'Where\'s the media?'
}
handler.help = ['setpp', 'setppbot']
handler.tags = ['owner']
handler.command = /^setbotpp/i

handler.rowner = true

export default handler
