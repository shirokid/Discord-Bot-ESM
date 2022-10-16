import client from '../src';
import Error from '../classes/Error';

class Player {
  constructor(msg) {
    this.queue = client.player.createQueue(msg.guild.id, {
      volumeSmoothness: 0.05,
      leaveOnEnd: true,
      leaveOnEmpty: true,
      autoSelfDeaf: false,
      leaveOnStop: true,
    });

    this.error = new Error(message);
  }

  async play(message) {
    if (!message.member.voice.channel) return error.reply(`Join a voice channel first`);
    if (!this.queue.connection) await this.queue.connect(message.member.voice.channel);

    let results = await this.queue.player.search(message.content, {
      searchEngine: 0,
      requestedBy: message.author
    });

    if (results.playlist) {
      if (this.queue.playing) await this.queue.addTracks(results.tracks)
      .then(() => message.channel.send(`Queued from \`${results.playlist.title}\``));
      else await this.queue.addTrack(results.tracks[0])
      .then(() => this.queue.addTracks(results.tracks.slice(1)));
    } else {
      if (this.queue.playing) this.queue.addTrack(results.tracks[0]);
      else this.queue.play(results.tracks[0]);
    }

    return results;
  }
}

export default Player;