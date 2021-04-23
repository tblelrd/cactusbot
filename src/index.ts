import discord from 'discord.js';
import web from './background/web';
import checkMessage from './utils/checkmessage';
import normalPersonReply from './utils/normalPersonReply';
import reply from './utils/reply';

const bot = new discord.Client();

bot.once('ready', () => {
    console.log(`Logged in as ${bot.user?.username}`);
    web(bot, Date.now());
});

bot.on('message', msg => {
    if(checkMessage(msg)) return normalPersonReply(msg);
    reply(msg, bot);
});


const Database = require("@replit/database")
const db = new Database()
db.get("token").then((token: any)=> {
	bot.login(token);
});
