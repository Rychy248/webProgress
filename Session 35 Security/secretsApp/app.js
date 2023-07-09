//jshint esversion:6


require('dotenv').config(); //ENVS VARS
console.log(process.env.NAME)

const { express, app, urlEncoded, jsonParser } = require("./config");
require("./routers/urls")(app, express, urlEncoded ,jsonParser);
require("./db")(app);