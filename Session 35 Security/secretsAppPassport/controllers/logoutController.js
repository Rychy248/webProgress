
// const { user } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");


function logoutGet(req,res, next){
    // using passport logout method
    req.logout(()=>{
        res.redirect("/");
    });

};


module.exports =  {
    logoutGet
};
