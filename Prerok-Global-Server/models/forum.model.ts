import mongoose, { Schema, Document } from 'mongoose';

interface IForum extends Document {
  title: string;
  content: string;
  author: string;
  thumbnail: string;
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  tags: string[];
}

const forumSchema: Schema = new mongoose.Schema({
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
  comments: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  tags: {
    type: [String],
    default: [],
  },
});

const Forum = mongoose.model<IForum>("Forum", forumSchema);
module.exports = Forum;
