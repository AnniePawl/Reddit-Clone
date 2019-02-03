// POSTS CONTROLLER

// Require Post Model
const Post = require('../models/post');

module.exports = app => {
    //INDEX CALL (ROOT ROUTE)
    app.get('/', (req, res) => {
        Post.find({})
          .then(posts => {
            res.render("posts-index", { posts });
          })
          .catch(err => {
            console.log(err.message);
          });
    });

  // CREATE
    app.post("/posts/new", (req, res) => {
      // Instantiate instance of post model
      const post = new Post(req.body);
      // Save instance of post model to DB
      post.save((err, post) => {
          // Redirect to Root
          return res.redirect('/')
      });
  });

// SHOW POSTS
    app.get("/posts/:id", function(req, res) {
      // LOOK UP THE POST
      Post.findById(req.params.id)
        .then(post => {
          res.render("posts-show", { post });
        })
        .catch(err => {
          console.log(err.message);
        });
    });
}
