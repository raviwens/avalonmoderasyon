const Discord = require('discord.js');

exports.run = async (client, message) => {
  const elmas = client.emojis.get('694626540977127424');
  const emoji = client.emojis.get('694626540977127424');
  const emoji = client.emojis.get('694626540977127424');
      message.delete()
  message.channel.send(`∼`)
  message.channel.send(`Bu Tagı Kullanıcı Adınıza Koyarsanız RENK Değiştirme Özelliğini Kazanıyorsunuz.`)
  message.channel.send(`Renk Değiştirmek İçin <#693292261689131008>.`)
  message.channel.send(`Peki iyide Nasıl Kullanıcı Adıma Bunu Eklicem? Bunumu Soruyorsunuz.`)
const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ${}<@${message.author.id}> Yardımcı Oluyoruz Size :)
${elmas} Sol Altta İsim ve Discord Numaranızın yanında Mikrofon Ses ve Ayarlar Menüsü var.
${elmas} Ayarlar Menüsüne Tıklıyorsunuz.
${elmas} "HESABIM" Bölümünde Düzenleye Tıklayın
${elmas} Kullanıcı Adınızın Başına "∼" Tagını Ekleyin.
${elmas} Şifrenizi Yazıp Kaydete Tıklayın
                      
 
`,true)
        .setFooter(`Vampir Köylü Oyunu..`)

};

exports.conf = {
  enabled: true,
  aliases: ['tag'],
  permLevel: 0,
};

exports.help = {
  name: "tag",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "tag",
};