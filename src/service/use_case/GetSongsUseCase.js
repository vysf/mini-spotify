/* eslint-disable no-underscore-dangle */
class GetSongsUseCase {
  constructor({ songsRepository }) {
    this._songsRepository = songsRepository;
  }

  async execute() {
    const songs = await this._songsRepository.getSongs();
    return songs;
  }
}

module.exports = GetSongsUseCase;
