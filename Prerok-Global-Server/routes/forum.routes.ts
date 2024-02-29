const {
  createForum,
  getForumById,
  getAllForums,
  updateForum,
  deleteForum,
  likeForum,
  addComment,
} = require("../controlers/forum.controllers");

const router = require("express").Router();

// Route to create a new forum post
router.post("/create-forum-post", createForum);

// Route to get a forum post by its ID
router.get("/get-forum/:id", getForumById);

// Route to get all forum posts
router.get("/get-all-forum", getAllForums);

// Route to update a forum post by its ID
router.put("/update-forum/:id", updateForum);

// Route to delete a forum post by its ID
router.delete("/delete-forum/:id", deleteForum);

// Route to like a forum
router.post("/like-forum", likeForum);

// Route to add a comment to a forum
router.post("/add-comment", addComment);

module.exports = router;
