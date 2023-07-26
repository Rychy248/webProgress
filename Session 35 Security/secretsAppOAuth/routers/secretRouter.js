
function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const secretRouter = express.Router();
    
    // Espace to add a midleware
    const { ensureAuthenticated } = require("../midleware/authMidleware");
    secretRouter.use(
        // user authentication, automatizade by this midleware, for all secrets methods
        ensureAuthenticated
        );

    // controller import
    const { 
        secretGet, secretSubmitGet, secretSubmitPost
    } = require("../controllers/secretController");

    // HTTP METHODS, AND REPONSE
    secretRouter.route("/")
        .get(urlEncoded, secretGet)
    ;

    secretRouter.route("/submit")
        .get(urlEncoded, secretSubmitGet)
        .post(urlEncoded, secretSubmitPost)
    ;

    return secretRouter;
};

module.exports = routerFunction;