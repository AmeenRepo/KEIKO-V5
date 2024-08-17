// In-memory storage for dynamic values (reset when bot restarts)
let menuSettings = {
    imageLink: 'https://telegra.ph/file/78e9e1060ea982de1ad97.jpg',
    botName: '🍓𝐊𝐞𝐢𝐤𝐨 𝐕𝟓⛄',
    ownerName: '🤍AͣᴍͫᴇͤᴇͤɴIͥɴᴛⷮ🌨️',
};

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (command === 'editmenu') {
        // Split the input text by ';' to get the new values
        let [newLink, newBotName, newOwnerName] = text.split(';');

        // Update the menu settings
        if (newLink) menuSettings.imageLink = newLink;
        if (newBotName) menuSettings.botName = newBotName;
        if (newOwnerName) menuSettings.ownerName = newOwnerName;

        m.reply('✅ Menu settings updated successfully!');
    } else if (command === 'menu') {
        // Retrieve the dynamic values
        let pp = menuSettings.imageLink;
        let NameBot = menuSettings.botName;
        let NameOwner = menuSettings.ownerName;

        let more = String.fromCharCode(8206);
        let readMore = more.repeat(850);

        const AmeenXnt = {
            "key": {
                "participants": "916238768108@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
            },
            "message": {
                "contactMessage": {
                    "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            },
            "participant": "0@s.whatsapp.net"
        };

        let lkr = `┌─❖
│「 𝗛ey 👋🏻 」
└┬❖ 「 *${NameBot} ㋡* 」
  │
  │❖ *HOST:* LINUX   
  │  
  │❖ *OWNER:* ${NameOwner}
  │
  │❖ *DEVELOPER:* ${author}
  │
  │❖ *BOT:* *㍐ 𝐊𝐞𝐢𝐤𝐨 𝐕𝟓*
  │
  │❖ *VERSION:* 2.2.0
  │
  └─────────────┈ ⳹
  ┌─❖
│「 ${NameBot} 」
│
│    ⚠️ Made By
│               Ameen-Ser㋡ 
│         
└┬❖ 「 *Owner Menu* 」
   │
   │✺ ${usedPrefix}*On/Off* public
   │✺ ${usedPrefix}*On/Off* autoreact 
   │✺ ${usedPrefix}update 
   │✺ ${usedPrefix}sudo
   │✺ ${usedPrefix}autoadmin
   │✺ ${usedPrefix}left
   │✺ ${usedPrefix}banchat
   │✺ ${usedPrefix}unbanchat
   │✺ ${usedPrefix}ban
   │✺ ${usedPrefix}unban
   │✺ ${usedPrefix}banlist
   │✺ ${usedPrefix}block
   │✺ ${usedPrefix}unblock
   │✺ ${usedPrefix}blocklist
   │✺ ${usedPrefix}bc
   │✺ ${usedPrefix}bcgc
   │✺ ${usedPrefix}join
   │✺ ${usedPrefix}restart
   │✺ ${usedPrefix}setpp
   │✺ ${usedPrefix}setprefix
   │✺ ${usedPrefix}resetprefix
   │✺ ${usedPrefix}resetuser
   │✺ ${usedPrefix}getfile
   │✺ ${usedPrefix}getplugin 
   └─────────────┈ ⳹
   ┌─❖「 *Bot Menu* 」
   │
   │✺ ${usedPrefix}ping
   │✺ ${usedPrefix}uptime
   │✺ ${usedPrefix}enable
   │✺ ${usedPrefix}alive
   │✺ ${usedPrefix}owner
   │✺ ${usedPrefix}report
   │✺ ${usedPrefix}bot
   │✺ ${usedPrefix}worker
   │✺ ${usedPrefix}runtime
   │✺ ${usedPrefix}infobot
   │✺ ${usedPrefix}donate
   │✺ ${usedPrefix}groups
   │✺ ${usedPrefix}blocklist
   │✺ ${usedPrefix}listprem
   └─────────────┈ ⳹
   ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
   ┌─❖「 *Fun Menu* 」
   │
   │✺ ${usedPrefix}Love
   │✺ ${usedPrefix}moon
   │✺ ${usedPrefix}question 
   │✺ ${usedPrefix}character 
   │✺ ${usedPrefix}truth
   │✺ ${usedPrefix}dare 
   │✺ ${usedPrefix}flirt
   │✺ ${usedPrefix}gay
   │✺ ${usedPrefix}meme
   │✺ ${usedPrefix}ship
   │✺ ${usedPrefix}kill
   │✺ ${usedPrefix}kiss
   │✺ ${usedPrefix}pat
   │✺ ${usedPrefix}slap
   │✺ ${usedPrefix}waste
   │✺ ${usedPrefix}simpcard
   │✺ ${usedPrefix}hornycard
   │✺ ${usedPrefix}ytcomment
   │✺ ${usedPrefix}stupid
   │✺ ${usedPrefix}lolicon
   └─────────────┈ ⳹
   ┌─❖「 *Downloader Menu* 」
   │
   │✺ ${usedPrefix}song
   │✺ ${usedPrefix}play
   │✺ ${usedPrefix}apk
   │✺ ${usedPrefix}yts
   │✺ ${usedPrefix}insta *link*
   │✺ ${usedPrefix}img
   │✺ ${usedPrefix}pinterest 
   │✺ ${usedPrefix}mediafire *link*
   │✺ ${usedPrefix}gdrive *link*
   │✺ ${usedPrefix}gitclone *link*
   │✺ ${usedPrefix}twitter *link*
   │✺ ${usedPrefix}tiktok *link*
   │✺ ${usedPrefix}tiktokstalk
   │✺ ${usedPrefix}spotify 
   │✺ ${usedPrefix}fb *link*
   └─────────────┈ ⳹
   ┌─❖「 *Group Menu* 」
   │
   │✺ ${usedPrefix}kick *@tag*
   │✺ ${usedPrefix}promote *@tag*
   │✺ ${usedPrefix}demote *@tag*
   │✺ ${usedPrefix}infogroup
   │✺ ${usedPrefix}getbio *@tag*
   │✺ ${usedPrefix}resetlink
   │✺ ${usedPrefix}link
   │✺ ${usedPrefix}*On/Off* antilink
   │✺ ${usedPrefix}*On/Off* antidelete
   │✺ ${usedPrefix}invite
   │✺ ${usedPrefix}setppgc *image*
   │✺ ${usedPrefix}setname *text*
   │✺ ${usedPrefix}setdesc *text*
   │✺ ${usedPrefix}setwelcome *text*
   │✺ ${usedPrefix}setbye *text*
   │✺ ${usedPrefix}hidetag *text/image/audio*
   │✺ ${usedPrefix}warn *@tag*
   │✺ ${usedPrefix}unwarn *@tag*
   │✺ ${usedPrefix}listwarn
   │✺ ${usedPrefix}listnum
   │✺ ${usedPrefix}kicknum
   │✺ ${usedPrefix}group *Open/Close*
   │✺ ${usedPrefix}tagall
   └─────────────┈ ⳹
   ┌─❖「 *Economy Menu* 」
   │
   │✺ ${usedPrefix}claim/daily
   │✺ ${usedPrefix}weekly
   │✺ ${usedPrefix}monthly
   │✺ ${usedPrefix}leaderboard
   │✺ ${usedPrefix}bet
   │✺ ${usedPrefix}heal
   │✺ ${usedPrefix}craft
   │✺ ${usedPrefix}balance
   │✺ ${usedPrefix}shop
   │✺ ${usedPrefix}sell
   │✺ ${usedPrefix}adventure
   │✺ ${usedPrefix}opencreate
   │✺ ${usedPrefix}mine
   │✺ ${usedPrefix}work
   │✺ ${usedPrefix}transfer
   │✺ ${usedPrefix}todaimond
   │✺ ${usedPrefix}tomoney
   └─────────────┈ ⳹
   ┌─❖「 *Tool Menu* 」
   │
   │✺ ${usedPrefix}autosticker
   │✺ ${usedPrefix}pdf
   │✺ ${usedPrefix}whatmusic
   │✺ ${usedPrefix}tempmail
   │✺ ${usedPrefix}checkmail
   │✺ ${usedPrefix}pokedex
   │✺ ${usedPrefix}calc
   │✺ ${usedPrefix}google
   │✺ ${usedPrefix}lyrics
   │✺ ${usedPrefix}readmore
   │✺ ${usedPrefix}ssweb
   │✺ ${usedPrefix}tts
   │✺ ${usedPrefix}trt
   │✺ ${usedPrefix}wiki
   │✺ ${usedPrefix}nowa
   │✺ ${usedPrefix}qrmaker
   │✺ ${usedPrefix}true
   │✺ ${usedPrefix}fancy
   │✺ ${usedPrefix}weather
   │✺ ${usedPrefix}alexa
   │✺ ${usedPrefix}itunes
   │✺ ${usedPrefix}technews
   └─────────────┈ ⳹
   ┌─❖「 *Converter Menu* 」
   │
   │✺ ${usedPrefix}toanime
   │✺ ${usedPrefix}tomp3
   │✺ ${usedPrefix}toimg
   │✺ ${usedPrefix}tovid
   └─────────────┈ ⳹
   ┌─❖「 *Sticker Menu* 」
   │
   │✺ ${usedPrefix}sticker
   │✺ ${usedPrefix}take
   │✺ ${usedPrefix}smaker
   │✺ ${usedPrefix}getsticker
   │✺ ${usedPrefix}emix
   │✺ ${usedPrefix}attp
   └─────────────┈ ⳹
   ┌─❖「 *Game Menu* 」
   │
   │✺ ${usedPrefix}tictactoe
   │✺ ${usedPrefix}delttt
   │✺ ${usedPrefix}math
   │✺ ${usedPrefix}math answer
   │✺ ${usedPrefix}ppt
   │✺ ${usedPrefix}slot
   │✺ ${usedPrefix}casino
   └─────────────┈ ⳹
   ┌─❖「 *NSFW Menu* 」
   │
   │✺ ${usedPrefix}*On* nsfw
   │✺ ${usedPrefix}*Off* nsfw
   │✺ ${usedPrefix}hentais *text*
   │✺ ${usedPrefix}xnxxdl *link*
   └─────────────┈ ⳹
   ┌─❖「 *Anime Menu* 」
   │
   │✺ ${usedPrefix}waifu
   │✺ ${usedPrefix}neko
   │✺ ${usedPrefix}loli
   │✺ ${usedPrefix}naruto
   │✺ ${usedPrefix}itachi
   │✺ ${usedPrefix}akira
   │✺ ${usedPrefix}asuna
   │✺ ${usedPrefix}akiyama
   │✺ ${usedPrefix}boruto
   │✺ ${usedPrefix}hornycard
   │✺ ${usedPrefix}ayuzawa
   │✺ ${usedPrefix}anna
   │✺ ${usedPrefix}chiho
   │✺ ${usedPrefix}chitoge
   │✺ ${usedPrefix}deidara
   │✺ ${usedPrefix}erza
   │✺ ${usedPrefix}elaina
   │✺ ${usedPrefix}emilia
   │✺ ${usedPrefix}hestia
   │✺ ${usedPrefix}hinata
   │✺ ${usedPrefix}inori
   │✺ ${usedPrefix}isuzu
   │✺ ${usedPrefix}kagura
   │✺ ${usedPrefix}kaori
   │✺ ${usedPrefix}keneki
   │✺ ${usedPrefix}kurumi
   │✺ ${usedPrefix}madara
   │✺ ${usedPrefix}mikasa
   │✺ ${usedPrefix}miku
   │✺ ${usedPrefix}minato
   │✺ ${usedPrefix}nezuko
   │✺ ${usedPrefix}sagiri
   │✺ ${usedPrefix}sasuke
   │✺ ${usedPrefix}sakura
   │✺ ${usedPrefix}kotori
   └─────────────┈ ⳹
   ┌─❖「 *Audio Menu* 」
   │
   │✺ ${usedPrefix}bass
   │✺ ${usedPrefix}blown
   │✺ ${usedPrefix}deep
   │✺ ${usedPrefix}earrape
   │✺ ${usedPrefix}fat
   │✺ ${usedPrefix}fast
   │✺ ${usedPrefix}nightcore
   │✺ ${usedPrefix}reverse
   │✺ ${usedPrefix}squrrel
   │✺ ${usedPrefix}slow
   └─────────────┈ ⳹
   ┌─❖「 *Random Menu* 」
   │
   │✺ ${usedPrefix}bts
   │✺ ${usedPrefix}cr7
   │✺ ${usedPrefix}cat
   │✺ ${usedPrefix}coffee
   │✺ ${usedPrefix}cartoon
   │✺ ${usedPrefix}cyberspace
   │✺ ${usedPrefix}couplepp
   │✺ ${usedPrefix}dog
   │✺ ${usedPrefix}doraemon
   │✺ ${usedPrefix}ff
   │✺ ${usedPrefix}hacker
   │✺ ${usedPrefix}messi
   │✺ ${usedPrefix}pubg
   │✺ ${usedPrefix}pentol
   │✺ ${usedPrefix}planet
   │✺ ${usedPrefix}tech
   │✺ ${usedPrefix}wpmountain
   │✺ ${usedPrefix}wpgaming
   │✺ ${usedPrefix}wprandom
   └─────────────┈ ⳹
  `;

        // Send the menu with the updated values
        conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, AmeenXnt, m);
        m.react('🪀');

        // Optional: Delete the message after 2 minutes
        setTimeout(() => {
            conn.deleteMessage(m.chat, { id: sentMsg.key.id, remoteJid: m.chat, fromMe: true });
        }, 120000);
    }
};

handler.help = ['menu', 'editmenu <newlink>;<newbotname>;<newownername>'];
handler.tags = ['main'];
handler.command = ['menu', 'editmenu'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
        }
