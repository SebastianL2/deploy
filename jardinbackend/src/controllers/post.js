const postCrtl = {};

const Post = require("../models/post");

postCrtl.getPosts = async (req, res) => {
  const data = await Post.find({});
  res.json(data);
};

postCrtl.createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.json({ message: "Post created" });
  } catch (error) {
    res.json({ message: error });
  }
};

postCrtl.getPost = async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

postCrtl.updatePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Post updated" });
  } catch (error) {
    res.json({ message: error });
  }
};

postCrtl.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = galleryCrtl;
