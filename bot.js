const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const dba = require("quick.db");
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
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
    } catch (e){
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
    } catch (e){
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
    } catch (e){
      reject(e);
    }
  });
};

// EMOJİLİ MESAJ \\
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selam') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamun Aleyküm') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamun Aleykum') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamün Aleyküm') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamün Aleykum') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hb') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Hoşbulduk') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Hoşbuldum') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Hoş Bulduk') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Hoş Buldum') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976520644886590');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
      msg.delete()
        let vUser = msg.member.id;
        const emoji = client.emojis.get('693976577167589427');
          msg.channel.send(`<@${vUser}> Diyorki ${emoji}`);
  }
});

// EMOJİLİ MESAJ \\

client.elevation = message => {
  if(!message.guild) {
	return; }
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

client.login(ayarlar.token);

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    await msg.react('🇸');
}});

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  if (msg.content.length > 7) {
    dba.add(`puan_${msg.author.id + msg.guild.id}`, 1);
  }

  if (dba.fetch(`puan_${msg.author.id + msg.guild.id}`) > 150) {
    msg.reply("Seviye atladınız.");
    dba.add(`seviye_${msg.author.id + msg.guild.id}`, 1);

    dba.delete(`puan_${msg.author.id + msg.guild.id}`);
  }
});

// TAG \\
client.on("userUpdate", async(eski, yeni) => {
  if(eski.username !== yeni.username) {
  if(!yeni.username.includes("™") && client.guilds.get("693280770680291359").members.get(yeni.id).roles.has("702271564741083209")) {
     client.guilds.get("693280770680291359").members.get(yeni.id).removeRole("702271564741083209")
     client.channels.get('702273748098875393').send(`:broken_heart: ${yeni}, ™ çıkardı Prive Veda Etti!`)
    }
     if(yeni.username.includes("™") && !client.guilds.get("693280770680291359").members.get(yeni.id).roles.has("702271564741083209")) {
      client.channels.get('702273748098875393').send(`:heart: ${yeni}, ™ alarak Prive Katıldı!`)
      client.guilds.get("693280770680291359").members.get(yeni.id).addRole("702271564741083209")
     }
  }
  })
// TAG \\