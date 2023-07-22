
function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const registerRouter = express.Router();

    // Espace to add a midleware
    registerRouter.use((req,res,next)=>{
        next();
    });

    // controller import
    const { 
        logoutPost
    } = require("./../controllers/logoutController");

    // HTTP METHODS, AND REPONSE
    registerRouter.route("/")
        .post(urlEncoded, logoutPost)
    ;

    return registerRouter;
};

module.exports = routerFunction;