const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likephotoSchema = new Schema({
  like: Number,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  photoId:{
    type: Schema.Types.ObjectId,
    ref: 'Photo'
  },
  createdAt: { 
    type: Date,
    default: Date.now
  },
});

const Likephoto = mongoose.model('Likephoto', likephotoSchema);

module.exports = Likephoto