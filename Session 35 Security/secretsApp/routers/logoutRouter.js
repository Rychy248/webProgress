// model from models

function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const logoutRouter = express.Router();

    // Espace to add a midleware
    logoutRouter.use((req,res,next)=>{
        next();
    });

    // controller import
    const { 
        logoutGet
    } = require("../controllers/logoutController");

    // HTTP METHODS, AND REPONSE
    logoutRouter.route("/")
        .get(urlEncoded, logoutGet)
    ;

    return logoutRouter;
};

module.exports = routerFunction;