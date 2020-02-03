const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtistSimple = './ArtistSimple';
const Image = './Image';

const releaseSchema = new Schema({
  album_group: String,
  album_type: String,
  artists: [ArtistSimple],
  available_markets: [String],
  external_urls: {
    spotify: String,
  },
  href: String,
  id: String,
  images: [Image],
  name: String,
  release_date: String,
  release_date_precision: String,
  total_tracks: Number,
  type: String,
  uri: String,
});

export default releaseSchema;
