const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema({
  height: Number,
  url: String,
  width: Number,
});

export default imageSchema;
