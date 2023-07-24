
// const {  } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");

function secretGet(req,res,next) {
    console.log("SECRET GET reached...")
    res.render("secrets");
};


module.exports =  {
    secretGet
};
