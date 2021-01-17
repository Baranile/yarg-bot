const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Yargı Bot Yardım Menüsü')

  .addField("• | <a:Hype:800233993668526081> /afk",`__AFK Olursunuz__`)
  
  .addField("• | <a:Hype:800233993668526081> /ban",`__İstediğiniz Kişi Banlarsınız__`)
  
  .addField("• | <a:Hype:800233993668526081> /banlog-ayarla",`__Ban Log Kanalını Ayarlarsınız__`)
  
  .addField("• | <a:Hype:800233993668526081> /banyetkilisi-ayarla",`__Hangi Rolün Ban Atabilcek Onu Seçersiniz__`)

  .addField("• | <a:Hype:800233993668526081> /bansistem-kapat",`__Ban Sistemini Kapatırsınız__`)

  .addField("• | <a:Hype:800233993668526081> /uyar",`__İstedğiniz Kişiyi Uyarırsınız__`)

  .addField("• | <a:Hype:800233993668526081> /uyarılar",`__Uyarılara Bakarsınız__`)
  
  .addField("• | <a:Hype:800233993668526081> /uyarısil",`__Kişinin Uyarılarını Silersiniz__`)
  
  .addField("• | <a:Hype:800233993668526081> /kick",`__İstedğiniz Kişiyi Sunucudan Atarsınız__`)

  .addField("• | <a:Hype:800233993668526081> /sa-as aç/kapat",`__Selamın Aleyküm Aleyküm Selam Sistemini Açar Yada Kapatırsınız__`)

  .addField("• | <a:Hype:800233993668526081> /ping",`__Botun Pingini Gösterir__`)

  .addField("• | <a:Hype:800233993668526081> /isimdeğiştir",`__İstedğiniz Kişinin İsmini Değiştirirsiniz__`)

  .addField("• | <a:Hype:800233993668526081> /havadurumu ",`__Belirtiğiniz Yerin Hava Durumunu Gösterir__`)

  .addField("• | <a:Hype:800233993668526081> /hata-bildir",`__Hatayı Sahibime BİLDİRİRSİNİZ__`)

  .addField("• | <a:Hype:800233993668526081> /jail-kanal ayarla #kanal",`__Jail Log Kanalını Ayarlarsınız__`)

  .addField("• | <a:Hype:800233993668526081> /jail-rol ayarla @rol",`__Jail Rolünü Ayarlarsınız__`)

  .addField("• | <a:Hype:800233993668526081> /jail-yetkilisi ayarla ayarla @rol",`_Jail Yetkilisi Rolünü Ayarlarssınız__`)

  .addField("• | <a:Hype:800233993668526081> /jail",`_Kişiye Jail Atarsınız__`)


  .setImage("https://media.giphy.com/media/gBxmMg5mjFv04VJwm0/giphy.gif")
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}