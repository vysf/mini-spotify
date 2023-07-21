/* istanbul ignore file */

// internaljs module
const date = Date;

// external agency
const { nanoid } = require('nanoid');
const pool = require('./database/postgres/pool');

// repository
const SongsRepository = require('./repository/songsRepository');
const PlaylistsRepository = require('./repository/playlistsRepository');
const PlaylistsSongsRepository = require('./repository/playlistsSongsRepository');

// use case
const AddSongUseCase = require('../service/use_case/AddSongUseCase');
const GetSongsUseCase = require('../service/use_case/GetSongsUseCase');
const AddPlaylistUseCase = require('../service/use_case/AddPlaylistUseCase');
const GetPlaylistsUseCase = require('../service/use_case/GetPlaylistsUseCase');
const AddSongToPlaylistUseCase = require('../service/use_case/AddSongToPlaylistUseCase');
const GetPlaylistWithSongsUseCase = require('../service/use_case/GetPlaylistWithSongsUseCase');
const PlaySongUseCase = require('../service/use_case/PlaySongUseCase');

const dataAccessInstanceContainer = {
  songsRepository: new SongsRepository(pool, nanoid, date),
  playlistsRepository: new PlaylistsRepository(pool, nanoid, date),
  playlistsSongsRepository: new PlaylistsSongsRepository(pool, nanoid),
};

const useCaseInstanceContainer = {
  addSongUseCase: new AddSongUseCase({
    songsRepository: dataAccessInstanceContainer.songsRepository,
  }),
  getSongsUseCase: new GetSongsUseCase({
    songsRepository: dataAccessInstanceContainer.songsRepository,
  }),
  addPlaylistUseCase: new AddPlaylistUseCase({
    playlistsRepository: dataAccessInstanceContainer.playlistsRepository,
  }),
  getPlaylistsUseCase: new GetPlaylistsUseCase({
    playlistsRepository: dataAccessInstanceContainer.playlistsRepository,
  }),
  addSongToPlaylistUseCase: new AddSongToPlaylistUseCase({
    songsRepository: dataAccessInstanceContainer.songsRepository,
    playlistsRepository: dataAccessInstanceContainer.playlistsRepository,
    playlistsSongsRepository: dataAccessInstanceContainer.playlistsSongsRepository,
  }),
  getPlaylistWithSongsUseCase: new GetPlaylistWithSongsUseCase({
    playlistsRepository: dataAccessInstanceContainer.playlistsRepository,
    playlistsSongsRepository: dataAccessInstanceContainer.playlistsSongsRepository,
  }),
  playSongUseCase: new PlaySongUseCase({
    songsRepository: dataAccessInstanceContainer.songsRepository,
  }),
};

module.exports = {
  ...dataAccessInstanceContainer,
  ...useCaseInstanceContainer,
};
