var mongoose = require('mongoose');

//Setup Schema
var blogSchema = new mongoose.Schema ({
    title: String,
    date: { type: Date, default: Date.now },
    content: String,
    image: String,
    catagory: String
});



//create schema model for blogposts
module.exports = mongoose.model("Blog", blogSchema);
