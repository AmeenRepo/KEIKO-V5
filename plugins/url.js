import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '_Replay To A Audio/Video_'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`
      𝞙𝞢𝞘𝞙𝞗 𝝯𝟱 🦋
      
*Url:* ${link}
  `)
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = ['url', 'tourl']

export default handler
