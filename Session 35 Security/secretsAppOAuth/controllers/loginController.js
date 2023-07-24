
const { userModel } = require("../models/models");
const { user:User } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");

// const passport = require("passport");

function loginGet(req,res,next) { res.render("login"); };

function loginPost(req,res, next){
    console.log("lOGIN POST CALLED");
    // const user = new userModel({
    //     email: req.body.username,
    //     password: req.body.password
    // });
    
    // console.log(user);

    // req.login(user, (err)=>{
        // console.log("REQ LOGIN STARTED");
        // if(err){
        //     console.log(err);
        // }else{
        //     console.log("Passport authenticate");
        //     passport.authenticate("local")(req,res,function() {
                console.log(req.session);
                console.log(req.isAuthenticated(), "Its authe");
                console.log(req.user, "USER");
                console.log("redirected...");
                res.redirect("/secrets");
    //         });
    //     };
    // });

};

module.exports =  {
    loginGet, loginPost
};
