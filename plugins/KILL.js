import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';
let handler = async (m, {
  conn: Ameen,
  args: Urll,
  usedPrefix: Prefixx,
  command: comnd
}) => {
  let AmeenInt;
  if (m.isGroup) {
    AmeenInt = m.mentionedJid[0x0] ? m.mentionedJid[0x0] : m.quoted ? m.quoted.sender : false;
  } else {
    AmeenInt = m.chat;
  }
  if (!AmeenInt) {
    throw "👻Tag Or Mention Someone\n\n😸 Example : " + (Prefixx + comnd) + " @tag";
  }
  let AmeenXnt = Ameen.getName(AmeenInt);
  let Howl = Ameen.getName(m.sender);
  m.react(rwait);
  let CalciFer = await fetch('https://api.waifu.pics/sfw/kill');
  if (!CalciFer.ok) {
    throw await CalciFer.text();
  }
  let Ninja = await CalciFer.json();
  let {
    url: Fuck
  } = Ninja;
  let Myr = await sticker(null, Fuck, '(' + Howl + ") killed🗡️", " " + AmeenXnt);
  Ameen.sendFile(m.chat, Myr, null, {
    'asSticker': true
  }, m);
  m.react('🗡️');
};
handler.help = ["kill @tag"];
handler.tags = ['rnime'];
handler.command = /^(kill|kil)$/i;
handler.diamond = false;
handler.group = true;
export default handler;
