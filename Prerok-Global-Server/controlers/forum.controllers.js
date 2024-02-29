const { ObjectId } = require("mongodb");
const Forum = require("../models/forum.model");
const User = require("../models/user.model");

// Controller to get a forum by forum id
exports.getForumById = async (req, res) => {
  try {
    const id = req.params.id;
    const forum = await Forum.findById(id);
    res.status(200).send(forum);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Controller to get all forums
exports.getAllForums = async (req, res) => {
  try {
    const forums = await Forum.find();
    res.status(200).send(forums);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Controller to create a new forum
exports.createForum = async (req, res) => {
  try {
    const forumData = req.body;
    const newForum = new Forum({
      title: forumData.title,
      content: forumData.content,
      thumbnail: forumData.thumbnail,
      author: forumData.author,
      tags: forumData.tags,
    });
    console.log(
      newForum.title,
      newForum.content,
      newForum.thumbnail,
      newForum.author
    );
    const result = await newForum.save();
    res.status(201).send({
      success: true,
      message: "Forum created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Controller to update forum details by forum id
exports.updateForum = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedForum = await Forum.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).send(updatedForum);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Controller to delete a forum by forum id
exports.deleteForum = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Forum.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.likeForum = async (req, res) => {
  try {
    const { forumId, userEmail: email } = req.body;

    const user = await User.findOne({ email });

    const userId = user._id;
    console.log(userId);
    const forum = await Forum.findById(forumId);
    console.log(forum);
    if (!forum) {
      return res.status(404).send({ message: "Forum not found" });
    }
    console.log("here");
    if (forum.likes.includes(userId)) {
      return res
        .status(400)
        .send({ message: "You have already liked this forum" });
    }
    forum.likes.push(userId);
    await forum.save();
    res.status(200).send({ message: "Forum liked successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Controller to add a comment to a forum
exports.addComment = async (req, res) => {
  try {
    const { forumId, userId, comment } = req.body;
    const forum = await Forum.findById(forumId);
    if (!forum) {
      return res.status(404).send({ message: "Forum not found" });
    }
    forum.comments.push({ user: userId, comment });
    await forum.save();
    res.status(200).send({ message: "Comment added successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
