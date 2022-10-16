import { MessageEmbed } from "discord.js";
import client from "../src";

export default {
  description: 'Returns the web socket ping of bot',
  category: 'misc',
  run: async (message, args) => {
    let embed = new MessageEmbed().setDescription(`🏓 Pong! | **${client.ws.ping}**ms ping.`);

    await message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
  }
}