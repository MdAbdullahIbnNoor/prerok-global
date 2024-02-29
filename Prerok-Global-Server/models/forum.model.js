const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema({
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
  thumbnail: {
    type: String,
    require: true,
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Assuming you have a User model
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
    },
  ],
  tags: {
    type: [String],
    default: [],
  },
});

const Forum = mongoose.model("Forum", forumSchema);
module.exports = Forum;
