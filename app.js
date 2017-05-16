//=======================
//REQUIRES
//=======================
var express                 = require('express'),
    bodyParser              = require('body-parser'),
    app                     = express(),
    multer                  = require('multer'),
    // upload                  = multer({ dest: 'uploads/'}),
    methodOverride          = require('method-override'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    localStrategy           = require('passport-local'),
    Succulent               = require('./models/succulents'),
    User                    = require('./models/user');

var succulentRoutes = require('./routes/succulents'),
    indexRoutes     = require('./routes/index');

//connect to mLAB
mongoose.connect('mongodb://levijohnson612:Potatotime22@ds115411.mlab.com:15411/succulent-porn');

//set the view engine to use ejs
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + '/public'));
app.use("/uploads", express.static(__dirname + '/uploads'));
app.use("/images", express.static(__dirname + '/images'));
app.use(methodOverride('_method'));

//use bodyparser to extract data from request headers
app.use(bodyParser.urlencoded({extended: true}));

//configure session
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//read the session and unencode/encode
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Create new user
// User.register(new User({username: "Levishazam"}), "Potatotime22", function(err, user){
//     if(err){
//         console.log(err);
//     }
//     passport.authenticate('local');
//     console.log('registered user');
// });


app.use(indexRoutes);
app.use("/succulents", succulentRoutes);

//listen to port
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Succulent Resource Has Started");
});

//local developement
// app.listen(3000, function(){
//     console.log("Succulent Resource Has Started");
// });
