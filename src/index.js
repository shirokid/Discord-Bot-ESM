require('dotenv').config();
console.clear();

import Bot from '../classes/Bot';

const client = new Bot({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_VOICE_STATES'],
  partials: ['USER', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'],
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  developerId: process.env.DEV,
  handlers: ['event', 'command', 'button'],
  storage: './database.json',
});

client.run();

export default client;