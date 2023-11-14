// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { token, channelName, originChannel } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// listen for any message
client.on(Events.MessageCreate, message => {
	// eslint-disable-next-line no-shadow
	const origin = client.channels.cache.find(origin => origin.name === originChannel);
	// condition for sending message
	if (!message.author.bot && origin === message.channel) {
		console.log('MessageSeen');
		console.log(message);

		const messageContent = message.content;
		const user = message.author.username;
		console.log('Content');
		console.log(messageContent);
		console.log('User');
		console.log(user);


		// find channel to send message to
		// eslint-disable-next-line no-shadow
		const channel = client.channels.cache.find(channel => channel.name === channelName);

		// let timeStr = result[1].split(' ');
		// console.log(timeStr);
		// let hours = timeStr[3], minutes = timeStr[5], seconds = timeStr[8];

		// eslint-disable-next-line no-undef
		const embed = new EmbedBuilder();
		embed.setTitle('Mensaje de ' + user);
		embed.setDescription(messageContent);

		message.delete();

		channel.send({ content: '', embeds: [embed] });

	}
	else {
		console.log('did not send');
	}


});
// Log in to Discord with your client's token
client.login(token);