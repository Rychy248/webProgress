
const { user } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");
// has function
const md5 = require("md5");

function registerGet(req,res,next) {
    res.render("register");
};

function registerPost(req,res,next){
    user.create({
        email: req.body.username,
        password: md5(req.body.password) //HASHING THE PASSWORD
    }).then(data=>{
        console.log("User created");
        console.log(JSON.stringify(data));
        res.render("secrets");
    }).catch(err=>{
        console.log(err)
        res.redirect("/register/")
    })

};

module.exports =  {
    registerGet, registerPost
};
