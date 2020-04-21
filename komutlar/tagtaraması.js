const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  const tag = "™";
if(!tag) return message.reply(`:warning: Bir Tag Girmelisiniz Örnek Kullanım; \n \`${ayarlar.prefix}tag-taraması ƈα\``)
  const memberss = message.guild.members.filter(member => member.user.username.includes(tag));
    const embed = new Discord.RichEmbed()
        .addField(`Kullanıcı Adında ${tag} Privdeki Kullanıcılar`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Kimsenin kullanıcı Adında \`${tag}\` Privde Bulunmuyor.`)
        .setColor("RANDOM")
    message.channel.send({embed})
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['tag-tara', 'tagtara', 'tagtaraması', 'tagtaraması', 'tagtarama'],
    permLevel: 0
}
exports.help = {
    name: 'priv',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'priv'
}