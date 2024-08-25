import _0x1a500b from 'chalk';
import { spawn } from 'child_process';
import _0x161ab8 from 'express';
import _0x271a6d from 'figlet';
import _0x2005a1 from 'fs';
import _0x486922 from 'path';
import { fileURLToPath } from 'url';
_0x271a6d("𝐊𝐞𝐢𝐤𝐨 𝐕𝟓", {
  'font': "Ghost",
  'horizontalLayout': "default",
  'verticalLayout': "default"
}, (_0xea44e5, _0x4f5432) => {
  if (_0xea44e5) {
    console.error(_0x1a500b.red("Figlet error:", _0xea44e5));
    return;
  }
  console.log(_0x1a500b.yellow(_0x4f5432));
});
_0x271a6d("Advanced Whatsapp Bot", {
  'horizontalLayout': 'default',
  'verticalLayout': 'default'
}, (_0xd63aee, _0x58972f) => {
  if (_0xd63aee) {
    console.error(_0x1a500b.red("Figlet error:", _0xd63aee));
    return;
  }
  console.log(_0x1a500b.magenta(_0x58972f));
});
const app = _0x161ab8();
const port = process.env.PORT || 0x1f90;
const __filename = fileURLToPath(import.meta.url);
const __dirname = _0x486922.dirname(__filename);
app.use(_0x161ab8["static"](_0x486922.join(__dirname, "AMEEN-SER")));
app.get('/', (_0x4b5c13, _0x2c5481) => {
  _0x2c5481.redirect("/Ameen.html");
});
app.listen(port, () => {
  console.log(_0x1a500b.green("Port " + port + " is open"));
});
let isRunning = false;
async function start(_0xf61d51) {
  if (isRunning) {
    return;
  }
  isRunning = true;
  const _0x4462db = new URL(import.meta.url).pathname;
  const _0x530f58 = [_0x486922.join(_0x486922.dirname(_0x4462db), _0xf61d51), ...process.argv.slice(0x2)];
  const _0x111f39 = spawn(process.argv[0x0], _0x530f58, {
    'stdio': ['inherit', "inherit", "inherit", "ipc"]
  });
  _0x111f39.on('message', _0x54ae32 => {
    console.log(_0x1a500b.cyan("✔️RECEIVED " + _0x54ae32));
    switch (_0x54ae32) {
      case "reset":
        _0x111f39.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        _0x111f39.send(process.uptime());
        break;
    }
  });
  _0x111f39.on('exit', _0x4742ba => {
    isRunning = false;
    console.error(_0x1a500b.red("Exited With Code: " + _0x4742ba));
    if (_0x4742ba === 0x0) {
      return;
    }
    _0x2005a1.watchFile(_0x530f58[0x0], () => {
      _0x2005a1.unwatchFile(_0x530f58[0x0]);
      start("main.js");
    });
  });
  _0x111f39.on('error', _0x9dc1d1 => {
    console.error(_0x1a500b.red("Error: " + _0x9dc1d1));
    _0x111f39.kill();
    isRunning = false;
    start("main.js");
  });
  const _0x13b235 = _0x486922.join(_0x486922.dirname(_0x4462db), "plugins");
  _0x2005a1.readdir(_0x13b235, async (_0x105982, _0x5b85f0) => {
    if (_0x105982) {
      console.error(_0x1a500b.red("Error reading plugins folder: " + _0x105982));
      return;
    }
    console.log(_0x1a500b.yellow("Installed " + _0x5b85f0.length + " plugins"));
    try {
      const {
        default: _0xdff069
      } = await import('@whiskeysockets/baileys');
      const _0x1da8e1 = (await _0xdff069.fetchLatestBaileysVersion()).version;
      console.log(_0x1a500b.yellow("Using Baileys version " + _0x1da8e1));
    } catch (_0x259ba9) {
      console.error(_0x1a500b.red(" Baileys Library Is Not Installed"));
    }
  });
}
start("main.js");
process.on("unhandledRejection", () => {
  console.error(_0x1a500b.red("Unhandled promise rejection. Bot will restart..."));
  start("main.js");
});
process.on("exit", _0x32b50d => {
  console.error(_0x1a500b.red("Exited with code: " + _0x32b50d));
  console.error(_0x1a500b.red("Bot will restart..."));
  start('main.js');
});
