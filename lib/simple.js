import _0x2092f1 from 'path';
import { toAudio } from './converter.js';
import _0x26a2bd from 'chalk';
import _0x40aa51 from 'node-fetch';
import _0x5eb6b2 from 'awesome-phonenumber';
import _0xe33524 from 'fs';
import _0x321db1 from 'util';
import { fileTypeFromBuffer } from 'file-type';
import { format } from 'util';
import { fileURLToPath } from 'url';
import _0x27e67f from './store.js';
const __dirname = _0x2092f1.dirname(fileURLToPath(import.meta.url));
const {
  default: _makeWaSocket,
  makeWALegacySocket,
  proto,
  downloadContentFromMessage,
  jidDecode,
  areJidsSameUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  WAMessageStubType,
  extractMessageContent
} = (await import('@whiskeysockets/baileys'))['default'];
export function makeWASocket(_0x32f685, _0x22e8e0 = {}) {
  let _0x22e918 = (global.opts.legacy ? makeWALegacySocket : _makeWaSocket)(_0x32f685);
  let _0x4e9730 = Object.defineProperties(_0x22e918, {
    'chats': {
      'value': {
        ...(_0x22e8e0.chats || {})
      },
      'writable': true
    },
    'decodeJid': {
      'value'(_0x1cc3da) {
        if (!_0x1cc3da || typeof _0x1cc3da !== "string") {
          return !!(_0x1cc3da !== null && _0x1cc3da !== undefined) && _0x1cc3da || null;
        }
        return _0x1cc3da.decodeJid();
      }
    },
    'logger': {
      'get'() {
        return {
          'info'(..._0x172c24) {
            console.log(_0x26a2bd.bold.bgRgb(0x33, 0xcc, 0x33)("INFO "), '[' + _0x26a2bd.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x26a2bd.cyan(format(..._0x172c24)));
          },
          'error'(..._0x1badde) {
            console.log(_0x26a2bd.bold.bgRgb(0xf7, 0x26, 0x21)("ERROR "), '[' + _0x26a2bd.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x26a2bd.rgb(0xff, 0x26, 0x0)(format(..._0x1badde)));
          },
          'warn'(..._0x5884e8) {
            console.log(_0x26a2bd.bold.bgRgb(0xff, 0x99, 0x0)("WARNING "), '[' + _0x26a2bd.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x26a2bd.redBright(format(..._0x5884e8)));
          },
          'trace'(..._0xe05959) {
            console.log(_0x26a2bd.grey("TRACE "), '[' + _0x26a2bd.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x26a2bd.white(format(..._0xe05959)));
          },
          'debug'(..._0x320bb2) {
            console.log(_0x26a2bd.bold.bgRgb(0x42, 0xa7, 0xf5)("DEBUG "), '[' + _0x26a2bd.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x26a2bd.white(format(..._0x320bb2)));
          }
        };
      },
      'enumerable': true
    },
    'getFile': {
      async 'value'(_0x7c6200, _0x21fe8e = false) {
        let _0x22dcb8;
        let _0x9cc6c0;
        const _0x2f2b7b = Buffer.isBuffer(_0x7c6200) ? _0x7c6200 : _0x7c6200 instanceof ArrayBuffer ? _0x7c6200.toBuffer() : /^data:.*?\/.*?;base64,/i.test(_0x7c6200) ? Buffer.from(_0x7c6200.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x7c6200) ? await (_0x22dcb8 = await _0x40aa51(_0x7c6200)).buffer() : _0xe33524.existsSync(_0x7c6200) ? (_0x9cc6c0 = _0x7c6200, _0xe33524.readFileSync(_0x7c6200)) : typeof _0x7c6200 === 'string' ? _0x7c6200 : Buffer.alloc(0x0);
        if (!Buffer.isBuffer(_0x2f2b7b)) {
          throw new TypeError("Result is not a buffer");
        }
        const _0x9af2de = (await fileTypeFromBuffer(_0x2f2b7b)) || {
          'mime': "application/octet-stream",
          'ext': ".bin"
        };
        if (_0x2f2b7b && _0x21fe8e && !_0x9cc6c0) {
          _0x9cc6c0 = _0x2092f1.join(__dirname, "../tmp/" + new Date() * 0x1 + '.' + _0x9af2de.ext);
          await _0xe33524.promises.writeFile(_0x9cc6c0, _0x2f2b7b);
        }
        return {
          'res': _0x22dcb8,
          'filename': _0x9cc6c0,
          ..._0x9af2de,
          'data': _0x2f2b7b,
          'deleteFile'() {
            return _0x9cc6c0 && _0xe33524.promises.unlink(_0x9cc6c0);
          }
        };
      },
      'enumerable': true
    },
    'waitEvent': {
      'value'(_0x5797c6, _0x359dd2 = () => true, _0x49acd9 = 0x19) {
        return new Promise((_0x57bc29, _0x1ac4bc) => {
          let _0x2fda07 = 0x0;
          let _0x156586 = (..._0x511fcc) => {
            if (++_0x2fda07 > _0x49acd9) {
              _0x1ac4bc("Max tries reached");
            } else if (_0x359dd2()) {
              _0x22e918.ev.off(_0x5797c6, _0x156586);
              _0x57bc29(..._0x511fcc);
            }
          };
          _0x22e918.ev.on(_0x5797c6, _0x156586);
        });
      }
    },
    'sendFile': {
      async 'value'(_0x446a9f, _0x228a9e, _0x3ff359 = '', _0x81bc1d = '', _0x20297a, _0x3440ea = false, _0x31fdbb = {}) {
        let _0x2d9dff = await _0x22e918.getFile(_0x228a9e, true);
        let {
          res: _0x477e70,
          data: _0x571068,
          filename: _0x186886
        } = _0x2d9dff;
        if (_0x477e70 && _0x477e70.status !== 0xc8 || _0x571068.length <= 0x10000) {
          try {
            throw {
              'json': JSON.parse(_0x571068.toString())
            };
          } catch (_0x227219) {
            if (_0x227219.json) {
              throw _0x227219.json;
            }
          }
        }
        const _0x1cd74b = _0xe33524.statSync(_0x186886).size / 0x400 / 0x400;
        if (_0x1cd74b >= 0x708) {
          throw new Error(" ✳️  El tamaño del archivo es demasiado grande\n\n");
        }
        let _0x59b2e2 = {};
        if (_0x20297a) {
          _0x59b2e2.quoted = _0x20297a;
        }
        if (!_0x2d9dff) {
          _0x31fdbb.asDocument = true;
        }
        let _0x4d0d86 = '';
        let _0x420c1a = _0x31fdbb.mimetype || _0x2d9dff.mime;
        let _0x48fb01;
        if (/webp/.test(_0x2d9dff.mime) || /image/.test(_0x2d9dff.mime) && _0x31fdbb.asSticker) {
          _0x4d0d86 = "sticker";
        } else {
          if (/image/.test(_0x2d9dff.mime) || /webp/.test(_0x2d9dff.mime) && _0x31fdbb.asImage) {
            _0x4d0d86 = "image";
          } else {
            if (/video/.test(_0x2d9dff.mime)) {
              _0x4d0d86 = 'video';
            } else {
              if (/audio/.test(_0x2d9dff.mime)) {
                _0x48fb01 = await toAudio(_0x571068, _0x2d9dff.ext);
                _0x571068 = _0x48fb01.data;
                _0x186886 = _0x48fb01.filename;
                _0x4d0d86 = "audio";
                _0x420c1a = _0x31fdbb.mimetype || "audio/ogg; codecs=opus";
              } else {
                _0x4d0d86 = "document";
              }
            }
          }
        }
        if (_0x31fdbb.asDocument) {
          _0x4d0d86 = 'document';
        }
        delete _0x31fdbb.asSticker;
        delete _0x31fdbb.asLocation;
        delete _0x31fdbb.asVideo;
        delete _0x31fdbb.asDocument;
        delete _0x31fdbb.asImage;
        let _0x51284c = {
          ..._0x31fdbb,
          'caption': _0x81bc1d,
          'ptt': _0x3440ea,
          [_0x4d0d86]: {
            'url': _0x186886
          },
          'mimetype': _0x420c1a,
          'fileName': _0x3ff359 || _0x186886.split('/').pop()
        };
        let _0x5d7fbf;
        try {
          _0x5d7fbf = await _0x22e918.sendMessage(_0x446a9f, _0x51284c, {
            ..._0x59b2e2,
            ..._0x31fdbb
          });
        } catch (_0x108983) {
          console.error(_0x108983);
          _0x5d7fbf = null;
        } finally {
          if (!_0x5d7fbf) {
            _0x5d7fbf = await _0x22e918.sendMessage(_0x446a9f, {
              ..._0x51284c,
              [_0x4d0d86]: _0x571068
            }, {
              ..._0x59b2e2,
              ..._0x31fdbb
            });
          }
          _0x571068 = null;
          return _0x5d7fbf;
        }
      },
      'enumerable': true
    },
    'sendContact': {
      async 'value'(_0x22ac85, _0x2c7acc, _0x20e851, _0x1a6426) {
        if (!Array.isArray(_0x2c7acc[0x0]) && typeof _0x2c7acc[0x0] === "string") {
          _0x2c7acc = [_0x2c7acc];
        }
        let _0x4fa4a7 = [];
        for (let [_0x230897, _0x1bfcd3] of _0x2c7acc) {
          _0x230897 = _0x230897.replace(/[^0-9]/g, '');
          let _0x443bc5 = _0x230897 + "@s.whatsapp.net";
          let _0x55c53e = (await _0x22e918.getBusinessProfile(_0x443bc5)['catch'](_0x2ce3f2 => null)) || {};
          let _0x4863c3 = ("\nBEGIN:VCARD\nVERSION:3.0\nN:;" + _0x1bfcd3.replace(/\\/g, "\\\\").replace(/\n/g, "\\n") + ";;;\nFN:" + _0x1bfcd3.replace(/\\/g, "\\\\").replace(/\n/g, "\\n") + "\nTEL;type=CELL;type=VOICE;waid=" + _0x230897 + ':' + _0x5eb6b2('+' + _0x230897).getNumber("international") + (_0x55c53e.description ? ("\nX-WA-BIZ-NAME:" + (_0x22e918.chats[_0x443bc5]?.["vname"] || _0x22e918.getName(_0x443bc5) || _0x1bfcd3).replace(/\\/g, "\\\\").replace(/\n/g, "\\n") + "\nX-WA-BIZ-DESCRIPTION:" + _0x55c53e.description.replace(/\\/g, "\\\\").replace(/\n/g, "\\n") + "\n").trim() : '') + "\nEND:VCARD\n").trim();
          _0x4fa4a7.push({
            'vcard': _0x4863c3,
            'displayName': _0x1bfcd3
          });
        }
        return await _0x22e918.sendMessage(_0x22ac85, {
          ..._0x1a6426,
          'contacts': {
            ..._0x1a6426,
            'displayName': (_0x4fa4a7.length >= 0x2 ? _0x4fa4a7.length + " kontak" : _0x4fa4a7[0x0].displayName) || null,
            'contacts': _0x4fa4a7
          }
        }, {
          'quoted': _0x20e851,
          ..._0x1a6426
        });
      },
      'enumerable': true
    },
    'reply': {
      'value'(_0x4c56cb, _0xd8f4e2 = '', _0x2c37a9, _0x335b46) {
        return Buffer.isBuffer(_0xd8f4e2) ? _0x22e918.sendFile(_0x4c56cb, _0xd8f4e2, "file", '', _0x2c37a9, false, _0x335b46) : _0x22e918.sendMessage(_0x4c56cb, {
          ..._0x335b46,
          'text': _0xd8f4e2
        }, {
          'quoted': _0x2c37a9,
          ..._0x335b46
        });
      }
    },
    'sendButton': {
      async 'value'(_0x45c3f0, _0x3edf9b = '', _0x373cd3 = '', _0x5e06a, _0x372c20, _0x4e0f70, _0x35188d, _0xd8d1a9, _0x38fc00) {
        let _0x1f9909;
        let _0xcdd1ef;
        if (/^https?:\/\//i.test(_0x5e06a)) {
          try {
            const _0x3fb1ff = await _0x40aa51(_0x5e06a);
            const _0x47741c = _0x3fb1ff.headers.get("content-type");
            if (/^image\//i.test(_0x47741c)) {
              _0x1f9909 = await prepareWAMessageMedia({
                'image': {
                  'url': _0x5e06a
                }
              }, {
                'upload': _0x22e918.waUploadToServer
              });
            } else if (/^video\//i.test(_0x47741c)) {
              _0xcdd1ef = await prepareWAMessageMedia({
                'video': {
                  'url': _0x5e06a
                }
              }, {
                'upload': _0x22e918.waUploadToServer
              });
            } else {
              console.error("Filetype not supported", _0x47741c);
            }
          } catch (_0x121613) {
            console.error("Failed to detect File type", _0x121613);
          }
        } else {
          try {
            const _0x490af9 = await _0x22e918.getFile(_0x5e06a);
            if (/^image\//i.test(_0x490af9.mime)) {
              _0x1f9909 = await prepareWAMessageMedia({
                'image': {
                  'url': _0x5e06a
                }
              }, {
                'upload': _0x22e918.waUploadToServer
              });
            } else if (/^video\//i.test(_0x490af9.mime)) {
              _0xcdd1ef = await prepareWAMessageMedia({
                'video': {
                  'url': _0x5e06a
                }
              }, {
                'upload': _0x22e918.waUploadToServer
              });
            }
          } catch (_0x4bfd60) {
            console.error("Error getting file type", _0x4bfd60);
          }
        }
        const _0x1ae23c = _0x372c20.map(_0x375fcc => ({
          'name': 'quick_reply',
          'buttonParamsJson': JSON.stringify({
            'display_text': _0x375fcc[0x0],
            'id': _0x375fcc[0x1]
          })
        }));
        if (_0x4e0f70 && (typeof _0x4e0f70 === "string" || typeof _0x4e0f70 === 'number')) {
          _0x1ae23c.push({
            'name': "cta_copy",
            'buttonParamsJson': JSON.stringify({
              'display_text': "Copy",
              'copy_code': _0x4e0f70
            })
          });
        }
        if (_0x35188d && Array.isArray(_0x35188d)) {
          _0x35188d.forEach(_0xaf7582 => {
            _0x1ae23c.push({
              'name': "cta_url",
              'buttonParamsJson': JSON.stringify({
                'display_text': _0xaf7582[0x0],
                'url': _0xaf7582[0x1],
                'merchant_url': _0xaf7582[0x1]
              })
            });
          });
        }
        const _0x2e5501 = {
          'body': {
            'text': _0x3edf9b
          },
          'footer': {
            'text': _0x373cd3
          },
          'header': {
            'hasMediaAttachment': false,
            'imageMessage': _0x1f9909 ? _0x1f9909.imageMessage : null,
            'videoMessage': _0xcdd1ef ? _0xcdd1ef.videoMessage : null
          },
          'nativeFlowMessage': {
            'buttons': _0x1ae23c,
            'messageParamsJson': ''
          }
        };
        let _0x250a16 = generateWAMessageFromContent(_0x45c3f0, {
          'viewOnceMessage': {
            'message': {
              'interactiveMessage': _0x2e5501
            }
          }
        }, {
          'userJid': _0x22e918.user.jid,
          'quoted': _0xd8d1a9
        });
        _0x22e918.relayMessage(_0x45c3f0, _0x250a16.message, {
          'messageId': _0x250a16.key.id,
          ..._0x38fc00
        });
      }
    },
    'sendList': {
      async 'value'(_0x235568, _0x5602a5, _0x45fbd5, _0x3ea2a8, _0x45f589, _0x34352d, _0x4003f3, _0x48084b = {}) {
        let _0x167c14;
        let _0x391e8c;
        if (/^https?:\/\//i.test(_0x45f589)) {
          try {
            const _0x44c278 = await _0x40aa51(_0x45f589);
            const _0x1f94f4 = _0x44c278.headers.get("content-type");
            if (/^image\//i.test(_0x1f94f4)) {
              _0x167c14 = await prepareWAMessageMedia({
                'image': {
                  'url': _0x45f589
                }
              }, {
                'upload': _0x22e918.waUploadToServer
              });
            } else if (/^video\//i.test(_0x1f94f4)) {
              _0x391e8c = await prepareWAMessageMedia({
                'video': {
                  'url': _0x45f589
                }
              }, {
                'upload': _0x22e918.waUploadToServer
              });
            } else {
              console.error("File Type Not Supported", _0x1f94f4);
            }
          } catch (_0x157038) {
            console.error("Error getting File type", _0x157038);
          }
        } else {
          try {
            const _0x568358 = await _0x22e918.getFile(_0x45f589);
            if (/^image\//i.test(_0x568358.mime)) {
              _0x167c14 = await prepareWAMessageMedia({
                'image': {
                  'url': _0x45f589
                }
              }, {
                'upload': _0x22e918.waUploadToServer
              });
            } else if (/^video\//i.test(_0x568358.mime)) {
              _0x391e8c = await prepareWAMessageMedia({
                'video': {
                  'url': _0x45f589
                }
              }, {
                'upload': _0x22e918.waUploadToServer
              });
            }
          } catch (_0x43945e) {
            console.error("Error getting file type", _0x43945e);
          }
        }
        const _0x573235 = [..._0x34352d];
        const _0x2c137d = {
          'interactiveMessage': {
            'header': {
              'title': _0x5602a5,
              'hasMediaAttachment': false,
              'imageMessage': _0x167c14 ? _0x167c14.imageMessage : null,
              'videoMessage': _0x391e8c ? _0x391e8c.videoMessage : null
            },
            'body': {
              'text': _0x45fbd5
            },
            'nativeFlowMessage': {
              'buttons': [{
                'name': "single_select",
                'buttonParamsJson': JSON.stringify({
                  'title': _0x3ea2a8,
                  'sections': _0x573235
                })
              }],
              'messageParamsJson': ''
            }
          }
        };
        let _0x576d82 = generateWAMessageFromContent(_0x235568, {
          'viewOnceMessage': {
            'message': _0x2c137d
          }
        }, {
          'userJid': _0x22e918.user.jid,
          'quoted': _0x4003f3
        });
        _0x22e918.relayMessage(_0x235568, _0x576d82.message, {
          'messageId': _0x576d82.key.id,
          ..._0x48084b
        });
      }
    },
    'sendListM': {
      async 'value'(_0x9e6f90, _0xfd4a4, _0x1cba46, _0x2f0437, _0x19bdd7 = {}) {
        const _0x1c976b = [{
          'title': _0xfd4a4.title,
          'rows': [..._0x1cba46]
        }];
        const _0x3a9b50 = {
          'text': _0xfd4a4.description,
          'footer': _0xfd4a4.footerText,
          'mentions': await _0x22e918.parseMention(_0xfd4a4.description),
          'title': '',
          'buttonText': _0xfd4a4.buttonText,
          'sections': _0x1c976b
        };
        _0x22e918.sendMessage(_0x9e6f90, _0x3a9b50, {
          'quoted': _0x2f0437
        });
      }
    },
    'updateProfileStatus': {
      async 'value'(_0x526d98) {
        return _0x22e918.query({
          'tag': 'iq',
          'attrs': {
            'to': "s.whatsapp.net",
            'type': "set",
            'xmlns': "status"
          },
          'content': [{
            'tag': "status",
            'attrs': {},
            'content': Buffer.from(_0x526d98, "utf-8")
          }]
        });
      }
    },
    'sendPayment': {
      async 'value'(_0x20bfdd, _0x58ee80, _0x16f756, _0x6fec06 = '', _0x52750e, _0x163ffb) {
        const _0x393401 = {
          'amount': {
            'currencyCode': _0x16f756 || "USD",
            'offset': 0x0,
            'value': _0x58ee80 || 9.99
          },
          'expiryTimestamp': 0x0,
          'amount1000': (_0x58ee80 || 9.99) * 0x3e8,
          'currencyCodeIso4217': _0x16f756 || "USD",
          'requestFrom': _0x52750e || "0@s.whatsapp.net",
          'noteMessage': {
            'extendedTextMessage': {
              'text': _0x6fec06 || "Example Payment Message"
            }
          }
        };
        return _0x22e918.relayMessage(_0x20bfdd, {
          'requestPaymentMessage': _0x393401
        }, {
          ..._0x163ffb
        });
      }
    },
    'sendPoll': {
      async 'value'(_0x415a76, _0x4d4b52 = '', _0x1a656e, _0x371bc2) {
        if (!Array.isArray(_0x1a656e[0x0]) && typeof _0x1a656e[0x0] === 'string') {
          _0x1a656e = [_0x1a656e];
        }
        if (!_0x371bc2) {
          _0x371bc2 = {};
        }
        const _0x5ea9b5 = {
          'name': _0x4d4b52,
          'options': _0x1a656e.map(_0xe10fb0 => ({
            'optionName': !!(_0xe10fb0[0x0] !== null && _0xe10fb0[0x0] !== undefined) && _0xe10fb0[0x0] || ''
          })),
          'selectableOptionsCount': 0x1
        };
        return _0x22e918.relayMessage(_0x415a76, {
          'pollCreationMessage': _0x5ea9b5
        }, {
          ..._0x371bc2
        });
      }
    },
    'sendHydrated': {
      async 'value'(_0x55cb00, _0xf27a50 = '', _0x4e3185 = '', _0x21d417, _0x5974bd, _0x45945, _0x26221d, _0x5ace99, _0x2077bc, _0x195740, _0x345459) {
        let _0x24ecc8;
        if (_0x21d417) {
          try {
            ;
            _0x24ecc8 = await _0x22e918.getFile(_0x21d417);
            _0x21d417 = _0x24ecc8.data;
          } catch {
            _0x21d417 = _0x21d417;
          }
        }
        if (_0x21d417 && !Buffer.isBuffer(_0x21d417) && (typeof _0x21d417 === 'string' || Array.isArray(_0x21d417))) {
          _0x345459 = _0x195740;
          _0x195740 = _0x2077bc;
          _0x2077bc = _0x5ace99;
          _0x5ace99 = _0x26221d;
          _0x26221d = _0x45945;
          _0x45945 = _0x5974bd;
          _0x5974bd = _0x21d417;
          _0x21d417 = null;
        }
        if (!_0x345459) {
          _0x345459 = {};
        }
        let _0x1fa118 = [];
        if (_0x5974bd || _0x45945) {
          if (!Array.isArray(_0x5974bd)) {
            _0x5974bd = [_0x5974bd];
          }
          if (!Array.isArray(_0x45945)) {
            _0x45945 = [_0x45945];
          }
          _0x1fa118.push(...(_0x5974bd.map((_0x5a0e86, _0x2999f8) => [_0x5a0e86, _0x45945[_0x2999f8]]).map(([_0x50ec33, _0x4ddccf], _0x2c44d6) => ({
            'index': _0x1fa118.length + _0x2c44d6 + 0x1,
            'urlButton': {
              'displayText': !!(_0x4ddccf !== null && _0x4ddccf !== undefined) && _0x4ddccf || !!(_0x50ec33 !== null && _0x50ec33 !== undefined) && _0x50ec33 || '',
              'url': !!(_0x50ec33 !== null && _0x50ec33 !== undefined) && _0x50ec33 || !!(_0x4ddccf !== null && _0x4ddccf !== undefined) && _0x4ddccf || ''
            }
          })) || []));
        }
        if (_0x26221d || _0x5ace99) {
          if (!Array.isArray(_0x26221d)) {
            _0x26221d = [_0x26221d];
          }
          if (!Array.isArray(_0x5ace99)) {
            _0x5ace99 = [_0x5ace99];
          }
          _0x1fa118.push(...(_0x26221d.map((_0x56fa7e, _0x248d1a) => [_0x56fa7e, _0x5ace99[_0x248d1a]]).map(([_0x3efa93, _0x37431f], _0x49a3ae) => ({
            'index': _0x1fa118.length + _0x49a3ae + 0x1,
            'callButton': {
              'displayText': !!(_0x37431f !== null && _0x37431f !== undefined) && _0x37431f || !!(_0x3efa93 !== null && _0x3efa93 !== undefined) && _0x3efa93 || '',
              'phoneNumber': !!(_0x3efa93 !== null && _0x3efa93 !== undefined) && _0x3efa93 || !!(_0x37431f !== null && _0x37431f !== undefined) && _0x37431f || ''
            }
          })) || []));
        }
        if (_0x2077bc.length) {
          if (!Array.isArray(_0x2077bc[0x0])) {
            _0x2077bc = [_0x2077bc];
          }
          _0x1fa118.push(...(_0x2077bc.map(([_0x459230, _0x152b62], _0x188307) => ({
            'index': _0x1fa118.length + _0x188307 + 0x1,
            'quickReplyButton': {
              'displayText': !!(_0x459230 !== null && _0x459230 !== undefined) && _0x459230 || !!(_0x152b62 !== null && _0x152b62 !== undefined) && _0x152b62 || '',
              'id': !!(_0x152b62 !== null && _0x152b62 !== undefined) && _0x152b62 || !!(_0x459230 !== null && _0x459230 !== undefined) && _0x459230 || ''
            }
          })) || []));
        }
        let _0x2d94ea = {
          ..._0x345459,
          [_0x21d417 ? "caption" : "text"]: _0xf27a50 || '',
          'footer': _0x4e3185,
          'templateButtons': _0x1fa118,
          ...(_0x21d417 ? _0x345459.asLocation && /image/.test(_0x24ecc8.mime) ? {
            'location': {
              ..._0x345459,
              'jpegThumbnail': _0x21d417
            }
          } : {
            [/video/.test(_0x24ecc8.mime) ? 'video' : /image/.test(_0x24ecc8.mime) ? "image" : "document"]: _0x21d417
          } : {})
        };
        return await _0x22e918.sendMessage(_0x55cb00, _0x2d94ea, {
          'quoted': _0x195740,
          'upload': _0x22e918.waUploadToServer,
          ..._0x345459
        });
      },
      'enumerable': true
    },
    'sendHydrated2': {
      async 'value'(_0x3ac419, _0x28c843 = '', _0x25a1f0 = '', _0x2165fb, _0x5d027d, _0x26280b, _0x340568, _0xe729e6, _0x240ce8, _0x1931b1, _0x5730e0) {
        let _0x48b5b1;
        if (_0x2165fb) {
          try {
            ;
            _0x48b5b1 = await _0x22e918.getFile(_0x2165fb);
            _0x2165fb = _0x48b5b1.data;
          } catch {
            _0x2165fb = _0x2165fb;
          }
        }
        if (_0x2165fb && !Buffer.isBuffer(_0x2165fb) && (typeof _0x2165fb === "string" || Array.isArray(_0x2165fb))) {
          _0x5730e0 = _0x1931b1;
          _0x1931b1 = _0x240ce8;
          _0x240ce8 = callText;
          callText = call;
          call = _0x26280b;
          _0x26280b = _0x5d027d;
          _0x5d027d = _0x2165fb;
          _0x2165fb = null;
        }
        if (!_0x5730e0) {
          _0x5730e0 = {};
        }
        let _0x1d2fde = [];
        if (_0x5d027d || _0x26280b) {
          if (!Array.isArray(_0x5d027d)) {
            _0x5d027d = [_0x5d027d];
          }
          if (!Array.isArray(_0x26280b)) {
            _0x26280b = [_0x26280b];
          }
          _0x1d2fde.push(...(_0x5d027d.map((_0x1c31bf, _0x332210) => [_0x1c31bf, _0x26280b[_0x332210]]).map(([_0x4fd350, _0x26eaed], _0x1ce46a) => ({
            'index': _0x1d2fde.length + _0x1ce46a + 0x1,
            'urlButton': {
              'displayText': !!(_0x26eaed !== null && _0x26eaed !== undefined) && _0x26eaed || !!(_0x4fd350 !== null && _0x4fd350 !== undefined) && _0x4fd350 || '',
              'url': !!(_0x4fd350 !== null && _0x4fd350 !== undefined) && _0x4fd350 || !!(_0x26eaed !== null && _0x26eaed !== undefined) && _0x26eaed || ''
            }
          })) || []));
        }
        if (_0x340568 || _0xe729e6) {
          if (!Array.isArray(_0x340568)) {
            _0x340568 = [_0x340568];
          }
          if (!Array.isArray(_0xe729e6)) {
            _0xe729e6 = [_0xe729e6];
          }
          _0x1d2fde.push(...(_0x340568.map((_0x2c5cbb, _0x3c76b3) => [_0x2c5cbb, _0xe729e6[_0x3c76b3]]).map(([_0x2a020c, _0x389cdd], _0x186719) => ({
            'index': _0x1d2fde.length + _0x186719 + 0x1,
            'urlButton': {
              'displayText': !!(_0x389cdd !== null && _0x389cdd !== undefined) && _0x389cdd || !!(_0x2a020c !== null && _0x2a020c !== undefined) && _0x2a020c || '',
              'url': !!(_0x2a020c !== null && _0x2a020c !== undefined) && _0x2a020c || !!(_0x389cdd !== null && _0x389cdd !== undefined) && _0x389cdd || ''
            }
          })) || []));
        }
        if (_0x240ce8.length) {
          if (!Array.isArray(_0x240ce8[0x0])) {
            _0x240ce8 = [_0x240ce8];
          }
          _0x1d2fde.push(...(_0x240ce8.map(([_0x36b513, _0x516099], _0x38d20e) => ({
            'index': _0x1d2fde.length + _0x38d20e + 0x1,
            'quickReplyButton': {
              'displayText': !!(_0x36b513 !== null && _0x36b513 !== undefined) && _0x36b513 || !!(_0x516099 !== null && _0x516099 !== undefined) && _0x516099 || '',
              'id': !!(_0x516099 !== null && _0x516099 !== undefined) && _0x516099 || !!(_0x36b513 !== null && _0x36b513 !== undefined) && _0x36b513 || ''
            }
          })) || []));
        }
        let _0x50c5fe = {
          ..._0x5730e0,
          [_0x2165fb ? 'caption' : 'text']: _0x28c843 || '',
          'footer': _0x25a1f0,
          'templateButtons': _0x1d2fde,
          ...(_0x2165fb ? _0x5730e0.asLocation && /image/.test(_0x48b5b1.mime) ? {
            'location': {
              ..._0x5730e0,
              'jpegThumbnail': _0x2165fb
            }
          } : {
            [/video/.test(_0x48b5b1.mime) ? "video" : /image/.test(_0x48b5b1.mime) ? 'image' : 'document']: _0x2165fb
          } : {})
        };
        return await _0x22e918.sendMessage(_0x3ac419, _0x50c5fe, {
          'quoted': _0x1931b1,
          'upload': _0x22e918.waUploadToServer,
          ..._0x5730e0
        });
      },
      'enumerable': true
    },
    'cMod': {
      'value'(_0x4f0c20, _0x26d7a2, _0x3fd437 = '', _0x313ef7 = _0x22e918.user.jid, _0x4102ff = {}) {
        if (_0x4102ff.mentions && !Array.isArray(_0x4102ff.mentions)) {
          _0x4102ff.mentions = [_0x4102ff.mentions];
        }
        let _0x246034 = _0x26d7a2.toJSON();
        delete _0x246034.message.messageContextInfo;
        delete _0x246034.message.senderKeyDistributionMessage;
        let _0x5a34cc = Object.keys(_0x246034.message)[0x0];
        let _0x1f0cb0 = _0x246034.message;
        let _0x439e7f = _0x1f0cb0[_0x5a34cc];
        if (typeof _0x439e7f === "string") {
          _0x1f0cb0[_0x5a34cc] = _0x3fd437 || _0x439e7f;
        } else {
          if (_0x439e7f.caption) {
            _0x439e7f.caption = _0x3fd437 || _0x439e7f.caption;
          } else {
            if (_0x439e7f.text) {
              _0x439e7f.text = _0x3fd437 || _0x439e7f.text;
            }
          }
        }
        if (typeof _0x439e7f !== "string") {
          _0x1f0cb0[_0x5a34cc] = {
            ..._0x439e7f,
            ..._0x4102ff
          };
          _0x1f0cb0[_0x5a34cc].contextInfo = {
            ...(_0x439e7f.contextInfo || {}),
            'mentionedJid': _0x4102ff.mentions || _0x439e7f.contextInfo?.["mentionedJid"] || []
          };
        }
        if (_0x246034.participant) {
          _0x313ef7 = _0x246034.participant = _0x313ef7 || _0x246034.participant;
        } else {
          if (_0x246034.key.participant) {
            _0x313ef7 = _0x246034.key.participant = _0x313ef7 || _0x246034.key.participant;
          }
        }
        if (_0x246034.key.remoteJid.includes("@s.whatsapp.net")) {
          _0x313ef7 = _0x313ef7 || _0x246034.key.remoteJid;
        } else {
          if (_0x246034.key.remoteJid.includes("@broadcast")) {
            _0x313ef7 = _0x313ef7 || _0x246034.key.remoteJid;
          }
        }
        _0x246034.key.remoteJid = _0x4f0c20;
        _0x246034.key.fromMe = areJidsSameUser(_0x313ef7, _0x22e918.user.id) || false;
        return proto.WebMessageInfo.fromObject(_0x246034);
      },
      'enumerable': true
    },
    'copyNForward': {
      async 'value'(_0x45a3ea, _0x1bf9a4, _0x271ebc = true, _0x9a9a45 = {}) {
        let _0x411b79;
        if (_0x9a9a45.readViewOnce && _0x1bf9a4.message.viewOnceMessage?.["message"]) {
          _0x411b79 = Object.keys(_0x1bf9a4.message.viewOnceMessage.message)[0x0];
          delete _0x1bf9a4.message.viewOnceMessage.message[_0x411b79].viewOnce;
          _0x1bf9a4.message = proto.Message.fromObject(JSON.parse(JSON.stringify(_0x1bf9a4.message.viewOnceMessage.message)));
          _0x1bf9a4.message[_0x411b79].contextInfo = _0x1bf9a4.message.viewOnceMessage.contextInfo;
        }
        let _0x5d6110 = Object.keys(_0x1bf9a4.message)[0x0];
        let _0x48c314 = generateForwardMessageContent(_0x1bf9a4, !!_0x271ebc);
        let _0x55b6fd = Object.keys(_0x48c314)[0x0];
        if (_0x271ebc && typeof _0x271ebc === "number" && _0x271ebc > 0x1) {
          _0x48c314[_0x55b6fd].contextInfo.forwardingScore += _0x271ebc;
        }
        _0x48c314[_0x55b6fd].contextInfo = {
          ...(_0x1bf9a4.message[_0x5d6110].contextInfo || {}),
          ...(_0x48c314[_0x55b6fd].contextInfo || {})
        };
        _0x48c314 = generateWAMessageFromContent(_0x45a3ea, _0x48c314, {
          ..._0x9a9a45,
          'userJid': _0x22e918.user.jid
        });
        await _0x22e918.relayMessage(_0x45a3ea, _0x48c314.message, {
          'messageId': _0x48c314.key.id,
          'additionalAttributes': {
            ..._0x9a9a45
          }
        });
        return _0x48c314;
      },
      'enumerable': true
    },
    'fakeReply': {
      'value'(_0x41b834, _0x5cf4e7 = '', _0x4b9a60 = this.user.jid, _0x278782 = '', _0x40dd61, _0x556e71) {
        return _0x22e918.reply(_0x41b834, _0x5cf4e7, {
          'key': {
            'fromMe': areJidsSameUser(_0x4b9a60, _0x22e918.user.id),
            'participant': _0x4b9a60,
            ...(_0x40dd61 ? {
              'remoteJid': _0x40dd61
            } : {})
          },
          'message': {
            'conversation': _0x278782
          },
          ..._0x556e71
        });
      }
    },
    'downloadM': {
      async 'value'(_0x12e7d5, _0x26de5f, _0x1800cd) {
        let _0x4e64fb;
        if (!_0x12e7d5 || !(_0x12e7d5.url || _0x12e7d5.directPath)) {
          return Buffer.alloc(0x0);
        }
        const _0x1a1825 = await downloadContentFromMessage(_0x12e7d5, _0x26de5f);
        let _0x1a41d8 = Buffer.from([]);
        for await (const _0x3ceb99 of _0x1a1825) {
          _0x1a41d8 = Buffer.concat([_0x1a41d8, _0x3ceb99]);
        }
        if (_0x1800cd) {
          ({
            filename: _0x4e64fb
          } = await _0x22e918.getFile(_0x1a41d8, true));
        }
        return _0x1800cd && _0xe33524.existsSync(_0x4e64fb) ? _0x4e64fb : _0x1a41d8;
      },
      'enumerable': true
    },
    'parseMention': {
      'value'(_0xe404f7 = '') {
        return [..._0xe404f7.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x4021b6 => _0x4021b6[0x1] + "@s.whatsapp.net");
      },
      'enumerable': true
    },
    'getName': {
      'value'(_0x285ee7 = '', _0x45cac5 = false) {
        _0x285ee7 = _0x22e918.decodeJid(_0x285ee7);
        _0x45cac5 = _0x22e918.withoutContact || _0x45cac5;
        let _0x1ecbd5;
        if (_0x285ee7.endsWith("@g.us")) {
          return new Promise(async _0x281a96 => {
            _0x1ecbd5 = _0x22e918.chats[_0x285ee7] || {};
            if (!(_0x1ecbd5.name || _0x1ecbd5.subject)) {
              _0x1ecbd5 = (await _0x22e918.groupMetadata(_0x285ee7)) || {};
            }
            _0x281a96(_0x1ecbd5.name || _0x1ecbd5.subject || _0x5eb6b2('+' + _0x285ee7.replace("@s.whatsapp.net", '')).getNumber("international"));
          });
        } else {
          _0x1ecbd5 = _0x285ee7 === '0@s.whatsapp.net' ? {
            'jid': _0x285ee7,
            'vname': "WhatsApp"
          } : areJidsSameUser(_0x285ee7, _0x22e918.user.id) ? _0x22e918.user : _0x22e918.chats[_0x285ee7] || {};
        }
        return (_0x45cac5 ? '' : _0x1ecbd5.name) || _0x1ecbd5.subject || _0x1ecbd5.vname || _0x1ecbd5.notify || _0x1ecbd5.verifiedName || _0x5eb6b2('+' + _0x285ee7.replace("@s.whatsapp.net", '')).getNumber('international');
      },
      'enumerable': true
    },
    'loadMessage': {
      'value'(_0x37357a) {
        return Object.entries(_0x22e918.chats).filter(([_0x148f83, {
          messages: _0x1ebf98
        }]) => typeof _0x1ebf98 === "object").find(([_0x2b439d, {
          messages: _0xf438f1
        }]) => Object.entries(_0xf438f1).find(([_0x5b3359, _0x48b2db]) => _0x5b3359 === _0x37357a || _0x48b2db.key?.['id'] === _0x37357a))?.[0x1]["messages"]?.[_0x37357a];
      },
      'enumerable': true
    },
    'sendGroupV4Invite': {
      async 'value'(_0x4f13fe, _0x146de6, _0xd50f36, _0x4c62de, _0x1fa323 = "unknown subject", _0xc0dd1e = "Invitation to join my WhatsApp group", _0x53c1f7, _0x39dab0 = {}) {
        const _0x2b6ccb = proto.Message.fromObject({
          'groupInviteMessage': proto.GroupInviteMessage.fromObject({
            'inviteCode': _0xd50f36,
            'inviteExpiration': parseInt(_0x4c62de) || +new Date(new Date() + 259200000),
            'groupJid': _0x4f13fe,
            'groupName': (_0x1fa323 ? _0x1fa323 : await _0x22e918.getName(_0x4f13fe)) || null,
            'jpegThumbnail': Buffer.isBuffer(_0x53c1f7) ? _0x53c1f7 : null,
            'caption': _0xc0dd1e
          })
        });
        const _0x17e178 = generateWAMessageFromContent(_0x146de6, _0x2b6ccb, _0x39dab0);
        await _0x22e918.relayMessage(_0x146de6, _0x17e178.message, {
          'messageId': _0x17e178.key.id,
          'additionalAttributes': {
            ..._0x39dab0
          }
        });
        return _0x17e178;
      },
      'enumerable': true
    },
    'processMessageStubType': {
      async 'value'(_0x229704) {
        if (!_0x229704.messageStubType) {
          return;
        }
        const _0x2c8810 = _0x22e918.decodeJid(_0x229704.key.remoteJid || _0x229704.message?.['senderKeyDistributionMessage']?.["groupId"] || '');
        if (!_0x2c8810 || _0x2c8810 === "status@broadcast") {
          return;
        }
        const _0x290ba6 = _0x1fad1f => {
          ev.emit("groups.update", [{
            'id': _0x2c8810,
            ..._0x1fad1f
          }]);
        };
        switch (_0x229704.messageStubType) {
          case WAMessageStubType.REVOKE:
          case WAMessageStubType.GROUP_CHANGE_INVITE_LINK:
            _0x290ba6({
              'revoke': _0x229704.messageStubParameters[0x0]
            });
            break;
          case WAMessageStubType.GROUP_CHANGE_ICON:
            _0x290ba6({
              'icon': _0x229704.messageStubParameters[0x0]
            });
            break;
          default:
            {
              console.log({
                'messageStubType': _0x229704.messageStubType,
                'messageStubParameters': _0x229704.messageStubParameters,
                'type': WAMessageStubType[_0x229704.messageStubType]
              });
              break;
            }
        }
        const _0x40dbee = _0x2c8810.endsWith("@g.us");
        if (!_0x40dbee) {
          return;
        }
        let _0x19d8a0 = _0x22e918.chats[_0x2c8810];
        if (!_0x19d8a0) {
          _0x19d8a0 = _0x22e918.chats[_0x2c8810] = {
            'id': _0x2c8810
          };
        }
        _0x19d8a0.isChats = true;
        const _0x318442 = await _0x22e918.groupMetadata(_0x2c8810)["catch"](_0x4aed5e => null);
        if (!_0x318442) {
          return;
        }
        _0x19d8a0.subject = _0x318442.subject;
        _0x19d8a0.metadata = _0x318442;
      }
    },
    'insertAllGroup': {
      async 'value'() {
        const _0x38f7a8 = (await _0x22e918.groupFetchAllParticipating()["catch"](_0x27631b => null)) || {};
        for (const _0x4b6c43 in _0x38f7a8) _0x22e918.chats[_0x4b6c43] = {
          ...(_0x22e918.chats[_0x4b6c43] || {}),
          'id': _0x4b6c43,
          'subject': _0x38f7a8[_0x4b6c43].subject,
          'isChats': true,
          'metadata': _0x38f7a8[_0x4b6c43]
        };
        return _0x22e918.chats;
      }
    },
    'pushMessage': {
      async 'value'(_0x1764bd) {
        if (!_0x1764bd) {
          return;
        }
        if (!Array.isArray(_0x1764bd)) {
          _0x1764bd = [_0x1764bd];
        }
        for (const _0xa55a68 of _0x1764bd) {
          try {
            if (!_0xa55a68) {
              continue;
            }
            if (_0xa55a68.messageStubType && _0xa55a68.messageStubType != WAMessageStubType.CIPHERTEXT) {
              _0x22e918.processMessageStubType(_0xa55a68)["catch"](console.error);
            }
            const _0x45d568 = Object.keys(_0xa55a68.message || {});
            const _0x4f8a57 = !["senderKeyDistributionMessage", "messageContextInfo"].includes(_0x45d568[0x0]) && _0x45d568[0x0] || _0x45d568.length >= 0x3 && _0x45d568[0x1] !== "messageContextInfo" && _0x45d568[0x1] || _0x45d568[_0x45d568.length - 0x1];
            const _0x50c9d1 = _0x22e918.decodeJid(_0xa55a68.key.remoteJid || _0xa55a68.message?.["senderKeyDistributionMessage"]?.["groupId"] || '');
            if (_0xa55a68.message?.[_0x4f8a57]?.['contextInfo']?.['quotedMessage']) {
              let _0x5348b3 = _0xa55a68.message[_0x4f8a57].contextInfo;
              let _0x93f7be = _0x22e918.decodeJid(_0x5348b3.participant);
              const _0x4d09e9 = _0x22e918.decodeJid(_0x5348b3.remoteJid || _0x93f7be);
              let _0xc6eacc = _0xa55a68.message[_0x4f8a57].contextInfo.quotedMessage;
              if (_0x4d09e9 && _0x4d09e9 !== 'status@broadcast' && _0xc6eacc) {
                let _0x2f567d = Object.keys(_0xc6eacc)[0x0];
                if (_0x2f567d == "conversation") {
                  _0xc6eacc.extendedTextMessage = {
                    'text': _0xc6eacc[_0x2f567d]
                  };
                  delete _0xc6eacc.conversation;
                  _0x2f567d = "extendedTextMessage";
                }
                if (!_0xc6eacc[_0x2f567d].contextInfo) {
                  _0xc6eacc[_0x2f567d].contextInfo = {};
                }
                _0xc6eacc[_0x2f567d].contextInfo.mentionedJid = _0x5348b3.mentionedJid || _0xc6eacc[_0x2f567d].contextInfo.mentionedJid || [];
                const _0x405322 = _0x4d09e9.endsWith('g.us');
                if (_0x405322 && !_0x93f7be) {
                  _0x93f7be = _0x4d09e9;
                }
                const _0x8182d0 = {
                  'key': {
                    'remoteJid': _0x4d09e9,
                    'fromMe': areJidsSameUser(_0x22e918.user.jid, _0x4d09e9),
                    'id': _0x5348b3.stanzaId,
                    'participant': _0x93f7be
                  },
                  'message': JSON.parse(JSON.stringify(_0xc6eacc)),
                  ...(_0x405322 ? {
                    'participant': _0x93f7be
                  } : {})
                };
                let _0x1d715f = _0x22e918.chats[_0x93f7be];
                if (!_0x1d715f) {
                  _0x1d715f = _0x22e918.chats[_0x93f7be] = {
                    'id': _0x93f7be,
                    'isChats': !_0x405322
                  };
                }
                if (!_0x1d715f.messages) {
                  _0x1d715f.messages = {};
                }
                if (!_0x1d715f.messages[_0x5348b3.stanzaId] && !_0x8182d0.key.fromMe) {
                  _0x1d715f.messages[_0x5348b3.stanzaId] = _0x8182d0;
                }
                let _0xa94db6;
                if ((_0xa94db6 = Object.entries(_0x1d715f.messages)).length > 0x28) {
                  _0x1d715f.messages = Object.fromEntries(_0xa94db6.slice(0x1e, _0xa94db6.length));
                }
              }
            }
            if (!_0x50c9d1 || _0x50c9d1 === 'status@broadcast') {
              continue;
            }
            const _0x552e07 = _0x50c9d1.endsWith("@g.us");
            let _0x5b33d0 = _0x22e918.chats[_0x50c9d1];
            if (!_0x5b33d0) {
              if (_0x552e07) {
                await _0x22e918.insertAllGroup()['catch'](console.error);
              }
              _0x5b33d0 = _0x22e918.chats[_0x50c9d1] = {
                'id': _0x50c9d1,
                'isChats': true,
                ...(_0x22e918.chats[_0x50c9d1] || {})
              };
            }
            let _0x3d7221;
            let _0x5e6179;
            if (_0x552e07) {
              if (!_0x5b33d0.subject || !_0x5b33d0.metadata) {
                _0x3d7221 = (await _0x22e918.groupMetadata(_0x50c9d1)['catch'](_0x125d46 => ({}))) || {};
                if (!_0x5b33d0.subject) {
                  _0x5b33d0.subject = _0x3d7221.subject || '';
                }
                if (!_0x5b33d0.metadata) {
                  _0x5b33d0.metadata = _0x3d7221;
                }
              }
              _0x5e6179 = _0x22e918.decodeJid(_0xa55a68.key?.["fromMe"] && _0x22e918.user.id || _0xa55a68.participant || _0xa55a68.key?.["participant"] || _0x50c9d1 || '');
              if (_0x5e6179 !== _0x50c9d1) {
                let _0x173f58 = _0x22e918.chats[_0x5e6179];
                if (!_0x173f58) {
                  _0x173f58 = _0x22e918.chats[_0x5e6179] = {
                    'id': _0x5e6179
                  };
                }
                if (!_0x173f58.name) {
                  _0x173f58.name = _0xa55a68.pushName || _0x173f58.name || '';
                }
              }
            } else {
              if (!_0x5b33d0.name) {
                _0x5b33d0.name = _0xa55a68.pushName || _0x5b33d0.name || '';
              }
            }
            if (['senderKeyDistributionMessage', "messageContextInfo"].includes(_0x4f8a57)) {
              continue;
            }
            _0x5b33d0.isChats = true;
            if (!_0x5b33d0.messages) {
              _0x5b33d0.messages = {};
            }
            const _0xb4f57a = _0xa55a68.key.fromMe || areJidsSameUser(_0x5e6179 || _0x50c9d1, _0x22e918.user.id);
            if (!['protocolMessage'].includes(_0x4f8a57) && !_0xb4f57a && _0xa55a68.messageStubType != WAMessageStubType.CIPHERTEXT && _0xa55a68.message) {
              delete _0xa55a68.message.messageContextInfo;
              delete _0xa55a68.message.senderKeyDistributionMessage;
              _0x5b33d0.messages[_0xa55a68.key.id] = JSON.parse(JSON.stringify(_0xa55a68, null, 0x2));
              let _0x41770a;
              if ((_0x41770a = Object.entries(_0x5b33d0.messages)).length > 0x28) {
                _0x5b33d0.messages = Object.fromEntries(_0x41770a.slice(0x1e, _0x41770a.length));
              }
            }
          } catch (_0x1d7818) {
            console.error(_0x1d7818);
          }
        }
      }
    },
    'serializeM': {
      'value'(_0xb1f8f8) {
        return smsg(_0x22e918, _0xb1f8f8);
      }
    },
    ...(typeof _0x22e918.chatRead !== "function" ? {
      'chatRead': {
        'value'(_0xd20262, _0x40abd5 = _0x22e918.user.jid, _0x10c78f) {
          return _0x22e918.sendReadReceipt(_0xd20262, _0x40abd5, [_0x10c78f]);
        },
        'enumerable': true
      }
    } : {}),
    ...(typeof _0x22e918.setStatus !== "function" ? {
      'setStatus': {
        'value'(_0x41d35f) {
          return _0x22e918.query({
            'tag': 'iq',
            'attrs': {
              'to': S_WHATSAPP_NET,
              'type': "set",
              'xmlns': "status"
            },
            'content': [{
              'tag': 'status',
              'attrs': {},
              'content': Buffer.from(_0x41d35f, "utf-8")
            }]
          });
        },
        'enumerable': true
      }
    } : {})
  });
  if (_0x4e9730.user?.['id']) {
    _0x4e9730.user.jid = _0x4e9730.decodeJid(_0x4e9730.user.id);
  }
  _0x27e67f.bind(_0x4e9730);
  return _0x4e9730;
}
export function smsg(_0x12c774, _0xe8b008, _0x4ebbd9) {
  if (!_0xe8b008) {
    return _0xe8b008;
  }
  let _0x1c57c9 = proto.WebMessageInfo;
  _0xe8b008 = _0x1c57c9.fromObject(_0xe8b008);
  _0xe8b008.conn = _0x12c774;
  let _0x1f771e;
  if (_0xe8b008.message) {
    if (_0xe8b008.mtype == "protocolMessage" && _0xe8b008.msg.key) {
      _0x1f771e = _0xe8b008.msg.key;
      if (_0x1f771e == "status@broadcast") {
        _0x1f771e.remoteJid = _0xe8b008.chat;
      }
      if (!_0x1f771e.participant || _0x1f771e.participant == 'status_me') {
        _0x1f771e.participant = _0xe8b008.sender;
      }
      _0x1f771e.fromMe = _0x12c774.decodeJid(_0x1f771e.participant) === _0x12c774.decodeJid(_0x12c774.user.id);
      if (!_0x1f771e.fromMe && _0x1f771e.remoteJid === _0x12c774.decodeJid(_0x12c774.user.id)) {
        _0x1f771e.remoteJid = _0xe8b008.sender;
      }
    }
    if (_0xe8b008.quoted) {
      if (!_0xe8b008.quoted.mediaMessage) {
        delete _0xe8b008.quoted.download;
      }
    }
  }
  if (!_0xe8b008.mediaMessage) {
    delete _0xe8b008.download;
  }
  try {
    if (_0x1f771e && _0xe8b008.mtype == "protocolMessage") {
      _0x12c774.ev.emit("message.delete", _0x1f771e);
    }
  } catch (_0x1b231c) {
    console.error(_0x1b231c);
  }
  return _0xe8b008;
}
export function serialize() {
  const _0x158982 = ['imageMessage', "videoMessage", "audioMessage", 'stickerMessage', "documentMessage"];
  return Object.defineProperties(proto.WebMessageInfo.prototype, {
    'conn': {
      'value': undefined,
      'enumerable': false,
      'writable': true
    },
    'id': {
      'get'() {
        return this.key?.['id'];
      }
    },
    'isBaileys': {
      'get'() {
        return this.id?.["length"] === 0x10 || this.id?.["startsWith"]("3EB0") && this.id?.["length"] === 0xc || false;
      }
    },
    'chat': {
      'get'() {
        const _0xa1e06 = this.message?.["senderKeyDistributionMessage"]?.["groupId"];
        return (this.key?.['remoteJid'] || _0xa1e06 && _0xa1e06 !== 'status@broadcast' || '').decodeJid();
      }
    },
    'isGroup': {
      'get'() {
        return this.chat.endsWith("@g.us");
      },
      'enumerable': true
    },
    'sender': {
      'get'() {
        return this.conn?.["decodeJid"](this.key?.["fromMe"] && this.conn?.["user"]['id'] || this.participant || this.key.participant || this.chat || '');
      },
      'enumerable': true
    },
    'fromMe': {
      'get'() {
        return this.key?.["fromMe"] || areJidsSameUser(this.conn?.['user']['id'], this.sender) || false;
      }
    },
    'mtype': {
      'get'() {
        if (!this.message) {
          return '';
        }
        const _0xcf64c0 = Object.keys(this.message);
        return !["senderKeyDistributionMessage", "messageContextInfo"].includes(_0xcf64c0[0x0]) && _0xcf64c0[0x0] || _0xcf64c0.length >= 0x3 && _0xcf64c0[0x1] !== "messageContextInfo" && _0xcf64c0[0x1] || _0xcf64c0[_0xcf64c0.length - 0x1];
      },
      'enumerable': true
    },
    'msg': {
      'get'() {
        if (!this.message) {
          return null;
        }
        return this.message[this.mtype];
      }
    },
    'mediaMessage': {
      'get'() {
        if (!this.message) {
          return null;
        }
        const _0x6b1ee5 = (this.msg?.["url"] || this.msg?.["directPath"] ? {
          ...this.message
        } : extractMessageContent(this.message)) || null;
        if (!_0x6b1ee5) {
          return null;
        }
        const _0x585698 = Object.keys(_0x6b1ee5)[0x0];
        return _0x158982.includes(_0x585698) ? _0x6b1ee5 : null;
      },
      'enumerable': true
    },
    'mediaType': {
      'get'() {
        let _0x6ffdac;
        if (!(_0x6ffdac = this.mediaMessage)) {
          return null;
        }
        return Object.keys(_0x6ffdac)[0x0];
      },
      'enumerable': true
    },
    'quoted': {
      'get'() {
        const _0x1390c9 = this;
        const _0x5981d0 = _0x1390c9.msg;
        const _0x125a90 = _0x5981d0?.["contextInfo"];
        const _0x3e2ecb = _0x125a90?.['quotedMessage'];
        if (!_0x5981d0 || !_0x125a90 || !_0x3e2ecb) {
          return null;
        }
        const _0x475d1d = Object.keys(_0x3e2ecb)[0x0];
        let _0x1b403b = _0x3e2ecb[_0x475d1d];
        const _0x2f0b48 = typeof _0x1b403b === "string" ? _0x1b403b : _0x1b403b.text;
        return Object.defineProperties(JSON.parse(JSON.stringify(typeof _0x1b403b === "string" ? {
          'text': _0x1b403b
        } : _0x1b403b)), {
          'mtype': {
            'get'() {
              return _0x475d1d;
            },
            'enumerable': true
          },
          'mediaMessage': {
            'get'() {
              const _0x1cdf58 = (_0x1b403b.url || _0x1b403b.directPath ? {
                ..._0x3e2ecb
              } : extractMessageContent(_0x3e2ecb)) || null;
              if (!_0x1cdf58) {
                return null;
              }
              const _0x53b9c5 = Object.keys(_0x1cdf58)[0x0];
              return _0x158982.includes(_0x53b9c5) ? _0x1cdf58 : null;
            },
            'enumerable': true
          },
          'mediaType': {
            'get'() {
              let _0x22423c;
              if (!(_0x22423c = this.mediaMessage)) {
                return null;
              }
              return Object.keys(_0x22423c)[0x0];
            },
            'enumerable': true
          },
          'id': {
            'get'() {
              return _0x125a90.stanzaId;
            },
            'enumerable': true
          },
          'chat': {
            'get'() {
              return _0x125a90.remoteJid || _0x1390c9.chat;
            },
            'enumerable': true
          },
          'isBaileys': {
            'get'() {
              return this.id?.["length"] === 0x10 || this.id?.["startsWith"]('3EB0') && this.id.length === 0xc || false;
            },
            'enumerable': true
          },
          'sender': {
            'get'() {
              return (_0x125a90.participant || this.chat || '').decodeJid();
            },
            'enumerable': true
          },
          'fromMe': {
            'get'() {
              return areJidsSameUser(this.sender, _0x1390c9.conn?.['user']['jid']);
            },
            'enumerable': true
          },
          'text': {
            'get'() {
              return _0x2f0b48 || this.caption || this.contentText || this.selectedDisplayText || '';
            },
            'enumerable': true
          },
          'mentionedJid': {
            'get'() {
              return _0x1b403b.contextInfo?.["mentionedJid"] || _0x1390c9.getQuotedObj()?.["mentionedJid"] || [];
            },
            'enumerable': true
          },
          'name': {
            'get'() {
              const _0x5c6e5c = this.sender;
              return _0x5c6e5c ? _0x1390c9.conn?.["getName"](_0x5c6e5c) : null;
            },
            'enumerable': true
          },
          'vM': {
            'get'() {
              return proto.WebMessageInfo.fromObject({
                'key': {
                  'fromMe': this.fromMe,
                  'remoteJid': this.chat,
                  'id': this.id
                },
                'message': _0x3e2ecb,
                ...(_0x1390c9.isGroup ? {
                  'participant': this.sender
                } : {})
              });
            }
          },
          'fakeObj': {
            'get'() {
              return this.vM;
            }
          },
          'download': {
            'value'(_0x5ecbca = false) {
              const _0x59f90a = this.mediaType;
              return _0x1390c9.conn?.["downloadM"](this.mediaMessage[_0x59f90a], _0x59f90a.replace(/message/i, ''), _0x5ecbca);
            },
            'enumerable': true,
            'configurable': true
          },
          'reply': {
            'value'(_0x55913c, _0x3a2092, _0x2d0615) {
              return _0x1390c9.conn?.["reply"](_0x3a2092 ? _0x3a2092 : this.chat, _0x55913c, this.vM, _0x2d0615);
            },
            'enumerable': true
          },
          'copy': {
            'value'() {
              const _0x344bfd = proto.WebMessageInfo;
              return smsg(conn, _0x344bfd.fromObject(_0x344bfd.toObject(this.vM)));
            },
            'enumerable': true
          },
          'forward': {
            'value'(_0x232ac7, _0x31a629 = false, _0x5e5553) {
              return _0x1390c9.conn?.["sendMessage"](_0x232ac7, {
                'forward': this.vM,
                'force': _0x31a629,
                ..._0x5e5553
              }, {
                ..._0x5e5553
              });
            },
            'enumerable': true
          },
          'copyNForward': {
            'value'(_0x540e8f, _0x3a23c3 = false, _0x1bba39) {
              return _0x1390c9.conn?.["copyNForward"](_0x540e8f, this.vM, _0x3a23c3, _0x1bba39);
            },
            'enumerable': true
          },
          'cMod': {
            'value'(_0x55f647, _0x487164 = '', _0x478dd9 = this.sender, _0x1570fa = {}) {
              return _0x1390c9.conn?.["cMod"](_0x55f647, this.vM, _0x487164, _0x478dd9, _0x1570fa);
            },
            'enumerable': true
          },
          'delete': {
            'value'() {
              return _0x1390c9.conn?.['sendMessage'](this.chat, {
                'delete': this.vM.key
              });
            },
            'enumerable': true
          },
          'react': {
            'value'(_0x42ea10) {
              return _0x1390c9.conn?.['sendMessage'](this.chat, {
                'react': {
                  'text': _0x42ea10,
                  'key': this.vM.key
                }
              });
            },
            'enumerable': true
          }
        });
      },
      'enumerable': true
    },
    '_text': {
      'value': null,
      'writable': true
    },
    'text': {
      'get'() {
        const _0x27d37a = this.msg;
        const _0xdc5f26 = (typeof _0x27d37a === 'string' ? _0x27d37a : _0x27d37a?.["text"]) || _0x27d37a?.['caption'] || _0x27d37a?.["contentText"] || '';
        return typeof this._text === 'string' ? this._text : '' || (typeof _0xdc5f26 === 'string' ? _0xdc5f26 : _0xdc5f26?.["selectedDisplayText"] || _0xdc5f26?.["hydratedTemplate"]?.["hydratedContentText"] || _0xdc5f26) || '';
      },
      'set'(_0x5c199f) {
        return this._text = _0x5c199f;
      },
      'enumerable': true
    },
    'mentionedJid': {
      'get'() {
        return this.msg?.['contextInfo']?.['mentionedJid']?.["length"] && this.msg.contextInfo.mentionedJid || [];
      },
      'enumerable': true
    },
    'name': {
      'get'() {
        return !!(this.pushName !== null && this.pushName !== undefined) && this.pushName || this.conn?.['getName'](this.sender);
      },
      'enumerable': true
    },
    'download': {
      'value'(_0x330179 = false) {
        const _0x3438b9 = this.mediaType;
        return this.conn?.["downloadM"](this.mediaMessage[_0x3438b9], _0x3438b9.replace(/message/i, ''), _0x330179);
      },
      'enumerable': true,
      'configurable': true
    },
    'reply': {
      'value'(_0x3e5d5b, _0x4f0552, _0x3ccc61) {
        return this.conn?.['reply'](_0x4f0552 ? _0x4f0552 : this.chat, _0x3e5d5b, this, _0x3ccc61);
      }
    },
    'copy': {
      'value'() {
        const _0x467679 = proto.WebMessageInfo;
        return smsg(this.conn, _0x467679.fromObject(_0x467679.toObject(this)));
      },
      'enumerable': true
    },
    'forward': {
      'value'(_0x4c6c46, _0x4392cb = false, _0x102d7f = {}) {
        return this.conn?.["sendMessage"](_0x4c6c46, {
          'forward': this,
          'force': _0x4392cb,
          ..._0x102d7f
        }, {
          ..._0x102d7f
        });
      },
      'enumerable': true
    },
    'copyNForward': {
      'value'(_0xe0405f, _0x501ddd = false, _0x57e72d = {}) {
        return this.conn?.["copyNForward"](_0xe0405f, this, _0x501ddd, _0x57e72d);
      },
      'enumerable': true
    },
    'cMod': {
      'value'(_0x186f36, _0x162475 = '', _0x3a7b7f = this.sender, _0x2ae24b = {}) {
        return this.conn?.['cMod'](_0x186f36, this, _0x162475, _0x3a7b7f, _0x2ae24b);
      },
      'enumerable': true
    },
    'getQuotedObj': {
      'value'() {
        if (!this.quoted.id) {
          return null;
        }
        const _0x3c1cda = proto.WebMessageInfo.fromObject(this.conn?.["loadMessage"](this.quoted.id) || this.quoted.vM);
        return smsg(this.conn, _0x3c1cda);
      },
      'enumerable': true
    },
    'getQuotedMessage': {
      'get'() {
        return this.getQuotedObj;
      }
    },
    'delete': {
      'value'() {
        return this.conn?.["sendMessage"](this.chat, {
          'delete': this.key
        });
      },
      'enumerable': true
    },
    'react': {
      'value'(_0x5272b4) {
        return this.conn?.["sendMessage"](this.chat, {
          'react': {
            'text': _0x5272b4,
            'key': this.key
          }
        });
      },
      'enumerable': true
    }
  });
}
export function logic(_0x37931f, _0x47f437, _0x14e9b4) {
  if (_0x47f437.length !== _0x14e9b4.length) {
    throw new Error("Input and Output must have same length");
  }
  for (let _0x5bb97c in _0x47f437) if (_0x321db1.isDeepStrictEqual(_0x37931f, _0x47f437[_0x5bb97c])) {
    return _0x14e9b4[_0x5bb97c];
  }
  return null;
}
export function protoType() {
  Buffer.prototype.toArrayBuffer = function _0x24f782() {
    const _0x1b1901 = new ArrayBuffer(this.length);
    const _0x342226 = new Uint8Array(_0x1b1901);
    for (let _0x434cbe = 0x0; _0x434cbe < this.length; ++_0x434cbe) {
      _0x342226[_0x434cbe] = this[_0x434cbe];
    }
    return _0x1b1901;
  };
  Buffer.prototype.toArrayBufferV2 = function _0x4a537c() {
    return this.buffer.slice(this.byteOffset, this.byteOffset + this.byteLength);
  };
  ArrayBuffer.prototype.toBuffer = function _0x4c5a95() {
    return Buffer.from(new Uint8Array(this));
  };
  Uint8Array.prototype.getFileType = ArrayBuffer.prototype.getFileType = Buffer.prototype.getFileType = async function _0xfc9266() {
    return await fileTypeFromBuffer(this);
  };
  String.prototype.isNumber = Number.prototype.isNumber = isNumber;
  String.prototype.capitalize = function _0x184737() {
    return this.charAt(0x0).toUpperCase() + this.slice(0x1, this.length);
  };
  String.prototype.capitalizeV2 = function _0xb367ad() {
    const _0x1e1344 = this.split(" ");
    return _0x1e1344.map(_0x1be709 => _0x1be709.capitalize()).join(" ");
  };
  String.prototype.decodeJid = function _0x448843() {
    if (/:\d+@/gi.test(this)) {
      const _0x41b0d1 = jidDecode(this) || {};
      return (_0x41b0d1.user && _0x41b0d1.server && _0x41b0d1.user + '@' + _0x41b0d1.server || this).trim();
    } else {
      return this.trim();
    }
  };
  Number.prototype.toTimeString = function _0x2cc778() {
    const _0x9016ea = Math.floor(this / 0x3e8 % 0x3c);
    const _0x55fbb8 = Math.floor(this / 60000 % 0x3c);
    const _0xb90d9a = Math.floor(this / 3600000 % 0x18);
    const _0x5c9ccf = Math.floor(this / 86400000);
    return ((_0x5c9ccf ? _0x5c9ccf + " day(s) " : '') + (_0xb90d9a ? _0xb90d9a + " hour(s) " : '') + (_0x55fbb8 ? _0x55fbb8 + " minute(s) " : '') + (_0x9016ea ? _0x9016ea + " second(s)" : '')).trim();
  };
  Number.prototype.getRandom = String.prototype.getRandom = Array.prototype.getRandom = getRandom;
}
function isNumber() {
  const _0x307426 = parseInt(this);
  return typeof _0x307426 === "number" && !isNaN(_0x307426);
}
function getRandom() {
  if (Array.isArray(this) || this instanceof String) {
    return this[Math.floor(Math.random() * this.length)];
  }
  return Math.floor(Math.random() * this);
}
function nullish(_0x4986f1) {
  return !(_0x4986f1 !== null && _0x4986f1 !== undefined);
}
