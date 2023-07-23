
const { MyError, defaultError } = require("../utils/customErrors");

function homeGet(req,res,next) {

    res.render("home");
};


module.exports =  {
    homeGet
};
