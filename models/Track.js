const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtistSimple = './ArtistSimple';
const Image = './Image';

const trackSchema = new Schema({
  album: {
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
  },
  artists: [ArtistSimple],
  available_markets: [String],
  disc_number: Number,
  duration_ms: Number,
  explicit: Boolean,
  external_ids: {
    isrc: String,
  },
  external_urls: {
    spotify: String,
  },
  href: String,
  id: String,
  is_local: Boolean,
  name: String,
  popularity: Number,
  preview_url: String,
  track_number: Number,
  type: String,
  uri: String,
});

export default trackSchema;
