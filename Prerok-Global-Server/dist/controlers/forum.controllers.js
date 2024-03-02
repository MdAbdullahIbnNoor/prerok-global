"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forum_model_1 = __importDefault(require("../models/forum.model"));
const user_model_1 = require("../models/user.model");
// Controller to get a forum by forum id
exports.getForumById = async (req, res) => {
    try {
        const id = req.params.id;
        const forum = await forum_model_1.default.findById(id);
        res.status(200).send(forum);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// Controller to get all forums
exports.getAllForums = async (req, res) => {
    try {
        const forums = await forum_model_1.default.find({});
        forums.reverse();
        res.status(200).send(forums);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// Controller to create a new forum
exports.createForum = async (req, res) => {
    try {
        const forumData = req.body;
        const newForum = new forum_model_1.default(forumData);
        const result = await newForum.save();
        res.status(201).send({
            success: true,
            message: "Forum created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// Controller to update forum details by forum id
exports.updateForum = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const updatedForum = await forum_model_1.default.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        res.status(200).send(updatedForum);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// Controller to delete a forum by forum id
exports.deleteForum = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await forum_model_1.default.findByIdAndDelete(id); // Use ForumModel instead of Forum
        res.status(200).send(result);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
exports.likeForum = async (req, res) => {
    try {
        const { forumId, userEmail: email } = req.body;
        const user = await user_model_1.User.findOne({ email });
        const userId = user?._id;
        const forum = await forum_model_1.default.findById(forumId);
        if (!forum) {
            return res.status(404).send({ message: "Forum not found" });
        }
        if (forum.likes.includes(userId)) {
            return res
                .status(200)
                .send({ message: "You have already liked this forum" });
        }
        forum.likes.push(userId);
        await forum.save();
        res.status(200).send({ message: "Forum liked successfully" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// Controller to add a comment to a forum
exports.addComment = async (req, res) => {
    try {
        const { forumId, userEmail: email, comment } = req.body;
        const user = await user_model_1.User.findOne({ email });
        const userId = user?._id;
        const forum = await forum_model_1.default.findById(forumId);
        if (!forum) {
            return res.status(404).send({ message: "Forum not found" });
        }
        forum.comments.push({ user: userId, comment });
        await forum.save();
        res.status(200).send({ message: "Comment added successfully" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
