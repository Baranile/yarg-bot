const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("799522812003483648")
  message.react("✅")
  message.channel.send("✅ • **Müşteri Rolünü Verdim.**")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "müşterirol"
}