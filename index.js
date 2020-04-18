//NASTAVENÍ ROBOTA
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njg3Nzg0ODc0MTc3OTg2NjAw.Xmq5LA.8MYptNrD5FkymqrZoOJynlTOoRM';

bot.on('ready', () =>{
  console.log('Proki je online :) Bot který cenzuruje váš server :D');

///Bot hraje hru
bot.user.setActivity("!help")
})

bot.login(token);
//CENZURA NEVHODÝCH SLOV NA SERVERU
///runs the message looker thingy
bot.on('message', async message => {
    //1 blacklisted words
    let blacklisted = ['dildo', 'vibrátor', 'kunda', 'péro', 'nehoň', 'honit', 'fízl', 'porno', 'kokosko', 'pice', 'nigga', 'sráč', 'píčo', 'píči', 'debile', 'debílku', 'negr', 'pičusi', 'píče', 'noob', 'prdel', 'prdele', 'magore', 'idiote', 'sračka', 'sračko', 'fraško', 'píčovina', 'picovina', 'pico', 'pica', 'sracka', 'sracko', 'boobs', 'ass', 'fuck', 'fuckyou', 'bitch', 'niga', 'shit', 'shitty', 'kokot', 'kokote', 'kokotko', 'idiot', 'idiote', 'debil', 'kurva', 'kurwa', 'pici', 'https://cdn.discordapp.com/attachments/553960118694182922/682275975303921673/VID-20190529-WA0006_2.mp4'] //words put , after the word
  
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
        message.delete();
    
        message.channel.send('```Promiň, ale tvá správa obsahovala vulgární slovo a musela být smazána !```');
      
    }
})

bot.on('message',message => {
  if(message.content.toLowerCase() === '!goodnight')
    message.channel.send('Oh hey \n I was just boutta go to bed \n I know we couldn´t skype tonight \n  But that´s alright \n Godnight girl I´ll see tomorrow \n https://tenor.com/view/twomad-happy-laugh-fall-gif-14365056');
});

bot.on('message',message => {
  if(message.content.toLowerCase() === '!romano je gay')
    message.channel.send('https://www.kindpng.com/picc/m/266-2668327_image-yellow-reverse-card-uno-hd-png-download.png');
});

bot.on('message',message => {
  if(message.content.toLowerCase() === '!yeet')
    message.channel.send('https://media1.tenor.com/images/5470135dbd2fdcf89b807feb324b019d/tenor.gif?itemid=15028332');
});

bot.on('message',message => {
  if(message.content.toLowerCase() === '!ok boomer')
    message.channel.send('https://media.tenor.com/images/7a73eb8162c42d2b3efda72ceb31c69d/tenor.gif');
});

bot.on('message',message => {
  if(message.content.toLowerCase() === '!help')
    message.channel.send(' __**Memes**__ \n   **!yeet** - YEET! \n   **!ok boomer** - *boss music playing* \n   **!romano je gay** - *no you ( ͡° ͜ʖ ͡°)* \n    **!goodnight** - *And you did this for what ?*\n __**Ostatní**__ \n **Cenzura slov** ');
});

