import discord from 'discord.js';
import { token } from './config.json';
import checkMessage from './utils/checkmessage';
import reply from './utils/reply';

const bot = new discord.Client();

bot.once('ready', () => {
    console.log(`Logged in as ${bot.user?.username}`);
});

bot.on('message', msg => {
    if(checkMessage(msg)) return;
    reply(msg, bot);
});

bot.login(token);