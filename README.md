# Simple Spotify Playlist Server
Continuing previous session homework with this additional rule:

1. Make playlist as a model 
2. Track song play count in the playlist 
3. Add feature to Get list of songs to be sorted by most played

you need to add `config\database\test.json`

```json
{
  "user": <postgres username>,
  "password": <postgres password>,
  "host": <postgres localhost>,
  "port": <postgres port>,
  "database": <postgres testing database>
}
```

# How to run
Run command these below command for production:
```
npm run start
```
or development:
```
npm run start:dev
```