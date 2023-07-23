
const { user:User } = require("../models/userModel");

function registerGet(req,res,next) {
    res.render("register");
};

function registerPost(req,res,next){
    User.create({
        email: req.body.username,
        password: req.body.password
    }).then(userRegistered=>{
        if(userRegistered){    
            // userRegistered it's the database response
            req.login(userRegistered, (err)=>{
                console.log("REQ LOGIN STARTED");
                if(err){
                    console.log(err);
                    res.redirect("/login");
                } else{
                    res.redirect("/secrets");
                };
            });
        }else{
            res.redirect("/register");
        };

    })
    .catch((err)=>{
        console.log(err);
        res.redirect("/register");
    });
};

module.exports =  { registerGet, registerPost }