const express = require("express");
const getPost = require("../controllers/postControllers");
const router = express.Router();

router.get("/post", getPost);

module.exports = router;
