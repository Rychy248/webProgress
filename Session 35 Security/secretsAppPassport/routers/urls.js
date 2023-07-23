
/**
 * 
 * @param { express.app } app the core app
 * @param { express } express the module express
 * @param { urlEncoded } urlEncoded the parser of boyd-parser
 * @param { jsonParser } jsonParser the module express
 */
function urlFunction(app,express, urlEncoded, jsonParser) {
    app.use("/", require("./homeRouter")(express, urlEncoded, jsonParser));
    app.use("/", require("./authRouter")(express, urlEncoded, jsonParser));
    app.use("/secrets", require("./secretRouter")(express, urlEncoded, jsonParser));
};

module.exports = urlFunction