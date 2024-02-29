import mongoose, { Schema, Document } from "mongoose";

export interface IForum extends Document {
  title: string;
  content: string;
  author: string;
  thumbnail: string;
  comments: { user: mongoose.Schema.Types.ObjectId; comment: string }[];
  createdAt: Date;
  updatedAt: Date;
  likes: mongoose.Schema.Types.ObjectId[];
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
    required: true,
  },
  comments: {
    type: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
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
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    default: [],
  },
  tags: {
    type: [String],
    default: [],
  },
});

const Forum = mongoose.model<IForum>("Forum", forumSchema);
export default Forum;
