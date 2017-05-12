var mongoose        = require("mongoose"),
    Succulents      = require("./models/succulents"),
    comment         = require("./models/comment");
var data = [
    {commonName: "Burros Tails", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Donkey%27s_tail_in_bloom_March_06.jpg/1920px-Donkey%27s_tail_in_bloom_March_06.jpg",
    description: "dadadada"},
    
    {commonName: "Burros Tails", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sedum_morganianum_%27Burrito%27_c-3098_-_01.jpg/1280px-Sedum_morganianum_%27Burrito%27_c-3098_-_01.jpg",
    description: "dadadada"},
    
    {commmonName: "Burros Tails", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sedum_morganianum_%27Burrito%27_c-3098_-_02.jpg/1920px-Sedum_morganianum_%27Burrito%27_c-3098_-_02.jpg",
    description: "dadadada"}
    ]
function seedDB(){
    
Succulents.remove({}, function(err){
    if(err){
    console.log(err);
}
        console.log("removed succulents!");
    });
    //add a few campgrounds
    data.forEach(function(seed){
    Succulents.create(seed, function(err, data){
        if(err){
            console.log(err);
        } else {
            console.log("Added a succulent");
            //create a comment
            Comment.create(
                {
                    text: "this Succulent is beautiful :)",
                    author: "Levi Johnson"
                }, function(err, comments){
                    if(err){
                        console.log(err);
                    } else {
                    Succulents.comments.push(comment);
                    Succulents.save();
                    console.log("createa new comment");
                    }
                })
            }
        });
    });
}

module.exports = seedDB;