//import fetch from 'node-fetch';
import ffmpeg from 'fluent-ffmpeg';
import { Readable } from 'stream';
import { toAudio } from '../lib/converter.js'
let handler = async (m, 
                { conn,
                usedPrefix,
                text,
                args,
                command}) => {
   if (!text) throw `*Search A Name That U Want To Download🧙🏻*\n\nExample: ${usedPrefix}song Janiye🎶 or Url`
//const AM = 'Janiye Song'
try{
let fetS = `${ironman}search/yts?query=${text}`    
const res = await fetch(fetS);
      const AmeenData = await res.json();
      const AmeenJson = AmeenData[0];
      const MeeraImg = AmeenJson.thumbnail;
      const MeeraUrl = AmeenJson.url;
let fetA = `${ironman}ironman/dl/ytdl2?url=${MeeraUrl}`
// m.reply(MeeraUrl)
conn.sendMessage(m.chat, { image: { url: MeeraImg }, caption: "◽ Wait Few Seconds.." })
 m.react('🦋')
       var AmeenMeera = await fetch(fetA);
      var data = await AmeenMeera.json();
      const AmeenS = data.audio;
      const AmeenV = data.video;
      const Audio = '.umbikko ' + AmeenS
      const Video = '.umbikko ' + AmeenV
      const msg = "Select The Media That U Want To Download ✨\nAudio is Downloading🔃\nDo u need video click👇🏻";
      conn.sendButton(m.chat, msg, "Keiko Media", null, [['VIDEO', Video]]);

      let mediaUrl = AmeenV.trimEnd();
      let mediaResponse = await fetch(mediaUrl);
      let mediaArrayBuffer = await mediaResponse.arrayBuffer();
      let mediaBuffer = Buffer.from(mediaArrayBuffer);

      let audio = await toAudio(mediaBuffer, 'mp4');

  conn.sendFile(m.chat, audio.data, 'KeikoV7.mp3', '', m, null, { mimetype: 'audio/mp4', ptt:true })
  
      // conn.sendMessage(m.chat, { video: audio, mimetype: 'audio/mp4' });

   } catch (e) {
      m.react('❌');
      m.reply(`Error: ${e.message}`)}
};
handler.command = ['yta', 'ytv', 'ytmp3', 'ytmp4', 'song']
export default handler
//const _0x13fd66=_0x2a6f;(function(_0x59fa48,_0x500260){const _0xbc7278=_0x2a6f,_0x5e600b=_0x59fa48();while(!![]){try{const _0x2c4d55=-parseInt(_0xbc7278(0x124))/0x1*(parseInt(_0xbc7278(0x125))/0x2)+-parseInt(_0xbc7278(0x128))/0x3+parseInt(_0xbc7278(0x11d))/0x4+-parseInt(_0xbc7278(0x130))/0x5*(parseInt(_0xbc7278(0x137))/0x6)+-parseInt(_0xbc7278(0x134))/0x7*(-parseInt(_0xbc7278(0x140))/0x8)+parseInt(_0xbc7278(0x11f))/0x9+-parseInt(_0xbc7278(0x13b))/0xa*(-parseInt(_0xbc7278(0x13e))/0xb);if(_0x2c4d55===_0x500260)break;else _0x5e600b['push'](_0x5e600b['shift']());}catch(_0x19ede1){_0x5e600b['push'](_0x5e600b['shift']());}}}(_0x5ad2,0x7a72e));import _0x1f27b4 from'ytdl-core';import _0x2e6272 from'yt-search';import _0x5cb274 from'fs';import{pipeline}from'stream';import{promisify}from'util';import _0x448d98 from'os';const streamPipeline=promisify(pipeline);function _0x2a6f(_0x70a0cd,_0x885a52){const _0x5ad284=_0x5ad2();return _0x2a6f=function(_0x2a6f22,_0x449863){_0x2a6f22=_0x2a6f22-0x11b;let _0x237aba=_0x5ad284[_0x2a6f22];return _0x237aba;},_0x2a6f(_0x70a0cd,_0x885a52);}var handler=async(_0x264229,{conn:_0x8a3050,command:_0x441044,text:_0x22ba06,usedPrefix:_0x4d114b})=>{const _0x2481bb=_0x2a6f;if(!_0x22ba06)throw'Use\x20example\x20'+_0x4d114b+_0x441044+_0x2481bb(0x127);await _0x264229[_0x2481bb(0x13d)](rwait);let _0x495b92=await _0x2e6272(_0x22ba06),_0x3b210b=_0x495b92[_0x2481bb(0x129)][Math[_0x2481bb(0x143)](Math[_0x2481bb(0x11b)]()*_0x495b92[_0x2481bb(0x129)][_0x2481bb(0x13a)])];if(!_0x495b92)throw _0x2481bb(0x12f);let {title:_0x5d0367,thumbnail:_0x250c43,timestamp:_0xf1084a,views:_0x153243,ago:_0x1a7583,url:_0x996e82}=_0x3b210b,_0xfd8013='⚡𝐊𝐞𝐢𝐤𝐨\x20𝐕𝟓',_0xe7661=_0x2481bb(0x135);_0x8a3050['sendMessage'](_0x264229[_0x2481bb(0x123)],{'image':{'url':_0x250c43},'caption':_0xe7661,'footer':author},{'quoted':_0x264229});const _0x5b3293=_0x1f27b4(_0x996e82,{'filter':'audioonly','quality':_0x2481bb(0x120)}),_0x20833f=_0x448d98[_0x2481bb(0x142)](),_0x4f1dbc=_0x5cb274[_0x2481bb(0x141)](_0x20833f+'/'+_0x5d0367+_0x2481bb(0x12d));await streamPipeline(_0x5b3293,_0x4f1dbc);let _0x491af7={'audio':{'url':_0x20833f+'/'+_0x5d0367+_0x2481bb(0x12d)},'mimetype':_0x2481bb(0x12c),'fileName':''+_0x5d0367,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':_0x996e82,'title':_0x5d0367,'body':_0xfd8013,'sourceUrl':_0x996e82,'thumbnail':await(await _0x8a3050[_0x2481bb(0x12b)](_0x250c43))['data']}}};await _0x8a3050[_0x2481bb(0x133)](_0x264229[_0x2481bb(0x123)],_0x491af7,{'quoted':_0x264229}),_0x5cb274[_0x2481bb(0x12e)](_0x20833f+'/'+_0x5d0367+_0x2481bb(0x12d),_0x110c24=>{const _0x5a941d=_0x2481bb;_0x110c24?console[_0x5a941d(0x131)](_0x5a941d(0x136)+_0x110c24):console[_0x5a941d(0x12a)](_0x5a941d(0x139)+_0x20833f+'/'+_0x5d0367+_0x5a941d(0x12d));});};handler[_0x13fd66(0x13f)]=[_0x13fd66(0x11e)]['map'](_0xdeff22=>_0xdeff22+'\x20<query>'),handler[_0x13fd66(0x126)]=[_0x13fd66(0x11c)],handler[_0x13fd66(0x13c)]=[_0x13fd66(0x121),'songs',_0x13fd66(0x138)],handler[_0x13fd66(0x132)]=0x0,handler[_0x13fd66(0x122)]=![];export default handler;function _0x5ad2(){const _0x3c1765=['log','getFile','audio/mp4','.mp3','unlink','Video\x20Not\x20Found,\x20Try\x20Another\x20Title','5yNrZDf','error','exp','sendMessage','16457OjWkbh','_Please\x20Wait..._','Failed\x20to\x20delete\x20audio\x20file:\x20','3334782DbQXHs','song','Deleted\x20audio\x20file:\x20','length','10nfNEKN','command','react','18165939KTmFCt','help','192WyZAYU','createWriteStream','tmpdir','floor','random','downloader','1546496FQVyxB','play','4069494Ryiome','highestaudio','ytmp3','diamond','chat','594091HNtGEQ','2hHrMCc','tags','\x20shape\x20of\x20you🎶\x20','2685675qxDNZh','videos'];_0x5ad2=function(){return _0x3c1765;};return _0x5ad2();}
