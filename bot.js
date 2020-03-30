const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
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

const emoji = client.emojis.get('693976520644886590');
client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    await msg.react('🇸');
    await msg.react(`${emoji}`);
    
  }
});

// TAG \\
client.on("userUpdate", async(eski, yeni) => {
  if(eski.username !== yeni.username) {
  if(!yeni.username.includes("∼") && client.guilds.get("693280770680291359").members.get(yeni.id).roles.has("693293366951149680")) {
     client.guilds.get("693280770680291359").members.get(yeni.id).removeRole("693293366951149680")
     client.channels.get('693316642863841360').send(`:broken_heart: ${yeni}, ∼ tagını çıkardı!`)
    }
     if(yeni.username.includes("∼") && !client.guilds.get("693280770680291359").members.get(yeni.id).roles.has("693293366951149680")) {
      client.channels.get('693316642863841360').send(`:heart: ${yeni}, ∼ tagını aldı!`)
      client.guilds.get("693280770680291359").members.get(yeni.id).addRole("693293366951149680")
     }
  }
  })
// TAG \\

// KANAL ACIKLAMASI \\

client.on("ready", async () => {
let guild = client.guilds.get("693280770680291359") //Sunucunun ID'sini yazıyoruz.
let online = guild.members.filter(m => !m.user.bot && m.user.presence.status !== "online").size;
  setInterval(() => {
    client.channels.get("693286779062845440").setTopic(
      `Toplam Üye: ${guild.members.size}\nAktif Üye: ${online}`
        .replace(new RegExp("0", "g"), " 0️⃣") 
        .replace(new RegExp("1", "g"), " 1️⃣")
        .replace(new RegExp("2", "g"), " 2️⃣")
        .replace(new RegExp("3", "g"), " 3️⃣")
        .replace(new RegExp("4", "g"), " 4️⃣")
        .replace(new RegExp("5", "g"), " 5️⃣")
        .replace(new RegExp("6", "g"), " 6️⃣")
        .replace(new RegExp("7", "g"), " 7️⃣")
        .replace(new RegExp("8", "g"), " 8️⃣")
        .replace(new RegExp("9", "g"), " 9️⃣")
    );
  }, 3000);
})
// KANAL ACIKLAMASI \\

