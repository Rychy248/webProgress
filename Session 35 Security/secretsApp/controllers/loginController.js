
// const {  } = require("../models/homeModel");
const { MyError, defaultError } = require("../utils/customErrors");

function loginGet(req,res,next) {

    res.render("login");
};


module.exports =  {
    loginGet
};
