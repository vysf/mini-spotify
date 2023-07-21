/* eslint-disable no-underscore-dangle */
const AddSong = require('../entities/songs/AddSong');

class AddSongUseCase {
  constructor({ songsRepository }) {
    this._songsRepository = songsRepository;
  }

  async execute(useCasePayload) {
    const addSong = new AddSong(useCasePayload);
    const result = await this._songsRepository.addSong(addSong);
    return result;
  }
}

module.exports = AddSongUseCase;
