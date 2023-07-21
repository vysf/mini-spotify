/* eslint-disable no-underscore-dangle */
const NotFoundError = require('../../exeption/NotFoundError');

class playlistsSongsRepository {
  constructor(pool, idGenerator) {
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addSongToPlaylist(playlistId, songId) {
    const id = `playlistsong-${this._idGenerator(12)}`;

    const query = {
      text: 'INSERT INTO playlists_songs VALUES($1, $2, $3) RETURNING id',
      values: [id, playlistId, songId],
    };

    const result = await this._pool.query(query);

    return result.rows[0].id;
  }

  async getSongsByPlaylistId(playlistId) {
    const query = {
      text: `SELECT songs.id, songs.title, songs.artist, songs.duration, songs.play_count FROM songs
      LEFT JOIN playlists_songs ON playlists_songs.song_id = songs.id
      WHERE playlists_songs.playlist_id = $1 ORDER BY songs.play_count DESC`,
      values: [playlistId],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Isi Playlist Kosong');
    }

    return result.rows;
  }
}

module.exports = playlistsSongsRepository;
