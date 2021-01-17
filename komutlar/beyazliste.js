const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "786628166722519080") if(message.author.id !== "786628166722519080") return message.channel.send(":no_entry: Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send(" Bir kullanıcı belirtmelisin!")

message.channel.send("<:peh:799605390480375840> **"+cuser.tag+"** kullanıcısı başarıyla karalisteden çıkarıldı.")
const westra = new Discord.MessageEmbed()
.setColor(`GREEN`)
.setTimestamp()
.setDescription(` <:peh:799605390480375840> **${cuser.tag}** kullanıcısı karalisteden çıkarıldı.`)
  cclient.channels.cache.get("799630721177878550").send(westra)
db.delete(`ckaraliste.${cuser.id}`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'beyazliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };