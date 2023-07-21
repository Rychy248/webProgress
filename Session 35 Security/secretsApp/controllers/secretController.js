
// const {  } = require("../models/userModel");
const { MyError, defaultError } = require("../utils/customErrors");

function secretGet(req,res,next) {
    if(req.isAuthenticated()){
        res.render("secrets");
    }else{
        res.redirect("/login");
    };

    // app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
    //     res.redirect('/');
    // });
};


module.exports =  {
    secretGet
};
