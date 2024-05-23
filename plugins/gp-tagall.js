let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(` *Group :* *${groupMetadata.subject}*\nMembers : *${participants.length}*${text ? `\nMessage : ${text}\n` : ''}\n┌───⊷ *Mention By 🤍 MAGIC MOA 🤍*\n` + users.map(v => '👀 @' + v.replace(/@.+/, '')).join`\n` + '\n└──*🤍 MAGIC MOA 🤍*──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
