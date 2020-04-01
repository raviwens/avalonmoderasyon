const Discord = require('discord.js');

exports.run = async (client, message) => {
        message.delete()
let guild = client.guilds.get("693280770680291359") //Sunucunun ID'sini yazıyoruz.
let online = guild.members.filter(m => !m.user.bot && m.user.presence.status !== "online").size;
    const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 Toplam Üye: ${guild.members.size}\nAktif Üye: ${online}
`,true)
      message.channel.send(embed)
  };
  
  exports.conf = {
    enabled: true,

    aliases: ['kaçkişiyiz'],
    permLevel: 0,
  };
  
  exports.help = {
    name: "kaçkişiyiz",
    description: "Kaç Kişiyiz.",
    usage: "kaçkişiyiz",

  };