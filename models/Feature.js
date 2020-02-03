const mongoose = require('mongoose');

const { Schema } = mongoose;

const featureSchema = new Schema({
  danceability: Number,
  energy: Number,
  key: Number,
  loudness: Number,
  mode: Number,
  speechiness: Number,
  acousticness: Number,
  instrumentalness: Number,
  liveness: Number,
  valence: Number,
  tempo: Number,
  type: String,
  id: String,
  uri: String,
  track_href: String,
  analysis_url: String,
  duration_ms: Number,
  time_signature: Number,
});

export default featureSchema;
