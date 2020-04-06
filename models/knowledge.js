var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KnowladgePosts = Schema({
    id: String,
    publishDate : String,
    isImage: Boolean,
    img: String,
    author: String,
    category: Array,
    comments: Number,
    title: String,
    description: String
});

module.exports = mongoose.model('KnowladgePosts', KnowladgePosts);