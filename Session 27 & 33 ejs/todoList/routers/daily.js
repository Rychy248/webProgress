
//Add initialization function in utils/middleware.js
function dailyFRoute(express, jsonParser, urlencodedParser){
    /*
    * THIS FUNCTION IT'S BUILT IT FOR RENDER THIS ROUTE
    */

    //CONTROLLERS MODULE
    const { dailyGet, dailyPost } = require("../controller/dailyController")

    // setting route
    const dailyRoute = express.Router();

    dailyRoute.use((req,res,next)=>{
        next();
    });

    dailyRoute.get("/", urlencodedParser, dailyGet);
    dailyRoute.post("/",jsonParser, dailyPost);

    return dailyRoute;
};

module.exports = dailyFRoute;
// DEFAULT IS: module.exports = { dailyFRoute };

//How to use the new middleware in server.js
// require('./utils/middleware')(express, app);
