var mongoose = require('mongoose');

//Setup Schema
var succulentSchema = new mongoose.Schema ({
    order: String,
    family: String,
    subfamily: String,
    Genus: String,
    Species: String,
    catagory: String, 
    commonName: String,
    scienceName: String,
    image:  String,
    description: String,
    keyword: Array,
    color: String,
    texture: String,
    flower: String,
    destination: String,
    native: String,
});


//create schema model for succulents
module.exports = mongoose.model("Succulent", succulentSchema);

