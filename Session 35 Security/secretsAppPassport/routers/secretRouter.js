
function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const secretRouter = express.Router();
    
    // Espace to add a midleware
    const { ensureAuthenticated } = require("../midleware/authMidleware");
    secretRouter.use(ensureAuthenticated); // user authentication, automatizade by this midleware, for all secrets methods

    // controller import
    const { 
        secretGet
    } = require("../controllers/secretController");

    // HTTP METHODS, AND REPONSE
    secretRouter.route("/")
        .get(urlEncoded, secretGet)
    ;

    return secretRouter;
};

module.exports = routerFunction;