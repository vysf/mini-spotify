/* eslint-disable no-underscore-dangle */
const AddPlaylist = require('../entities/playlists/AddPlaylist');

class AddPlaylistUseCase {
  constructor({ playlistsRepository }) {
    this._playlistsRepository = playlistsRepository;
  }

  async execute(useCasePayload) {
    const addPlaylist = new AddPlaylist(useCasePayload);
    const result = await this._playlistsRepository.addPlaylist(addPlaylist);
    return result;
  }
}

module.exports = AddPlaylistUseCase;
