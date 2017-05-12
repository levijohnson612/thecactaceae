var express = require('express');
var router = express.Router();
var Succulent = require('../models/succulents');
var passport = require('passport');

//HOME PAGE
router.get('/', function(req, res) {
        //get all campgrounds from DB
        Succulent.find({}, function(err, allSucculents){
            if(err){
                console.log(err);
            } else {
                res.render("index", {succulents: allSucculents})
            }
        })
});

//============
//AUTH ROUTES
//============

router.get('/login', function(req, res){
   res.render('login');
});

router.post('/login', 
    passport.authenticate('local', {
    successRedirect: "/succulents/new",
    failureRedirection: "/"
}) ,function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect('/');
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/')
};

module.exports = router;