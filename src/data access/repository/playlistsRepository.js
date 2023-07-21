const NotFoundError = require('../../exeption/NotFoundError');

/* eslint-disable no-underscore-dangle */
class PlaylistsRepository {
  constructor(pool, idGenerator, dateGenereator) {
    this._pool = pool;
    this._idGenerator = idGenerator;
    this._dateGenereator = dateGenereator;
  }

  async addPlaylist(payload) {
    const { name } = payload;
    const id = `playlist-${this._idGenerator(12)}`;
    const createdAt = new this._dateGenereator().toISOString();
    const updatedAt = createdAt;

    const query = {
      text: 'INSERT INTO playlists VALUES($1, $2, $3, $4) RETURNING id',
      values: [id, name, createdAt, updatedAt],
    };

    const result = await this._pool.query(query);

    return result.rows[0].id;
  }

  async getPlaylists() {
    const query = {
      text: 'SELECT * FROM playlists',
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getPlaylistById(playlistId) {
    const query = {
      text: 'SELECT * FROM playlists WHERE id = $1',
      values: [playlistId],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }

    return result.rows[0];
  }
}

module.exports = PlaylistsRepository;
