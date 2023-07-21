/* eslint-disable no-underscore-dangle */
const NotFoundError = require('../../exeption/NotFoundError');

class SongsRepository {
  constructor(pool, idGenerator, dateGenereator) {
    this._pool = pool;
    this._idGenerator = idGenerator;
    this._dateGenereator = dateGenereator;
  }

  async addSong(payload) {
    const { title, artist, duration } = payload;
    const id = `song-${this._idGenerator(12)}`;
    const createdAt = new this._dateGenereator().toISOString();
    const updatedAt = createdAt;

    const query = {
      text: 'INSERT INTO songs VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, title, artist, duration, createdAt, updatedAt],
    };

    const result = await this._pool.query(query);

    return result.rows[0].id;
  }

  async getSongs() {
    const query = {
      text: 'SELECT * FROM songs ORDER BY play_count DESC',
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getSongById(id) {
    const query = {
      text: 'SELECT * FROM songs WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Lagu tidak ditemukan');
    }

    return result.rows[0];
  }

  async playCountSong(id) {
    const query = {
      text: 'UPDATE songs SET play_count = play_count + 1 WHERE id = $1 RETURNING id, play_count',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal menghitung lagu');
    }

    return result.rows[0];
  }
}

module.exports = SongsRepository;
