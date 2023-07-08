
// const {  } = require("../models/homeModel");
const { MyError, defaultError } = require("../utils/customErrors");

function registerGet(req,res,next) {
    res.render("register");
};


module.exports =  {
    registerGet
};
