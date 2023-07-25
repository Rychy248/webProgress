// model from models

function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const authRouter = express.Router();
    // Espace to add a midleware

    const customLocalAuth = (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/auth/login'); }
            
            req.logIn(user, (err) => {
                    if (err) { return next(err); };
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
    const { googleOAuthGet, googleOAuthSecretGet } = require("../controllers/googleController");

    // HTTP METHODS, AND REPONSE
    authRouter.route("/login")
        .get(urlEncoded, loginGet)        
        .post(
            urlEncoded,
            customLocalAuth,
            loginPost
        );

    authRouter.route("/register")
        .get(urlEncoded, registerGet)
        .post(urlEncoded, registerPost)
    ;
    authRouter.route("/logout")
        .get(urlEncoded, logoutGet)
    ;
    authRouter.route("/google")
        .get(urlEncoded,
            passport.authenticate('google', { scope: ["profile","email","openid"] })
        )
    ;
    authRouter.route("/google/secrets")
        .get(
            passport.authenticate('google', { failureRedirect: '/auth/login' }),
            googleOAuthSecretGet
        )
    ;
    return authRouter;
};

module.exports = routerFunction;