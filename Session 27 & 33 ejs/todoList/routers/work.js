//Add initialization function in utils/middleware.js
function workFRoute(express, jsonParser, urlencodedParser){
    /*
    * THIS FUNCTION IT'S BUILT IT FOR RENDER THIS ROUTE
    */

    //CONTROLLERS MODULE
    const { workGet, workPost } = require("../controller/workController")

    // setting route
    const workRoute = express.Router();

    workRoute.use((req,res,next)=>{
        next();
    });

    workRoute.get("/", urlencodedParser, workGet);
    workRoute.post("/", jsonParser, workPost);

    return workRoute;
};

// some theory https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/

///At this, i replace the object export, with a single function as the value instance of the object
module.exports = workFRoute;
// DEFAULT IS: module.exports = { workFRoute };

//How to use the new middleware in server.js
// require('./utils/middleware')(express, app);
