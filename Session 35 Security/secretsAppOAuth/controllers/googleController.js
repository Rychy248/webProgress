

function googleOAuthGet(req,res,next){
    res.send("Hello world");
};
function googleOAuthSecretGet(req, res, next){
    res.redirect("/secrets")
};

module.exports = { googleOAuthGet, googleOAuthSecretGet }