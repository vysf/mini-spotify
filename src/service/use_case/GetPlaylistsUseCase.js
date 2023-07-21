/* eslint-disable no-underscore-dangle */
class GetPlaylistsUseCase {
  constructor({ playlistsRepository }) {
    this._playlistsRepository = playlistsRepository;
  }

  async execute() {
    const playlists = await this._playlistsRepository.getPlaylists();
    return playlists;
  }
}

module.exports = GetPlaylistsUseCase;
