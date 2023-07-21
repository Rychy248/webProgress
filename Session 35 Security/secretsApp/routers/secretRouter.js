
function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const secretRouter = express.Router();

    // Espace to add a midleware
    secretRouter.use((req,res,next)=>{
        next();
    });

    // controller import
    const { 
        secretGet
    } = require("./../controllers/secretController");

    // HTTP METHODS, AND REPONSE
    secretRouter.route("/")
        .get(urlEncoded, secretGet)
    ;

    return secretRouter;
};

module.exports = routerFunction;