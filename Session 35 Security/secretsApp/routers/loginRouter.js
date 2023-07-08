
function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const loginRouter = express.Router();

    // Espace to add a midleware
    loginRouter.use((req,res,next)=>{
        next();
    });

    // controller import
    const { 
        loginGet
    } = require("./../controllers/loginController");

    // HTTP METHODS, AND REPONSE
    loginRouter.route("/")
        .get(urlEncoded, loginGet)
    ;

    return loginRouter;
};

module.exports = routerFunction;