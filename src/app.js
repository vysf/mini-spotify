/* eslint-disable no-console */
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const songs = require('./controller/songs/router');
const playlists = require('./controller/playlists/router');
const playlistsSongs = require('./controller/playslistsSongs/router');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('/v1', songs);
app.use('/v1', playlists);
app.use('/v1', playlistsSongs);

// app.use((err, req, res, next) => {
//   console.log('ini error',req.body)
//   if (err instanceof Error) {
//     console.log('ini error',err)
//   }
//   next()
// });

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server run on http://${process.env.HOST}:${process.env.PORT}`);
});
