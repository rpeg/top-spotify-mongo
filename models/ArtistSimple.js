const mongoose = require('mongoose');

const { Schema } = mongoose;

const artistSimpleSchema = new Schema({
  external_urls: {
    spotify: String,
  },
  href: String,
  id: String,
  name: String,
  type: String,
  uri: String,
});

export default artistSimpleSchema;
