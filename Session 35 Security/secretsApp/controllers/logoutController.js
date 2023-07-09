
// const { user } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");

function logoutGet(req,res,next) {
    res.redirect("/");
};

module.exports =  {
    logoutGet
};
