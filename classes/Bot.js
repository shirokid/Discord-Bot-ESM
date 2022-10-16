import { Player } from "discord-player";
import { Client, Collection } from "discord.js";
import Database from "easy-json-database";

class Bot extends Client {
  constructor(args){
    super(args);

    this.commands = new Collection();
    this.buttons = new Collection();
    this.data = new Database(args.storage);
    this.token = args.token;
    this.prefix = args.prefix;
    this.dev = args.developerId;
    this.player = new Player(this);
    this.handlers = args.handlers;

  }
  
  async run(){
    super.login(this.token);
    if (!Array.isArray(this.handlers)) return console.error('Type of handlers should be an Array!');
    this.handlers.forEach(handler => require(`../handlers/${handler}.js`)(this));
    console.log('Client initialized');
  }
}

export default Bot;