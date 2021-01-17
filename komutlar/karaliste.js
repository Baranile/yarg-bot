const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "786628166722519080") if(message.author.id !== "786628166722519080") return message.channel.send(" Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send(" Bir kullanıcı belirtmelisin!")
let csebep = args.slice(1).join(' ')
if(!csebep) return message.channel.send(" Bir sebep belirtmelisin!")

message.channel.send("<:peh:799605390480375840> **"+cuser.tag+"** kullanıcısı **"+csebep+"** sebebinden başarıyla karalisteye alındı.")
const westra = new Discord.MessageEmbed()
.setColor(`RED`)
.setTimestamp()
.setDescription(`<:peh:799605390480375840> **${cuser.tag}** kullanıcısı **${csebep}** sebebinden karalisteye alındı.`)
cclient.channels.cache.get("799630721177878550").send(westra)
db.set(`ckaraliste.${cuser.id}`, csebep)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["krsl"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'karaliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };