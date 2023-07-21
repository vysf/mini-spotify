/* eslint-disable no-underscore-dangle */
const AddSongToPlaylist = require('../entities/playlistsSongs/AddSongToPlaylist');

class AddSongToPlaylistUseCase {
  constructor({ songsRepository, playlistsRepository, playlistsSongsRepository }) {
    this._songsRepository = songsRepository;
    this._playlistsRepository = playlistsRepository;
    this._playlistsSongsRepository = playlistsSongsRepository;
  }

  async execute(useCasePayload, useCaseParam) {
    const { playlistId, songId } = new AddSongToPlaylist({ ...useCasePayload, ...useCaseParam });

    // validate existing ids
    await this._songsRepository.getSongById(songId);
    await this._playlistsRepository.getPlaylistById(playlistId);

    const result = await this._playlistsSongsRepository.addSongToPlaylist(playlistId, songId);
    return result;
  }
}

module.exports = AddSongToPlaylistUseCase;
