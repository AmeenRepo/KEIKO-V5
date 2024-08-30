import { fileURLToPath } from 'url'
import path from 'path'
import { writeFileSync } from 'fs'
import { BufferJSON } from '@whiskeysockets/baileys'
import PastebinAPI from 'pastebin-js'
let pastebin = new PastebinAPI('u9SylH2Qa3eW_UQHq1kivWwKUMcajqLk')

async function processTxtAndSaveCredentials(txt) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const pasteId = txt.replace('KeikoV5~', '')

  let decodedData = await pastebin.getPaste(pasteId)

  try {
    const credsPath = path.join(__dirname, '..', 'session', 'creds.json')
    writeFileSync(credsPath, decodedData.toString())
    console.log('Saved credentials to', credsPath)
  } catch (jsonError) {
    console.error('Error parsing JSON:', jsonError)
  }
}

export default processTxtAndSaveCredentials
