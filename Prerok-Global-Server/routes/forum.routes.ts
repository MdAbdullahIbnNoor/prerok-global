const {
  createForum,
  getForumById,
  getAllForums,
  updateForum,
  deleteForum,
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

module.exports = router;
