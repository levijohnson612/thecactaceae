var express = require('express');
var router = express.Router();
var Succulent = require('../models/succulents');
var multer = require('multer');



//EDIT SUCCULENT PAGE
router.get('/:id/edit', function(req, res){
    Succulent.findById(req.params.id, function(err, foundSucculent){
        if(err){
            res.redirect('/succulent')
        } else {
            res.render("edit", {succulent: foundSucculent});
        }
    });
});

//UPDATE SUCCULENT
router.put('/:id', function(req, res){
    //find and update the correct succulent
    Succulent.findByIdAndUpdate(req.params.id, req.body.succulent, function(err, updatedSucculent){
        if(err){
            res.redirect('/succulents');
        } else {
            res.redirect('/succulents/' + req.params.id);
        }
    });
    //redirect somewhere
});

//NEW SUCCULENT PAGE
router.get('/new', isLoggedIn, function(req, res) {
    res.render('new')
})

//SHOW DETAILED SUCCULENT
router.get('/:id', function(req, res) {
    //find the succulent with associated ID
    Succulent.findById(req.params.id, function(err, foundSucculent){
        if(err){
            console.log(err)
        } else {
            // render show page with associated ID
            res.render("show", {succulents: foundSucculent});
        }
    });
})

//DESTROY SUCCULENT
router.delete('/:id', isLoggedIn, function(req, res){
    Succulent.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    });
});

//POST NEW SUCCULENT IF LOGGED IN
router.post('/', isLoggedIn, multer({ dest: "./uploads"}).single('upl'), function(req, res, next) {
   //get data from form and add to succulents array

   var flower = req.body.flower;
   var texture = req.body.texture;
   var keyword = req.body.keyword;
   var color = req.body.color;
   var catagory = req.body.catagory;
   var family = req.body.family;
   var subFamily = req.body.subFamily;
   var genus = req.body.genus;
   var species = req.body.species
   var commonName = req.body.commonName;
   var scienceName = req.body.scienceName;
   var image = req.file.filename;
   var native = req.body.native;
   console.log(req.file);
   var description = req.body.description;
   //create array to hold all data for new succulent
   var newSucculent = {native: native, family: family, subFamily: subFamily, genus: genus, species: species, commonName: commonName, image: image, scienceName: scienceName, description: description};
   //use array to create a new succulent and save to DB
   Succulent.create(newSucculent, function(err, newlyCreated){
       if(err){
           console.log(err);
           console.log(req.file);
       } else {
           //redirect to succulents page
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
