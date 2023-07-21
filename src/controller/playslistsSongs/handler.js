/* eslint-disable no-underscore-dangle */
class PlaylistsSongsHandler {
  constructor(injection) {
    this._container = injection;

    this.postSongToPlaylistHandler = this.postSongToPlaylistHandler.bind(this);
    this.getPlaylistsSongsHandler = this.getPlaylistsSongsHandler.bind(this);
  }

  async postSongToPlaylistHandler(req, res) {
    const { addSongToPlaylistUseCase } = this._container;
    try {
      const id = await addSongToPlaylistUseCase.execute(req.params, req.body);

      const response = {
        status: 'success',
        data: {
          id,
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

  async getPlaylistsSongsHandler(req, res) {
    const { getPlaylistWithSongsUseCase } = this._container;
    try {
      const playlist = await getPlaylistWithSongsUseCase.execute(req.params);

      const response = {
        status: 'success',
        data: {
          playlist,
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
}

module.exports = PlaylistsSongsHandler;
