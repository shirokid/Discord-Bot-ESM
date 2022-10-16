import { MessageEmbed } from "discord.js";
import Error from "../classes/Error";
import client from "../src";

export default {
  description: 'adds the music player to the server!',
  category: 'config',
  run: async (message, args) => {
    let error = new Error(message);
    let data = client.data.get(message.guild.id) || undefined;

    if (!args.length) return error.reply('Please provide a channel to setup music bot in!');
    let channel = message.guild.channels.cache.find(x => x.id == args[0]?.match(/\d+/g));
    if (!channel) return error.reply('Please provide a valid channel!');

    let embed = new MessageEmbed().setTitle(`Vibing Alone 😎`).setURL('https://google.com').setColor(client.user.accentColor)
    .setImage('')
    let msg = channel.send({ embeds: [embed], content: 'Join a voice channel and queue songs by name or url here!' });
    message.reply(`Setup Completed :)`);

    if (data) {
      client.data.delete(message.guild.id);
      client.data.set(message.guild.id, { messageId: msg.id, channelId: channel.id });
    } else client.data.set(message.guild.id, { messageId: msg.id, channelId: channel.id });
  }
}