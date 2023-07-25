//jshint esversion:6
const { userModel } = require('./models/models');


require('dotenv').config(); //ENVS VARS

const { express, app, urlEncoded, jsonParser } = require("./config");
// set up the db
require("./db")();

// routers
require("./routers/urls")(app, express, urlEncoded ,jsonParser);

// SET UP THE APP listening
const { appSettings: { port : appPort } } = require("./config");

app.listen(appPort,(()=>{
    console.log(`App serverd at port ${appPort}`);
}));