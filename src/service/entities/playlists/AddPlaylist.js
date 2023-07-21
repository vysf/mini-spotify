/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

class AddPlaylist {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name } = payload;

    this.name = name;
  }

  _verifyPayload({ name }) {
    if (!name) {
      throw new Error('ADD_PLAYLIST.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string') {
      throw new Error('ADD_PLAYLIST.NOT_MEET_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddPlaylist;
