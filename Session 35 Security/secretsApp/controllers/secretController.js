
// const {  } = require("../models/homeModel");
const { MyError, defaultError } = require("../utils/customErrors");

function secretGet(req,res,next) {
    res.render("secrets");
};


module.exports =  {
    secretGet
};
