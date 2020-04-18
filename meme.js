//NASTAVENÍ ROBOTA
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njg3Nzg0ODc0MTc3OTg2NjAw.Xmq5LA.8MYptNrD5FkymqrZoOJynlTOoRM';

bot.on('ready', () =>{
    console.log('Proki je online :) Bot který cenzuruje váš server :D');
})

bot.login(token);
//CENZURA NEVHODÝCH SLOV NA SERVERU
///runs the message looker thingy
bot.on('message', async message => {
    //1 blacklisted words
    let blacklisted = ['heygirl'] //words put , after the word
  
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
    
        message.channel.send('Hey girl !');
        message.channel.send('I know we couldn´t skype tonight !');
        message.channel.send('So See you tommorow ');
        message.channel.send('Goodnight ! ( ͡° ͜ʖ ͡°)');
        message.channel.send('||https://tenor.com/view/twomad-happy-laugh-fall-gif-14365056||');
    }  
  });
 