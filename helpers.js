const ChatClient = require('twitch-chat-client');
const TwitchClient = require('twitch');

const twitchClient = TwitchClient.withCredentials(process.env.CLIENT_ID, process.env.ACCESS_TOKEN);

async function connectToChat(channel) {
	const chatClient = ChatClient.forTwitchClient(twitchClient, { channels: [channel] });

	await chatClient.connect();

	return chatClient;
}

function exec(path, arg) {
	const run = require('python-shell').PythonShell.run;

	run(path, { args: arg }, (err) => {
		if (err) throw err;
	});
}

module.exports = {
	connectToChat,
	exec,
};
