/* eslint-disable class-methods-use-this */

const GetPlaylistWithSongs = require('../entities/playlistsSongs/GetPlaylistWithSongs');

/* eslint-disable no-underscore-dangle */
class GetPlaylistWithSongsUseCase {
  constructor({ playlistsRepository, playlistsSongsRepository }) {
    this._playlistsRepository = playlistsRepository;
    this._playlistsSongsRepository = playlistsSongsRepository;
  }

  async execute(useCaseParam) {
    const { playlistId } = new GetPlaylistWithSongs(useCaseParam);
    const playlist = await this._playlistsRepository.getPlaylistById(playlistId);
    const songs = await this._playlistsSongsRepository.getSongsByPlaylistId(playlistId);

    playlist.songs = songs;
    return playlist;
  }
}

module.exports = GetPlaylistWithSongsUseCase;
