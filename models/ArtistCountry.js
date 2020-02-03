const mongoose = require('mongoose');

const { Schema } = mongoose;

const artistCountrySchema = new Schema({
  artist: String,
  country: String,
});

export default artistCountrySchema;
