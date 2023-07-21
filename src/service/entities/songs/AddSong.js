/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

class AddSong {
  constructor(payload) {
    this._verifyPayload(payload);

    const { title, artist, duration } = payload;

    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  _verifyPayload({ title, artist, duration }) {
    if (!title || !artist || !duration) {
      throw new Error('ADD_SONG.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof title !== 'string' || typeof artist !== 'string' || typeof duration !== 'number') {
      throw new Error('ADD_SONG.NOT_MEET_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddSong;
