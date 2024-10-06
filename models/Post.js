const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  }
});

// Export the model
module.exports = mongoose.model('Post', PostSchema);
