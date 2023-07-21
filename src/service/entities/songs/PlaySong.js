/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class PlaySong {
  constructor(payload) {
    this._verifyPayload(payload);

    const { songId } = payload;

    this.songId = songId;
  }

  _verifyPayload({ songId }) {
    if (!songId) {
      throw new Error('PLAY_SONG.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof songId !== 'string') {
      throw new Error('PLAY_SONG.NOT_MEET_TYPE_SPECIFICATION');
    }
  }
}

module.exports = PlaySong;
