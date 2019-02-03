// Require Post Model
const Post = require('../models/post');


module.exports = app => {
    app.post("post/new", (req, res) => {
        console.log(req.body);
    })
}
