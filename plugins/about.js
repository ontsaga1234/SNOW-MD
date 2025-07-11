const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `> *_ᴛʜᴇ ʙᴇsᴛ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ_*
╭╼━❍ 𝗕𝗜𝗢𝗚𝗥𝗔𝗣𝗛𝗬 ❍
┃│❍ *ᴄʀᴇᴀᴛᴇᴅ ʙʏ jon snow*
┃│❍ *ʀᴇᴀʟ ɴᴀᴍᴇ➭ christ*
┃│❍ *ɴɪᴄᴋɴᴀᴍᴇ➮ vava*
┃│❍ *ᴀɢᴇ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
┃│❍ *ᴄɪᴛʏ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
┃│❍ *ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ*
┃╰────────────────
╰╼━━━━━━━━━━━━━━━━╾╯
╭╼━❍ 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 ❍
┃│❍➳ *jon snow*
┃│❍➳ *ᴏɴʟʏ ᴏɴᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ*
┃│❍➳ *ʙᴏᴛ➭ xᴛʀᴇᴍᴇ ᴍᴅx*
┃╰────────────────
╰╼━━━━━━━━━━━━━━━━╾╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ jon snow*`
await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/rmcjwq.jpg' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363400596152474@newsletter', // ou ton JID actuel
            newsletterName: 'SNOW-MD',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
