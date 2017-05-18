var express = require('express');
var router = express.Router();
var Blog = require('../models/blogpost');
var multer = require('multer');

//EDIT Blog PAGE
router.get('/:id/edit', isLoggedIn, function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect('/Blog')
        } else {
            res.render("edit", {Blog: foundBlog});
        }
    });
});

//UPDATE Blog
router.put('/:id', function(req, res){
    //find and update the correct Blog
    Blog.findByIdAndUpdate(req.params.id, req.body.Blog, function(err, updatedBlog){
        if(err){
            res.redirect('/Blog');
        } else {
            res.redirect('/Blog/' + req.params.id);
        }
    });
    //redirect somewhere
});

//NEW Blog PAGE
router.get('/new', function(req, res) {
    res.render('newBlog');
});

//SHOW DETAILED Blog
router.get('/:id', function(req, res) {
    //find the Blog with associated ID
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            console.log(err)
        } else {
            // render show page with associated ID
            res.render("show", {Blogs: foundBlog});
        }
    });
})

//DESTROY Blog
router.delete('/:id', isLoggedIn, function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    });
});

//POST NEW Blog IF LOGGED IN
router.post('/', multer({ dest: "./uploads"}).single('upl'), function(req, res, next) {
   //get data from form and add to Blogs array

   var title = req.body.title;
   var date = req.body.texture;
   var content = req.body.content;
   var image = req.body.filename;
   var catagory = req.body.catagory;
   //create array to hold all data for new Blog
   var newBlogPost = {title: title, date: date, content: content, image: image, catagory: catagory};
   //use array to create a new Blog and save to DB
   Blog.create(newBlogPost, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
           //redirect to Blogs page
           res.redirect("/");
       }
   });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/')
};

module.exports = router;
