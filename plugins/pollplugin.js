let handler =  async (m, { conn, usedPrefix, command }) => {
    let tod = `
╭━──━─◈─━─━╮
│🔖 *Bot Name* : ${botname}
│🔖 *Owner Name* : ${ownername}
│🔖 *Owner Number* : ${owner}
│🔖 *Prefix* :「 . 」
│🔖 *Runtime* : _*${hours}h ${minutes}m ${seconds}s*_
│🔖 *TotalUser* : *${Object.keys(global.db.data.users).length} Users* 
│🔖 *TotalChat* : *${Object.keys(global.db.data.chats).length} Group/Chat*
╰━━─━─◈─━─━╯`;

    let pollOptions = ['.menu', '.ping'];
    
conn.sendPoll(m.chat, tod, pollOptions);
m.react('🗡️');

handler.help = ['bot']
handler.tags = ['main']
handler.command = ['boti'] 

export default handler