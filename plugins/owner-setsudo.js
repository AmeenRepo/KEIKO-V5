let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
    } else {
        who = m.chat;
    }
    if (!who) throw '*TAG A PERSON 📍*';
    if (global.owner.includes(who.split('@')[0])) throw 'This person is already an owner!';
    global.owner.push([who.split('@')[0], m.name, true]);
    const caption = `*Now @${who.split('@')[0]} Got ACCESS To The Owner Only Commands✅*`;
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption)
    });
}
handler.help = ['setsudo tag']
handler.tags = ['owner']
handler.command = /^setsudo/i;
handler.owner = true

export default handler;
