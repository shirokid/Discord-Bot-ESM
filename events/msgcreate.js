import Player from '../helper/player';
import client from '../src';

export default {
  event: 'messageCreate',
  run: async (msg) => {
    let music = client.players.get(msg.guild.id) || undefined;
    let { prefix, dev } = client;
    if (!msg.guild || msg.author.bot) return;

    let args = msg.content.slice(prefix.length).trim().split(/ +/);
    let cmd = args.shift().toLowerCase();

    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (!command) return; 

    if (music && music.channelId == msg.channelId) {
      await msg.delete();

      
    }
  }
}