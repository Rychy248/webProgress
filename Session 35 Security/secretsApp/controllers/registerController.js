
const { user } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");
// has function
// const md5 = require("md5"); //replaced by bycrypt, salting and hashing
const 
    bcrypt = require('bcrypt'),
    saltRounds = Number(process.env.SALT_ROUNDS);
;

function registerGet(req,res,next) {
    res.render("register");
};

function registerPost(req,res,next){
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

};

module.exports =  {
    registerGet, registerPost
};
