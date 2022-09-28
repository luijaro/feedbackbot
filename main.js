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
    console.log('${message.content}');

    
});

//don't touch this
client.login(token);
