const Forum = require("../models/forum.model");

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
      author: forumData.author,
      tags: forumData.tags,
    });
    console.log(newForum.title);
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
