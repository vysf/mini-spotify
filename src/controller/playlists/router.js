const express = require('express');

const router = express.Router();

const injection = require('../../data access/injection');
const PlaylistsHandler = require('./handler');

const handler = new PlaylistsHandler(injection);

router.post('/playlists', handler.postPlaylistHandler);
router.get('/playlists', handler.getPlaylistsHandler);

module.exports = router;
