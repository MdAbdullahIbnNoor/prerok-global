import { Request, Response } from "express";
import Forum, { IForum } from "../models/forum.model";
import { IUser, User as UserModel } from "../models/user.model";

// Controller to get a forum by forum id
exports.getForumById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const forum = await Forum.findById(id);
    res.status(200).send(forum);
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

// Controller to get all forums
exports.getAllForums = async (req: Request, res: Response) => {
  try {
    const forums = await Forum.find({});
    forums.reverse();
    res.status(200).send(forums);
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

// Controller to create a new forum
exports.createForum = async (req: Request, res: Response) => {
  try {
    const forumData: IForum = req.body;
    const newForum = new Forum(forumData);

    const result = await newForum.save();
    res.status(201).send({
      success: true,
      message: "Forum created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

// Controller to update forum details by forum id
exports.updateForum = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedForum = await Forum.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).send(updatedForum);
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

// Controller to delete a forum by forum id
exports.deleteForum = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await Forum.findByIdAndDelete(id); // Use ForumModel instead of Forum
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

exports.likeForum = async (req: Request, res: Response) => {
  try {
    const { forumId, userEmail: email } = req.body;

    const user = await UserModel.findOne({ email });

    const userId = user?._id;

    const forum = await Forum.findById(forumId);

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
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};

// Controller to add a comment to a forum
exports.addComment = async (req: Request, res: Response) => {
  try {
    const { forumId, userEmail: email, comment } = req.body;

    const user = await UserModel.findOne({ email });
    const userId = user?._id;
    const forum = await Forum.findById(forumId);
    if (!forum) {
      return res.status(404).send({ message: "Forum not found" });
    }
    forum.comments.push({ user: userId, comment });
    await forum.save();
    res.status(200).send({ message: "Comment added successfully" });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
};
