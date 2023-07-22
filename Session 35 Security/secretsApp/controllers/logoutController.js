
// const { user } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");


function logoutPost(req,res, next){
    
    // using passport logout method
    req.logout();
    res.redirect("/login");

};


module.exports =  {
    logoutPost
};
