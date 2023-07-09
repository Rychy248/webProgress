
const { user } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");
// has function
const md5 = require("md5");

function loginGet(req,res,next) {

    res.render("login");
};

function loginPost(req,res, next){
    user.read({email:req.body.username})
    .then(userSearched=>{
        if(userSearched[0].password === md5(req.body.password)){
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
