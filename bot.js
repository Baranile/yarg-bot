
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

console.log(`Sistemler Aktif Komutlar Yüklenmeye Hazırlanıyor `);


client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
client.on('message', async (msg, member, guild) => {
    let i = await  db.fetch(`saas_${msg.guild.id}`)
        if(i === 'açık') {
          if (msg.content.toLowerCase() === 'sa'){
            
          msg.reply('Aleyküm Selam, Hoşgeldin ');    
        }
        }
      });
  
  client.on('message', async (msg, member, guild) => {
    let i = await  db.fetch(`saas_${msg.guild.id}`)
        if(i === 'açık') {
          if (msg.content.toLowerCase() === 'hi'){
            
          msg.reply('Hi welcome ');    
        }
        }
      });
      const ms = require("parse-ms");

      client.on("message", async message => {
        
        if(message.author.bot) return;
        if(!message.guild) return;
        if(message.content.includes(`${prefix}afk`)) return;
        
        if(await db.fetch(`afk_${message.author.id}`)) {
          db.delete(`afk_${message.author.id}`);
          db.delete(`afk_süre_${message.author.id}`);
          message.reply("Başarıyla afk modundan çıktınız.");
        }
        
        var USER = message.mentions.users.first();
        if(!USER) return;
        var REASON = await db.fetch(`afk_${USER.id}`);
        
        if(REASON) {
          let süre = await db.fetch(`afk_süre_${USER.id}`);
          let timeObj = ms(Date.now() - süre);
          message.channel.send(`${USER.tag} kullanıcısı AFK\n AFK süresi: ${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s\nSebep:\n **${REASON}**` )
        }
      });
      client.on("ready", async function() {
        const voiceChannel = "799630830325465119"
        client.channels.cache.get(voiceChannel).join()
        .catch(err => {
        throw err;
        })
        })
    
client.login(ayarlar.token);