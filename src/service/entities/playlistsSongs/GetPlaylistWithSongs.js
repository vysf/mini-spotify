/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class GetPlaylistWithSongs {
  constructor(payload) {
    this._verifyPayload(payload);

    const { playlistId } = payload;

    this.playlistId = playlistId;
  }

  _verifyPayload({ playlistId }) {
    if (!playlistId) {
      throw new Error('GET_PLAYLIST_WITH_SONGS.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof playlistId !== 'string') {
      throw new Error('GET_PLAYLIST_WITH_SONGS.NOT_MEET_TYPE_SPECIFICATION');
    }
  }
}

module.exports = GetPlaylistWithSongs;
