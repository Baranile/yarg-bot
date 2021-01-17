const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async (client, message, args) => {
  let banyetkilirol = message.mentions.roles.first()
  if (!banyetkilirol) return message.channel.send('Lütfen yetkili rolünü etiketlermisin?')
   
  db.set(`banyetkilisi_${message.guild.id}`, banyetkilirol.id)
  message.channel.send(`Yetkili Rolü Başarıyla Ayarlandı; **${banyetkilirol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'banyetkilisi-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'banyetkili-rol <@rol>'
};