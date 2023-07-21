/* eslint-disable no-underscore-dangle */
class PlaylistsHandlerHandler {
  constructor(injection) {
    this._container = injection;

    this.postPlaylistHandler = this.postPlaylistHandler.bind(this);
    this.getPlaylistsHandler = this.getPlaylistsHandler.bind(this);
  }

  async postPlaylistHandler(req, res) {
    const { addPlaylistUseCase } = this._container;

    try {
      const playlistId = await addPlaylistUseCase.execute(req.body);

      const response = {
        status: 'success',
        data: {
          playlistId,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(error.statusCode).send(response);
    }
  }

  async getPlaylistsHandler(req, res) {
    const { getPlaylistsUseCase } = this._container;
    try {
      const playlists = await getPlaylistsUseCase.execute();

      const response = {
        status: 'success',
        data: {
          playlists,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(error.statusCode).send(response);
    }
  }
}

module.exports = PlaylistsHandlerHandler;
