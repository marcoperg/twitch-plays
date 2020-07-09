require('dotenv').config();
const resolve = require('path').resolve;

const { connectToChat, exec } = require('./helpers');

async function main() {
	const chatClient = await connectToChat('marcopg2');

	const listener = chatClient.onPrivmsg((channel, user, message, msg) => {
		console.log(message);

		if (Number(message)) {
			exec(resolve('./menus.py'), message);
		}

		switch (message) {
			// Movement interactions
			case 'w':
				exec(resolve('./move.py'), 'w');
				break;

			case 'a':
				exec(resolve('./move.py'), 'a');
				break;

			case 's':
				exec(resolve('./move.py'), 's');
				break;

			case 'd':
				exec(resolve('./move.py'), 'd');
				break;

			case 'jump':
				exec(resolve('./move.py'), 'space');
				break;

			// Mouse interactions
			case 'hit':
				exec(resolve('./mouse.py'), 'hit');
				break;

			case 'destroy':
				exec(resolve('./mouse.py'), 'destroy');
				break;

			case 'stop':
				exec(resolve('./mouse.py'), 'stop');
				break;

			case 'inter':
				exec(resolve('./mouse.py'), 'inter');
				break;

			case 'm.rigth':
				exec(resolve('./mouse.py'), 'rigth');
				break;

			case 'm.left':
				exec(resolve('./mouse.py'), 'left');
				break;

			case 'm.up':
				exec(resolve('./mouse.py'), 'up');
				break;

			case 'm.down':
				exec(resolve('./mouse.py'), 'down');
				break;

			// Menus interactions
			case 'q':
				exec(resolve('./menus.py'), 'q');
				break;

			case 'e':
				exec(resolve('./menus.py'), 'e');
				break;

			default:
				break;
		}
	});
}

main();
