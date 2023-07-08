
function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const homeRouter = express.Router();

    // Espace to add a midleware
    homeRouter.use((req,res,next)=>{
        next();
    });

    // controller import
    const { 
        homeGet
    
    } = require("./../controllers/homeController");

    // HTTP METHODS, AND REPONSE
    homeRouter.route("/")
        .get(urlEncoded, homeGet)
    ;

    return homeRouter;
};

module.exports = routerFunction;