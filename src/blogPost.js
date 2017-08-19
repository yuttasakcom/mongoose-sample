const mongoose = require('mongoose')
const User = require('../src/user')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
  title: String,
  content: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

const BlogPost = mongoose.model('blogPost', BlogPostSchema)
module.exports = BlogPost