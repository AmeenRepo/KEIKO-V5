import { addExif } from '../lib/sticker.js';

let handler = async (m, { conn, args }) => {
  if (!m.quoted || !m.quoted.mimetype || !/webp/.test(m.quoted.mimetype)) {
    throw 'Please respond to a WebP sticker.';
  }

  let stiker = false;
  let stick = args.join(" ").split("|");
  let f = stick[0] !== "" ? stick[0] : packname; // Make sure 'packname' is defined
  let g = stick[1] !== undefined ? stick[1] : author; // Make sure 'author' is defined

  try {
    let img = await m.quoted.download();
    if (!img) throw 'Failed to download the sticker.';
    
    stiker = await addExif(img, f, g);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) {
      conn.sendFile(m.chat, stiker, 'wm.webp', '', m, null, { quoted: m });
    } else {
      throw 'Conversion failed.';
    }
  }
};

handler.help = ['take <name>|<author>'];
handler.tags = ['sticker'];
handler.command = ['take', 'wm'];

export default handler;
