
/*
* THIS FUNCTION IT'S BUILT IT FOR RENDER THIS ROUTE
*/
function customFRoute(express, jsonParser, urlencodedParser){
    //CONTROLLERS MODULE
    const { customGet, customPost, customDelete} = require("../controller/customController")

    // setting route
    const customRoute = express.Router();

    // set a midleware here
    customRoute.use((req,res,next)=>{
        next();
    });

    customRoute.get("/:modelName", urlencodedParser, customGet);
    customRoute.post("/",jsonParser, customPost);
    customRoute.delete("/",jsonParser,customDelete);

    return customRoute;
};

module.exports = customFRoute;
