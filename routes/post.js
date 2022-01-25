const express = require('express');
const { getPosts,createPost,deleteFile, renameFile } = require('../controllers/post');
const validator = require('../validator');
const upload = require('../middleware/upload')

const router = express.Router();

router.get("/", getPosts);
router.put("/upload",upload.single('avatar'),validator.createPostValidator, createPost);
router.delete("/delete-file", deleteFile);
router.post("/rename-file", renameFile);

module.exports = router;