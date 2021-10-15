const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware");
const Comment = require("../schema/comment");

router.post("/comment/publish", authMiddleware, async (req, res) => {
  const { title, description } = req.body;
  const _id = req.user._id;
  try {
    const comment = new Comment({
      title: title,
      description: description,
      publisherId: _id,
    });
    comment.save();
    res.send("comment published");
  } catch (err) {
    console.log(err);
  }
});
router.get("/comment", authMiddleware, async (req, res) => {
  const _id = req.user._id;
  const comments = await Comment.find();
  const filteredComments = comments.filter(
    (comment) => (comment.publisherId = _id)
  );
  res.json(filteredComments);
});

module.exports = router;
