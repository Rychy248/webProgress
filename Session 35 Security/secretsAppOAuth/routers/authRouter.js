// model from models


function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const authRouter = express.Router();
    // Espace to add a midleware

    const customAuth = (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
                req.logIn(user, (err) => {
                    if (err) { return next(err); }
                    return res.redirect('/secrets');
                });
            })(req, res, next);
    };      

    authRouter.use((req,res,next)=>{
        next();
    });

    const passport = require("passport");
    
    // controller import
    const { loginGet, loginPost } = require("../controllers/loginController");
    const { registerGet, registerPost } = require("./../controllers/registerController");
    const { logoutGet } = require("./../controllers/logoutController");

    // HTTP METHODS, AND REPONSE
    authRouter.route("/login")
        .get(urlEncoded, loginGet)        
        .post(
            urlEncoded,
            customAuth,
            loginPost
        );

    authRouter.route("/register")
        .get(urlEncoded, registerGet)
        .post(urlEncoded, registerPost)
    ;
    authRouter.route("/logout")
        .get(urlEncoded, logoutGet)
    ;

    return authRouter;
};

module.exports = routerFunction;