
const { user } = require("../models/userModel");
const { userModel } = require("../models/models");

const { MyError, defaultError } = require("../utils/customErrors");

// has function
/*
    // const md5 = require("md5"); //replaced by bycrypt, salting and hashing
    const 
    bcrypt = require('bcrypt'),
    saltRounds = Number(process.env.SALT_ROUNDS);
    ;
*/
//-----Replace of bcrypt with PASSPORT
// const session = require("express-session"); 
const passport = require("passport");
// const passportLocal = require("passport-local");
// const passportLocalMongoose = require("passport-local-mongoose"); //Used in models

// Serialize ande deserialize
// passport.serializeUser(userModel.serializeUser());
passport.use(userModel.createStrategy());
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
// passport.deserializeUser(userModel.deserializeUser());
passport.deserializeUser(function(id, done) {
    userModel.findById(id, function(err, user) {
        done(err, user);
    });
});

function registerGet(req,res,next) {
    res.render("register");
};

function registerPost(req,res,next){
    /**
    bcrypt.hash(req.body.password, saltRounds)
    .then(function(hash) {
        return user.create({
            email: req.body.username,
            passHash: hash //md5(req.body.password) //HASHING THE PASSWORD
        });
    })
    .then( data =>{
        console.log("User created");
        console.log(JSON.stringify(data));
        res.render("secrets");
    })
    .catch(err=>{
        console.log(err)
        res.redirect("/register/")
    });
    */
    user.create({
        email: req.body.username,
        password: req.body.password
    }).then(userRegistered=>{
        console.log(userRegistered);
        if(userRegistered){
            passport.authenticate("local")(req,res, function(err, user) {
                redirect("/secrets");
            });
        }else{
            redirect("/register");
        };
    })
    .catch((err)=>{
        console.log(err);
        res.redirect("/register");
    });
};

module.exports =  {
    registerGet, registerPost
};
