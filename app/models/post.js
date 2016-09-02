var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  content: String,
  _author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  datePosted: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Post', postSchema);
