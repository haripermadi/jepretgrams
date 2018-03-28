const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  caption: String,
  image: String,
  createdAt: { 
    type: Date,
    default: Date.now
  },
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo