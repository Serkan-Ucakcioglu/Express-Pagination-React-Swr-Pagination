const Post = require("../model/postSchema");

const getPost = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const postList = await Post.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const allPostCount = await Post.countDocuments();

    res.json({
      postList,
      totalPages: Math.ceil(allPostCount / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getPost;
