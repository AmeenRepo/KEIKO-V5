import db from '../lib/database.js';
import { execSync } from 'child_process';

let handler = async (m, { conn, text }) => {
  if (conn.user.jid == conn.user.jid) {
    try {
      let branch = 'main'; // ente  'main' 

      if (text && text.toLowerCase() === 'now') {
        
        let pullOutput = execSync(`git pull origin ${branch}`).toString();
        
        // Set ayi
        conn.reply(m.chat, `🛠️ *Main Branch Updates Applied Successfully* 🛠️\n\n${pullOutput}`, m);
      } else {
        let fetchOutput = execSync(`git fetch origin ${branch}`);
     
        let updates = execSync(`git log HEAD..origin/${branch} --oneline`).toString().trim();
        
        if (updates) {
          let updateList = updates.split('\n');
          let updateMessage = '🛠️ *New Updates Available* 🛠️\n\n';
          updateList.forEach((update, index) => {
            updateMessage += `🛠️ *Update ${index + 1}:* ${update}\n`;
          });
          updateMessage += `\nUse *update now* command to apply these updates from the main branch.`;

          conn.reply(m.chat, updateMessage, m);
        } else {
          conn.reply(m.chat, '🛠️ No new updates found. You are already up to date! 🛠️', m);
        }
      }
    } catch (error) {
      conn.reply(m.chat, `Error: ${error.message}`, m);
    }
  }
};
handler.help = ['update', 'update now']
handler.tags = ['owner']
handler.command = ['update', 'fix', 'update now']
handler.rowner = true

export default handler;
