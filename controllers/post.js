// const post = require('../models/post');
const Post = require('../models/post');
const fs = require('fs');

exports.getPosts = (req,res)=>{
    const posts = Post.find()
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => console.log(err))
}

exports.createPost = (req,res) => {
    const post = new Post({name: req.body.name, avatar: req.file.path})
    console.log("Creating Post: " , post);
    post.save().then(result => {
        res.json({
            post: result
        });
    });
};

exports.deleteFile = (req,res) => {
    fs.unlink(req.body.fileName, function (err) {
        if (err) throw err;
        console.log('File deleted!');
        res.send("File Deleted Successfully")
      });
};

exports.renameFile = (req,res) => {
    fs.rename(req.body.fileName, req.body.renameName, function (err) {
        if (err) throw err;
        console.log('File renamed!');
        res.send("File Renamed Successfully")
      });
};