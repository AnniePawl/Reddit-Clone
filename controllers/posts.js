// POSTS CONTROLLER

// Require Post Model
const Post = require('../models/post');

module.exports = app => {

  // CREATE
  app.post("/posts/new", (req, res) => {
      // Instantiate instance of post model
      const post = new Post(req.body);

      // Save instance of post model to DB
      post.save((err, post) => {
          // Redirect to Root
          return res.redirect(``)
      })
  });
};
