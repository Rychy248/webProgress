
function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const registerRouter = express.Router();

    // Espace to add a midleware
    registerRouter.use((req,res,next)=>{
        next();
    });

    // controller import
    const { 
        registerGet
    } = require("./../controllers/registerController");

    // HTTP METHODS, AND REPONSE
    registerRouter.route("/")
        .get(urlEncoded, registerGet)
    ;

    return registerRouter;
};

module.exports = routerFunction;