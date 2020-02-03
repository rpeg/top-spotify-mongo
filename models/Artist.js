const mongoose = require('mongoose');

const { Schema } = mongoose;

const Image = './Image';

const artistSchema = new Schema({
  external_urls: {
    spotify: String,
  },
  followers: {
    href: String,
    total: Number,
  },
  genres: [String],
  href: String,
  id: String,
  images: [Image],
  name: String,
  popularity: Number,
  type: String,
  uri: String,
});

export default artistSchema;
