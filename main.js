const Discord = require('discord.js');

//import keywords
const { prefix, token, channelName, originChannel } = require('./config.json');
const client = new Discord.Client();

//embedded message
const { Client, MessageEmbed } = require('discord.js');

//ready check
client.once('ready', () => {
    console.log('ready');
});



//listen for any message
client.on('message', message => {

    const origin = client.channels.cache.find(origin => origin.name === originChannel)

    console.log('Seen');
    //condition for sending message
    if(!message.author.bot && origin === message.channel){

        console.log(message);
        
        var mvpStr = message.content;
        var user = message.author.username;
        var result = mvpStr.split('\n');
        console.log(mvpStr);
        console.log(user);
        console.log(result);


        //find channel to send message to
        const channel = client.channels.cache.find(channel => channel.name === channelName)

        //let timeStr = result[1].split(' ');
        //console.log(timeStr);
        //let hours = timeStr[3], minutes = timeStr[5], seconds = timeStr[8];

        const embed = new Discord.MessageEmbed()
            .setTitle('Mensaje de')
             embed.addField(user)
             embed.addField(result)
            
        message.delete();

        channel.send(embed);

    }
    else{
        console.log('did not send');
    }
   

});

//don't touch this
client.login(token);
