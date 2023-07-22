

const { user } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");

// has function 
    // const md5 = require("md5"); //replaced by salting and hash bycrypt
const bcrypt = require('bcrypt');

function loginGet(req,res,next) { res.render("login"); };

function loginPost(req,res, next){
    user.read({email:req.body.username})
    .then(userSearched=>{
        if(userSearched[0]){ // user exist
            // infact "userSearched[o].passHash" it's hash
            // bcrypt.compare("plainText", "Hash")
            return bcrypt.compare(req.body.password, userSearched[0].passHash)
        }else{
            throw new MyError("No valid user inserted","InvalidUser");
        };
    })
    .then(match => {// forcing the chaining of bycript
        if(match){
            res.render("secrets");
        }else{
            throw new MyError("Password Invalid","InvalidPass");
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

