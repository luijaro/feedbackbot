const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on("message", (message) => {
    if (message.author.bot) return false; // If the message is sent by a bot, we ignore it.
    if (message.channel.id == "502669189606146058") { // Checking if the message is sent in a certain channel.
        let Channel = message.client.channels.get("502669189606146058"); // Getting the channel object.
        console.log(`New message in #${Channel.name} from ${message.author.tag}: ${message.content}`);
    };
});

Client.login("NzQ0NzY1NTY3MDQ2NTE2Nzg2.GoKXzo.kNxG_kXo7Vg3Olb0Lya1Kfea6VxX72Rx39Ys1o");
