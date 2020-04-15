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

// TAG \\
client.on("userUpdate", async(eski, yeni) => {
  if(eski.username !== yeni.username) {
  if(!yeni.username.includes("♅") && client.guilds.get("693280770680291359").members.get(yeni.id).roles.has("693293366951149680")) {
     client.guilds.get("693280770680291359").members.get(yeni.id).removeRole("693293366951149680")
     client.channels.get('693316642863841360').send(`:broken_heart: ${yeni}, ♅ tagını çıkardı!`)
    }
     if(yeni.username.includes("♅") && !client.guilds.get("693280770680291359").members.get(yeni.id).roles.has("693293366951149680")) {
      client.channels.get('693316642863841360').send(`:heart: ${yeni}, ♅ tagını aldı!`)
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

// NİTRO \\

client.on("ready", async () => {
  setInterval(() => {
  const nitrolar = ["uSl3IqZYmar6Wm7E","Wb1cxs3z4RTaFNY5","n85zvY6lKQqq9oAA","3NEHjX3xQEzSfK4G","6XnRKrXcI6Xgaz93","aSSMIXJMeaO00OMd","SU4rAFcEv5AXM5GT","0jUyIlxCPhEMQ2oe","yYKaScneyljG2Epy","PI4esVClz7BrI8OT","MEPghxTgTHrfZDKz","Qs3HmKBln0btFLSX","VcV4tY7Y2RJpd4MZ","z9kvENDM0M4VFuuy","yNycs1XH17Ws2zhr","YnBlpS3FAHkQ8jT9","TK2W11gwhHyu2AHX","hBgokg0ngFBfeBg4","sK3cgG9N3zIPfWr8","w7e0LHa3pyyqgdZn","WKEaGI663tQYtC9Q","naFR91JjXrmvbJHA","paKiu4bwElqZQAJU","fpAiWFeaFjm2oYR2","2HBR4n06XAumQhcH","1Mzv2CiXwKQT80oa","Ocxy0wE4nSsyOKGw","SlwLnR8Twrt79MDp","p4YBARZoWWPkwibp","Vr7Bh19bwkvrlxKJ","2QPo8lDVLExQtCE9","dUXspVnqPNcHPIFb","vDAHbCKJutcuFDoE","ecJmMoaYogW3vvvd","gOGRMIIk9wSLfgoz","zdQgDDFCg85bWx0W","yesO3rlbmfjNFui2","oGbBI4xNlkv4QYE1","PDsUkA0DtGwQOW5u","bFytJCfQUIykrI98","7W7Af86fZJGvMvK7","4FkIwxXWtOQ6eKFz","JFGnmU3I9rm6Vofs","RjLzNEE9l3IroNA7","jSAx4C8anmNiZPOn","c5yNG8R6YqpAtu3n","ZtiJKaNJXOxTxNio","DfUDwzyeUzBvQpmU","IeIjoj56pyMBtHLK","vyVr1jL21lzcWz1Z","Kiw6RXauLuSe3Kvd","HdLaJbYAJCtmChDl","JpbVM7WFcg0SHVSK","iNNFWSnJifxR5uUu","SMOv7xal26LtpVhQ","WswPQzj2I2ePLw8o","G0iLgag1CXGPHgg8","tN9AxlyogIEYlEgl","MLyDGlrVDSVJxMm6","OL0QPZgZgiCrihTW","xOhTLcM47iDqR7BT","mwVnIxKovtys4QzW","aj5ZHPljW6Jxn9nV","fBZt761yZBsHh0N9","p8VUA8rwJlm17hUw","Ch7mcbGlQeD0CaIe","5xMgvOmf3uasiUWP","wI3W4gxBwpuQcAh0","A3HG0vMaJ8Wr4Yjf","ZB9VfVyBRgkvXIjz","kQ492HmvzQX8CnIQ","hRSyh2qsTZ4MIDLl","ydprIfmWgsljCkae","khjw87doFWe6yJtp","cFxghc8AGLxisB97","C0TJdTK0GtDKWrX5","rksOWJHZtprbxlu2","0qI8UlHNhtvI5fDm","HOtsCfZBhMcfpGkl","fGAlOhYiQTXpSLjJ","5LKJdHrmV3PFmOoL","vnxBtSkiK0TSEoxe","ZE3qOCzQLXmS4Re3","GNmPNt6VxZQXDC86","OZpyrCURfKWdFrBm","ovxL5GYUczwFvWdu","3FXa0wEI9rDNYtUG","jvOGZT5vlXuOxxq1","r6jDgpbqekjBedoe","ZCcBJu3eGIJSgpUh","H2iy51R8SHwkwM60","5LOsfwdE2RSpcZ6Y","RySLQwp827A4ong9","rH7bNDUodLYgDLAd","TAQhNI3wKWNgJZTs","TNpjZhPmZVUjz2GD","5Hmg0bRgg559TvRp","fiv6HWsVp4afRzEW","ZO5ORLTL4q1mzGJg","v2QLsYidGexhycxV","cyylcEhNnA7J2zbU","1gSzGu9FOxlZbdey","e7160C73727VqMs8","mujfOqGZ74akX5of","TJEVMWMj4As0Hc1w","ycRs0E7E6SE4CfhL","d2yDyBCYQu0eI1S2","oH10bzAefKrD5cP2","tSceYkANGPEorZBO","ImDaSTIiWF3GWwzf","oyetXF0sC5VUN0Og","3B506Pr8zyfMzvsB","RucIesRjCtix7G3C","1zM1M4WKNXHcnySm","SbtU2m9k2VPYDqi2","hdvWhSJWvQ12qGti","gtD0RMa2jF85x1Qv","wnxeHFLKlYyJYuuR","miogguBVgrqlMZ0F","Ej1HSJxbCNlouTUM","Lt9MrtAr7P7SMJ6r","wAXkwRJUKgC7QgdU","flTOXuJjP5rUMCZp","1kxw8zx5mZcJdAOb","vr8IaLkpp0L9r6nr","OLtuniM39R9JGUUi","FGH1Zbh0e27Cffgr","NvAeZ459zMVzbHOX","g3h0sn0ZR5KknwP0","QTzvjVTVwdAZ4Iml","bL5Ip4wVLpqt2dwB","2tavCGBYJuFqBnUB","tlFtBaeLrnGWKmJQ","3zxAWecZgSugP8Q1","tzOYzjWTqODbU7N0","gSSVvhVhjwhPZPPT","PnwFJOkK1wRTsiEN","lZaLDAd0K8T8Odj8","Hor7z0fmjg6bQ8Pz","YvgxGE00C98VtSQM","kTgDR55KVJo8EGTz","9H7kKmsYBzpW8i0P","wfp9F9ZfARpqJ9dj","eJGWmtO06zIH6VfR","LIpqn9pqynzk6Ngx","fP1AbqHMwhksZBOW","IO96Lg3fQXwL16nH","5YhXexRUDT1XDvSJ","MWKukeE57oBpGIqu","5fkUwsKKoYSt8f1n","goUjXlrjTgFWctto","NyFtImyzmQ97Szsj","5pEOVO2DaQdt2bE1","ztRQAQGqKCorksRO","XnjYBaOqELgHFsh7","xr0qOfd93oDvx1q0","l5wO7rYVrqSAMzcQ","tdFP05W6aJvfUY1X","JaeSwJtTGu04oBn0","RmteG4JNkqQ7NvFW","K0Dw2msGIsxeLHQN","OH5dTB7pkpEyTzqV","N3r1Ag2L01aoCKud","3G9jVHquKKY5iPye","EZ6BdSkqyz8yTfvu","YAY3Z60V1t3Ryj9l","XGsJooP8AVbNsb5b","ilB7aw16NeJX3dyk","imVnMViKa08S7JFN","2IAaUaDGdFwAbb45","jX52axgy47lhAwFF","zDlPbraVnSe75btn","yoh6qEdurRwVFeIh","7ugYcl08BtxicnoS","96uFGXiVmjNNMNqm","sb7kF9oZfxtgkOkH","NbA4kPfTotwTvMaz","lbDLw5h6fmM7DkVg","4TpIkSno9YP1Q6Y9","xqQEN12ZYNoCKNjq","v4nwiN4zppf5J1SZ","7QILRBhroECb6v78","VQNTUkypeQ8iFlWr","RxZJhPFBUczLY7q5","ExR2AvCLpJ0MkBDh","ytNFySxt5LKobSam","CMETU9oHzkMgJ1EB","vY9cE1P82N6mNaro","YGkxylF0eR8oB75B","ZF8fBjfuHzha2emZ","23vm9in2v4adcN5w","nGLkmtwCUmxrv2mQ","gK22P6eqONji6R4Q","l9UffRZmMCLZxtrz","zniXplvKrzM13Msz","bk3hjVmbklxyOKwu","1ezJL9XxWkKJ8V3V","CwxgbagEjccI7K23","AVjrR7QaOrZrA34a","EFw1FwyXC0yulZo3","bU5GJDnjuCRtl7N1","MUXOpY2Wzx2KLbwv","hbgwJ2lWQWVsx3hJ","rj8a4R81L8mav0qH","sPCxqsogwPbJuaAT","Uw1icP3X4OLBdcQu","lglXXEZgtJWS7Cy7","ReTRnJKH6g8r3TvW","zODcwNbLF74JlyPQ","i2VuR0Jov00steTe","qQSEFrEoBdrcw59A","wFAE91bbE2yJFRGm","A0HG2AjI00I1zyHC","IEvCKCsQDQS0OZID","fsuD4LhO4pwBlABh","Olce5zVL9dnyZHXQ","x1kX1kB9OqNQ8fhl","m5RMzPRk64BPjkMz","FMBok0hCSI7mm3b6","wBgP5tp6JUFoAQv6","YhQyvX69CJuDcIyG","NCH86FiX0uUVsQv1","fKuF1ABdJJb8W97b","Y8Cnl5LdkeIqqhGm","48vj5Hsq6li4kHUJ","yux0bZOAzxynjyCi","9bX4wXYgAZ1nl6Nx","j24YFeU3APrv4hM7","6DYaGtwwNIJbqh4F","rTy3YsYCsruJO9t0","CFSDdBjpUMoWehiz","xgCldvcmfF9g7WRD","Pp3CnB772ysherrv","rpxPLUakXUshFNhD","rZbp7AkBM5Knvq3r","wtnfN2V4xndOr1Vz","HL4nu9kWlD6B2Mss","3WcdAbquDgFicK9Q","kMdM5FT2rGcNymt2","Iqh6epZe47t9cVpN","BTT1AqD6cVEDOkaG","1KjiTnHiYJjXfM89","bgDGJ6ygcB2NnhKS","whIIqR3BFGQpONgf","OfiXJOgiX9G6GCgL","1ee5eUPVUwIxQqHv","FpHUewdltk0Ldh1i","oxUrBSBV9GYrrFrP","WPhXvkQQZIrMSKQr","plSzz1IIm8TaHe8s","fYqhBS4BFFBgRnMJ","NdfDSKV8V1IaqrOq","s66s1Kfcz8kprsMw","pE5BdOLu7u4PVmbM","zZ8oLo4z4mbmi4pH","8iHkw56BZMlb782D","a590PnsQrDkOtYOK","sqQ4Q3bXTaPUDpU0","eLvhw1DtImLsYIMV","jluQGhjgPVtICKYB","KFuFOiRmSXxK72ct","teNX9FTATwKkVZ5A","tY2PDgx3JoGPyNZi","E2wXVcstSJC6xjDk","UtGs6jhffz12lcBJ","tuAbrP5uaSNJ0sy3","TKEGrdzgE024ZfYq","FphV210VfExv4IEA","zriupQI9TjxdwU3e","i3cL7o3j5nlxsjVR","d2qliQUKGsm5Rrqz","GdPijYK02Ahzqbk9","Rb1RXISoNfZtlmq9","drJgflshNPJvu2KX","fCRQrVlZYsfOUOgt","YKg2N4qXgOuKrD9B","qA8sKnphRZhBO3pt","HH3u4JiJ4XcSNlLu","Ae9IIPgupcBhq7sx","2D5x2dcoJiyusWTI","8OhPdwpsXX2klgdt","dva2Cy8zKnISmZnW","3u0QZDHimYqS1yQb","Eusp7FuqYkZp1TWj","Q0ABpSbtldf1Bk1Z","O0Huqx0tCegItLRB","eChWPxOiK8lz8Gvx","R2EF08UDcECtYZZP","OILx1i0jfE2ncv0B","hQGPv7nOcvz76cot","f9bD8yIi2c8rLbn3","izZBOjQUXu2lQzw3","ijuBB0eXJjDk7F3D","uQ3xPvbFVkO8880o","EP8R0JblZSmI1NPi","WAK1yb8naOWg3Ayi","sudwZRGPN6Am9F36","VMhcf5TbDrb4JvD1","v7vnaW3CEo2qyrMe","81JHNzO0jcw5ebaE","v7X7CNPNdGgguKLw","o8LpujmvVfndFD6k","1cFJfDtyRIBGrrnu","Ff4nyzQ5tPN8pzeQ","FofPSjicXOFvg3XI","CaSadwxfi7w8emTj","4PTzqyGYjseIJUkn","SPPB90dwtn159urn","f5AoViB9mzYZCBrE","glar0eUFOSJTRxrR","pyo7F7EfJVfdx94e","pfCLDSX22LI4PdvT","dhLGJpPfU2F1Nd7D","Vma1qNgeEFtqH3lM","sPckR90JHe36SOnX","cO21IhRtsa71gpAH","rv2fKgrWeOPIhywp","b0v5G7xEp8WAJZTc","400k2WPD99b6jCeM","80IW7mWi81BUhzaq","e4K2VctVXswFPWlF","fkQmuCgrGN6Dgn7q","iEB3vfMsHB9sKlou","q8FuBa4dckW8bzUy","mz1TJfFYD4cVEoow","flL2rxgOaFtPWAh4","EWezYtKbGwhvvJx7","mxl39xVJIvIZtwCA","QTRfq7Q4iChem6nT","9gX7VpL4AAYv7f5t","xpEWlxHMUM5eTHnc","496jgwVcnybHFYSO","08PrpXo0X8oc4A2l","Li3sHRMMVgw2lnYA","FHyNU5wVGMsnVT0q","Xmyy8yBEqPmIVNfl","1sjLO7j1y9QC89Db","Ahg0ZuQsMjBNtoYm","a6LxPLlqRMWAIPSV","3FBTXA6U11DNCS4P","UEheGRui8FnzToc6","CmnS2Z2hclaDLpXg","PR5ZtzowbS8lFptD","RXmNgaLsdBNHmPw0","Wl7Gz1dORqDsoxwI","w6OEEinHYqoPV12G","9xyHhMbf4T6X9e7S","8cToDQ1kCZXbcETN","65f6mivXYo0LTMmI","xpSWI417A6ZvWAza","44fjLUUy93UKC7Xs","k1hppeWTjbbvyA05","8GnR4wFoAgFlw2Na","s8ihUGcgBcBz8yH1","h3VBRAUjvn9kFI1A","c5sO5QaeIRXlKInU","0UJTpa1zyKNJNurJ","FevbgP2y1xKR3VZL","xYGWHKkEOaqIk9LR","w9R5va46Cjuuqy3d","8Jad2QJtIZOtTarg","lWlkYsCbnZXwDFHB","YcO6BkcyYzlzjYks","4yOszjaISw7QEyRi","t616YzoGcxa5xJOv","5VBvdEVtBvWcutba","ii5D0MPJIbBDtHUq","K4l7w69c974pWrEp","rIRZObxebV6V1Mq5","fPV42G8i8d7bRJv4","8hndjrTMvTRRiaXO","PD4AKL0rtdzvCBHU","ql0oIILTJn5hAr7U","8apDWxkSX6KacHSx","LfcgK27Rbfgx8dkH","DpPyTAMJwPdqd2g0","0CbxETn2nfvVxXJe","wXf6pDIsYygW9WAv","WF6BjRfV2QpoEoP4","kiN8U8uIQTjAoT78","rHaWx0B9TVTQpGkv","GzrUlppzOm8c82u6","YTM4HKwHKlBODTWY","xN0c0J0btgo0g7yL","eL7fDhfKKwxunH7d","zC40iSajE57iNJVx","siwTEb2WtcgH7NPu","BasYgUTmAbadoSQl","q6p6MJdwDz5hbj4f","bwWsY2g44kRdSDd8","0U2Iy81JkfPMAkt3","QOElecSU55mWJxHF","CFUjvZtSY2jUCdv0","5ujqac0G6rFeRNqY","EfGbDeZoDcSQLHru","VHq0PrZUd1Scr8rB","wqDWP02JSQQRyMS3","ZINfrToikjvuS3JJ","PrER8681LOm2kZl8","hCznDln8ATV22RS7","6aX9Wfz4dD04Nbt3","rQ1WccCJV60qaT1r","F5D0m1jtbaP5VNZk","xbY7fwOz61sg7d1H","1bzPzsEChc4vRtvC","QBiJqKy5LFrtkTBZ","Ni9nDauczSUEdoWN","7knsrf1SCMyQQNPJ","LrucZdh5g4vUFApg","HPhga2miHDRTvPo5","xohGYBSn6lmDWRog","xewylyR0b2OwN69X","ZRPnFQSB4ar31Rx9","21VOjbgU2kdgq6yW","sOUCvgUtQuScGtOx","4wGFTs7nk3AAprcq","Q76pkrx8k3qZhtJm","V4BHPsBxnIg1pdpp","6XgHfO7Qa3tYf07U","bp7lgMmNOfzLg6HC","LgFbj2NFUvhdJuvw","eYwBnXloJK21Miz9","w78P7NdFiTtZWnID","FoDVHRmLrJ3tH5td","bkdBD1PuaVbvciNW","atdFLLhyqa9gEDma","QxIEIIViUm8ZF0pH","jOguhnYtway4ynqN","0BwT3KtUSeQn8XQr","KffDjYTzwWTIF1Oe","mm7EF2PteaZfjRaW","bsd9DPq1KTBZ9LRM","BJefEtIP9OW4TNVA","pCX5A7xtJJ3flkA2","QBMyZLDWBBUJt5mM","RqojAaRgqtlQpTNb","qFyJsQSRBnKtrx7R","Y3fKpRES82fXpv80","DUGCLXKUncjuGlr9","iwVv8s2xvahzbt6u","m8VdwwRPjbG4P234","KWvegkOAUpGV5QnH","iiGjCP0muuE3mo6S","6Hn4lHRuCfL6TwXd","qJCFaIqZj0QzR75D","ztFXid3fp4M0mSBz","jrm5wtdGjjzpT2lw","OoS1mRFYDC0hecJ9","dLBh4LRYPThC6Mfi","adVHUj3e5YcMFc3E","s8OONA0HqCQ112qj","K5rvDqdHxbFsJgGs","3Qr9dpXCSuhE6RyZ","B9NVHDGjSCb2GNmZ","JXPQEgPEy7wmYHC0","efNTHGCkCWSQy9Kb","4yLN2yiONGpoD7s8","Qzc8f5vKG195Es8Q","176ZBtv5Yc6nEg3q","b7gX3R9xA7aGrVCu","yBQLFhoJIVhUv7yA","xQR4T41l2gRPa0ty","PHAyH0WWjOhETwwI","22AeVTRwPUwpo5LX","Q7IK8KfMDp6bOaWw","n2nBaqU90F9VMPan","apcYc3qhjHxmsFxk","YuvFdvvGddks33yA","BUcZ2O5bEx0aRdZG","877ozlPrgmycw7AY","EXUXJGBL3BpC9gUQ","WJhdZFxyDrTLalIM","j8JrMcfmKXLdJ0x1","HxVceNphvGcXxtz4","OveLe3Eh7gqkBXky","buCmYT3FuvkNq03o","STQgjKKpTJVzrXNj","nHuefqGzrr6rrjjt","Fp2DUgHryYcVVctS","v4pRH2btD8DNzYZo","RKwWjamBAh2rIfq9","3bMApggOluE7xzZc","b9tqeiwDd2LsqsN9","5qyNfwwJ5VtUGfnh","ajw6lqBv5KagMM9d","hNX0Bvcx9oQEEm1l","k3WnUJhJJdG2qBz5","LNOQb6DefX0IOW1R","RrETzBxIOvz5pbC9","y2nPsntZbwuOUOXc","jD1XDfdpRjJrfc8F","BYYoMef68UFLGcDB","wYeSd0RcgFUgCm6j","HoBOiEY6Y3fmEpcU","Ds7WZ9PhY4Gi8bRK","zIs70jcv8boquihS","GNn5KibpcwkGi31l","N4gyq29r2kRoFm50","NIoN7ditQcSvgLyo","HLS7sX6LVUht0Rk5","OW8DWeuBl29soozc","otriom27cd2dlMtW","kvA9CQYaxvF5FROm","8a3McBKMmbmtlAgW","jDb4xnLLn6bPdzHL","nYk5BrGJUB1zim89","9DZ62Vc0lKQHJoil","EOtZMmGXMEUyfyol","6re5StjCAFaf8d4u","TjmIv8eUOSppJiKa","5nNS7MT81O1I106b","c600jvMR9inXDsfy","ZLx1lhezBqrkPcQI","moTbZxiaVXyJ7cDc","vL7pphQGBezRPvTD","PO5KMLUParr86WiY","8tpHp21Flfsl6V4E","AM8ZLustvbIYp5cU","Kr81aDm3betRvUnq","wkcV7reHG2FE3B32","NtaQudCMfAeS8KxM","2L1X4Lx49k9saPvH","irhXtLcz1pC9v5xP","rcVdvDAof26vO275","dqqe1C8jbWZLdOo3","dD0bbe3wd9aNFqQx","kAvz6PYRP6Nsdkbn","JdCCXsfRf5vpbqSA","3SU3T3ns8R1PtH6I","XZMdVkidh8y3QsS4","naYO5MBaC6Jg7NKw","0BQB689tQZg1GGnv","ePJeJhERKCZtE7KX","7pPyBvVdZeYOVSHg","sM84TFNXfUGi4rTs","ASsJwHRvaty7j98x","0VMUCgBMrPUwulih","EZzt5sgSY7UmtVUe","uhLN2JX0yKv72JY4","TyF2VpAwRTp3P9XN","PFp56jXGIgnsa121","bPjDH5mBKqA4nAEN","Pv9RKPtyWO6GVEwF","ursirzgaW1N6XPjT","6RohN5UV8eh7EH8U","9ALY7VriN8KJtw0W","agVCjIP1kh60OCmE","ups5YqdvkE1rOkeR","v5HY1xqUaQT5iqsD","nFkEi1FMC2oBorU0","EFFOfD75dcZ0pyk8","2r6B0JmZUabvNSNM","z7YW5Jfun2lF2zbf","OqeO4JY1Rbx1Tbl8","22eughNVA1S8keEg","HqQ3BUimkHEJpn13","OoU8CgDGrQyJmoRx","TLcR7EGJYmH8IGrY","JHCZ8XH72Y2ylHLp","0K0L3FdFFpdQVgMk","dxrBTf3crMWFpSYM","WbB0DO9IdA1kGU0J","T5taL1XNyu1rt44L","oYf43Wf0wDmNr4iL","GVKCiEMo1PDNALah","1OAhXD8T2gsD3ZKC","lovOqXnhtv0CN3UW","E2IeqXB1wAkozOJr","47lbZzyHbntPBkrp","Cs0zlisXA8IFIqtu","u7MaJIGaYV9aQ1Rf","DZHIvzdupjMnUsbx","iQQYgh9IS1HGT98L","he5g3ENL04nyAjDu","ZvnOa58wUbS7xcGd","a97n3C7soOIpAQyE","syU4d2W2ybCVJppz","juupSeDEAKMAFGL7","eFAphbZCjhayaV2N","613cosaEf986L0eh","3ByTKCEL2hZ9DQo6","y6uMJjmK31O9wzYK","COovCWxamzVCFSLd","B4S1NIK2ZFk1NXSl","46Wc7ki85jpC0uLX","2dFTDdS2xAwYA8e9","pAUPzkFqEq5ldgNN","osvm11Rn4ap1E7wr","rkqtEhxrxeSyd9Ye","4QKYWhXyVzI90iFZ","ztpHDQnNyHDvPU81","SuRRj2IFzcZHMsao","svsFomYzeLBkRtYF","NfnreUN9h9Vak1NH","cJudaWMOgo1sciHA","v1kANlTZLOI7Xwsj","YlkRzGSzZX7TQkfJ","NjUDWHWEve6W82rE","vWlY4kb0Y9pTUoWi","iYRpgLjlRw15Z86g","A67uVd4kpO9w9XgI","TwKrw6IkM7CG2XMF","ZRQG0fY4RFZ2fipi","BSzA33gJeeLBldYY","6jCTbOG2MKgdWSxl","s7KUMhVKaohBbnzz","ZgVAmcfPBDpPGJEh","i2vsAbCeJsG8iiso","fffP5xNY0HofZG3c","FyvSO9Y73Nyc0AkQ","4RoW6PLTyGmohER1","9hISh0ZfMJUV6KxJ","edzhwvutZoLbuzKp","0EWwkijM5bUBSHcm","s40L4PsOeUUtYvwB","oyuBEbHiVeQCxsAM","8666NsDqlnOFhlsT","fi9elyumlkxQoygp","slT3B8iAmwadqrlz","wztiU5kCeazklWm7","7jk5bg02ho2tGpL7","F1uNuBUECDcVuBB9","YtWHU7ZyfFuUIYLK","HZWFp0RIHPE6sYSM","i98EH0ieti9t1BUI","gvEA8SQxI0hPmRuD","dTGJeIOrfoHf56lJ","vpkMnP7V85MFmYER","ZKSUzE6DbO4lwRgv","v6HpK3NsyEwL3dmV","Atm7aFy0SFrNaMv2","QIhJlVxtf20f36oo","3vcpbfnEEYCdQ3YD","3wuvJtEsHAKb9tcF","JP0WKWh2d6eN04yb","pRlzIed9PopSQxDN","BOskw8g4cTYIvGKV","YlMi6i0wvZdJo5kz","UzuyVmDO0ifnyyNm","AaFo5Yb9f8UKCvAG","cp8onurzlRoMzTbm","qi61jp9E54UVaLcr","ebsWv5lZRXYk2nlU","1UVRPuzlgowoZYps","2GelFUdINw58LcTg","S5OTSXwQEUvzIBRA","wXKiB5gib20YVcfk","cBePy1qCDC97D60t","9RqeDQmoKNsOMNf2","B2PVZtzUO5toPLC0","fvr8uBhifWlZRaFA","5ciIQ1wHuggu5Z8f","KPUdCYxzoQ565x0X","euafdivOLhuGOTSN","jUrfFDwof6wOuJa2","0uKZmoShgmPdag8T","Csc9RuGCSNXPLrvP","rPEvrXdUhD056RKy","EBmmeoOkFfGLPrCE","KmlvAJjtQXZGokyd","6Y54IQpS7u4ZUDue","4yY9eLcB2Wjb8wu0","rg2HQt1wsM8fMfIB","KyhX6bbEavJxMufL","KpDwf6HDEARkxiqz","nD5ZMvncROMZo8LO","KjlTCno4QhlmGp1K","BY9KrmM9dEsmOV6H","6x0YUzpEEzWejXPr","8PH1rlSUQM9dZdw9","usTwF2KygwNjJjKL","dsu0FrY98Txk2iQ5","WREKZC3iUeEGpBbQ","gyGASIFWpv9xVWlm","H0umbpCSlJM7vbvQ","NS4wft3wTuONhqwS","Lq7d59Dn7HEZziOG","NIinv0gF9H3wLiB5","nGdx5QI1iE3FXgxt","fxX55hzy0QjPEedp","zvMk0dOZgNDxClQ5","cbVEA2ZcfZGENHMW","0WjukiYFhe2sDYC1","IMiVE9qsFXsYk9BD","5ufdVEmMlCvmlcot","0ihX0SKaXVikXoE7","Gx9sSvXyULW8Ramn","qGzSYnncPpvVWjW5","rcVIId0Dv7bC6cDq","bXn5brkeAjrQngsd","vgAFL1Y7dQcWcFBH","qESAle0qYneKKpiW","E3C9w8T1EBi4ETtf","T7jj6qsZmx5RXfoy","urdWi9KLg16I7Iqt","xDXhXsNTHqxlygdE","oN4gP0y4E1b16SpY","qZD9pIEMUMDRytYw","rO5H0CtNFX7j43wf","F40NFPsL3WNG94mI","CMTS5UaO4oUgbW5a","9uGPrCkp8Sxz0YMr","8uC4xPodIOkiywVx","yELhZ3F2rkVpyOJZ","HCw2yt1I3W82tfEZ","z9QOMIVyokIU930U","ZIQNTPiVfZRSUGrt","otgisgvkJGf0aXt3","qZ6EL2GDY3c9Ej6y","bsQ8sOZNOU6tLZHa","Q4d1yJuyq9DdtrIo","hEd4G5gN9yJ1ikAN","yDlIB2RC3BvLMtgk","Ns1HiNXx37bhXjZr","NfJVJlqOQRWRHCrB","pXJfrdgE2j2sR31x","SCKdnR6X82Q4lh92","ffHPXvDQdBMjjXkt","HvPg7SOmUNGrqmyk","S17or85lfGX5CFji","t6543TgDHt3y8yZr","y1c2awLaE1xbBR6A","7SgWkeWqaOdGk8JK","oACWUmqeSd3pycnv","xvxMrWxfB9762xBN","MsIy2yJLjVoWEGYI","OuBaZTCmbWX7Oi2x","dQOWqeVNfltIsaiy","xtQTqgBmGV0fJpNK","1xv5bnce8KWGEDta","OV7YI2lE8bswDzht","4HROCzbZAkMYRAUy","yapPZkc9a2Ak54Dj","62iiPJdRY740ned6","h3UfHspolLdIrgDE","3hJmSK4Bs9y2uK2g","jzzrBmqJFWmbvoSh","xnxDL08liWFXcxNM","XYTACJAbfGqIzcdd","gXT6ufdIseRBOL4O","sufoSgSqc7ZZHL2f","fCrxNrWftWC48tvV","8CY0LZuBrxZxkp3c","K4B2oRqy3RsA89UQ","gkgBrbmSmbLoY69z","D5cRtTxrUnlBwA35","UudgnmFHT4I4r6PG","zBuAVBlgxazcrSle","8VyHAmARiCgE8Whv","5VWqwn1TZuSsYzcj","5KlFXypa6mdlAXZl","2oqhcH7cFSrDQ5Jf","InbzLeXARHJzHEUU","Wj0Hf9ekAHvFq3Gu","BlegTcgKfdGilrjO","YNXlwJqEWMpOxnKE","tm1WboevayOHOPDQ","m2gvLhaIkpJk9CYz","bTuxAHI4sdlPiQcy","u7cZlO0FQ3Cl5uEf","Yayh2nW8V1CBrvIZ","URd1qZY8rg8m2BJ0","1V0qamdriHCTBJ7d","TgVueWil7McBvrWW","MBRmt4vUszz6fncG","3mKCCCMZuux8ZPCK","qIHcSnb38x5LY7vI","0h1GarU2PozL9Tz0","esTMLBzMK9rOWcKB","XYeFNqOQ7fBcTFp3","1Y0cHFgWFXnuYu1k","NnV9HtyKePZiZYh8","vG3W6i3etTHhbDd6","4fcyMH0HWMUwIn8N","6tvW8lnMyu9M1WL5","8kOo4p7qJ5r7PD7j","jbnds0vvszY2Q8iH","m6X0lrCEhzZhQryb","7yfEXNtReOrUgs7j","yvtqT3LgpBlZQjrQ","K0cG9WQYz8COR0fi","mmk9Q4nCYvHLCUwR","yZ3vNQ5U3v9UrKrg","HnFSHTmXvLIuCfe3","BxiLj0DRSFSx3X1l","Du8Q9PvUNAFKfwgG","SV22bAjnnb7pmxDg","vRjpljXeXVzXhNYR","3rsMU5swhC4nniCe","hOteOrxU9n3UOivV","kVIWf6y273kgF7jI","CGjCGBUQZWbQlRT4","weVuE9cX106tmesp","zmanNXoUGuajhSTa","86DYXEd8bsVRhRgl","b5MMDgTdbVqnzl9g","DOvnFNfe00i9dQmw","AaavZUHIhbnQeoMi","QAiHhIBGABKVnR8f","XnxWZktkQsdhaOah","j3t1Rsb8qg3XQRa2","fCh4g3wTeWlLGl1O","jcHEkaCzLFOM3L1Z","xJqyEG7OlZ3BlqqV","aZXcgDnn4Nn54APx","BzSYlYYCcMDkEbq9","pE04BnbEAoR0dTQD","6cR6Pim4JOCBiGVO","bkEYApSRyHKT7Lof","mKwEc5xyzZ2iDFNg","Ag5IEcAipvqPbUlE","YQyCRMWQVkTJAVKi","jsY28zxZPo2WttRp","cvZuPeSCLulaIzIR","Rpb8nDsLLa3g2NRf","9s6kORd0FOp4jKvD","eL7TLXo5RR1XoU12","7cmZpaGO1ERNg822","Igfq1f6ZhBDt1KvU","SYbaneedvs40e3ee","J11duso3twY0XbZo","yTKZucOyk7OorZW0","Gn9woKOMvVE9p1db","HJ0jXNHLjdz7atdv","VEUi6msLITQ65k92","hzI8Wie0pfGbnSzn","1joRJat6O1Z7M8Up","6XJ1ezcXvVL2a9O3","1RFYYfdxullBoa93","GVZfsO7sxd30TczJ","OyJVLxeRBkjinx2W","I2YEOxaWooE3nxy9","voErxmfvKCHww6qZ","F6yzHu4EIzSbFsvC","SXYM3uNUiUdTbo5f","1eEcgL7Vk7J8k53l","fyA0GnuF5obgumbA","8JebkAhZMovyxuMP","aYLEKVSXIYnpgJdv","uHCk5358rSggL0br","CMj5DRg2eJpMnE41","IO0id4fkGsgjHIU5","SHCxHpGoBSMlkPT8","WcLGmM7WV4TtcF76","lrgoC5amGANxdF8M","dheBS8A2qFMfbYUV","UzLwJOz4basnFEO1","UAmmt4hyXYdlJSOs","YVpA5vTmuroKeXqF","wkDRrkEVLp6ypwIK","OgPef9DXtHSnU1jV","fHSh9Bvq8gGWfF29","ObFppn9O50DmIEYi","5Ftr9EVEJ5tTytO2","vchnl4l96Z1loPuX","NqYIGGISmqp433on","wuOqcQCa4DQ4XQ5U","Wl0Q3Wj4eVDUinQ5","5UDqHYd3tauSMzxd","t9j3JNMaC26g0Th2","pqbUdg3WxXn05Ra8","lNTMJwkxiYBPyhUi","fSCJahQmr8kNKZlZ","ke4fHg75acuEvGS0","6OFiWg7P17v3W77d","z4Kj0Xec9nnNsWbP","eRCPGg4rulyBfkeY","ZI8QbdRpRnmHMyYy","8lrLqLpLGnB4FGQf","FkC0vNwBcsm28zPI","8DGL4ZtA7Acl344y","NDuxG0GS2AKozM17","PPze3xyGuT3YVXXd","9Tm7oIt047ukG7iJ","ei74xUAdzknZgk8F","6lfvrQMmwzaXMBIz","JF1AksDPhVg8UDBX","fbmbVFZo5ilJqJ3d","W7vd3NOsK6chn5SY","gyEgENlhOjOTfspk","Oj7SABet1Z37a2sy","6kC74JiR975Ll2IP","Mi27pmzo5lPLIuIB","W51vO4VX3bQ25zmt","eMfdQdWl7xE0ZSPw","6U8EFKnNUwB8dURH","noNQHrvnxQ7A1H0u","zT19jecwddxGf7pR","yjl1Te5i1ql5qTbb","oXXitG2e2KhlZ8J3","NS7nnAixaDbHQ7UM","8wxrjycvYRAnTXME","csjNgxLQ8b6R8057","VfooBVFYGiSjDMGB","nMSQ8e9wAhFUcBZA","0opk2cRV97mhJbpB","n8oYFUtpxlXw0DyY","FhpSM1IahbJ9eON3","Fc9ISbuDc4lPmtSO","VFaSGO8ACR22AQQz","mTONiIhusyKaIvuS","L6lYqxKlnv7JQEpb","kK3e7Kevx6YYjNQp","REO6D4mISSdWXNke","kS0yF3QMw3NHnwZT","p8yQ7OLl3sxETneQ","NtJaDNbH47mRL5b6","bKhDOzXQwzPFeJWp","5mpuZLRLMUnGkbZJ","h5XwIfXIFT5KRKlN","gT6kOUTu4coYtIDz","UGLTj5BdhV8GKOtw","LFXJjyMlEBeftt5Q","7NMLzTXSXBoFmlHB","04p56pO4GnR6HiFc","csk1OOV6spIZq8ld","9yXeX81nfvVvjCnC","fKQhzjGqBCznVwng","HcRv3eVNitjDtzI8","TkqtIyms1nn0XCPS","WuA2mVNaeFBPmYtr","V8US2huRoEy2IoeL","NfiDBQ3yk5axto9Z","mxfDeqRDdbKvbPbZ","GI9prU1PmNfiXrmn","h24ZMbgqzxoW8Bmh","lZgoIuOKaZn6EPSi","pxuBksaEe6jxPCJZ","VK57ojdgiYjCmdK0","nQLIsHtuZl8UtK51","Xw0RsVzBMdYqe5la","TKqQrsh9gshnNzN0","4fqEsmbmbGFt2zaX","PlLBWAe7T73XGp5A","JoDO4UqTTN4fvBed","YGNumvF5d4Ffk3iX","tIFaPtKnDIa4914t","TSQH23xJE4DT9haF","SfJ6oNAvFvjkVSrP","M6T3GPR8SEcMFFN1","vfiH5p4CeABT2auZ","L3eoVdaqgZlVDWTz","CbZhli0uvdc6GvSs","Oq3jmx1wpV7XrjV6","oIDnShAIdJvkILE5","xhHu4g4SRGr5Jm8C","8yrZNQB784CqjH6d","RDO2rcPnsosyV35d","RdKKUQ3fKSDHddnw","cUX4ZaaZGBrf8UD2","jXmSy2vaKNNbSq5x","g7dBWkUyetsLtEyP","cls6psQwnyuaCUKb","sRgKTgJX4c7OjpVp","xfwVnZsTK8RBQAwi","T0N7Inll21kedE2l","Wb4Cw5wJwal2dnVF","GgCDb28E36hF26fQ","md5aPXIha5XG0q92","10v7WIChGkToixYV","fd9bv5LWBdS6xXZN","WdcWoCorWbaufzl5","SUpTGjXzKe8vv1tB","noVGid0K1XEFPXYm","HyoGGqS7ngTWg5j3","I7i2k7K7ZJrnNmcd","QCFSZGfdHSizJBRF","WLR7QDRoNSSDN0pW","azNxcWHQQNghDH4q","p0xRZqnKmYKifHes","2j0LSkb1JSXlilDL","2OPYU7waI1RFkhQv","JSUk0XIjiiwbGtte","LJv1KTMvGvVvvqBn","qzCVorGqRGLWuPib","ZaZaY7r9o14B5EJo","3QF3um145HhXbkMk","Y0RCexoWS7vp0mLW","cOJvVtF1LEYLNLI8","8GLcVgS5Nr3wHpCw","6zlS3dEvSZIWpdLH","PypWBPPm0n7Uz6sP","2yz4uwgjqIX9WheJ","eB4FARI2W2tLp05A","zdSDJA5Uv0vOazCC","mfUXeAwduG1FTgv0","50n6fYkkrvaMl1fO","XlJ5iydBelkePZet","sVWIle9BBVa7TEM2","mV7rIgO51nH4kRS5","NLZtsqfysMWe0OQS","tK3rasOuAZKqhTip","xNkjNINoBQ0EnVXE","7uwg5meJ1AEf1g3e","DsClrqYbRYtIYbXy","b7iqDCgvu5cmQQkw","ffiFStEMlGl9AnMh","XumI7ai7nDJTQBMV","m5UXhEZ35P8hwIqH","TF86gESwBbmkcsjE","61M3AEJJ5LkYT850","4lTQCoaOiZx9zzzK","UUItNS0BotsldaKq","Ep7ypSp5lF5WmiYo","XvYieWR88MYv9g1J","bmyK34GcYUcsk1Qx","T3n3CqgBsUJouSaR","FQJ0G8LDAC5OC7cb","N6zUmNX9h9YNmR9q","XaTprkUKdYSRUCJC","KVWJZACNLP1b0G5O","MfLFwFQs6P7P50U1","JrnwRMgA167MOF4D","87GkhawyOjrc2op5","M1NopkZQwoN29tDA","d9IzvbJ2BJ4PCUpS","ZL0ux0ptMcbpZzBb","IYE1xd5Q1oJUblL4","sanW3LYRdfXawFro","GTHf80BBaJ1UgWgE","NgfIaaDVLozwNpJl","6QwNMwA5MbLU3xG8","lnNv7x2hC1y0nwb3","3zBRUb4nd1tP31J4","dLcsweEo08tJiPZn","rDqEPJ8RDSSDQO2j","ZOlBrAWRtBAL7Id7","f6PUDlHgu925jKWe","PGs56t8duCu7sdO6","mGFIm2dFqtnZDnGX","kMKIXxVdvh6cCNjW","S7DyFfoJkn2TwhKu","9peJzhBeDhweaXgx","liI4FNB3IpRXd4m7","Qc0YC34XImDMBC07","U6j2MtFB2ifxeWag","sPIPAI2cT8QSPein","ImoONmZ4xNqhEvcd","zXmIf8f5JErJ1VJK","XXdqBmf7T0OojGVf","jp3WoxOupUId9XEj","p1k48mxt0R4XdvX1","WLvb9tDkPOezkJ0K","KtevR3iBYrpcbSZX","vHiBeCYhs9nwjl6E","bSCwN37Ne7PMIOLS","5QVFAy5VVzusWkXN","JM1tEuW9DSyK5Zz3","eEtFzv5YqrJXtSfG","FVAt7g2aSscG6rw0","aB2LASTA7DBxbQcY","mKAIvyWqvKGfNZN6","6zCmF5LkBabx30tU","d6s0I2G0HViYmlGq","PD5SHbylhAr1DoWT","zNt0X2kamp8jEexC","zY24cqSL1gHfjOoQ","0hSbzVolQyWZsguY","vqfziwtR0RundSyr","fyhKxtYu5osPZ18X","NSeLMvaxzfRFqzkB","pAa2bTHdNXcjTP4w","3tGD0AIT59sbUYdb","he6olpvixVns7NnR","sbaI0Wp3i6Es1Mi2","1VH9bKr4tU5ms8Rf","JkzWoKcmhmQIXqzf","ZnIZ481sFwAmTMQy","6ZDt5VwrbEG8GwVL","nL4WsMd5xGDL98wL","b1FcMyr8eHWPjti8","Y9MZc57j4aIxqlg6","LBDGUD1PsckZPZDl","flByBoOxqK2ZnqjR","0q4Bl5sdCJDDjQic","HW61QCxmVucYTcoq","aVcQZZaNmQ4Bx2Bt","tzjj4BYDgJGFuCZs","V0EKKYViYiNhkIJp","SdaORh3OZmaU0jp2","hvAKHMSEOFlC3Lrb","ua9BQSw25fhi9qit","XwJPQYiU0vka7gnS","DLaAY1p53MalHCWd","6zgd9QBgECfsoyd2","iVvxjf2ZVsXmPy4d","I9WjM2ooXXKQ4m3I","PIcoIwxhmxPXuO2V","yBsJxmCB81ThV2b6","7fpQzleyXzxcqhrL","biMR52qUhFkvI4ev","YqdLXVysJg68osXP","4ReKe6KHssHHO9Cx","M0fOPnlycQhl3cCe","OBLuxtWogdXVpWvY","lLN6ErWJAJwQUnwq","DpcdIv7tIMP0qHJ0","gFDTlk2eOokArWur","9TrrZ7aBhcEXrT9u","HzGIpKODswzR6klh","eluiMSYt88H2o1va","QA5seywnsmYmK7f2","YbqMK4mfS4qYu8wP","Ia0k1zuW1fR5X24T","K8aNdXdVO5kdMAc9","FaaJldkPHmqjnnXJ","1rDxYZt0sheVVTp8","ZtzZbnj1LiElJOmc","NGmWQ8ZH8leqNlCX","W3Duedyq3jyq6UJS","gZaVtMzFTOEZgNJR","UAeygrKCWkDJvMWO","3dI6AnLD6vU9H0jX","iaMkVtgyzxi4BUa2","895gXzuNkID29fUK","Cq4If3YVjNP70aio","qbhZWoQ6zXvOvOP0","3KE9asThvm8RJZ7Q","XewlkdZmtTij0KeV","WyzThQeNCCfQyS5X","iR0Oq5ZtUWsxkHte","kclZXTo4gIvZl0ww","pSqBpV6L6rCTsE14","ZM5qJfbJRI595qf1","9eQ1nEm2hjP3If7F","iKI6nMiSiSA6y5K7","LuLCPJOMEsDTBHB2","nWduPZrfkT6e3IVh","HbzV2tedNVGRKzYf","zaLjOFtQsExSIaBf","sG1KpiQLm5uzIRmm","rsN0Zuhse265uM6H","DiQfMNftii6T8mA7","CxARnmFS6HEKQFlI","0GKEpkCkonXK6NSP","gW2tLPaYRrkxhtfv","30HCK9WsHyJjZAJI","qTgZcypmybRVq2Cp","p0TFJfOWLGUvyJB1","ukL5QyEtmmEF0Z6J","pvfIObwHg9CagHUB","d1rNjaQInh5BnO4Y","SH7T5kkv4bXxALCG","7kl9P1ZUNFA0Su9g","H5C170QCNIxGaGsJ","Vlfy2DWGLp5dCs3f","KouAxHheOtBOHSdn","d16ebVC8pkWPoMp5","Dyh4mEUTLypfgox3","NGVrn1IYqu7Puf4H","lwHzgF0uv9J6YQhx","YHD9UbHHQo0Pg18h","4Zk6xsKQi4YMY3Mf","Nna8EUyXigfGbtey","pUgiBnUJFVXn09cf","VABbFR3iX5FnflwB","IN1xbxNXy957bvCN","el0B6xUaRRGopx7n","QdvlL9W1VPWbpwgs","wvv7n3Wq1bIhpm1f","H6Nlw4a6CYsOrSIA","BMZW45SoXK4b3CRi","NHi1OJr2KbaIv57g","0387S7lOfHmllIpI","APNAxl5jtFMm8z08","jPzyQdw7J57UDkdJ","9fmQHKL7iHVvea5g","RoGTk9P9rl8U44Cz","1RfukLYhnalsMfDA","ItqFkO8jMoUS9hzp","a2ZiCp8eYuDP3Gqp","AOW7JHRkXvlBdk5F","cyWNOc4KV8JSGavr","vfnRHLXF6yxPXuVG","eUE7FG3cp4VH1hXF","2t8yjpkndv2HYaml","NJkjI6S0auntWSmS","PqqU0v2KAbebw7YG","5YElSQnBYY3O1BQb","s4wsa45WpKeqfVa0","y07C6x4gi91wH5a6","YSEiOjmY92hSsi2I","1zgQUWEyMESC52lA","j7oY3cpEGag6Elpf","ajmXMRcwHxrgleY9","s3tVwroZsqtD3VAE","SwrMNZ2AoS86lPw8","EVWhRyyvM51N0SkZ","iGwquHikNDpJ3HIr","e1VFdaFNRERSbQn1","338uAUJrZEFgE4R4","3rFgSCB6bZ4BvGiv","gvzoOqv27NPsn4E1","8Y2UDPOkZtazKALr","ijF1UqLnsGBvIIiy","LLQmu1Q7mTSMsyzI","a0DeD9zWHaQc7Y00","QeLOuQgw728EczUt","xZV5rErGSYVjJdoj","Gf4HCZbjAVKjlf3d","mOFFbYXv2KS2cbn1","rVr1OcpnHXg72Kl0","JvjJkS1IltUSqaLB","tvIaesiKKh6zeGYw","mTX0JL01Fcp4Alnr","8zCEQEE1yxf7RuCw","PhgAMh72cBC4Br0U","4WZ20SaHq441KEy7","jsOzMfl5kaiA0u3l","AHETEF2LWaa9SMGv","S7zanSDmGgj6yV0a","KHUWoRZWEM1emTA4","PXLnmMLcbIWWUTIB","B9yZj23h8mlLQKtH","jCehMNCupF0Qip8N","rPnAY4gNoWDS4PDl","lc1XVNYoPL03Jtnf","c3mq2YPp8mX0TDEK","DwzsFN3JvrfL6zce","DWmsvzHpw7VMnrca","Cv6Rgw7mXLhIwy3R","CjKJyuAqKmGcQXvv","N2AW86qoI0e9TmEn","9qM20wJZs0XJzYMs","MOO9WkB7kHBETwCn","6VqMDNewSg0wmE92","m4SuwloEgN0qfvXF","S0KAXq9gjUkASB1K","pRClhhRqesT3JunD","fBQxk0gjtwM25G1E","yJHU9OVCRM6BHR4f","Ttk3CqF3bchka9P6","VqvXBCc4f7FsFGrz","hx9k6VSjU79DqN75","wcyHwETIFH5PViso","KuHhZIY0Xb1MPW1N","Ws0g6oJCFKA12FEk","5OnUMgAb4or9YPcY","cmuKpvUDX9LvUGWC","fogTBYOio6wz6RwQ","XGfuMr0rQkmpGTRn","LZIIUjNsRLHsbQLA","czv0acMTVJ8w4Zqk","qx7E2304KMcmFnmZ","dyFtQwnTOLXcd2Ut","fKG2tHyJNwUK9ko7","e3cpbKZuakIwrHRf","ZyoiI5QJ00Czrsmd","MQeUorNXgXMVeGcO","5PLCoIEWNu79Xsi8","mfFOwmyRGkwApLUX","NCkrWhQ6jttNnaol","zUyFTF3sqx8c7BBK","y8qBl2wIKf4LkdCg","G3ruQ1pGWTeJF5tu","c7L6aVdAMKQpVQky","KXp5ZNThyvU4zMEI","EyLsYgv8fzW52QS0","GmAGKc6Sl9G2AhhU","TMSme8i4BRYGtE57","EqlBoGESsftfBtVB","U9tX9R4ey2uH9qpj","diXJKXzmFoyvSsfx","f01LWhKou0GPp7La","3o2Wb1gOUc9St0zs","9QT1iCzjeLDIkgGb","FjekNpSpocKfnGEt","Nk7vtR7toNrbzysi","3g5nF7c5KjHMDyi2","8QzKNrhllS9K9IPi","n3V6pwbWsF8FLaeg","Xr33Y9XyJ7sjziL2","J6Jvip3TiLyKiO0q","0APbXkjVgIh17Nb5","BZGbj3s9TUrPWLAk","3ilyKSHfci5FiDcb","07XEgIfO2AE90382","NecEFcng2nSSyL8l","pPv0EuEjEEYGWyzb","DIBvm7k85wxu1uK5","DPMMZauR2EDk0HrF","FJP0cBgxUmHMksQL","5IhwKJACW3xh4aH2","328lUBOV7FHMRuW4","51wxqYIWGOzU2e4n","uKbsfmgp9RNeUMgJ","faU8JeuVJQtp3sPc","kjZ7Xdi5QZnoOpcc","G0Vv2evPt2K16GhE","7Pb7Cj7B6d4GRR4b","zXPcYrPuPER5585P","ULdedw7xp5jXsj6e","U1HrwlRbtt0A2ZWL","ta5dDncmHuOebO42","TxnMw9yud9WPOMUf","DkN7tIN4A8FgqH6p","rNKVfo4WYPbbS3PO","VGuwdt6QmeHlQq4d","8IFXvVIF0eL0H3wU","bUXWHvMMYDRLqvFj","yEhd55ts8uLk1TNE","CfaMuDKFzDYCb2LX","65TypORCfBmuQVjz","gzW6oZZ74WVe3hPF","MWvTLupnBmcLcMdO","L2OjWKQQLSBtihgt","FJLwhPCSCHLuvRGd","HfJJROfPW3j45buS","NtZvaDEj5a8XFJhE","SBmlHhNQhsBWskes","JS5LAnH3nEEnigJf","87PrVGB35aFjwUZR","v9gfSxwyZKIeM9o0","dQZYmimSciSYOn9x","ojlYXkdoEhIzpfrE","qYqSkvatwZ8VYR9u","NQ3E0suOIhvkVY4n","YViIT6aSxVzovemo","3lgheN6nHYmrUXVY","gGJtMACUVxjlwzoA","VvmHuXf1KFygy6ga","HsxgMg3XyKSNVEjv","0ZKavwhH4GQyIJVx","HgSDpBcsAM5bLRsT","sXFn8FHnDdQW6GoK","lJQGfL0dvSvonU7R","IhXSf0tL8G5rmiCy","ECOwA3vNYCbIHpqQ","drLQYmMkRzAYyQhu","SQMPfL0pEg5MZP4z","C07SCecSMOmJ2ktc","bCVQyXmRcfsBKNwH","Jav257UQynhgHvXr","W1to8IDHhWPVCCTB","chETk1m1lZujeeQs","AHYxfMvzRoNvJmh9","Yvnm8lb2RNvI2xBA","U5ukhAd5VMOatVRf","DT46afsyLTEfg46f","nppSq8082mdQEQyC","mOhvRFsjyzQMnqQq","799BxJG6B1BhZNSu","ejxsm9EBtzVBy8O3","N1kd1kqko0feWrpS","avvpSyzI5l0THvSy","9t1KitpJpklHn5di","Clhvp02GTDHUXrAo","DWS50bmjS79fdFmM","8jlhv9qoZapLl09R","SCXdy6mGfjSRZV7S","uDp49cQiYWOalfpT","r7DIzt4uwoiIRLZl","Jpo9QVUxh2TougYa","rWAVmBO8hPMdU3TE","kSRLWBzE94OXAGLv","7lLC6zuhLb3zkJK0","aXfbLxWrplcSG5wF","wO5uYjmz3zfQWfDY","AZQDF4baDat5EJvO","kiHxp5DnRyEnFsb6","lBEhLbsHqEHpsvCO","dlrKl66LhQ99JR8Q","qk6hWLSmlbk4wmwS","RHYnLzAN62RXEjBL","YIvRYKdmdFeosw4i","AWVtpGwt9mH4t7uF","PMVyeXCGVr2QWXXa","wtnv8EnLYU6d8IaO","qfJebRIAuRko2jXI","ssZU98l6IeezZIWg","rwBZx8Pnls6NVTLO","G3BKjYNscsAyySMy","A3ETeVEUHKNtyNxo","ajJpyx0PN4rjYq3O","ECWWOqVpy2t982oj","5XmDyrMa52N8XIQT","I7JirHAgvLt7ZymA","Y7lfROio1y4mGqh1","XVMxk3eJ6m8kvBi1","27EQ740EnhYOrTzL","vsgcOuSJ9CYWs9MJ","LhCeuSWnjHAc2Fwp","5h335PU6N8Jq0FNK","B8h1H3EaVpOcot8M","HQvhhJA9MWJjfXLG","EUAZvc5Oez7O1oT1","g85C1i8dwZEd1Vkk","6e19kgJIc6mkxW01","vRkyoGCvOGLkAct9","GAQgSyaXROsHFMbO","pYuYvpf0EloLImkQ","05QNxodjlGnHgN8b","PR0oDOHuFXLUQpq9","HXUSBaTL1imaHCJK","zRRzQVWqDZn6YlMR","Hup2k02zNdE9rJY3","fdKzMALdgvrUP4uO","qbQ113fJAGui3NuZ","t4RHuPhljVtLsOzm","xTsq74q12FCeOJB8","paKBxhbcc5dx8nYR","8Y9Cj39wL6MAtPr5","vLGvJPurHoOTRDGG","RivQRGLLHmt3xLeu","uBmUZzQooHLhqL3D","fdtR10rr2Igm8Fip","cobumdZ8XbnFVKWv","PfcmCwOsd7iXR43U","X4Kl1IxlGrB7Zinb","Ki62o6AnSKS3MPvP","70dfTVmwUgsPNyxV","HEkDcB86DeCVSy3f","ZPCfT1YPso6emptR","c74z1UDNFSkCmIRl","vKU9YlGpbK6mz3k2","W7VU47T6V7dcCVdk","l5u3TZJLNi4O1gYR","8NiMdsInsvPRKcaH","79sotVtl6RWFh6nw","Q3f35zH10GWHWu0V","khKTAeSPTatK0fyE","dhXpz4BD2K7E9aVr","Qi0tV7t0gWekGf4H","So0KnhmnWZzolgNO","5qoRvwrzAEvcO41i","RrA7An2aqMDAhwod","GO7H1SoMXjFn3O7O","SA0DjM5MtUHHsQQd","L9hiQJnbBjEX2hrc","rmDXKDqCis4FrIEr","A3PwcSH9giyg0E4b","OPFaF1IGqDB1gy2h","02VqiHh06I3fyvfW","QC8JHJLc8nGDOThb","dA4A1qLeSwYilUk7","He27HD6tNHZOigVo","Rmbd6TViIwvxRhno","tPwRhQ4Nh8DYwgUZ","6s3smUsW0IACfu1A","BSOUrgZYFre0urs0","bLdKrfq0H09wN4Dv","BmAZTL8vgK1sXRJO","Fc2RlPW8TZp3AKjM","emgmc44hOpzKLgd3","CTq4mU0w1eZlzktC","0R00PNrClBoKb3je","IuY7mI0aa4JhY5vV","MBGI9RIlkwWPTO8h","Na3xxgFwBHlABohI","SSXfXpshONXBfs2I","eYGFFbhj8fp7UJgt","4tLOX21fAMYdCvIF","JM5cudCF0UlYVEeG","v4EywmCM7XbJBmCX","s4Tb8rlk97ZiQRGY","qydmj7AiiwyfpQmA","uBonZtcvn8rTP0kT","qFGji5NpGCS7d8y2","J0OUj83Q180NeGrb","lYnHHIusNy7RkoXb","XTTdYQW9n8xJOBEO","KwOV3m6WhIgciN53","PBNlaCIZc2hdfyDP","m8oC4wj6njnZ8MOa","Gw7He9rlqfv9XHgh","IZPThzDFOznxekcI","wx1m5NKCPUeeFBtr","z9gOXWqgFvufUlFc","mFthIJefeC4L9shd","CFvKSQwMfhsU1fIq","O6UaB4mzASZlEUts","PGvwtXqKdAlvS268","JBGTWcWwW0bdPd0R","yomgJcJkeCjLG9hC","DvpJiMS30w7mG1pC","NSDnJXmBbarux8z8","OjXJayxQDtsDdPs6","MqCKAFkLcclmAlOn","m6mOHoQHSqguP3cZ","qk1MAN2gpYEQ32JW","NP0t1tPeOFpsKQwT","rxguzVUzXtR2omz4","PqZOD60wSdz9XK8Z","nLPPRAPXfpMjNWPD","QrxZEm5PqDR2sACE","so07wLIFa50ud27f","a7kytQKDx9MRDDeQ","hWL456RysDloSYDN","GhPMCmcUCkzED6dn","yKIFXf8i0eLmbtq4","oe0XLb6jiq1kanp9","gFf7He3UgBiWlQ4n","P0phqYPRtgvvijOp","3Kg9Sb8P5waJfg1I","vbUCoO0M7bg77zRc","4GNXdSpcD5GmWjkP","zKjdanISwJEPJ5yv","7phB7mlVfwZ9NzNM","SgYnAW6Bw3qp2mfn","3xDdp4lcK1u2FPL6","eDo4ArlU9Ez1wzfL","Y0dI0e8lhhoaILdU","JR9t9qbDuYFXcMEq","ehs2pCktkX1KLFsj","PRlDvUad9tTuB01W","lKgO7MZMMQOtyP9G","smdaan6VudnYJPBW","YOlh8UHkKcbXVag4","DkLfnaiIphBUpJC2","HObMeDt7ZFVntn5U","MJlNTXCv0Ao736Qh","mVO0ZMjDMGUz4CIi","QpSkyPvoRncE5zzV","yZTDEChP3LVWtess","ZOvyewOfywOX8ywG","AbOBpUQWfnDGFLGr","9y06GveDAfRdJmNL","gTROyh3ZJbhBYj0q","FkvHKgiCCixDtB4r","Gyryn4yDed7rvAGi","6PVaP0HEs1QnTTaw","arepVWlpPgVKqjjC","WzBJnA4nx7qsGTyI","ZRFfK9Zllufrg7uK","gek7kLlYah5Z9XSq","eBlcIa56TlYG73w0","oI295UMMTg08PI3N","YeinPZp4UMsG62pY","EjbnzrH6XdAaVNGS","5lJLQBjyZ7W1L2lk","kWR321yIWliqDpfu","bTUWog0zkzICFlBO","AhVKJxBb5L8dO4n1","xKd4YEGHlDN3I1Ak","ozzHvHYXghHi8x9f","bv3qDu6EF4cuJnzJ","UPcmGUMY7wR64wM6","kFGXSN5HNXlOkkP5","A4sELaaCj31KAbv8","61V1PvG21ycWjT5w","6eGn7ee3fT4dvGX1","KwnHaZI62KmAAaLE","fY95N5CeDabSaluG","avmQckbJUqu1NVEw","7VjFYQWog4O14WmB","nkUVl2SVBgzUzcxD","dDCVrZHnKT5NH2ch","KSDBA5P2AntH6fSQ","Zf2sD5unxKPeH4jM","EZcrHn5Pza2U7E2i","S9bf0EQJPGBdahgj","AvVcZVk5alkANAdZ","rw5lefUlZPHyTIsY","UZ96zcJe8sXslRnx","SQqvskDQc3cSy1QB","1vAcB4plRtj2gpgU","uQkyIvirZAEJAr2h","xgBqUz7wfuyS0xSI","DyOJeXJLn1dKhMIi","NlXPXLt2WyiqcZNF","f7QRlhEHkmDWFEqx","1Qty2UcySjI4BTZy","SssGUqCOe27bIdHV","gyKXnD1Z0H7ak70o","xCPETb7CtAQzpfZG","MKf4TeyUXWayUDrv","2TYLDjUNOpra6Bk1","SBsobyfgfiy5tyM2","lwDGkMqPnYwzJlIM","hNFnLL45vjm3vD2u","0vCi6V34WJYr8inh","Rf3MdLV3dDR8CvFe","SI8UCUUmwYBikRoP","PrEbTyZpi8o670J7","h1jO1McUFn3aVbZA","pdUh8Jq590t3q3eg","5489rtegFF2jHWDa","mHhP8jgGY23hSivk","CZW422oXml0BAowF","bC2TcANYlI3HZF61","sSHOcD89lM0IyEZe","4ui8e3KtFnMw9K48","rqkBsUAaX53009rN","Te15X4o1xBUKIHch","rPCy735eIsFbQhft","4JW0M1qrse1cni0e","jlvi9QXEwDfFpYkU","0CUdxsIzyVKcfkHs","MY56LwCFyICob5EZ","fYH1jE7q5TxciNqr","ySvVzYFTT8ux7ncW","7d0EYfQ5uW0cUeJu","EaaRvjJgxaf1m3cO","CFP0q0MSXa5mEerd","wY5IqLS2NR4SoAZc","7h0ptWJMhoalpGQA","iSiLxnFdjKtMP1Ue","DjlghBnSot5FOznW","XRgUXf004bGpfCwv","2cDLoQ5iP2EkydHS","YQoc3MQXKH2ydsk5","ffBfHG6rpSnOAgCA","llcxUItyLfCUVUt6","xQM5nTyYbdcToeGi","RLWW4Xx8tbK9uYGL","scmyBosLdJHRwUle","szsc3iOkRbAUkQDz","rdRvqsKGRMztOstv","pqX8JPcHdrYqIZl3","1OBDPGSPGEw4d3Vn","anf7xHy6XfKjIZxR","qXGOwamIdczst46e","IzoFYavAVtFybxBA","xtvC55yMRKst9geH","qBNDwWObJfiBdlHd","X01Sesxtr2QTq6q3","vG8PIlpwQD5eYE00","NlAmxruCPaYYkcsd","ZEwNefNU7TeXVRNb","LiMkqO57QSXOHaj3","XKU2v4CcfEojNjpS","Gp7vc7yxrDr0jCDU","x9eDLZkiwDy6iVMj","CtlcoZmv9gSNcBWv","UyVczndV0SGH2fcC","5siJ7a8sET84ZnRR","Ps0mxn2C8GGZCv4d","RMCTTV3SOfNqaLmg","9pzFJ5H5FLAxaHiZ","Bgm65dDCL80vmVNC","ZAqMM22kpza6C2n2","tIrTBEX7dwP3aBnt","iThFWgvlwI9aYZUj","K9rHIu94CLa7k1oX","QCbDyHvJK2XhPIMM","QnuDs2gZSRQ6gtaU","orlAQKd9P2Ar4XKV","YL0JoMbOaX1o9QEf","ac8r0Mb7zmIeElNo","pPwQKl1hej6PqwfD","hHMSmUv3LUjqwgCW","sbgJoybl5dVSRHhf","l0B0ScXsMg2rtFpx","5JnyMD0XSEDhwmLF","Zz58NZPAIP6fowHr","lslijdghCR6JB9WC","oi1BP95EIOcAQdac","HNYXGWAxAFxwefaK","iJjX4denwEUqC6xb","CW4rtYwJXTDwEoZw","e0OKVCfOpMYw7qRe","Bj3VPSbhggWoiQIT","8yKq9ve5u65yxBTG","OfJIvwwBc6wgFbpl","ahKB5ChaPE3wDsTP","5R5V55ehExPy05vB","L6yBdsbzPQnLnbio","0Y4OD7wLHMu6Wk1d","mkP1PEdSCnyPC5Fj","rqaxPLkiILbVVktq","9uKkuNoi23rx69Z7","VKQHETdDbvPwszSc","cdi3Oxgw8ZGlCLkV","AqIYa0W48UVeW5ae","fcUSM6J6HQkQFtmV","Jm1lvHbaTDn89Trn","ey772A9KU2Y6wo55","1YI0pttDwoZ1szDQ","cQ5gV8PTSymJbWLh","4S4uuAlZPKcGgBsd","ODUfePKmb1Nv4AOp","02PJeuJkg1LeCj0J","ACzeoTV1V3ZureaH","5BJuu1aiznsqEjER","z9VIntZNSoSP3U7C","PQp221OcYm1001hY","JvdiMhQviBPmYBzI","PSiEe3P4hkSbhCRN","0AVKDXKg17GNMaKx","IPoJP1fDchdNc9N0","NJqMhQt4cLnJGSaG","oaYFpgBfFANoGArB","dPqVRGOlgxfZRWuU","r1Y40mIUN2l9CYMh","nbJPkTab6WC5J3Ro","keg6d4vJv8MiR6o5","1v15oAVeeP0PlDgW","iF75kNYb7Uo8nCZj","JwLaVtOW2O4MLTKr","QSJHgNARJfP0wmRP","kNQ96uU6QZH29lpX","L1bJOhtAmt9MxQhI","cq6YBEQEu5sQcJFR","eYm1UejbosI4scIx","7O6pTdJ5vuZev6yd","6KH2VJYwchjgqskc","CtxtSRZZ1NgKPwiX","CsAG3TWWSMC2q8zG","E7NN19abHKOdJGtG","C6DazVR1imHso37n","xYw1XA4v8MfW2MGb","JUjr0J3u8QggxxdK","bnb9no08WIj0nW79","g80ljAmzojU1KUgY","163faSSOW38EU0n8","MEFCCvxiesZhQKD6","rYEJVauZa5EETpWy","Dj7VTI6y7MXZDgW6","IYu4Wdo5RC3vFtkh","huauiGfnnOrL1clK","6WpRX13BOMqyK4WE","LYUM9mFiiqprydZ8","FW762nQlIbcPcMMS","SMF5bmajqsancOAo","m73G7vkSKAdzNFEF","zknwlp4GBN1DVyNg","dfzvptPFIhNA3GHK","CiKxZBuIG9X1piSc","bvGrtmUqvrFSVZOk","zFebQOR5Vznk0AwW","Hr6EyL4XdSMdhawK","DTro5QvP5Lxjlxbg","tBn0TC3HPoKtPtIa","nFaHW0dVCIhjiFGc","D3iC2LLdqubzVvoS","sVKVjvZBHQYlBH7f","2ckZuoP1V0AFXo7X","RQFoIGTdMERSGYKW","4Y4nHR3TllS8HezB","taJX1T59J0bMenrg","foRQaUiRz6d4AxXN","Q2lFePXXphQyOckp","n8yPBCBnBEPuYyde","VgAF50qbpK1wyJ0x","Twd7lh4BbwmfLysT","BHjYZrOUv82d7qox","OuwTPjj5owJOrOuw","wRF7kpqecF096Opp","FBQKbg7hzoTu2Nmr","21Xty6gtQCffZSDP","ZsbUNQupWPRuA5Ms","WHavkhOz0iNVn8Mo","vR5rfB2sszoIwS4S","Ad57Z0B6fL5w6Gw8","KeCsAAYKa1fniVjc","qLRaRNZmmpYHS5Xd","zzajwNvuHDSqt3wy","msNMMFQYThchRbx8","W9MaW3ZMYKdIYYhh","jyKJTw6bkhpUtEGd","WKPlrlGW1viUTiF6","lxJ6Pd6tsEHhmRI6","aKLveB0zTDJJbYiA","P5AvfgOZ5R1Cb93J","yZG4DhWWJpUJBHui","zvDvzAfCnQCjdVof","4uC1IyHVxMTIV6tO","DVf7s8MCIeZJYGTV","D4W0k1F5lvzWH1UZ","sCwIwkEaJA7KiWO1","U8epywBFIsA8FfTC","El5eR0zRDgb8fnu3","dJVyoxtuwlpbr5Zc","RXV4oG2XJmVx8kY4","FgtgY4zFJqR6IC31","iuUAcGeohRKfORUl","6104cSMXHUnEsOLt","R9XF07iMyUpS8AVA","INhG5BVhXz0ZazlA","nAkhy7UE0FEobLQl","Eq5QU0PPRNbzjSIy","wjGZ9vVRMv6w2akj","CUOis0RK6kl5gkrQ","74O1pOxLTGkGDrWq","MHKLNxMXQVdpMwTU","VnbopxPeW4LTcJcL","dYludHxdUN5uJisW","UgxuxQSo5Cqrh6Jr","t0M96dPMPWUw3xNp","Fwuqvxrr5MW2bls0","3jNbflWjXaciKEhL","ulx72eDbWLBKMJvf","8PCIvovVFgQUduDE","ybutipkhTb2v8JEL","P51l3fEZmZ0EQkDZ","dbS9DRVMirjlUsLE","x9Zf9FYTDjxEZtBK","dd9CMwP9yelyJ07K","WDRi5aLucI9va0oE","AH8lTlo7vNN7JC2i","OYV7Mlt1pC529qRt","7z2yg01WdWJWaRtK","EBQuMfqommiibu94","NvpmBjIqcd8OciqL","VxFo0tslumL7VQ3U","z8tvKFJ3qgLCaQm6","jhybRdekmT8nTtiu","sBf2PzjCV6HqIe2Q","hnvikj3SfConw3Dq","zhrpYCniZGGVuTTC","klWrT0VKz1AzT2yr","1F5VJ1vyA0FnqGHp","ZwhStwVekbWGJCy7","sVBcW7BGB7EpHCmE","8BpasRlvg5txs4Ci","5QLkykKqNngNJ4H1","nHYRXIu0z7HfwZHK","eRcofCO6UEHokJfK","hFh7qPpio0sFAMN2","kmlYuUiDSKQiysOU","ttpKXrOuzUKEWI4L","1ri4qMCvcP5lnu0z","uciXznOSgdL3EPWY","xd5g5AieBPZxQ5Zw","Nm2zDYPO0xhMNks7","TigPBPP2MzTH25lX","zJKhg8zpuvUxtDf7","qIGYSd8Xrr9HKlvs","8irPoNWERtpuScnR","rCKLu8sKpfRLRRSN","IhzdoAA7dfbWmeq1","aERk6eTRgUmzOkqb","VzgqPAMv26W7WOTa","PAT8bwiexnkR8wvV","ytBVEo4UsKVgGPLF","XVcFX7uL5Oa0CDaK","rmsr7y4ndaKU1Yfz","cUrY2IpioZbGelGv","DYAbX84oEXKPQaJJ","M4tt1mxeU2immkTj","1k7tSntbaZ9MKYZV","riBt6tacW0y6TK56","WOjFPoHqDbK40yl6","Z5rIVyJsDTAycNmZ","NQeOntjxcYPL5GcY","vXQQx5M38p1XSU4b","ZpBhZlOVIfvIJ7VY","s1wExbE87FsodXsm","SUAW4eD6NBeStLzV","pAXcKjz6xyzYGvzP","YFtuNUmyvT6bIhN1","at9xZMBaITTSiezD","6LPzqGhNcESMN91A","rxihJJDoPJA4WQQt","qVruMah1RWcN1kA0","fqSyq1jL03qJJKmn","8KbY9vQjQgTdgOEk","PVrRTVYxtl18WKit","sRAbupbkFMjaQjl3","QdPgGS41HYxUdled","OJo7WaWHjCWmL4To","z5XioKusFro4zNFf","IlKW3b14vJqrK4T6","n2eSzxbcrjPExiiS","WBf5Y8UXcWLPrFHZ","ZenlwXcxLUwYqZwm","hMnXCrzP3hvSNVFO","CvY9RIzqhIEtjkTD","d8mu8JVZ93pjxVYe","GaRYQLmGk77NLZSr","ahk0tOm5RMslL2uZ","3UqYeK3krCsSeOR5","DYTNW9nybQPi1jff","XMwSiFZA9CFxs15E","3RcLz0nYGYNdYlhA","yP3c7pFW5rw1UdWz","K4i6Jr3vvrEOOBXV","9EY95RhLaaq5THyM","O6LZDvXmDGRsj6qJ","YF5aQbvEuB54EHRE","TXKvDupcaq04Di9O","WQ4WTig15dnMrCdh","jeMLfVCbsPYxBTJa","5rn6VHfUG2vGOvHG","EDW1w4T41u1F13YZ","MFv1QKjQPVfNL40b","SpV9Xj2yvrD1BrUP","hR4nsseKYXJimn5d","UMEGXb4brIjsP6J0","Dvy9lnLph2lo6KAA","fWk5cvaauBANFT0o","EOlhZKlUNrfk9kZg","bVjLEYVKgiUqKIhT","fixqXTliQoPJAsH4","i5IAeHzsFo5QF9vB","gbZrHzrfOViIjePl","FDRHBVcXISTTMxAA","rxEjmYoiCM4eKHcX","henlDTS7XLhQf7fS","bqiebLSv81WMHRqG","SQDhR6W9EgaV2qMs","moQbC5dVI44XgZjN","cHifrgJxqheSCWRg","vT7d4q5tX08PJVam","3n8ZOXNMQ5EOe8kI","I0MnoQpivhpb7pw9","pALZAFs7YM0Hz7v3","htwG8JHlitqoGGyB","6tgS56eZp31JaswH","E4EBS9oPs2j83hIm","XOmHkX3cEtqCttzh","cOwolR5HJnju4uVO","fYvut01vh897fQbQ","tV9w0PxFN0uYWDpA","aYopCWKtOoh61g3c","3jtyOIQSb73TR84Q","44f0VwqyLxHFoO63","j7MitxgJmB3CgacI","lO0NSOFq5aVxAM4O","PIiiRCzP0YbUjtTY","SEl6PcgWwa38OK3o","HIvUaEE6RpEhrBJ0","jhFQBhmhLtDqQiMC","ZJvpTmdYwGTxatzB","4KottwK8l9Al9zAZ","KWv1uEsxf1adL3YO","kdmT0nomUEeqrRMF","vC92haL63KajMgxk","liLHogwyvg4AIvin","fQbVQX2QU5Ey5WXa","GWLBC66zI4rYeBMm","CtNIFJxQ4aQLthjX","HHB0qJT7ih2Bf3e6","XQp9LMqOhps4tovj","Kznf7AETzJfreJrc","1eFyoBgG9pmITKEi","6AmSe0fkYqMsKKT2","WWDGAikTQbTz4Vo5","KVc332U0sCtz9hG9","OLQFnphdR8dhQ1s7","QlK8LVNLhemglviQ","7arsCrLTMHjIukbo","Mom9W7AXJtoA5dQj","qkHimlhx3cUhrSOO","5RwY0sz7yRd6wIF7","MqFL9auuKYnrfb39","xw0xkQh0ER1DSRpE","tEf1SEIcIJcTd3jP","z1WTNDZd3veR5Ldk","9nL1PMKVuX7J0X0B","UGvz8YacwriPCBv5","jBgfpkxcfXftSqxN","U5p9iw7Ne3pDnlYp","RP39h2vEbwcPjFzs","ATDoJ21p0m8zqk5R","T3o2UP3JC6y6y6ad","ngamzca0fufIaMwZ","k5QbCTfmIs1FBVCI","M9wgcprbdroDFSYv","azT0aWsNMFbppAut","sG5pJKG1ZhPx5ml1","V2JMSK793iOJPKFn","acHk5pFwQjMHygxi","WgOpQubFJ2PNlwc4","nI5POUjpx6kxjoKB","yadTLc1o79XQ5vU8","4Uv5B82Jpp491x7d","6rvRPvl5zEYzaicu","tkIsbGM1DoeGup7I","jMIyZzLijWzPXwLV","EzGWlMytihWtVR2l","uxyEqI70p8nKbrb0","oAig0AoeDPEcbDl4","EVDxpVuKAwux8MWn","3I2OHJUD8IUUbjlN","SrgFhvQhNxRC0ZZP","F0fHdKOXWyaVvAl0","mRtBY4kWa6ULss1g","apjvn6C5DtxxBqOu","4jhdnTIKnqvo473G","NzGQrxdhXj4TKt58","AC9S0yuJG89R7z9w","u4frDpFSI248KX30","uW03BmPF1FIPQaoL","kiR5qUeAbLUuUgey","BtRwqSoTz4QzmhyF","1QEUSGnM4y4ATwgq","q17Td3Jub5DcPcIL","PDuvWAzglghT4XmJ","BLmYJ74ZCH7glsGQ","CiST6doM96e8VGTy","3AZcCcOWIPlM0BoK","TilhFyDkmACBEPF5","R9YucOzTY1Vpl7wt","oMDnr9MNTSkBa3f6","Nl4nbdlwqkRGpYoi","pKnGplhDq4VK9ljU","JDKF9ANiuqdfN7t9","yqFHY8yO5DhFrHOf","dE8BNTzbr1hmYL0u","R9dzb4lOGeJclNYJ","Z9IT4NTgL8ZTr5lx","JHQBB6O6lYDWRomC","8NXp6V1L4eBxB1BB","9sWhEfWDNyj5Bp7L","Cw83m1z6mbNBA6BB","6S99gKdPUmVorvr7","c8Gcpe0pjdqT09RE","5klKZYDKrNBohRCr","JAYffd05Q5O0qIAl","pwkRUKbhmZ5EDoOm","63LDNzbRFXKyuTDt","QVY6uaKwfSXTEb5h","HyHQjAqKrY9MhpfH","Ah0GhSwZ9Ne3iyLs","SPR2tB4wjijQVbY0","VxQy89DAAtgCCatT","IaUNoMFKCzVyyt1D","4KqNEh5LeNW15FXS","AmpFUXi3cFLdp3PF","EnNBoHYu9s96yX8p","lK1HLuaQCuAXW00w","iGn7HOkQaSipB7cL","gM07JnFrJxtKdk1V","taX6pRNNRpJnQktr","Jl3soTAL6Q1QWLad","tOcutuh4Bvq7JPEL","gp4O9Rf7Qeob6jt1","mK9SeyLFKhBklzNf","OB84ZLzffHRYaWyJ","E9iiUfFhKwTBuINe","fEDdd8lNPQdNzfjF","1COs19FNfRhfSMhT","7prwUWKMjbneYjRH","CALiGL0G0SWczNxo","6HfN1fe530PbYMAk","jql15K6rVm3y0mDU","aiRWvyGqEMLwii1K","jtlua8PHYDk4QaAr","vfYPEUcP6ypkc3mP","0VnNdWbeSjxA3ScI","cikufoMvjlye8xiM","2nzsFGclb6XqHA6R","JI8e67c4vnuf1GmM","DUEhLHA7djoT9eWM","9fjP8AMWgOaxSsNF","rh5zWxoFRIBHIZAX","B3p7tg4TcUMiVPRJ","o8ELDPlgJIsSkLSb","o5cZWJSYWFDPzJ8r","TXRPQy4eiLjoEAvd","psSlAjCOJXj35TOu","GSxUjzJazrhYvElz","rUB01OD9i8qc3Nny","QKE78TbwJ9oBt4LY","gc8aA2LCY5tW9shW","dan4je7rbSIjqbKp","UqWr3yFYgRC6Wtwv","yeWFwx2hZFhveXzq","4Tq6op638Ix28U74","52O0TPCgxHf8aIod","Bew5tgJhUGKqmESB","N80CJdUBnBjiJGY6","h95ndjCOy5qbSQDt","5OodXtEDPBMscgEf","pQFiol8kULhb0DVG","lMOTQimOW16I99nd","5P4Q9v6mywyom0Ow","FrGih66P1DeNvlXs","1ZsljBMxcmc1Jrx1","pD0toTpPwjG4808E","JRk9J9gMxcWR8Hai","MxEKRHFU3kebPFWC","UNXOLKwtkehT5XXo","9L9sVQMgoidqWOMA","MPnT5Vembj9IjXDn","iINigMNhlOoWk6zg","330lt5TSILHjKz3d","WfpbmkOJpi8JuRnd","UXoGHH8VNpghUavD","E6rTK1esGyaNE6d0","7bui3zh03ZZAe37I","v2wD0ZeULXTSD1VA","4jmiwAuErQtO6Ra1","0qSkSTsr3BWeFJW5","KfIRIiVRGs82biHh","SgvitAFkwpPXapC8","jwRYn5Af9pqML2Z6","R5h4ejenLXfsdM2d","gsBIJfzwfd5HzVFI","77EyxGblMjSoP71n","FjNB3u39zEnS1JZF","LEKfZHLDrVgToHUi","JZNcnf0LnoliWt6D","v9pmB64kyxa9z1lC","k8vOVGeLx3ZLXlTQ","79HxMSgYveJEZRPU","UXLNHNHQDXDCXNtQ","SKPg3zQzRVcTiM9O","beyBoS7iXJCceCqK","c6RnPpYYAKr8fUna","rcidnt8lgrPyrfXJ","opYIhuuRDhwG618X","4cdrZMkKq8HjgPrF","u13W21kvlE3r2KyB","SNHfK5IPy8NtyKaT","v6Ah7rbb0C71ZeEt","gcptoTM0e5kxkZD9","AJL7urJLLBV5xLEQ","abalv7shV47EVomK","Zms0CVu796ZrPuFS","WZLRKo8lGyKmTJvK","DflSYO6ZH1AKqLaM","VdEJ9ApNq29pHiMb","7EepivBGWHsZIUMN","aZ2GZT1JGDsJtGDW","Cdwqp3q4iFMo9leu","xw8J4i94QYqpQZPj","VWQ7UUTza6wxTImA","8J0gEIxTD5t6vSxl","WypHHlNfp9QBdBYm","85kLPB1bHN15ElyF","SeScldxb9Z4tj1pq","RvAsoZ4R9wDbjXKU","hb2wMqIjzhryJbgo","pSneVtYrZuUOOzoP","0bvCsBN4daxxYfx7","ZwmrY05mFWO5d3tq","6M8O2XRCQxnOxlmQ","Yjexk0b9YfdnHcYy","SSvwaKhcdpP2BxlP","mHuddDXeDtBR6flL","ZqPJPLAxQY4Kd7gb","5Mzv9ElE6qsLq1Ie","wHFbqqjHcdiOb6xQ","L3O6tgpo8BuphNV5","seAy5T7L7ToyaOYZ","JmdffaHMQthAmVoH","1fs4skfDYTRsgpxH","vAnGfvpxdtm1V247","7DOZ3kudHbYahztK","eJvWq3WuVwdZLCWp","IYDOrYUbmatamZiP","Wu7FgRQH5T2s89Hn","vcRHtUKeis11bjDu","IHvBOqjAMnARVpmD","i9kIUSrIjjkAp2oX","ZUeuBHOR2sA86VGX","bC3UWmFDWpfGEq5c","fo6UzbFpAfrjrl8n","TCwir9QvbItdEfYw","QrfSjULOdQXcWBHs","DHPXYZvGOuU2Tu2z","AmK4dCfipwgABiRA","H2TuVCM0spyGbWkx","JRGXGEmeSmLKwBZO","bjxo10kq82VrPIXU","OwXj3RqwIuSjbhts","vYj4CMstd4YAd5ry","lkXyINlQ1C9LqTT8","PL3pMpp62Wv6PdHF","CC1W8XtoZ1AgVPJa","X4wDZ77L77ote9IM","5kGSbnBZU03m7WWU","spXgy4ZrUD3VXNq8","NU5lNhXiRcv4TQ4p","PRGfJfyPfqjjU4hg","PITS8aBM0Fi4BkM9","QKH53Oq5ata0z2QU","8uJ0mj5VumbIfUH9","RupOeXQFliFm0MD5","Mpb0JjELMSkK9Pm4","8xUMtDc9TutiUhHE","tZVSI2UoZmVIgk0d","iXy21VBzJG1UCrO9","M1IEupeghkCLtVVt","imNvXg6bnApkpUH0","5e9boURbJZiqhAHS","xShlodMc96A45uYf","NAthcUwhRYAvC7YL","W6VJWKplUTDL0ZZs","fA0z4G8V5JfgMJVk","V42LpRYfAy0NOKgA","LVwilPEXA6R1V5Fi","1SFrAQ8liUyYSFXi","eaerdAUbikBgR2qw","VN7eu8HRzWmyeqAT","5EVbNYxnqHa9ravf","SqTwSfAOUBvKNCHi","tItOfFkc6VSPoPRr","uiEVG8XG31SEJRoJ","Fd3JJs5rDUihzYG0","8wSaeRYhWSlmGECn","sIWUYhb06CKT1noV","Q1JTB5l3LOYczGBQ","t7qTiUZjuBIiQbpk","u4SodDgRcTsZYeRW","TGVjbICmlxchlXlJ","3mXuIPAs2HjPbHAF","ccDDvcVES2ZXIptq","HqpXs0N1kghQIydI","vIf8n0Acn7PcZGWk","ELy12TCRKPTcp7YI","ogPGM9UT1m49DPR0","39f8FXDH187ps46Q","sS4EMUlIHIPE7baA","1blZmxJKPAwgWBAr","66fmMHIISr7BfLc0","GzyoInjNFFj7agwt","lrGP5mWD0jJ23aRY","txgY7ihTh8dRQcee","8MWxTzjF9SkiHA7u","7K5kDcLCSGEwEpRt","mm6eX2hKdv6rxMdY","lqDzcOZyuYXi0iyc","3U6Tdk3w5hUuZ7M1","o7YNx7mFrkBkTdMb","4GIZIwdIUZBfpQPb","p5VtQLQBjQ5OepaH","2hDqqrdW6n8e9oGV","Nt15loDppdXiVCs5","tWfTcIQXeKyrwFts","qAWfHSe0S2ejWPMQ","rB1sZbL8zKAA76d7","8VSNje9EMq3Aj7g2","Tn1WJ4iUNfJAnKvx"]
  const nitroata = nitrolar[Math.floor(Math.random()*nitrolar.length)];
  client.channels.get("699907499876155462").send(`Nitro Kodu: https://discord.gift/${nitroata}`)
}, 5000)//milsaniye
})
// NİTO \\