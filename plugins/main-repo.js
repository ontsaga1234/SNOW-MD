const fetch = require('node-fetch');
const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch GitHub repository information",
    react: "📥",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/jon-snow-tech-bot/SNOW-MD';

    try {
        const match = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return reply("❌ Erreur : L'URL du repo est invalide.");

        const [, username, repoName] = match;

        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
            headers: {
                'User-Agent': 'JON'
            }
        });

        if (response.status === 503) {
            return reply("❌ GitHub est temporairement indisponible (503). Réessaie plus tard.");
        }

        if (!response.ok) {
            return reply(`❌ Échec de récupération des infos du repo. Code: ${response.status}`);
        }

        const repoData = await response.json();

        const message = `> ╭⭑━━➤ *SNOW-MD REPO*
> ┇╭────────────┈⊷
> ┇┃♢ *ʀᴇᴘᴏsɪᴛᴏʀʏ*: ${repoData.name}
> ┇┃♢ *ᴏᴡɴᴇʀ*: ${repoData.owner.login}
> ┇┃♢ *sᴛᴀʀs*: ${repoData.stargazers_count}
> ┇┃♢ *ғᴏʀᴋs*: ${repoData.forks_count}
> ┇┃♢ *ᴜʀʟ*: ${repoData.html_url}
> ┇┃♢ *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ*:
> ┇┃${repoData.description || 'ɴᴏ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ'}
> ┇╰───────────┈⊷
> ╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╍╯
> ${config.DESCRIPTION}`;

        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/rmcjwq.jpg` },
            caption: message,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400596152474@newsletter',
                    newsletterName: config.OWNER_NAME || 'SNOW-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Repo command error:", error);
        reply("❌ Une erreur est survenue lors de la récupération du dépôt.");
    }
});
              
