
const { user } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");

function loginGet(req,res,next) {

    res.render("login");
};

function loginPost(req,res, next){
    user.read({email:req.body.username})
    .then(userSearched=>{
        if(userSearched[0].password === req.body.password){
            res.render("secrets");
        }else{
            res.redirect("/login");
        };
    })
    .catch((err)=>{
        console.log(err);
        res.redirect("/login");
    });
};

module.exports =  {
    loginGet, loginPost
};
