import fs from 'fs';

export default async (client) => {
  fs.readdirSync('./commands').filter(f => f.endsWith('.js')).forEach(file => {
    let pull = require(`../commands/${file}`);
    pull.name = pull.name || file.replace('.js', '');

    client.commands.set(pull.name, pull);
    if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
  });
}