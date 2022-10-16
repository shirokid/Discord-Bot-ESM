import { MessageEmbed } from "discord.js";

export default class Error {
  constructor(message) {
    this.message = message
  }

  async reply(content) {
    content.toString();
    if (typeof content != 'string') return console.error(`Type of error content should be a string!`);
    content = `❌ | ${content}`;

    let embed = new MessageEmbed().setDescription(content).setColor('RED');
    this.message.reply({ embeds: [embed], allowedMention: false });
  }

  async send(content) {
    content.toString();
    if (typeof content != 'string') return console.error(`Type of error content should be a string!`);
    content = `❌ | ${content}`;

    let embed = new MessageEmbed().setDescription(content).setColor('RED');
    this.message.channel.send({ embeds: [embed], allowedMention: false });
  }
}