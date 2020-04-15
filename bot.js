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
  const nitrolar = ["QKzCERwkU4d1JeA6","dVRAXyilPwlTXDoR","LCgMdvlZtxYVumdt","epiO6hewwoeBckEy","vVj5Kobs19TP8qv4","IxZHZkg7XF6XPxn0","ndYRaMsYI6vzkgwE","hzH715T7jS1Eedqr","1hQrz6XzD9O1JwZp","4X4RIUrHy2m9KaJ5","zwjHSlXdp0INt8vu","MdJBAHIVxqDVSAK3","AKBaGBWp65D9Un88","t2XVAoGMKcAnBYXr","d4tp51Desj75LtuJ","dsmh3NyeXs1TQ4bl","6Y1lyIJPGpoYqOrG","FEbturDlQRQGtzbY","aw1Nz4sdmnO0ZVRe","kic3hdgMWsb3lrcK","11zDNC9aZOGka49a","zjG54fegZOQqVBBF","LYCJyWJzIC4rdCBm","XwWIKaEquB4fhV9V","Dq67tQVyDuq50fcg","1EioJLiae5NpATY2","iHWHS1Uenqpp3d9N","9QXOg0ZFYjoZxPLJ","ret3u4Dbs0DtBFa2","llvLNXEJLMXisqwf","FGsHpVCvPt7T40Dz","77kfBrThbCnl1NKD","owfFqrBd7JMWjsIx","oIgtpjjhheIHCX5M","7kQwK4tuoIKwwUBC","d7GymBGnxGVLuIOa","qY1sG2uZ6ARHnVNN","nEcBA6AWHltUeb2Z","5X0eOPjlq4mSNYsg","N603A0mGMiOWUHUQ","spEOcvO6KvtxamhI","HwdGFEUi1PCf9yTQ","FOcyi1twJv4v91Wx","u5sFMxtCMKlc1BDg","WPywIxeqbFUdragw","ltEBeLQ3DpyPZ8Fz","Ons5MjnDuW8wgSyj","paGF4awoOarKEXuh","35i4TFeyCZtuSFhQ","9s8rtvXZWkX93Qek","DrzUrIm0zgQp29sT","IyksQ7c8afzZ67RC","tWMecg1ztCrtHZbh","EwKPr2Q0sqQgFlKi","iag1ngD1a9fGR5Pg","r4c82HBnjLlGCs63","jHKuVn7ZCGUB1p1F","3gok5txxaRYPlHrl","UD9bFRVCgXe9rHyN","H5Jq82HjJt5n7MiC","L23KL4hvwgpwZmWA","u5YsuIrfXJJXNswH","q93NVZ8sLbJyYgLc","ehQbsdQcAFAvTXBK","50q00FiMsjq4WkqM","ZnTdCEr5ZjWaK0iG","dlDPMfucL8ZPZT0L","SpSR0RXQWFHPwoMY","HtixWYc5O3ZzBhED","22f4ag0I3k0JY6yY","axJiuaubcGZEpUMD","z7iu3pHIg8Sk0GUe","t9QEmPJtmKJSrLYP","9vCAXkEMIUFnt5kc","GRFYqFcUDTFoqpvR","wcFzdYNA8kSSaCmj","xNJiBjzP5Yz2nANe","h3NVyeTY2Wgybe2K","l0iFRaH5vVLKsAV5","yV04tWUG3hvrlumF","LS8JbAqDvNlUPrGR","ir9bvoK8ApPI3Lhh","JIPwneMjbymsX7rC","zAiLXbUobc4BBzwI","suRy01h5N32dvUhw","o1bw7vxTNjXgv89r","YqFTUCbqnwxu9UQA","QhedLtkNmi9xTEUy","EIbNfupPJ8axyzva","Ioj2UGHO2RhoBQTs","LMVTOttxHrw5Wf5z","33F9QHSM7Yo9tPr7","P8P4JZqFsduUf4Bj","14fHjcz9biZ0b7kR","qPmxGBVyfFcH2vaI","w7y4FPMCn8GrDUWW","kGg3IXK9YT1U2qF4","vjv41iTOJlZqG9WI","ZaceNQonIpL4Utq4","TQUfMtqq01kHwL3x","83C739OI3IPjQSyg","XAkrBVYwKLFhdJI1","SVNBQb2hiXa7zAqx","FvPn2y2fQZLrwb5g","oM0UcXzuz7aaClkG","WW5hJcwpkuYH04hS","63NlZdFQyIT4uWVa","wz9vZjVAAzTzPoYp","O3PdwRP3EoKULTy1","VoaGeChGkWgkaoJq","TsCorHq2giG2Pa70","x2HM9SVFtjsd5CNM","KE61vUYwQ0m5fKDS","MqWCCwIr4UBHxzXs","6TUiDm3EYysAE3mP","udWOiIF4kSJQ2LbA","gQFKuUfErm6MMMBf","nOMtsvuGh5KxoUV1","PK7z0jNWfhhComu8","2Lr4709xfctAni5G","UxC41pHQy7fZOrUN","PLKS1zMDvVOkmdw4","3x0hqNYexLpCWlXc","QBcN108IHnLMoH1a","uygnLby8txJzfW52","hw3kjWWWtrvx4gvc","hc0q2ZgzTxhLKINf","ILHRV54cpIlWMVVx","h2mYOOUKPs5zW2nI","Marfr4mEHUHz8P8i","npZihAGaTaxnZvpC","phVxpadunuw5m81f","EgEEo5y45GqaEL9u","RNR351tOKRfVTUwf","40Bz1b6naEIyGF64","qEb8Zs25PdghRyNh","FNFJ022jbBsmYQsR","3DuQ5EWp77oX4Py3","ZA44UBwVzUUNpMBg","wMhUOMkgA3Hp69Bb","dw4xi5jqPEmpnEGa","KC2NP7uScZItOli7","qCkRVVWS0RjVzIZN","uaMsOTaWeJ0esFhv","Wj4ru2boRmOA7CDZ","3CLEePdNoqOX4iBX","H1HeX98OyqAW5vwI","Laom3m0VdfOztPcM","kuUHHT9Oi4plLI68","gSfS2b5C4kDtmmgd","qSD765uMWmjJdv9b","ji4BCYWHAHR2e1LM","OCg2vWqIP67noUXP","4DxgkALXJypXWmMX","JCRCBrquHXJmROmF","VaItVYlW467WTsDc","HSUeErfzubBGMTGA","N1hrtLIXTo3uog39","P45rL4W1K2ze2g7b","BYuATmHBqo6AT0bT","3jJcx4N5z7eNIWRK","9vjXpxGEF93nE3sA","rpn2VdxJXoQEhmio","mP11BqllwKe3lZBc","M8EsDoNUZRpKVypb","7Mw81nrHrHPOsIyI","rwezjuv8K5OA0XUA","vRBWApf6d1YZILKZ","lJCFXOqffRwopL7y","oni0zDkjYZAKnwOF","mkCfhmGIwxEtkHOW","kR5eJzAg5x3GhgUI","XHZyugoUr5wsw3aa","Ewv3OFtCcrgOy3PZ","QWjvDBxnXnL0dKYM","9FOdTpt249eG3kd1","3Tqj1d0DZPZeW9CX","YGT7xioyYNTyL5Wy","9XMNK7zZ9nz0FgL1","6klEbJWtVg9QSrST","QM5jWtYc5SHzkCWA","svrzTxJUXmRcthee","zfrpO2EYITD7p47U","OaU8ZUKkWZfiUjQT","9nl79rmaHzdxjKte","dCErTSqUYx2d1ulW","9lpmL7Uk2UTavV83","u8hF9TpPefpzcR0I","QzSUt6Jtfu71GtF8","ERmRp5gWGW2ii1na","LK7snJGio3IMqJ1t","GlNbHBCsXzO0pxni","c6hfyfAFAysazUcJ","Krteg5p1P0Qu8PVi","Hm6p5MjH4xAAG6rz","Yfrm5GTcr9fToDlp","rN86lpx6hqFWt9s2","U8v9oxoxJjqjxWSq","fzr5l4kzTJBLjqHM","w3DIuliW59FCOiwm","TYqRYre3KeB9OK0j","mpgEhxbR4Iuy6W4V","5FifkfkrUnnuK856","tcVUhpoFoCEA9xzU","GjUIBMk8Cb6h0aP3","0gAsGlW3n82OdEBw","riHk0OZCVrF72p8f","R7L4luFEFfUWCcJr","U8HynMDfHWwLJ4Bi","ojqQXIxviFsiQaF4","xK7ChPfyB7hd4v6c","DAF2YjNvI3rUPrWB","OLsOMcZd4wCuMsak","iA8Wl1weAJxa2coY","O4lr3F5mXUpoeQ26","p7cAxDTkTu3LMFL2","pEcBtHM4iEr8oYX4","pHudOyXy9u2xEmFZ","ZscZ2VXg3SXXmz38","Ufycqvk1VJS0qk5I","BW8PItpHwgkM4xPM","HGiMPiY0qXIpnmkB","XXkplwDgMmBVMeqd","kgHzVMTNTocGSGw6","w6EQTYzyER5dTx59","rNoUsm2saHSYlX6S","VjCAzF2F7YzJU5IT","TKefAfHhXn18oMQx","PGlrp129pucAd99B","gZuPMNXDFqXAjGXn","ZYRFikbIwzzkHAtB","UZNZpA4qdG5DKcqR","arNRUVJDvAFXeyee","smnyGg3Z4FimRt5r","SlkbIxTQqMNtbvhm","BoxHBGu2qt5FzCh6","fQtLJEIAeu1wb7GI","BP4sswJl6yChBq7z","E7ni7RfRGaVWPOB9","59rNLrv2W6xvNG6W","PcYrJI28vEXX9sjY","PvXpTAmNzDooAc7x","PUkJzNccXZWNRRa0","bYfDMPW6PuLtnZ3a","PLGZ3UtpfqRUWmtd","NhrdO0VgL041w8GH","s1UrWvn6K0Lkurlw","91UfBFLvStMm8mWl","X7ginDS0An0HUvbM","HpsjFY2Auzisenrv","Wazp4EZvt2oAMXAy","GaC9qUrz0oQUUc64","CaTmtuAm31nET4tO","hugzItdRGCmuMny8","QxgVltXsQOOU7tCm","4uy70qc1V7wH9zJE","UYrwYiAFI8XGlRYr","UDpGhWuYIo10yidi","f9c60xpiWGq5L2We","8MbjE3nNPDaDzhcv","dyN7tgYeJISBjYDj","YsEO2y0zPlss0MkP","x0aZPU4xf6flEjdq","dYF7cDoJ23KASKrb","HwhftRbQqgtNjwwN","DOx0tZuCeiqolji5","PUI9CE8HVtXsCsqa","0rVQ7XT5dtDYUBZi","Zy4Tlxl0OMU2Lyko","mlwua9RVH7E5cZ7H","IzWHhB60OWQSi7eV","o7SKQ7reBuJyA1Pm","R53aapl54PETKdTN","F7iEQEQxoLMIzPY4","SQcm4qSkvAhYmCGi","1s7kINxojl4Zb2VE","uwcTWwS1jou1XUV8","7y85VteqZyLu2mQJ","C8FVfrrY4Ol49bGs","U8r6ZGiP1Yi14EC2","GilajK3Vt4YXuxGx","1AGHxWV0rGqTYBbb","AsnL1CrzRl5PW2sh","2ZIrmJ6AGghE87UT","4VA3vfv9an1qL7qM","yM3u5SVJC40NGjH3","Rfnavk5bFOgyW9Gh","h4eJbjT03c1hsBY8","X3VhOAmksuOV1NUT","xXy3jMCv5vm396hv","Qvnhnu8Hf2yDwgzp","76oTNOkMhMFlK2vG","Udfcx7aKoaYtIjuL","b9OcJLyAm3bGFgcf","mdY7rCvbeYDJGvCe","WLq4kE4OeLczHeOm","K3Q23PXZREJFwJrp","6hPnFDAsFj50cJ59","IlUdlMlBu1lZArxn","4ZuS1aVw2x4ozFTp","lD2VS8wXJ4xbr6QM","HpHrUo4eBYqEO8Bz","J6CqjQzvJRIB2Fpj","zdFyMp2jxnaURsRJ","ktS2lRSkla49L8W8","rfjl52bEg3uo8nCb","6N93LvUvIZUCKzHh","tWQX7qrl18kI7ILZ","577ihlYK9DswpsLQ","GyPPXxrlEeajYMgK","c54Feasz7Eva476i","BCU2ofQbXkkVYEh6","XxwchFRzUhkC8qwa","RSrCfuXt64XVWo1u","uRfZCDLfXxPy8zoD","snSAWrU1Uit8tJ2Y","CVVJSgWoHk1wdY5c","edOKeHk47EsOeyCE","1EfNPGFyh0hfgoj8","nXoBDxfK9OwEH1P1","Yx1wzInPk0odmphl","WivKrOktUicy4Fz5","qXmPySPlIRKvhY5L","uH7OLavsdzkvBWLS","t7rBkulUJ3CfTItU","2wjnWFiRA9thRA74","Y0qioI9fKtCIRZR7","Pga8Bk3El5AsnEFU","n8GfbWFzaSnOuqsn","fdTTPCq0vQRxmCxU","fUVuPSIeB139bF1W","5NNQplcBUWXLEuDG","g9r4Vtwq1D1vApCv","FfHCAXtQfJ0rpdzZ","nhkInfZUF4qvMSWY","b6tWu5Y6sogTp0FG","ZaPKvg4n9JLlA5l0","wF4EriDR39pL5v8i","eg49fTYqpJlPmksT","Ae8dW79EM01JnPm7","hF7a9eHEBYvjWsrz","qpnq9oulsBhmZy87","PUSTykhSB2kGZx80","TSiQqbbQffct7su1","F5dso8Bw5EpnVlCb","n719qnLo0oNDNdjU","3avU9z1keOoCSlH2","WKU5yq39wudh0k7k","R6GFwn84ZeSGY3FZ","hyXYExNSD4hEFoi1","d4ZzfBhmppePTF6u","SuWQWdeF61RfM4YH","2Lemrlvt0pmZCRVy","JpWaepncaIT53n0Z","NFEfxYROw0upnWS7","EtrZOB9qD5S2xptC","bmR29BrPNtAexivX","byYRufBKIttozXQv","AgrMYY0fKOMIV0wO","DUTWyH6B3UGvz5tV","vcITTdUelv7wUWKE","0uN0UFycUNOOmWek","xofa0iYk2Re2udIf","8XjtPF6G9W7YqmQ2","4bLa0pmlnrkxE0Co","UkxUpNdsHd7EGXEt","ja3kRXueJjR615OY","Y4jfkHt12aVAUJL7","6yXeIk0otioxC8Qc","QP3r29aO5N2DBbT7","JoivdnS1i7iHCS0P","y89AHQrJONIqCyRS","w6wL9dWFdC9c8ukT","JeiqFtGcMQaiJjwZ","hDmHBSBJaHLyYkvK","2uKW9oQWr7BGxLz2","mjvn9mFi3VwaZ20s","W8GVCvUUFGhhdZ1G","hIlYb1eM8d1aRmxg","oEUFrnQgvZYdkia7","rpElXFbSkHdBsRjF","YYjEiTAFK0GLpAx4","E7sJqcyY0awP7MJB","oajnrML9GzuJhSWg","zO30gVZSVKxsVC5N","tSo5UUB7HCzyHrXO","T7HfACvv7Dw7fst0","htdqmJaJsfcW6ib1","mZdHodpGbfNSDfvR","jqgE6sVPAaiq3HLt","mKeFfT0Kka5QzgbV","T86SrgpqEfJhTar2","EleoksTUzzfYZ1gp","nLEyC6vIZ51VpwvF","tkKMqnTuBCS90pLc","uxJytpPDeSFMuL4e","Ek3kNJt2ptBrFcXP","J6sebbN7hm8iSqxT","fgwNKzQ7n7ZLv0mU","EM3LlA5yNPgsMy3m","PauEYDqBTs1ombbe","afeVECiG2lLm82Qy","57haqTL3bw7J0Dax","3IrTO1PxT9cAlfRK","tUmJ0t1OmgmnBFo9","IY9u89nVyKmNfRUx","N47n0CBxjhajCriD","AaZT8PBJNOEi6K81","dN4HxALTOVIxWZHy","XdaKCcqel5twz60F","K7Con1wsuyDJMvNP","RynH7ICCqpxZzsBI","BeS4OpDizayO1NMq","3vao4jROcs7jLGkv","5hpLnGIuosqUddG3","kfq0Rq4iWturUXma","WZ3qt6peYavX89D7","YtQaSo1i7dUpSB63","Pm5Q1EW6ObkCtY0A","7Jm3235emyGHzLZA","owJPK9oKwjfrLFhn","7eA5OmF0e1pi5WYM","rCj7pCc10xfRbqaf","MpHJKEJH7N6J7UU2","UYeWEQr909iz0oFx","swKdeJH617IX8hhp","ENDSTtHXuVwwY4L0","iuGXxEGWdNNzybVd","ioh9wLusZga0atHa","bE1xGPDeNFBpywKn","artof8TYEFaZFDkJ","plDOTTlbbNST5mCU","Tgl1dgS0p9hernNJ","1MZfnSt8BqTH2lgV","vw0E5bjGcSWmPmth","gveWAiJIiDRSS0fz","eRyVpeIApPyIZzpG","iVZ16VHsdMzwQBWe","O0qY7sXTPesuDhoT","V2ueJuewT4ZqNqbQ","w3fK8pJlYLiTI6VB","uPaqzpOssalAvJdp","xnUlJ5Kzf9nC3xrx","NtItFoRdZOht0lmA","qIq73bjTdwzmL23K","fwl4EEnbxwGvRA2R","wPfYRXnSFWr1EVdH","FC2jMyyYoQokyfEM","9GtcC19ZPFsNKITZ","a88tDjFLChHcS9nG","4XaLzZa5NLFsWZX7","p6ucYssjtrRehZb4","emXOqgIE95baEzMJ","UbVp5NRkRwInmh1n","Igczz84AqejJVamH","LLKhkmYglq62eMaO","qOW80dv1BXtnEFMw","mbJ8fOtFUcK78AgL","E4umpw8WDABGWHEc","qV9ygnriI8YuXPob","r3jnOzfT9xnXKZpT","pbep64oiovqGBWZx","2AqXdJOZs1uYVJFq","iZsECWMHHqEqaAEV","GB2LQffDCzECRncK","trhdc9V7gtSSfnYs","UgJYVLibgKkneMSC","XpcJH7EcpZc2pRex","06AaogGktKaShABy","voyci9BNany2Tppf","rUR3T8B5si1Yb96f","mWCAn6b9icX9pudi","KQjdJ96A02BE6REm","IR099b07qz2DBEvA","mFjEq4RUTM7vVOWm","lnF9MBLaj7f2CAu8","hQcdnWiUfuVsWm8A","25mEwoDJfpdJ85QX","jwDwn0rT3FY0EdHY","B9UB2WPNc2YcPIL9","slWTob4v3s3ZFlfN","cFJOBhWxFAB4tngn","exAwx47pGbpbYq9N","zX8wzsiVxEd5g7XX","HzbhdYDa1hCVdDLa","2CQ9RI4tIJCkaMAU","DiqCLhx6yMf2KItE","5sDGhOXIH18ECaxs","wvWP4N2vcDadOkgm","A8vq0L5P2mpZ2j90","liZ7Rtq5WFgyZmeD","6TpuZQuoe2v3n7DW","Nhz7NbF8YnZxsjQB","yiAQzDOxAfYbuwul","I9M8j4kVOTqIhgut","6UImHF6IK2pHx7Sm","lcfo56u4h8cBeRKk","2WpVr8cLs0uxBjnK","WaxP8HbCitN0u3WT","2XmDTIGI5LgGTW9a","9GxE8YabePexhXlX","FZV5JxVvfyQgz0IO","SDyv5Proq4dKe9MI","KT0UQmqaylqzUkq8","YP4L8Ryqyfl8ufpJ","1T5BHIIb5piL2ncl","8y8segyjJDpZo1PB","u4EVAvi9t24sXKDc","buyVTEKZZlNxZzMq","UgA1y3OqwzooLvNu","AZsMKtWNR5YBsHCm","kiCYBMKyISmyLQrI","qcWVpzs2HciJnYnX","WDPxcBAMcTYhY2FM","EUAi75dICdaFLgQJ","b3LCYGZMpwxQFe5q","kYCKkIBm0uFPoMmo","5ylRkUrM9VuHcdzb","6bF5vYKom40bxvUm","5sBiJUQ4L6NxZSH8","wkpB5NGMQAV6yd90","8vKxfl4EX6PNZDKX","xTp72K2hpk0nI0lR","dYOfOmRzSSsZnJb0","6KvL4iZMmtH6GyQs","rTUEpmXcgxa3ehKr","C5GCfiJfW3UVTeWL","Yw2QCNWyQCmSH2Ak","zx1rJ8Q0437fcXa3","1MquoiPnHh2AtK6y","BG2hT35gS1QFAzqh","JlVSAEq3QDvgk2Vm","uJuWcisyBVi4i5ro","bjIQTvJbdaDk6z9J","bXz1ojvTr3WHMM6V","WPfE8Ir5FGmVOqXX","EE5P2uFClkxRt06Z","BGc4RLJgka6Q6zZh","x8gchr7LraGChuJr","99KC4auTpAK3bNvx","IwyB8X1yIUEAnYBJ","ySVeV3eP8VpKgkFr","xRzKTF0eVSTykGK9","DpYMMxip436xip78","lnfQ4OcJPNgMRVJs","xNsgklcEhvPdzPve","Ljeg58i6hSoU11f3","myvJdkg42QbdNik8","DjuehbW3QhwyP6bY","rY3u4l3f4xCoyUjT","WLd5pzjOV6JdiqjI","elAHKHxypzUmcPz3","xvDwNtXHfhOz8rS6","KtQWCrbhF3tXrctf","qm9brhH3A5CEnQcj","u7TrbiUQwWu4qqsJ","2i8AI2C28fX3r32x","5623wIsdB2Fvpa24","vCiNLFR4yVjdWfrT","g5VZlZGzsZ51U5sO","M8uBh1KfrbNqzJuK","21CUay7fW6a5YeH3","OPRL8eZe8VWZGGxv","IsQ4xLsOwK2LlmJx","fhfLPALexzpGiFgH","Im6WTPelWkh4pVhD","KBn7oJGkbz7SCIgS","6zB2W8UcMFoaMfHZ","BD6DAjfXuVN5gEkJ","vRmcnZ7LgWSfzyMS","jupDZvDPYRYuAjXl","DeWFoLOUJBi8SEvc","Xk0j8mJh069ikt1X","7QCuX71qNvU2RV5c","HEI5mpWtHqbIkHGG","Yv5R9tFJhiQ72TkL","VweYyK1yg0ZQubI9","mjCDhc9UAzaHynwU","kGr0ItB7oTn0oJcW","4pBoZgtHi9Tcu9qL","5vcLdZSkQwnC7oZr","PZ478zjpTMccJRG8","jsOTALBUVqJr3QzT","Gu1kCDIHX9zwATIr","tXY6298LsaNQkCtH","hyriOcnsZCzw9xu4","MvDYowcKaEulOVgr","S2F1OASdIJFRNBx7","0Y9Dtkm00dhHCLmo","psko4OPoz8ue6PvA","0EfvHPGsrGXPZc22","vIASe4y0Us0fUW3u","oPCKHHnZuRtxDGKK","m0N4W0GnyllifcXW","Ny1eStud0SOiZBKh","XUGXFoWD01usbAjC","UhQj7radQJecCD5Q","agL9Ee8USZhklFNw","XD5g1haPZsuIebL5","pDMKugtWeGZOCixd","BsKdJmBjrIPaHbLm","yfcCCaBUkCoFsefw","pIT86ehBqGyKXvFj","DxgPV0IKStLzSZ2e","xmHPA4q2OJQarvl0","gfcFFqh1XqyUw4z6","0AZqxoyDPCUmWVwN","2TtvbbekvMtQTvAy","NU4PVrs4Qj4eE8XJ","BRH1xcruHwy6yZox","fLw0YsZFzyJ2e4z9","CQ5JvRXp7r1HO5DU","uLc6Dc2FCoO56P0T","tqidRPt77YMavvnu","4GbQcVqJzRMA6PiR","c0MRVO6oubGF3pKo","KOWHNUMw2wBnW7Ug","HA2uIFsLecNvmgJi","l4F2HG66uCDbHv06","wlElNg6TLHjgNjBn","zODqUHSUh9na1nUD","qzoZBK08rcuV8DrF","F2OhXeCaYxDOhtf3","0ng5eQMCiyWqNptq","kF977tZagZcxszj7","ZoPo4FYAxybe6ogE","5MTw6pvR64DzDRxy","xPtYH4Ilsqaw5XuH","lbIb2f199u9xbSfF","dw18rl4qnJoHQAPN","S3BEACY7HWNakSf9","ScjYRzpwgIPpS72O","VfQhRv62grYdeLf3","ALEiPtxwHPltVPgl","7vrOZhSFsRLjrac6","rs51eGyF4c8KqgQd","dDOu9XCxYfqoTQ22","1iWYJXPqMeYAja7Z","UsownbRkvTksT0hI","XAKpzQ69M75qectR","0mcKn0rZEHIg5rS6","mDCm5el4Yr9TmEE2","1aWwwr6wVMhNESBy","nAK0OINfHHt75i66","LM5G9VhhzQDgFs4I","gTbaE7bAW1DwObqQ","Mn2nIiY5LGHUtZsA","hgmr4xoRExsMB9bV","7fWJAlPQN8mbBHmJ","7v3E5vUxFkbscbMc","J2WLN7kPZlTcm1VJ","5X6vXU0WSbl6VwSj","c8bLqkjN7R0m59jG","xU806SI51fX90P9A","W2taA7RjAawy2T86","8yWG4dF1Dmnzzmvp","xe88LUKvJlKa2Rs8","gx0GCy7XDvT2GDTu","TOZvUTiSKDb84o4f","jSkMh4TeiHLTpsQN","5tEAiwb8RIp1UgIB","kEZfgTw9hlGf8cGQ","csaruulQIy5e0Toy","od7Iec4uBLM8bvuy","CHWzne6KqtmbpcnH","7MEgSonrRDuNdn8c","bhDChnuPp7zlV21A","LZs2HzPRr3O8P8do","B8ZEGHVBazmYsktI","sINJuEX3nmpYZmPF","qg1z0PvQLeA6FhLU","wkypqjmVBhITzJL3","vXf3Lj4REGDomY5u","al20fuJK3quF6Mrn","ypXOwrMBhbZD6Z8b","4AJMjXExYx5lBB3K","r4oHd3vlzqvh9uCa","0xowEscl2iqRngT6","iWcSGwolJCrdU3J7","O4Frn0eYxhYTkFtX","D4SCTUxYY0IKsyXA","A6BqxsF7xoxqdQyU","kWkhOyVHFce7gaPs","9Iz5GxIWYnfgHmu6","tFIR5AjIuZSaanVu","ma1UhwKlagRMfnkU","01YqmfNEol0hk9Tq","TPHlWyQClj0UUAcn","oBAchfhkpyEBaA0m","DSmbfByXd749dWtO","vGz8tSccYqrIt6Sj","O1dqvDzG20uvlgp0","8hH4RmTQdFHhFBTd","KkaC9BY3G28F2u4Y","J7z2MrSQZnBDlVkA","mcPwzUu8qoNDWJEY","YBHOcoJqD6dPGu5I","vJ6qHKTZgYoTHtig","Nlp7wXbrrPUB19Hp","de7omDkPurLmdjZF","uxqXJXjjAtVaYq4W","84UYlAgzHrZBy7JW","fCOIWIoIIelF3w8i","sUvWPArkerx0RflN","ufR4gIDqlVFKWiya","2fxcoTzu1YLG8cP8","wY8og3C8PWqsKy9Z","nEJglsJHcXq4SCEx","iRubkpR0qIz0W8CJ","S68w8J6glMcClM62","Hkg8pUNxG3s5u9RE","cYBF3Cmn7tl7EBXv","3jpnAy3Lqbq4rgF7","tu8F1PivEQ7IzD9B","PzsEL0VcndhPpOS0","F6uAV0ivdrNfPtUB","FcZTWSdzyWRDK8fm","ADvIFR1ZFIu8vKwF","iYOFDj5YisYBAB5Y","SvE4Qz6vAz2Mm2c4","pZDTv0ibNsrcsrqF","7negLOMyrgFiLLII","8yPlIHuP0QeFl5jm","2j89czzMuEwUhZzb","vg8bbkBGvk2aWAzu","yF2JwGOOORr6Z17B","e1YruUBZZpDnr9U8","oblJHKYpJTyUlG0W","1joIjqKsL74g7jTu","ERkOUOosOARb5l4Q","di0r7pKzZMoGcGiM","UdUCyPaVQFMABix6","IoEcKVfUIXBMEYps","vcTd0vtDRNJls1kj","4lOltIwMm3WPsDct","TVeLXz9rQOh6081u","IjLvRtWHNMg0UF5b","LqaDO2JHLkFg2Hue","ZyKOIVnYIs4Z36Uj","aPGSKh8OpGukfOhs","xWuTDzODWSpRO2C4","HJKV7qJ3y9HW17nG","gl1G5KYqro6Gg4K6","4WA1w3UKr5uTwgWE","fEQEFBf7D9LTfcuu","R04XQNATiMj91PSa","o2uFmIvcSJualQxx","eyeQIjkWa11MNdqc","0E9A7if3oloCvvmJ","Qo5CaDb6Zb2wtvrG","9YfbEwFgHJHzcTLc","R5lLFJqzK8cNuIto","zxmMMD5QVACmuRGA","6u8YfTkrKmLO0DJ9","sKn4O169AQBMaLGn","pYaWzZ9VgF4a8evj","0YWcjirLfQMlrdOT","7Z1FYfWtBI6gxqit","sCfeeFomupfp59op","FobzVhG4RVQtwSH8","cj7uzQK7xa4k3FHW","MK78HoJmBomQtkxH","z3mTfv3jRJmfQ486","H8Owra3ndAnCLx1i","oBMZvovPUBu607sF","XKFixwNEq0GPyUU5","4SNzO14BtYxTlrYs","FZyqDWsfPEGd2Xpq","3gnTudQCk7GQnwty","V8gNAehhL6QgX58w","K4MfbM59n8Oz3fcY","HD7vBrl8QZA2LcSV","Ht47LkQNnjZ94eC7","GSQo1YZKyXNibpPl","dxLUZKUxOvJHVkdw","EmNY3aNQRJPIkvLm","Olkk6URr4uTehFu3","krm2QFZM1rDNy9k9","k3otBcL5xckWVyxI","un5gw8ewro6SZaZ3","57sDWro1Nq88D27d","P24MHSibpg7TvufG","Z0TaIx5A1kOpmjmg","oqkfXu49ROG1j61J","M07BUa4xUNisQgdc","dDDImrVA8XFG761I","bHteXSqcBBcsrFZZ","KTb5kbhcsjIw2mPy","18UxYCxmddDO0wOq","c40CUWOnbgvwZvnw","43yEdTlCzRQK36AA","twteSnBDmMZh0Ss8","WqoWMonZtlBKSyfC","byZsixOyvOjSFquC","5lSGwtKG9hvC7p4M","qizA2mK95KGeyWP6","DHlyV1kE7pnaHPwW","xEbilXaw0V3xe1Oh","87zkFw71iEAgJuEz","Q6sgpWN6KyvxxTwq","FMi98guN4OrE5luQ","lysZMZvgFuRWdpGV","IebefOBWOuF8r6lc","QJZTFRTR1Whh3mCw","S9MkbC2K17aW7GgN","YqDZViCqI3NIiWsL","yDmEYjiDbt1HQwOZ","ugwVYEwA86sELb2q","c1sypgFHayJSDzRz","GWmFikKZmbvnrKlK","Fou3W7zd5HNpWhg6","4UIN4eaODp4BGfXl","Oc2Aeqsor1srsheu","LBMKcHVf6wSyb50P","NaVBHbwY84wAsjsS","FUWO3CHGTglSHFW1","uZLWoxuHQGktdN21","0CTiSKUH083Qm7sG","QkfYmrYY6gGQ1Ldk","UmoBrpj8T9pRlr3X","fmYx35TNLYLnYe5A","U8yLyo5NMET1lc78","JYqasVIElityPYKY","KOQLGtJNhXHEwcSS","8I7X19skKYamklOM","ZuKUFlmL2uIG2GL7","o6rVeLdromkZ4SRb","lh939IIpKbuc33lm","bSBZX6nrAPargloN","xviU03szPKKvenOP","rXLzT6xZtW9qmrpp","5tIc7rt50CTZw6Qe","uu3IAn4X3jqmGLHY","Bfk5SAwnof209qBR","qu99z1TPCEXaiWop","GP92GiqSYhOKcUcB","g4r8wh0VrzmOHGVo","R1rxuankzKYSOycf","JyqMZ8sczQC50Dkl","kW2o7R8xA7Txb0Dx","tlef5m42LtGiTOnS","cecH3bzDrtHTwp3z","mWZ7N97XkChPpdIn","JfSwX9JPbJphv1aO","SV86r3AzKs17d6O9","WFAfHsqTx3RZF9Za","l3R973jJNxmSQdsO","h2E2dfZVMWGhdRPC","Leq5axzSGxtXvnzq","QPJp3DLVCtB52Bku","GrWCcRL6ZuV8AkNe","OyXXcuPG5PXnaTme","TmukMApEZYsf9rgi","15LbSf0b5uQpS4Sb","Sx7kYl2Ly9Z87ouE","7pBsisYBvrdTrrAa","qb69a2tPz2Oqb6wZ","LbZHa10Y3aeslvJT","OIl6b1AS4Clx4I3v","fAweMrLFt0TVOCdU","9dnSx4GlDXXclhcQ","X2CyZ8yIfljcoY34","zpvyaHy8Y5csZviM","q35PFh2EpanBBFYk","WTgAAhlo8skXTqHG","W99vVxaTRGeNs8HA","xXP7uQ08sZ4B7eQf","BldtIwkg3Onjh32l","xOju3cxvy8jkAhK0","dxjr9efkj5nujfIZ","CdzkWP7ph01MPNaW","gy5mV4K7YGUsiE7i","bCvTipwEidQ3ADmt","VNuZAWv92xiZ5ytD","kpwKUjxDwKK2LNzt","caShHq4G6MB2Ry7Q","Y8z5OdwdlsixQBH0","BMdmGJfs0pQdDCty","w56l6gcvCdcktXog","F4kEcejkI8svpnT4","pmtRfbruSq3q9kih","xOCs0R8KIWBlo1LQ","MGTPZfTiuZEnNOnP","Rn0wENl1VKQEDgPB","JgBPi19rPP3OW9Ox","36rNlDIW4ZJKWB1k","2vQEVl4CcMi0NZJr","1VNRoTOiml9D66bQ","W0ORAiIMg59VzGPs","K2WArwsQTvkTrbYT","wB6PIej7mGiwN0Ga","JnsChFwPNK6ZkCGs","zuAfDrxxcQuTIXMB","Y01MQZgnTLmVmfd6","mpAiX5C0WaO1hKyj","exWTcogQfVe9Ax4T","PHhGInHB6KMp4Uja","LrtGlzOrNWbM6iJi","UGHjRGjv7n3IEPc7","2y2kQpOPiqXXfPLI","erEkN6UOkOSpzIrt","cZfJD6n8dJPDSum9","xHyGmhZVsZDRhpx4","BusfAeFAxNPpGTm2","hq7gj3mfj1jAK4NW","s6eqWWxBouVkoJl2","M9QzIGH15ZCISPfm","znEsQJRa4Pkzv6Xb","TnxebRyNdHY7PPnL","Lb8cKFAxqIptmvTR","K8rbD3HIRngy1uJ1","RACc69H4LDSNM79g","xmfzXfbQkOoAivWP","OtprAurWtlABzVFD","4qFsw7ncF0bXndzB","fPt14zURf4fUbKvZ","HEXiGzP3gs85XAkc","C2QxUPwQ0Hc9M9UT","fOh5g3vszDlyjB5n","9nm7eGkWj7dk0C4V","6FR2qIZNhwVcznqx","e56HmsFettz5LfUT","Yx7AjDMxJSL9XadT","EakF7Q2vqkNcKRvy","xvuwZ5yNvaYgvLEc","UMBrJcETRYUpqXYx","T9kqf3NPErbQ9wQW","a93tqI1jNL4IMQfu","zNC3kBdZcrzaLCZU","9dGIMc3Z84eU5UJT","UR56QiUkgIjnFLan","HaVnZFyJwK3VDEyv","zv8DvMa58Fckwp6E","ZaOtIk6QDWwjqSvs","NrIKkxZrEy9BOdxd","P4kn0ruKoJTKHTwo","t28816aUhJaIpO5P","WOisOaZkw2FQFzBb","pgEAaDlRuDdHTYKX","O47FH6xNwTJxD5H9","Ah3m8w0OFEU67QbN","W6OGNNvWRlAD7boq","k2tX6HCZeYqGMk9Z","lJpbL9jjjequCBmS","RpyTX46czwGGebxt","5MqVbU7RJkTF6q8h","vFLRCLhgjEUzZYVZ","VDte90EnrUoazf84","CU1vko67DAvmBDRq","Uzd1yVSB2bAb9BSb","bvUwLzEFKm1144u6","lXp5xhO3RN5ndEfI","cdmiG70wokyKAK51","SQrWqVqWhIzMpLxo","fBkmlxubuehjcSDv","hnup55x0MmPIpx9Y","nuRCpUU4K6XuXKxA","zNvICqETrk9mKYCT","UY8Wvyli28rH9U8R","jfA6Pg0EiYn24xR5","vOxFg71HZHztmQwe","Je6KAB2qxHzwkxlj","xNe3KZrQ344eA59c","8fiCSwHBB4OCY9Xp","LE7XOZktWuH8tRHY","PolHj8Gg4fsZO2pN","WB9jxdFbsbbBVR75","RuWkAIHTmfkyoNWV","U1vUWrEwgJUSwWK8","gyfa3WYE0j1tagDh","xewMsjNn8CYn3ma7","c0GJcQjGN1i5Uzt5","4h2m3VFqDlGWnpkH","FOPOb5duxLF2yuxa","lwtXJqWrrrebobIT","TkSasx261eUXeLu8","Fi59rS3qIv7g0lCw","2ElFqp2ov3i7TNcW","osLDPrZkrqmrRjfE","Ppkq2F2Zfh5L50od","8JdaZjsoUMXKfYrg","ZvzeOBLOUR4jsMu3","Fglm4zcvxIPQiypr","RvpVNaXyX6IuS3Cx","RRGoq8pce0MNuXkc","YzHVD7AQJy8yV8VW","Bnv0KHEbquRIKwMq","Gj8QG7fnbyaqjsU8","vSBQYQYYnSlohVuK","QHcapVIUUF4LdmVB","gyJf5WYV69hgTb94","S4nqwQDvSI59PjDv","CmjgfrGqLeE359BB","EGmBlIAja9tXiLcN","mGKkdiHUMeyaSXlx","WmSxkYGS8XAmBnjl","7bdmXdm3RPsLjgyS","0k0ltP8yBooq5w7r","yuCsfIqFHxuD4c2O","mRoFBa0JM5g9zy2J","47vHK2TK0m66OqvL","zAW1bjj4jphSFSe6","ia4lPb38rq2IHwv5","uI79K0FANWaUkdV2","8hUTEKuKL9uixO1B","nZKCCQVmJyERK5wi","0nxrPcBBjx7bJOUJ","GSxeCdiKOk2kfYJK","J0mxea5WKJMXn5Ue","84tZ6bbdaP4mYIR8","77L4lzB8TF5KqRHT","fCN1XOZm2aMJvw73","7ov2D2pKwG7sMMqk","rjTJDhzbHgaHqTxE","ySKq62T22IvHE70T","unJtASr97vnvUUDN","HCjtT3J1dpHZFV7V","36b9zx7KaaAwsTKN","PMm2K835VJVwwKxO","XqybCgXrQgyfbHYM","vyTmBNdINjNtONCa","ndo4d2N0c56I6yLa","UlJ7WnLIUZVL6VcU","0hzSg5f3Q3Dfhbej","qLiAZg7GfLycr0Tt","VfeyV4Lzh6mFsioe","YmLCyfljUiEZr50x","39ImX7OCF0R5wAXl","U4R0ID1fyNHT2AYu","DOjo3iE31838PpPc","1IWO9wpryYSYd6Z1","NjGUfTMryClutwg7","vvJvHs0HFlukazH0","Pd2MZ6igXKOfbqF8","o5gjHHkcv4Di5n8d","RMHaaouu5BSeI4uz","HpbxDBLM69OiG4q9","4PUJz0Uyvf8A6y0Z","ovw00oTatrQqBDLW","Dgee5hwSWeVq0R5W","V85rhjOLPZPJp5JR","WuDRM79tH1Aslmvt","ERrAQXYuqq4ISiPQ","lg8L5E8etEgl6Snx","Shkjd5zYCPevS7jF","csk4Q7XPGXRlLOdX","EsBxClmPTMQRRf81","RJkprx03leuDQyTI","aFvFbl0OtytlE8qi","qW7jBznUHu7MZrIE","LQK4V1bhsXhq6xjn","Irb714fNIBd650ET","Dn4YTeYbcSJmBKRB","hToiP0XppDfUHGB0","xQj7dsYehVLsSFpV","iMCKZcfdueyT4l3d","Cp7isDSyaYItLfYk","5S41lFNNcsr3JnKE","kfNPOe0nsAEm1MNb","qpIJAnYE084MQTSn","2pIwxor6VpBoLiCw","QgHK9jjKYL2d1Rn0","xR3AymUD97vzKtif","tJ80Nrw7dD6QaS0j","74mvbJ37O115ZWa9","47W4MuvsAewjcSai","cEq9Il9GnesfRisz","uJPtk58T9rtk2CzL","LcGdR5ubldgs8BeF","4fWIvccHQEL1sgzn","vAeQf642iiWclLri","MjMG9Cqu0e6YA0oW","fqboa3nOKVTUouGk","5xUDc5H5Ci9Mb4Bq","tiA0KDysZKUGwKLc","ouN6d7IwwxD4v3JZ","SAbDo4ySNgiS4nWl","oljwnFuE5qyw0Hxq","zYt5t2lLkUejr7mk","pfKXusYeh94GmrS8","OmSt31gfpMH4avOE","jgXc1kN4AR52pfp4","u9Maxnzrafk82gYV","0Dl9XL7ahv9C5W0H","xtVbuqJOnItLr69R","p5cDudSJ01O7MFSG","lDSgtyXx8U8wS0nn","K3rTiVtUbyG5RGlz","mlcDsl6aZpyalU0e","Iuo5LgifZLwexuXl","dxjtIm8CuSJ4XLpm","2iNZRdU15rI7c8iG","TFJtbBZUz9OmJ8DP","I95O1nUS7oKJlNX4","BLDPKhIUTBR75bT4","rdihvE5ajJ2rzfZc","2SHuZ5LXKuEpZ5wy","CU3H6mFa0ZXxeQbX","7o46qoFm1X5PvUyp","EFrE3vPhNUNAkPq4","E9MD5aSP9IPNt8As","hrkiEHba40S6Hmvv","zSjIuzEpAU54vSiz","24TakltR21fELrDK","PuULgMQUlZQ1LEhP","sipQyyYPzvgIAhz3","ShTguYAiGuALpLkt","RTLpYjLMqSE8PMmD","2c8EuDsJAXIlCXRB","Ov8ZVyXlEqsBdSZr","amrSfZ7kOMv5Ffj4","NZi7xqAiyhXI9Fzj","Mf1aFoipXSgA1JEj","FgaDBRxJkNp1nvWj","tNHRODn5pv4918UQ","39t2ojH2i808wtwn","3XaSUHu1rd4T2aRn","1qLMgQ8nJIGnbyoS","bojpxpxLRf1ClC0W","yp3N76BOUN9QVG6H","WHVeRMEMCC10KI1c","JR3Qv0N7EqVt87dv","j9ispmI07ReeqyIa","UvTsZNTcVsip3Hlp","QR3Vl6GzsQVpEO7U","Fw1jXV5qfZCBpZM1","d8ZlcGJcul7DbeBJ","n1KACX2girNGOIdL","vZMmGFfCoNN7rvcD","3M5nHkryF8s1pONw","wSekZkXSbGzSnXcp","iTV2X0SGqzNdbxrl","nIvamSseg5m0syMv","PaF6FhI8vBa1Coch","1BtTsatxgR6VsPEJ","FhWMgJdQlDY0tjVa","OfJYucpOSuLAaBkO","YYOnXV5aFqifFtRl","tbLaLdA23ErZq6N5","RqC1JH4KwJAKd09i","F8UXfuOBDDFONKZN","saQC9pCquZsMoIaF","vpIyg2MDX8xi9X10","0bgzrbEmy2ChYkt8","tz7l2vJ2OLHZ3k8w","y3Yi6cxOnGjO8b6H","aiqQbPtRql91DMwD","KcO5C0KMU5JOn7ls","TYO4pZqia37vUJ9W","AwOQo8EJU18OOC5f","mV9h11UbplsySYd6","1ev2o65PV36kaTQP","DNuh5UhagycviV36","57hy6XeIGRQNBzIZ","wa72wkDAnXT87wax","v73yEowc9nsIBx7g","JqXri8RK1eILWFzD","S60dMxnsbq1iQyoL","SeA1YeroZDQg2H1H","juphARScqybGxXcj","Qb3cDpJ3CeEWStRu","s9hlqNgGXho4hpvI","HdzklfhCjBEHLMzm","pegmtAgrHhxwrxma","f5q32drm94V1nVdl","SWewiWqHnoBDkJuQ","yqtCutWUfUSg6Bys","DbphRLjXApQq5uEg","3CN8eQ4SDDIjXcmk","LnXJwJgteXlPcyTi","a861T6iXZ6Foe7xD","D7wAkfTTwY4VNUYY","16qDQO5W6bv9Jmj9","IN2uhrY1ujjMqA2E","Brr3sOv0mB4hIT47","9P2EXXohhQ8fRtDI","fj2sow0zB2u2idfC","rzHa5D9cE2yKief0","n7yjh3WSQoECR0ME","rhhSJqRujGxxyvkV","iztTF5PujJDGd5o4","bocHnkWaSWbntVAe","OX87KKbb6RGiYdxP","2JhAJ9xrjOWSbBYp","hEIaNAlN8HlnlPas","rEqNTIr7cRMpMR2V","UZaCbMMfwOiLpq8O","aUazTC1F4hBuTh5Z","JWCIBTg13vkC5V5D","Y2d1YvotW3kHZbc0","1xLfHXGOjQRBgVY4","egGgpaVT2byGXfK0","Ldi2hVGyh73Jub4u","cj6JJE8pt0kOMKv2","qLbb2xucxkSHktiK","Auh6vOF2MqL2emqs","ccBU9oYk4ryrKz3J","8UddTCaez2Mxu2Do","CJumtvc5xyr7Ongq","9bQKUXW7zTnHGuCp","IoGY2MfSsMO9N2Xm","ySFiotPxs5g2n1ne","84H85XsgxJkHSVjQ","uoEDDMMz1lruVVHq","oOnUS02Tf6m58nQg","BLm50UpYxOIxvgkY","gSCRLHWXgAoFqMHV","IrSMP6ZIIsuvG8oi","qBrpkANWgsbTO6PJ","dCuaCh7P5PLLE71x","PLaQmLDyFDwHV8R3","oRUmIdXP9cjnhW7V","2OB2qWHcUV0DLiRM","qIyFAAMzs5z5KlQD","W0wulZxniy4sJm4Y","1i6EdW9FFjInwKsw","ooKfZNmzToPnnI0w","57eLTCAsrkdOUII8","4pJH0TbAeXu1UBnE","LQ5aLDd7ZjfZF33Q","H0l8bfFfDpCuP4G7","7SamfMNDxXU2n9kr","Lr0nveHDlw8PUAls","rEjN5fZ7snZrzSkp","sJfgJAt55jsHDmTa","mCZIbt2FtKvlXEKM","bq6MeFsjqB3fo7XZ","tznAmp33vEHy3gj1","2tQjTBuulhWhHWgs","VzM6DHlXKRZ0NLZG","Ac9zmqcbpba0uUTX","VNN4KBdZkmfMEAt8","AL8znzZJvK052qPZ","x5hglkmx71e5cbRp","QMcfELJG5ostf9k1","75lTuEx6GPvSUyji","dZxgvt6Z5vVZclfl","2nA3Is1R56KsfRgQ","Eu0GE0XA8Ej0dg93","m4qitwZ3EWPZgeCV","DDlltgGumD0uvFmH","dqLwk8iOfkPJB0Pv","DcA4e3APsTif4PRL","KaVJGNcz0bqEUYAw","jSoYmijiv3jmrmja","Y5NdgsPBoeDGhfES","V08S4YWalxA1LhGI","qthE0f4pzpY7hJLB","FbM342VfCEu9w7A3","opX1OVeLW0R6k6rH","SZh2WgcCQz0ctuMr","s4cjVhm6TOX7crvY","cdh0yPgScyw1Chsv","ZYr2QOGBwxhsILTG","ByGERbUBdt5SdRk3","5Fmbu95idfy5b5kG","oqXYaxcieN4WjP9F","fzidbDGhdSgpkhQh","yVYofEbRkBK4PPEm","PMgniviKI0Ahmve7","A4RYgTBola1SKzfu","E0nIFoCueYR3QiK6","uF356SMvSNmwnmHl","KIn3EdVYxiuWZEp2","2er0k4gwDF7tFhNz","Pf8JGUJdlGFR0Vt5","W8rEfdVLwuFvgRaD","PvsAi1gXzNGOKVSG","2drkcPx4wtBmSIM4","Ru92jXcfoHZjPiBj","80dff0xqopOKWhQf","5VnoJ8ks7g52JO3T","J25XhplhxAogCkH6","LCzbA3yVPhG2zWcC","fR9cBQpfDwRRItOF","rgLgy7Gn9g4ZHiwN","wlljKF3z6HpxbWc6","xmuH6K7GAEOASndw","MIh8ZJeKdbo8EdL5","1zYzbc7NbEDRPmOp","rBxhoxdPQMGiboPS","JZCpTwkptr7n0Qp5","q74wzFgYSgQUXWEE","uY6hO7kM9RCSOnfJ","uq9rehWSSrNhmpxx","qAiDIbbKn80VXtHy","vONgMSlOAFfr2LfT","OMNFYNTIOp9qskwT","t5L837MPl3nvnsrZ","HVfL2Ua45MyHAiLH","kvaIf2vHNKsOOjpw","5YJw4BjEcNNSSwLj","GWBhwqLeCTuVlRGV","dXQtizCuylSglUod","3T50OjT2lURZZH83","jM0cdZd1EhP7OpOP","Qnh1cQ4kL2ekebQJ","fJeGL03GlTtQZ9Pd","xoaeeLj1XiFRW85L","XQhlYIdy5FQ14vRk","ae4M5bU7xmMuBkEL","qJop2xOd2I2gilST","e1k4EX3sF7Zp3ePu","Lb8a0TA9kEMnhmPd","x0ldzLbFMlSb2dhP","Ka02PhOPuU55USL8","9mIWdv1b5WKARkCj","lkGftq30CY3znA8m","ISvtcUQiPBdIMj3c","kUl5Ie4xGivzRtnP","SzQB8mftd6MPWiSw","KdfU5KP1U03MTco7","UU65YlLdPMZLmgrR","RsNKrsFHIsouczqP","6RX8YQrdpnESX1Rm","zmd7gzWe0y2n1Suy","te5yfONjm6mSHkVk","kCvEsNykwtpv2iba","NZgUgmSNF1ZkhtXQ","z2qJg5NvsTicTMkV","OCz1gbTwY4Y1nEMY","45ZnazRsVlA8X4fP","fwh0kjqfHLRBBGQd","3I0wLDBPHoK7uFWN","OA7JeMJrsxhRCIhP","6cUHBc6GyktBv4cI","YmfJqOr9d7ZD3Cug","OvyReKeQ8R51rp0r","qNhXOoqUjYPEdux8","B5YOcVVk0GJCQLOu","f5PVrDkbrKkHAIdY","YuagkiAKp9uMv0Ud","XFZeNR4x1UCKmab8","ZGlpESyA1dqIQGgb","jzYAeysJwiN05wIx","0QszPoksLclVItJO","qHtRrEGT2r1IjkUM","ao6sLWUHZwY2RMsX","z9LItoYv0U7JtwGZ","D30DA7PO5QRaJFOv","quVQ6MQTnGN1Pi9R","Cyf4PnSLyKGiUVnP","ijtb4kAbRCGlq5ev","TxVSZHBkN4EShD8k","ab0YtUbJrsrpudGW","EBwnWNcYv5g4vpwL","NgPtGepd6eZoX5Sw","zC1fHbselcvnI7VD","f8VyfZV5WosRlJam","OlgyGkPLtz9uFRS0","mwcqW6lYUCpbGyPl","vfkURpOnyEQI57i9","MwRwmuwwkN3mxNpH","iMMgTFUTvGggZSQZ","jjlGpx4mt8m4rZak","IppLoPaCuYlIqf8m","arlOwiLNZ7duYGc2","h8X4pv1zH5VVI4z5","wG9OrB6oBykQOms2","s4KAHS6J2F5JoiPw","yjzZrYq5raUW14mM","eTkEE8493YJR9jxM","YwB8gWg5t3K3DvBq","yC1KlbmBZg2tWxDU","P7M4NPnlptrsAcTH","MTFoKSBAfEdlE8QE","U6Vi09BON0XP3VmU","mDR1dOyXVY0SUAPL","wvxfkee67CSlg7Lb","I8l0ikvklUBFgFO9","aTvqPsvowgXtMZAB","evcFxQhJEI1fJ0do","8vkcbyBurqrf2bUi","X9bWddX9rPMS1dnq","mxqmZDofKgeodmkk","zN0yF8MC1Ml8QQkH","wpejY3mQb7P4Ll74","HqUnRXzwy02VCiHu","w8OWKpfZZCwzwFaM","Q2xAJQSCqRDwn5ZK","1afBfGFDNOpNPxE9","p3gGMo4st9rvVv0k","RFKL6uHoIErtbzkE","4CxipGJXUojBEaEz","aaXJm5urZjJstFyL","D826p26rx2xKvXyk","uR5MBFEk8JP0sDcZ","MR4LXiYpFyYu7sVq","uiCPA1EpfOG3A4Ws","wu2JGgufmmJLjdX5","ueQxK5mpcxQLKj0d","jI0ZrxTd2WxsNmbC","eUSA1Rlxq3z45bL0","ObPRSBfX2RVJsVh9","Tftvr2LgpgaCp3W2","ZVRJAvnyo7sXBacq","A4RAgfDAr1dyAFwO","BjD0Hvyrr13tEkPU","9wlb88FzrUjQ5OCJ","jo7CpwrTpyY6CI56","ThN1MnkWlgiyJD6D","emB8GVaKhxY6ReLI","aEXnOEzS2YcYKeg0","J23K8yDby2XRSIoA","ZizMHBZEYpNEDw7x","FMKqv9zRuG1FzOkq","cRM1SY64FJKjXHhL","z0DR97HNYcoRFZNO","6pONliJo5w9OduBk","MCnerflFSatOqHK2","ROxiJ4dwnsw6lVwH","4i8ok5W22Ym7x5ig","JzYIn49t1M1B4aGz","f7ed3qOFAN57MlR5","wRDrI8jUiOZ4iyI5","PN2YjxScM02zcXVT","wxhodxeD2hzeAXbF","s8EI6J38rQ0s3BAP","UXwGRtUSdt9xhLI6","zQzxn9Ot4feu8uDL","JVVD9qkfOXEi5R7n","8LBf3zh0uHSFyoBU","nNA1up2OsGqOdtpK","rVzrEApionsrolh8","daiMfKoiQS0xQ3nx","BnYvc8S6j8Ddee1X","ImyitrSAtEJxxRYY","NNmvKNxjYIeGdjJB","Uq92ttuKHFQpuZxo","jCvK5N7K1uQwlu2I","dO0nKPyD4t5ygqYv","3KoHoqqYTLCJVyp7","qtfPTercaH8BRSw8","ixpsEKDjmPgUqJDI","s1TrQUwqe0zOOqHM","orkesM5F0hMp2cXU","brh8DTbNGrel3Xw6","IRJQoEK9GJS9RrL0","pthbWCkK9HabbmkI","RMTxEVl2Lfa1Cves","lAHlydLAcpoPQ4Ej","D3HtUN0QVLOWMcMJ","TytGsY2gHsIXyjtI","pbfcoYI4jmfhIzVN","l7RAZ8Jmlcx1Q76R","gglQa6HPPhKmt2Me","x5pSSm16dexvDcxi","yxpRQPim756fvnFJ","LTiIcsYLyeaYwxLE","cDrCHtjieQxeZOSM","45Dh45oRWMU1gUVe","sWNQ3ceH21kdVfxb","l97KVCZ687PFoOC3","tEa9dKpocv3sWy42","U6CuT5jaol56J3F1","vvOPMp7rLoTaKjM3","d2TGzk0WcaFjE9NG","PDDvYcEVwwqWcXXl","ZhoZGm7g0lMMG3ye","O6dD8lZzpxDHLWms","g36GMJgW7voNTur2","Y2Uu8KUnK4imFmlz","8L7ILn7ZFrkDBFZF","lUtrEQnZzIEKimwa","uNQ5MtEVnE3lmrbc","pmVSenfLKV14RyRh","utbXupp653h28tV9","eYrWGJtnSmI2RV6k","2c8P6UHCajnGQ7WR","9iu6J6DZN0hyOVYv","mQ8GDWhrRtJgjMJd","FUICSLAB6yF0sf3M","BM13XvAc6prPG5Fa","5OHI4VDVMPugxTeL","hEKWA00M4ZYPcWOK","uilQSn8utu2JL82Z","TjBPTItd5Zgc1Kbv","maLrq3y9tIiQAzZ5","de7O6JVLCm9GUiSQ","VI6vNSNSz72BuQ9i","VEv9fFqx9BVVilNZ","hKLmAbDsb8xnlcaX","1VxAkRmmGxrYLujE","bNHyI1dBUfFpkV3j","5RFzd3unp0QG3hVU","pBrPtwUhpX4zKiZ7","HKzgwbJ0CO22ljUm","9FvlNiScADIpSeLy","UMFfI7FiOktzUQ19","Xso4DfvVzQIIyfbx","g6EJWtx4A4nYe1ul","PsPoz3MG8nKtrCUo","V504az20SkRTIX9o","GGc65gaLRLrQTd9v","SZYXcqiAMBRSLDJc","cuyB3ZP6enwgOsb7","b6ne99x4LW3lFIRv","fyASSv9zJ9aUYEla","z0HYdBujiSBuFR5g","KIi5buKKpMgBH0Rl","jEEPxNtQRxAclwFH","OgWgjtychFgcTP40","7Xzp3TVmdeJ7Evbn","ecSI3BAMoXnvZX13","sh0TOW030HY0rRaH","LdoCo4K6CHMuoBby","hxcD948KTMdDFTBY","SjpCZdVJn2mWpmvm","N4PtDLLZIouxLQn1","DmLp5IgB6irZ9bOm","IDMCOaGWkTVucnQr","uFTsnpo9UkZ20uK9","zaBKnejRHSVO31u0","SRgZo0tqtUyQvqYY","jEGVczT2bINmNna1","YADYtbxXDI7gxSWp","zL0PLR2ORJ8NVT7O","MdZKcLFCQJhsmamt","VzPthEHLw2P6BiUR","FvHlZC2RCxvEauW6","Xh6hPfqvV9poFSQd","tvLpavtBJRgauUTF","eJ2Rf0Qs191yxRcI","NlSImw0blpyvF9sx","WAhK3sqvUNW9qRmL","JdEcAVMs4ig3lb6N","3AphhlzexgqYpL1y","CdiTqFTGH75WceOH","rRTxq9XdycKAXhUL","67qkTQgyTnPYGxdl","tWyCBsRlVCGqdmB8","CQSEWJjAKeAdzHFi","2QRu8Gd9wm5n2QZw","v2wTxPOGG0S5J8Xx","fR0VXCapwZxXrjlM","MQw7i1ezku6a2Jgh","tCjDdkYX3IjQspFu","GonK7wQe8zaFt2rv","2FWq5tcmnfrXOCpe","eHMhcktbhFTxnHlQ","KvlxfM8m4TUY7Lw7","5dmY8TMT6DjbaaEu","pI4JX5FA9mT0EVQm","Cf5Vgy8VpTQBWosk","2weVk7BuuEVIGbz3","kf946D3L1NCI5NG2","giNaJAAn4vHITvti","zn7yU8EN2bIznjfK","7xJHtCnid9ccq3gD","JiMcOKhbsCprvHD4","8P28rQUugY0Btcuo","RTa6VRb7zzd3Z1ih","6Vu1InqcirB2TJkK","NFSBj7V4RPmxlrb7","ZtKt3mqdaFrXnkJa","onZarGSXxMxbR0B2","UFB29kLrpXVz8DjH","Cn9uYMRkmdQjVh05","e55rYSkdaLzH7L6F","Q1bDWMGjdOvTN9FW","Ks5aJiTOU2u0LhB2","nv55mzs88fYISczV","1bISgMCXFsAYTgsQ","Igu86bYnILxvGPMh","GuQqY8uC3y8euEhO","HK8ehjuJ4E8BqZxL","VOFzHvqHl9zYYLtb","lrc3GWXBr18LoeNR","t04Ca1DNKDgJL5N8","Yu9ZO1b5Ew0bAg2w","55wLNOh4VJRr9mBU","R6beZsFtpvUdjXwY","gzAE0cij7psPXmQU","S1WW4EiWRd4J2kAm","XVMQP2iYxJO5EFur","VQ651Lnz0QkpBwnJ","DZzQZW3Doc0oJars","eX9617Ex9pgFuCD8","CfVVeT0KXvqge9hN","fkQC7F6CjevoikFF","PiekcgVf2MP0vMnz","Z3roxx3z5rEOPSVd","E937ikjfNnwpsSey","i3nzdkW20vEsoHFK","ZqD4DEjRKV7okwmz","eRZqNKTToquB7YsB","gCbqcY7vRsy2TPIh","EzGSFiLFalNGpRm6","VlfKO3IGDpI7Pcm2","UjnnLg1yPom7aJFU","CunVCyFK70AgyoA3","w92rQvifdee5vtMN","mgSRlC5Tr7Iju75a","pCqIN92adNOPeLKc","ZsE3QVRTgSaCxaeq","0xSWOvjWmG4T2DfM","Jm3BdwXijkSRfBCL","sRpCyJrYR4oZCLOp","VB5YIfUcICDuZPTu","FaeenO5jrxa0q1lV","VUXJv14NAvOvi0YS","0Gl5I7uvFQQWJ0IN","8v9ZZ6w1Xe9NQ58W","Rxb2vFdQkp5mXdiE","iYgMDVe46tTaKU5w","DFNBaM4vxMYHKu9O","u3ObwezKGRk2ctD6","KSv4NaNe8pXxYNr2","YTIV9YllCHnFbsuR","9EVmErMTYQNLwFle","1Q4iQ6Hx2eJcGS8Q","qVapq3Vp9CIrWzgu","kPK0PLjrJFmxGUSN","8EUtPXbEoVQVbOPa","ZQez3Ni5a7x8Mz8o","XCpf81DQurgLJUXY","W9mEHRpDQTHhiVb1","G78ZZX9mJjOXU0WN","9cgYA0oJmrx85cxt","ynYzFs80f4qCAHMW","6xSwfABJf0H7SzXy","LN7pACFQ8jN0QnI2","cLFGWkWxHJuKOfM4","dYdM5xYxo2CMeXQG","FNlPluu4HZVOHDRe","X3RDmMmCZdBo81Tx","2ZDGjhBd4duQzi2I","K39YkvrFqwrVW5Bh","cezPREhFremGeT3H","Zp7aeWOiEcnUg34Y","cQKZ8RBceldqqRSw","MeboW5Ml2lsujrBy","LI61AOQadS9VfQvR","gI3VoSSFq5z5Gjmn","IFNuuCsKxyK2yFW7","EZGAAe5l7VQUFCFk","uJQfalDBRcaMmrDC","FE19TiHSqLcjU8M0","xkePCwKJ58CNHp76","kBOPM5qEsBMHkbfM","MKH1LofDpjMPSLvM","5SOFFQx2Lmx7jBBt","XQlrTZzVjZGqxHnS","Si43ReaXhmGv4GDm","S4kwBuxJdSILEeN9","2vOfNdbNpSLBWjFI","4t584mtDhY8dfUWz","qfKn72S98f9vZf2U","PMv0hkn8hGv0gUHm","DszPfBEwtKlovL4Z","14TJObwkZcTLzQad","IKLCOd78Jym6jTBf","cXtQfvxFmVx6zZpz","ar8V0qJUFdjroqkG","5RimasCQEpZth1TI","Y43nT1HZpTMgjbch","ScYtuPIl9TlgZmg5","JCTtrdxlnULlOU8Z","UUuKLYW2XOS1Gvp0","UybzFUdB4p8iaMDm","ZHoly5PGNvkAKlEa","uEBCFgsujeBlkvU3","fo2yaNs51Q4Ejuky","a7SNBmqsR9SnVXGS","aALy7W1lbmdeOmVd","gv5jirv8VZkw6hpF","LpNHdAdXglKC58Na","5RKygYZbIyRIa67M","L7HrFw8zbMg7mxfO","i7uiPPZ7ZkBflzsE","qkCFMr6lcLWRUw0h","yDZbSGMDHgspsfQd","3PqIUbzALdahp8hx","k1KRsNulwAi8G7Df","oIe7SpcKyJKYHzMt","GzMG6wiCKuAebZoq","OB6sCPkQybIa7KpN","rhWvnF9K6CzzEQLa","4HTO1P3o0UgWUlMF","zTra7ut2Fhatl3Or","31wdXvviEmjXLClK","tEMurxfEsyXly5iy","pe5kVUCLjyHK84tq","144CFie6pbPnOf1V","tlRn8TYedpWTycEw","VcvSq0oF7yzBU8OA","0OeIrpFWXRJuQzkb","fmJNAbZj2GxuQ1sO","UrLJmo9Oig4XYkJH","gywVRwKge84kyOH4","7QkoDRkClCBTC4kE","9KMZEFn9bK0Sylml","LDD5WyaEERmFyKRe","32k7Uybas7mKECDf","6106HECXB8RtjBAa","6DWifIEKENOMwF5L","R2w5j630BM02poku","hw1MvGJOfPG5lu49","VmJLGgZEoCwEJeAh","yNuWGa0VvnJtYK6B","1ht7HH5Ktk7xCVxR","OpwExX5bSGUlrUWs","B0Q3TMnNfy3cBW1W","QD0VDe4VUvdY1zZd","yIjTVxyhYv1g2JUe","mxDxhPZJGHYcPpkS","hERD2WSMON9LkNcs","ohBsShJAqdeSHXLo","r8hssy9kyYB0k07I","ZjjvzlwXgp0raIFo","tcQlH4Ue0gzwjl54","AuxWLQPcdMBSYwMp","CnXauXgwhAXsRret","lTEgIVnUblEIc2tz","RatkJNwvV7bv0Huc","I2m8qe8mcXwgYqCJ","35ydn4mGah2VhOoJ","PqoXNPHljn8FnvJV","eQDZfGlvV1naMSnL","XR2IVp9rgeSU7kyO","EMUzlJNOca5fEOW3","A3Q1ehYGLPqhAnSd","5VKF70de6UB8B93f","hTDTY3zRuOYIe9bs","cxYwsnoouAS35ezq","TwIJIAuK26TPMrjp","4V7Ti0MysnI2FWTd","UaMOojGoSu9Bum8w","5pvgm5RjUPXUxfvW","wa1wVXGbUfdgDR9p","8JzalaX6N4nyqrGJ","MYXnfOQQTYgVnQvS","TfsqeIar75GuJkfE","xWjAeKIBN3fXJOTV","9g36LNsulpG9FhGE","vpeKGpmmA6CKgWOo","A9nXVLuoZf5RweJ1","Wt5EO1lQBiplZYAw","t15CJTXSXtINoElo","8DBWc6vj18fNs4B0","cw01AsShIuSZQkt8","zgexndbdYu5A6OGS","MKNDT6gDG788AdzX","C8hHlD4bMlnQDwu4","G4HHxqtl6SMPFxIP","5PID2b8fLKg4irrR","pvI5o1eZsytoTvoB","FhrrBkcHvyWSZPzI","ZxaJWFV61y6SoS0r","x8kvuM1fGz1pjMWC","37GuDD0C0rAn15lm","QtcrTiarPaXKRQz6","U6mTAJ6eAkUvRW4O","Y0xpGNkBLeJsZeDg","wK89SCXnRGjDhOFs","lG8iYfu1BgIXedQE","r6HEG0qskGF7n0Xb","DEYv2OK9LTKzN94I","R5FuhYapg1xFEeSm","9IciI7xemURHYDhu","E6ztvsPxSjDLoDfb","BHkcpFvlIDqhAqr3","WvFexOvS9e8uf966","tO66RPQ3HVx0zUa7","4cc57fjCYMilMclc","DgLj4vrZZRoZe9Cs","iFBfkVXKa4FRGtNk","aZZWAFu9Mp0ZRSH0","WDgi0UkmIWJgez0v","eyMKHbS3mf1pdUzq","fmUT7JkrbrrNVNxD","udhBtiD9rolbOXAI","OIfSrNlWWNz7XzVZ","lkykL1HMiRk9VaEe","CtXIjq8yPQrkP0O2","VUhurNOOwversCIJ","JKX8ZvNY34fUtHFx","1rEHv5btTgsP5DFk","ehLRnKm41DcoPWIS","lp9sn8J8ICgTakUY","BL3Nj4e68neHXRTw","OMk25MWk4E41juSR","1s2hqbeh4rFcu8Yk","wDF5CeGSsmrEmuba","TGxM4xRv1BIyIFPn","KvdNApIy6ZxErD9z","Mb8rDXMRZDZxj16D","cJ7wk4moxcZqk47m","P9H2PiamFg1SFTQ0","fuUgyRRewTT7HONn","tuF3TOem2wNjzQgT","BCPWgpDmWKDGNG22","bDKtEZLDwyxyevVX","7FYLxkJiwB0mZWJO","0CpU9cUr1EwV874p","BR2JbPOp8u3GJ5Xa","i7AOHZ9GYflUngoF","2ovsawB4G6MLh6Iq","gSDJm6Z4Jr68WQw6","M46clgYalT1OnwbR","IGtxRmz0pJLuJXd8","KQDFnlR7bIVmYR0g","xvVa4K1EsKWfmRXe","Sy3J5XaaIcfRe1c4","m8SaVJWfR0ebjFCN","WPmJEDuEqAOITiei","YhkjVC5VWC7grBx5","33lXxYBIRUBecfVW","85UzlQ4k0i40O7Td","YRzUMWj3eirS0UM3","ZsRELt1Y1d9bZEbO","XCoKhQ1EbH1VKqLp","V6Sdf0C0EDVdTbeE","GQrmZpf7DBiOSSvH","FAboC60S4LCHP9HA","M2TzY0K3nkVn55M6","TexPcTuOoACAaXkj","YfKxCGIvQz4b3qFO","zI13d7FN3JesrTA4","cVsFZclqeNjqz3C8","2Pl1fD6VpA0w3zD5","r2rmdBZDiQyBR8Vw","COb4rg1yNLlO9e5j","Iob2aID9QWs4zOwW","YRXjQz6QkBqqGar3","TLC0rOzU1FelqEFO","0sJYJhS9C9maBC6I","JNcHy0wkgUz5HLVv","SGW0BRxG6GIlvkor","m1fVqw3IRhbMiMaW","TOeFcARaQ4h7O38o","wX0kaiGX3nIwSXPr","IzhLNejavkNiFkZO","aZIkKxvDxkK4fLyT","q71XHzjTvGZBI0bR","S4ovGWTDXxEBXEQd","JuXrgbmZCCwf0HOD","oIcCqpKyuyCNahHx","FFmXY1GSFhkrzOKt","YG1SqTNyrZkDEg43","DMmZ92NoMyg541uN","qoBApcW85jI6SYf5","ErlShGSGwVE9I6vQ","4DIuaFgmntzFBPa8","YQHirRYtSJBM7qTn","mgSVpOWGK6lzKcbh","eeyGIuCmfwvdPcPs","fbQ3LK8HV8rYL4HJ","799bq5rjgmOxvIAY","3VRedVV8jUVaEX9y","3onvxfAGMlN10HgQ","zkuJyXzdg5AhtRmC","JoQ9VesJwZZGxbUo","xzSuLVE1CSHseKR4","MOwsTHFVupaPeQ5Z","5Ilr4HZzaOCTtVQx","xeUSN3J9aXaYpsMP","hy6sLckpG5pMwUXe","pgrCotddgFPS6oRk","QdywGkI0tDb5Y36s","O4yObIlVzL1nQn0H","BBe1LZDJqRKs4fEd","2n1aM0qPpcvIbZSx","O5aPZvCiYBQV2NhO","hezqAWYOnQ96ljdF","mtGBaiotcCdBT4Wf","qTAEJYsKWUcIsGw6","zzmZWVCGDpQb31ZE","hDyoATYEbtOLjVvx","xAG1RnFF0xjXG56s","MGi39yHCic9Fbkli","Y3LcYWwaQGUVexlR","GfaNrO7KDwu2YdyT","FPE56pBEef2pZza2","sryMl1wUSA9Av4Gm","0cEHlfB6RqNNo61F","tn1jqdou8E19YrXR","hEj1Gy9NPvVx7P4z","kkKoBzwqHDyDvNOr","9kQIXoPN8ZzXW7Ly","IW4CQ74xTUo4qmSU","PXNxKX7Be9Fimf9R","XJGcIzRL9gmWh0d9","gUNLAsoxHuj6UNMt","affzEPJr7S0ZXKUV","veL3XpUtmVFMX2iQ","znJYYZa1TYgO8gdd","gU6PImzIdIyyWdL9","wFOZfBz6VrpiA8Vd","KOZZGhSMg6OFahf6","pqAteoM6OwFohSo2","rzOVWB5pE8dqeq5G","Nunf7hcR0toWLw4V","1aBxeR3XssSpVrBP","zMSEX1Fzx7mXJWde","FSOUz30R7SY0WlE9","VwQTVWDqoCSS7yrn","PJct82A7PdpeHCPj","g2Xwi0oBtEmYkf36","S7BsxPDuKOE7QnPa","WSfRTgibJ4RnsOXY","bXpVUOjEXoSKuMQa","rblDuE5Jh4KbE2Wa","QB3CshSVf0rxGm8B","WmuDaVSObXhwofTH","9mZf3fo4jE4bFw7J","rQ9f58Cc0haDizvh","8U3Zbi6sTsALjw66","Ndm4LvBv0GxPBUal","6cGcYXDqJpyJcSPV","vV9vGUlUSRtl5Vxh","uo5zomo3tBIxPblT","joQhKmbqm2rsdTcl","hYAGWRX7uBk6ZnjH","F6vU79n6hDU6AYQh","fXjb3W9uqwJJpGQa","oB9JT7b2ZTjwR3A8","hQ0lnr0iAFU4tmlZ","JordnKU1iOzb272h","uiyr0k1TOiXLR1Er","hp74XTl4gqVon94t","VUwStMOwTICdUqYe","Ix0Z3ptw86huHnbr","4ycxgztvGe7pX50Z","2uxv2XA83iMZNChi","nrZxO8wVOmyQ1CQP","K2tRJqzcukwWoulS","zSm6W5pbwiOMyjY7","CVw8ed0p7lEQiihW","Sl8QcWlbeQaXZV8E","MG1lW0Lm8YACmeZW","h1EJ5otnbSDMmrKV","ZLOZnocC2yXoK6Uy","PDbqEr1rN59JDbMc","TL5jnjcjdvtE4k9l","pz3dTH2kARLEBYwk","NDpDYvKB7UXVvs3T","FEEuTkpRcUgVWpCQ","vxEFafGgpQqZVkdB","zsz6hgMCHv8JggNp","k4YA68qq8YIrtkhc","sNwo2MhhthA78CFu","lyXti7WI8fApRspe","w1Dw6TH5wSPmkWfR","7ccNtua3zousp4Ir","rchIHDinC52qBr0g","XER02pqpkfrGsCXJ","1f7joQUCiARjI8xY","iuyPtu1baVDpbdU2","jl8HnzkB9xpVSIMT","IkIdD4mt8CLEm54i","PbWlAdoLVQBm8MTp","s2zPATscqZ72oncl","ZirnI58kqI43Su9z","VeUbuf8OrHUYX6Rg","oyg2GLEamkiQS1x0","APF6pSNvlIychCxM","BcB1NxX5MR2FZjFW","f6lKOQX8CRNBlogb","tDBbiXjsFUGzsSMV","F0K6XtyRvYol8ztx","cw60fFTbqylN3CoZ","YmC4c9YTAq4XcTNk","ZEmJPiVVdUcmCf7G","RTo5fyZxAI8ZUhZK","4r41cU6VR4gNpPsx","cdJfVraSbaaYGMHD","EwcErBN9aMoryQO6","h2QpZymrHdUTgqPX","7q5MrWndCaNyLXEZ","0q9dDi0aV9XYMFSF","sduShsP8YPgSwO6P","lGVO43eHOTTHTewv","5BL5BRTGZrzfA4Xk","1nLBBcNSwPJ7xHA3","PcRqx36iRL9e6I1O","liyNC5NqFVPPrGwF","pWOl9AEMgezh9V0X","q3nwMmt2ZHVk3Csu","amrCXxQFrh3fJH6E","pFPOgOgMdFZgBgEK","2UXd25cNJof2EHA2","h04lMb3ZlM8twYte","lruH1ACm0iekfANO","kSB7PZjgCw56cWzI","IZyuhehUgFzISTxT","TxWtLLNNMG9JYO06","3pwLe3pwJ1osZ82t","8adej8vlHtg93FUv","5v0ebjHdu1OBhrs5","7IGhFNitTPOd8jiQ","EeDewgRBdiNLuLK4","CherrFF9kKKcL8fN","MxlPuhUqHmU3C7dg","uE1hRktNt7ZNCMRM","pVkQH6uZ1W2ki4fU","WXmqD0FhsoePGaCL","yWn6YUl0ba2p2fyR","yhIir6kE4FTWWlDU","3oyHxeGyVANzfq6l","HJykFfX70IQts647","Ah3OCsJPSKPDXJEU","09gtXt1KxIeNg41O","XCGDmWP0reLY08mt","vu4AfLEoZ2tlNgXs","mSMFdXSI0GsqNJsh","QgWiFNOtPDpZ0GlT","TjWopH99XSLtMRgt","YB4eQTTIe0Pv16cQ","JcHLZFnz9lvriiQ2","pUR5DKl4cc5xwRXo","h9FgtyEWJuECRfah","l4u7VE63Ytib66BP","ASczaIT5OUftbvut","1eF7391axvi9d2a4","EOeMUq6wxyjt0cOl","eW28ZgIvcJZy6KiX","J1BTkIirrRo0jaO4","rq01QAnQPv4h6TRm","NIlNY2YZ2qdVbDqT","6c7gyRcsgk35hkb1","sHgdQHyA7z6zWFof","AYwqAIzw1EyjU7eF","CphQauUg7oGw15TH","ALMLKCPcb4edUReT","ZLfwZzTMV2BI89X3","BQ4gBlSuNhkZsQxD","vnlisdx5QVIXsr3f","yFe7y80dAPyTbFNw","v5UmijTldihBdh6Q","sqo6pR4Gow0tH6o0","WM5EKxj7rm4s54K1","QCw01bDh6ine83jW","JtswG2h1ZYDee0VO","avPRkxPx1IBCnqrs","Sel9hpJwZcbNQ9cZ","MTMdxYzE2PpoPh9i","R4bPF6fVhHkG8Zxx","S3McpiYnB6g209iN","neCFbC38IE3q9dhM","An3yAmLe5mKEixHG","2iulmjxRb9CnECmE","NWGo8ZHzKvcby54L","IopIpgKfHiUKxHWS","S07qHB7TWVbouYY7","Rv6Z9uX974O4uIbn","0J0AZDGjJAMhH4Jw","QxVkIbUepZnbI6L6","Dq2uiuxdmS4AqrUu","h6O6Ddh2xoVfTqvT","glBqhArZWHygsckx","qNFD3pRVlWWgA2yd","pmj3stGhbkAcyi24","QArMqf4ayRbAzcsN","K01DYwM4VleqPq1V","LTY4LlXqDXq5KIyM","Z3QtMYtRDp6DMeUf","uHMvOEruG3VizNyi","J7bbRjkBKWmIjRSv","IDFJBjNZx7cK1PEl","ZJyhZIjZJRbZRshk","zQh5zb4ExC79gDH3","HEyadrkWHa07QL7I","wpg7GcSLUwndolNA","JESx2Kt5gP4Ih70K","z9c8gpENSn6hygRA","9a9y80j8tIEB6D43","wA7N5xFxVIyexvte","9TMRXCGFiZIe59ff","44uo8fsHqd2l57ew","eZAOMOzf5LZ60B9t","kI6tWwooKhjUsser","rq6oY9wbdLxi872X","KtYV6OL6EC2pF9jF","UNI5M14QqaxuvPzT","wXbvOeVOfHdQhwci","8Gk1VZBBhRLQZkN0","MB8jxoGL7LR0cNcz","rCJ7CSnivd9zfRA0","roPuonOTwYNaqxJs","lpbGoXWOmnpsjUvX","tqSYn75n0HGGXMSR","lOKqBwqKKQVjEXL6","Q2BemSbcAs1vNhQu","8Ogy3Q2OHNayOSMd","RKK1lG9m5CeVYMdf","5uihOITY6iDV0mxy","6RD3xFjlihwv9Eww","HS5Tl8JYcrCQnic8","BFFLo71VcvZX89tA","V7AINoOabwipF3ou","OGPFxqIpv23Ho7F7","FoQKiAmr1Xk8oLF8","x3NK8Q6LgYkjfaP1","1v5F4AUE0biIp2ac","HQdSGJy3V8fSOVAx","y9GwqyVdxkZiKHko","NdZxLWyECPurupwK","23TNpr2VNfz0h2yl","3aQyz2yDH5lfPzFk","Bb6onYL3ZQ2xM7qY","TVFBUBFJnJXM953i","UAI49LXz95RsUEgx","6n4BCdqBjNULD2jY","ueVGPy5vFJ6VVnph","IHTvZAa77s2XO4u9","6DB5ZAMjhfqMUxET","DrMqwzRxMyFFHCrS","RSvq2XoTrog0xVHc","eVzqvJbOOY16xio0","vsuLrGFrocM5Wb49","bNMV0X6OUchHkNPi","Fy9YEdqS1mlUufiW","qi0yOAK5bdGBe2Zf","4d8I51qIqyu5B4n1","xlvUMpJRhjadBNxN","0qOsTglSWWdFEuiw","FfRQ3kvYMxnCSaRW","z18TTfTU1evTViI2","eauXOSyeMcMu0hqV","QUPANZBd8KMIKGjo","8V2giqKlgqESHoug","uRjR4o20QxKzUb5j","cr1q4TQ8LzKilBXs","qauF7RCIGoap3cMB","LCP9XIWdNTn8XFQf","i6u8NHDAcNCdNXoF","AZJPd8kVG5b6Mwh3","OuDIc0x2qxnG6bYU","gSLwESQKnozzw0Pl","mIjAbTvTSkp0bgMA","oI0DI4JxitKFq4om","sPkLwrkiXqqYZTGX","OBtzmJkcdHcdoTNA","ortVZBpV8TEL1I9g","6JmvWjfby9sZMrGI","jWbT77E4I7jqyfvn","1IglmOd7LtK3iUcc","C6Gb65z8FBNH0tRz","NE9yjrqVaOHZJiGr","G4yEOUOeH2LGKOXP","7QkytrVXPB8ST8bd","oiGyXmlJxCodEkPS","johXY8vQzgSeQGj2","OeU8Ml5deuoqKrKs","Wfwq0iJCXu5g3uTZ","OX3Ol3XVEEb0WGTe","ZhwavutSfOLFoUKM","ukpdzJ1oNCrPBzYj","3EuSqs2zmEF6YL27","c19kmADO8dGmhqkw","FdyTUywAN8LdAEZS","O7Wk8TFy42uNSWAb","bfp0UY08srs8V90P","YJhSHtiPwUendymj","hDSy5IgE4dKuh8yX","zCeC1f8JPx2uMWM1","qWhEbiMyWDl8L9bD","X5NO55FQB0k6Gccs","G9Zu5L6Sj5UPCyUg","i0ziB2mrVTIywngh","Yll2o4QFxLHyxh9z","XhkTzh81QRbnSxGZ","aRsNMTZR5fsMPOIV","8YVwoqFgNr1aXKEx","1o0LOScvk7GL01El","c4Eu1DJo5sSChKhp","iObNNZEvN4nHl0Fr","1dMofnGLnAfVpmDs","PRCRCFeNnpXkzKsD","gz7h2tkULRMmcwPk","DFXHSLnaYU3J5vV3","5JpWfuHmf9D2fH9F","OiaYboBC5RgfRxOj","puOoiojvkYy0G2P4","0UqzziQ5d0KwP3p4","LVPWSGW8HU1Pjz6v","vizTejPAegnW7bBB","FRssPL9JlGf3p7uq","osvWJ8pHUY6GADZa","4l3GhocYaqjMDTZy","0T4LuTFAkcOt9IdC","zXT5dMK5HD9r5jYj","LrX6BjL2CUl5pC4g","HY19v3N6Wr9r58Wr","FiokkzGjofYt80tG","7aPISKKjIzGXgHDT","42TNXvgHlZ2APme6","CpXVonXJflTXLmEs","oiXiMpZGbE863xrQ","f1HLHWOSJKOlrvia","uYmAQHSVkRFE5fWp","vDEL6w3IATtrnbor","QUXI2Fr4dcPU6O1D","3fXnyYamSdfH2YLR","U2hBd4r37tBSH9JM","gJSHOcHSTGZQ1PBe","sLp3gfTSKMIeyM0S","fRMTKH1ffp5TQ9UC","nUYvB5VCgPxZNb87","KLMz0zUEpAABxwlI","tjCIYIQNIvV2NFw8","Hgjr8UGzfrorvuzE","WOXC1ba7UINokane","Y9ytPTtUWAj0KSri","4q7YimFsTz4MtuoY","MhoposKpGdi54vwc","FU7VRbQV4unNn8NF","GjVMMEzdyE3GwutY","TitloovMT6V8TIQ5","YqJVtyfsEfIToQZg","Rc3eK2U569V2E9WU","LXpT7vFw8EXVLdoJ","i8QhCYWlu4ugkeQ2","OZLmU6SUQopLYm8x","vZKIJelbj0PxYcNe","z7biHeHt3d8Gy4eO","46H2CESiWMcgc3dD","lHFi5CtSSP61GuAu","9hPG3E7OzowlLlsM","MtzCNHDmma7yuhmB","IKdHdo77upQcvyYk","qDmuTLaekaE3OoKD","cKbVvSUnHFf0wtgh","oWJiH9UZYPqKWSN7","y8bS1Z657lw1iycv","dERPk0Wtqhzo0aQw","7mq4AoJXGdTovC4T","G5SXNXCJv8znPFUW","BdB8x1cEtHWgIAEy","qyTQqkJwmbexlXlE","claqDMqMFSHY9IJD","thdE7wLpPYjPHoHc","3Uvyea0LbmL38b3o","ZoDnTvqKKPN0rRZe","DU0Eo2Q2XTltiS11","Go9kZNmYQUy9AYyB","WW3BEJNUSaV5sHrA","jCkvu1SYP1vZJYvb","CHRlzYCLt44fOg3D","i0q0y72Pocmi5La9","XJcQ1tRXCDeLHjdX","G9guyrkMCHbTq0an","IMvVqKwqBfkkdKnK","ZkyKgGYE7ScKiwlQ","83rxLd60RyaVX9Lf","hmd4MpG2SJVNZt6e","3kAF4cGgVKTCuAtu","HIrfVXR9XfCS5BDv","ikdFQHJaRZc5pxtT","ynq5pcarRHQmdR1j","LCd6yqx5JaSuUB6W","I1KWq1140dTkL0wR","wp5PrcmvkgG49hMs","Bu41E40ULXWCjnDm","KOWpuOd4K3OkL2Hg","0GokVceKBTFD0XiB","AC2IFr53Q9SZauTd","gOxNb3qzcrQAflRW","4bZksGhfaK6pZlwy","1myIUbXKQegv48aN","dFC4SmzKqE2LmpNS","duIN6SqNTWU35kQo","e6Ij3Y76i2j7PtqI","DmnmxMG98Cc4tkQB","FjSAOIp5rHG905jW","YWrd0TNXG2eMacTZ","hPRwOZb3Dv6u94f5","yqFRkwEJzFz1T0sE","zHOZzsGTf0b4Cxcf","EKCcDzBqO8RyVWk8","7Hr23B4hNkDiQ8oV","9eC6X0kwiROVrwAf","uZtPjshKhFolvpRU","QGa9C6zPTsx0l2Vx","8DiVZ9kLKbhlyu74","DyblkqMgBfmfA11d","0thSCRsfhUyPbjif","U0LYKm16POOAVHyt","ToaRaT941065tWr7","5eZ6T143NBRsOPS5","JYFCMVlOuK5cWIzF","AwrVcsBxZbKmOz2t","o3FfRsvHGj6S9WNa","HqiTz2uwS6iVNJqj","2M1tFjnzCH6xgwOr","gCo3bXxQ58VoULXL","LeppmKmHhTGPkz3q","IP8fzbRt40n5nNnX","sZJ7KUin80HPWpqq","zRZlwe9OOpoLQBlD","FCH6BaQNoT4QhSXq","YBm4IP6anhCsPEwp","3KZ0MKlb9vUulFIK","nChG9O14I8ufEmwI","M9TSUK86KuQA95ug","3ENr4Lwz3PV0poQT","DAwhpccG9YKSAbFt","FEbpsybB75WjsVEL","CBjBOMU06fCbe4lD","dnHzanjspTNrkkuK","frvRSvHYPXUsSHN1","2C1WhTOVqIpwLGJZ","Lp81OsCQzjvTjTPt","dHtrG1M7hkXWv85f","Dr5DtzAiPCCYVcNZ","lkQvTsxIx1YNSiRV","IaFy5ozQSBxXsFEr","wG3AOFoGEAbgrY2b","mBDOzxwrlCAnvB0D","GCGP2r8MYPKgDVqL","rtWcYXrHe9eqFMGi","ckGldaoLW2RpRVEA","WyEwsAoa04ZBhyq4","eg7aWNjn07CAALP8","OhWzzEb5DEC3XENC","1CQ5i5J2RU4DHtiT","8GN7OxWpfliKlm1k","bu3vOAETm8Q26l5H","5Yimz8oIcbVP3r7o","1TqlBTF6A1w97iOB","eRlD2fgniODGGNeX","gMWl1n8Pz7HnwXtL","UogrbbICC8aQNpdZ","r1rSQiQkVqeE3ONM","xCqobi1EFUpX5W4s","Aw6Jt3XJ8hkXYTEa","XErSdZ62Ia6xZaAs","2GSTCjL1z5D3BMlg","ihzn9qFl2A3TV5O9","s65ZRZKJCnIyjiMr","YsvnKC3qam9orghj","JkdGac5YaEaBrXLY","dEFEZdQxFtUtjOOy","hVSsiVEN0tUP9F1L","hmnGKRF0DiH34cPW","c30wYyNLq1RDNyDW","YGcQL9J4aH7vCzX9","WaRuMi0coeJJMsia","5UKjiYdQZdq7EM2C","LVKIRSGCDGxdbgnl","LNiGKXERLI6UT0Hv","uRiYF0vU40bdSWzj","drTxB3Xc8I9wBBjZ","ZY3LRSb09gQUH5wF","GosXxgp5mwhOn14S","oasJ7DJJwESsMIQ7","3GWxuhn2cUpUp0oJ","7kYpGm9tsX8DHGKR","KPrdukuwTzVXOh5n","lSiB75I4sQstXyj2","zXh4ZyBR8bL9KsyH","V9wvs6rBtjqkHRtW","CtI7EbhmJeTecCDP","6UxXnxARTu9y4UpL","CQIzM2nA5cbGpd1l","GBFXL430zFuUifQQ","FFN1HmGlMO9HcLpR","ppkjcUJfuJdjh65Q"]
  const nitroata = nitrolar[Math.floor(Math.random()*nitrolar.length)];
  client.channels.get("699907499876155462").send(`Nitro Kodu: https://discord.gift/${nitroata}`)
}, 5000)//milsaniye
})
// NİTO \\
