
const { user:User } = require("../models/userModel");
const { userModel:UserModel } = require("../models/models");

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
passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
// passport.deserializeUser(userModel.deserializeUser());
passport.deserializeUser(UserModel.deserializeUser);

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
    User.create({
        email: req.body.username,
        password: req.body.password
    }).then(userRegistered=>{
        console.log(userRegistered);
        if(userRegistered){
            passport.authenticate("local")(req,res, function() {
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
