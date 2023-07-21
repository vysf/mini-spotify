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

**Note**: make sure to only use `nanoid` version 3.x.x

# How to run
Run command these below command for production:
```
npm run start
```
or development:
```
npm run start:dev
```

# API Documentation
\#Songs
- Song object
```
{
  id: string
  title: string
  artist: string
  duration: integer
  play_count: integer
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```
## POST /songs
Returns a song id that already added.
- **URL Params** <br> None
- **Body** <br> 
```
{
  title: string
  artist: string
  duration: integer
}
```
- **Headers** <br> application/json
- **Success Response**: <br> 
Code: 200 <br>
Content: 
```
  {
    id: string
  }
```

## GET /songs
Returns all songs that sorted by most played.
- **URL Params** <br> None
- **Body** <br> None
- **Headers** <br> application/json
- **Success Response**: <br> 
Code: 200 <br>
Content: 
```
{
  songs: [
    <song_object>,
    <song_object>,
    <song_object>
  ]
}
```

## GET /songs/:songId/playing
Returns played song with success message.
- **URL Params** <br> Required: `songId=[string]`
- **Body** <br> None
- **Headers** <br> application/json
- **Success Response**: <br> 
Code: 200 <br>
Content: 
```
{
  message: 'success'
}
```

\#Playlists
- playlist object
```
{
  id: string
  title: string
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

## POST /playlists
Returns a playlist id that already added.
- **URL Params** <br> None
- **Body** <br> 
```
{
  name: string
}
```
- **Headers** <br> application/json
- **Success Response**: <br> 
Code: 200 <br>
Content: 
```
{
  id: string
}
```

## GET /playlists
Returns all playlists.
- **URL Params** <br> None
- **Body** <br> None
- **Headers** <br> application/json
- **Success Response**: <br> 
Code: 200 <br>
Content: 
```
{
  playlists: [
    <playlist_object>,
    <playlist_object>,
    <playlist_object>
  ]
}
```

## GET /playlists/:playlistId/songs
Get a playlist with list of its songs.
- **URL Params** <br> Required: `playlistId=[string]`
- **Body** <br> None
- **Headers** <br> application/json
- **Success Response**: <br> 
Code: 200 <br>
Content: 
```
{
  playlist: {
    <playlist_object>,
    songs: [
      <song_object>,
      <song_object>,
      <song_object>
    ]
  }
}
```

## POST /playlists/:playlistId/songs
Add a song to playlists and return it's id.
- **URL Params** <br> Required: `playlistId=[string]`
- **Body** <br>
```
{
  songId: string
}
```
- **Headers** <br> application/json
- **Success Response**: <br> 
Code: 200 <br>
Content: 
```
{
  id: string
}
```