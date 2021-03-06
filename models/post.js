// POST MODEL
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const PostSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true }
});

module.exports = mongoose.model("Post", PostSchema);
