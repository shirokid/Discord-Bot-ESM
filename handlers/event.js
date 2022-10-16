import fs from 'fs';

export default async (client) => {
  fs.readdirSync('./events').filter(f => f.endsWith('.js')).forEach(file => {
    let pull = require(`../events/${file}`);
    pull.event = pull.event || file.replace('.js', '');

    client.on(pull.event, pull.run);
  });
}