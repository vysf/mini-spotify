const express = require('express');

const router = express.Router();

const injection = require('../../data access/injection');
const SongsHandler = require('./handler');

const handler = new SongsHandler(injection);

router.post('/songs', handler.postSongHandler);
router.get('/songs', handler.getSongsHandler);
router.get('/songs/:songId/playing', handler.playSongHandler);

module.exports = router;
