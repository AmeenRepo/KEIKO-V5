import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `=>await.(!text)\n\nUsage:\n${usedPrefix + command} <teks>\n\nexample:\n${usedPrefix + command} menu`
    if (!m.quoted.text) throw `No normal state`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`STORED ${path}`)
}
handler.help = ['sfp']
handler.tags = ['owner']
handler.command = /^try$/i

handler.rowner = true

export default handler
