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

Client.on("message", (message) => {
    if (message.author.bot) return false; // If the message is sent by a bot, we ignore it.
    if (message.channel.id == "502669189606146058") { // Checking if the message is sent in a certain channel.
        let Channel = message.client.channels.get("502669189606146058"); // Getting the channel object.
        console.log(`New message in #${Channel.name} from ${message.author.tag}: ${message.content}`);
    };
});


//don't touch this
client.login(token);
