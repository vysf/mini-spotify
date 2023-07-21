const express = require('express');

const router = express.Router();

const injection = require('../../data access/injection');
const PlaylistsSongsHandler = require('./handler');

const handler = new PlaylistsSongsHandler(injection);

router.post('/playlists/:playlistId/songs', handler.postSongToPlaylistHandler);
router.get('/playlists/:playlistId/songs', handler.getPlaylistsSongsHandler);

module.exports = router;
