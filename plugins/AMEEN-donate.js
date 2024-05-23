
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
 ❖ *DONATE*  ❖
If you get more info of 🤍 DURGA MD 🤍 Contact 916238768108`
let img = 'https://i.imgur.com/EKtYL4b.jpeg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donate', 'give'] 

export default handler
