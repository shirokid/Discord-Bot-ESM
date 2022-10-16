import client from "../src";

export default {
  run: async () => {
    console.log(`Logged in with ${client.ws.ping} ms ping as ${client.user.username}!`);
  }
}