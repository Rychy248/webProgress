
const { user } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");

function registerGet(req,res,next) {
    res.render("register");
};

function registerPost(req,res,next){
    user.create({
        email: req.body.username,
        password: req.body.password
    }).then(response=>{
        console.log("User created");
        console.log(response);
        res.render("secrets");
    }).catch(err=>{
        console.log(err)
        res.redirect("/register/")
    })

};

module.exports =  {
    registerGet, registerPost
};
