/* eslint-disable no-underscore-dangle */
class SongsHandler {
  constructor(injection) {
    this._container = injection;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getSongsHandler = this.getSongsHandler.bind(this);
    this.playSongHandler = this.playSongHandler.bind(this);
  }

  async postSongHandler(req, res) {
    const { addSongUseCase } = this._container;

    try {
      const songId = await addSongUseCase.execute(req.body);

      const response = {
        status: 'success',
        data: {
          songId,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(400).send(response);
    }
  }

  async getSongsHandler(req, res) {
    const { getSongsUseCase } = this._container;
    try {
      const songs = await getSongsUseCase.execute();

      const response = {
        status: 'success',
        data: {
          songs,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(400).send(response);
    }
  }

  async playSongHandler(req, res) {
    const { playSongUseCase } = this._container;
    try {
      await playSongUseCase.execute(req.params);

      const response = {
        status: 'success',
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(400).send(response);
    }
  }
}

module.exports = SongsHandler;
