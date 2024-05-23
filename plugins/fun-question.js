import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `👻 ASK ME A QUESTION*⚠️EG:*\n\n*${usedPrefix + command}* Do you Know Ameen Ser?`;

  m.react('❓');
  conn.sendPresenceUpdate('composing', m.chat);

  let res = await fetch(`https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(text)}&model=llama`);
  let json = await res.json();

  if (json && json.data) {
    const answer = json.data;

    m.reply(`┌─❖
│「❤️ 𝐃𝐔𝐑𝐆𝐀-𝐌𝐃 ❤️」
│
│     🛠️Made By
│              Ameen-Ser㋡ 
│         
└┬❖ 「 *⚠️ANSWER* 」
   │
   │☞ *Question:* ${text}
   │
   │☞ *Answer:* ${answer}
   │
└─────────────┈ ⳹`);
  } else {
    throw 'NO ANSWERS FROM API 🙃';
  }
};

handler.help = ['question'];
handler.tags = ['fun'];
handler.command = ['question', 'q'];

export default handler;
