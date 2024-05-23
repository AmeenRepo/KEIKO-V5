import { createCommand } from 'telegram-mtproto'

let handler = async (m, { conn }) => {

  const image = 'https://i.imgur.com/mdNyV2x.jpeg'
  const logo = 'https://i.imgur.com/fIGGmXm.jpeg'

  createCommand(
    {
      pattern: 'test ?(.*)',
      fromMe: true,
      desc: 'love you in every universe',
      type: 'misc',
    },
    async (message, match) => {
      const jid = message.jid
      const thumb = await getBuffer(image) // You need to implement getBuffer function
      const thumbnail = await getBuffer(logo) // You need to implement getBuffer function
      const options = {}
      options.contextInfo = {
        forwardingScore: 999,
        isForwarded: false,
      }
      options.linkPreview = {
        renderLargerThumbnail: true,
        showAdAttribution: true,
        title: "𝛪𝛭𝛲𝑈 𝑆𝛯𝑅",
        body: "𝘩𝘦𝘺 𝘩𝘰𝘸 𝘢𝘳𝘦 𝘺𝘰𝘶 👀 !!",
        mediaType: 1,
        thumbnail: thumb,
        sourceUrl: "https://instagram.com/athul.krishna10?igshid=ZGUzMzM3NWJiOQ==",
      }
      options.quoted = {
        key: {
          fromMe: false,
          participant: "0@s.whatsapp.net",
          remoteJid: "status@broadcast",
        },
        message: {
          "orderMessage": {
            "itemCount": 120000813,
            "status": 1,
            "surface": 1,
            "message": ""
          }
        },
      }

      let messages = await generateWAMessage(jid, { text: `Your menu text here` }, { quoted: message.quoted || '' })

      await conn.forwardMessage(jid, messages, options)
    }
  );
                                                   
