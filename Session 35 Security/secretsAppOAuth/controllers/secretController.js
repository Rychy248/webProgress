
// const {  } = require("../models/userModel");
const { secretModel } = require("../models/models");
const { MyError, defaultError } = require("../utils/customErrors");

async function secretGet(req,res,next) {
    secretModel.find({}).sort({dateAdded:-1})
    .then(secrets=>res.render("secrets",{secrets:secrets, user:req.user.email}))
    .catch(err=>res.redirect("/secrets"))
    ;
    
};

function secretSubmitGet(req,res,next) {
    res.render("submit");
};

function secretSubmitPost(req, res, next){
    secretModel.create({
        secret:req.body.secret
    })
    .then((secret)=>{
        res.redirect("/secrets");
    })
    .catch((err)=>{
        res.redirect("/secrets");
    })
};

module.exports =  {
    secretGet, secretSubmitGet, secretSubmitPost
};
