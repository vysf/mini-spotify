/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

const PlaySong = require('../entities/songs/PlaySong');

class PlaySongUseCase {
  constructor({ songsRepository }) {
    this._songsRepository = songsRepository;
  }

  async execute(useCaseParam) {
    const { songId } = new PlaySong(useCaseParam);
    const result = await this._songsRepository.playCountSong(songId);
    return result;
  }
}

module.exports = PlaySongUseCase;
