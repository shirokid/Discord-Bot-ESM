require('dotenv').config();
console.clear();

import Bot from '../classes/Bot';

let intents = ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_VOICE_STATES'];
let partials = ['USER', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'];
const client = new Bot({
  intents,
  partials,
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  developerId: process.env.DEV,
  handlers: ['event', 'command', 'button'],
  storage: './database.json'
});

client.run();

export default client;