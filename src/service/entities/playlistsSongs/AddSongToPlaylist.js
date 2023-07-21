/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

class AddSongToPlaylist {
  constructor(payload) {
    this._verifyPayload(payload);

    const { playlistId, songId } = payload;

    this.playlistId = playlistId;
    this.songId = songId;
  }

  _verifyPayload({ playlistId, songId }) {
    if (!playlistId || !songId) {
      throw new Error('ADD_SONG_TO_PLAYLIST.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof playlistId !== 'string' || typeof songId !== 'string') {
      throw new Error('ADD_SONG_TO_PLAYLIST.NOT_MEET_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddSongToPlaylist;
