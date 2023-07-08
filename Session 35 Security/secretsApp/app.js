//jshint esversion:6



const { express, app, urlEncoded, jsonParser } = require("./config");
require("./routers/urls")(app, express, urlEncoded ,jsonParser);
require("./db")(app);