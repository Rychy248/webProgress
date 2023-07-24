//jshint esversion:6


require('dotenv').config(); //ENVS VARS
console.log(process.env.NAME)

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



// LA TAREA AHORA ES CONFIGURAR LA PASSPORT-GOOGLE-AUTH20 
// YA SE CREÓ LA APLICACIÓN, LOS DATOS ESTÁN EN DESCARGAS
// https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/13559550#questions/12223620

/**
 * 1 - añadir en .env las credenciales
 * 
 * 2 - configurar el paquete como la documentación
 **** Documentación en PASSPORT OFICIAL https://www.passportjs.org/packages/passport-google-oauth20/
 **** Documentación en NPM passport pack https://www.npmjs.com/package/passport-google-oauth20
 * 
 * 3 - Recordar que el User.findOrCreate es solo ejemplo, y que este ha de configurarse con mongo, para esto no se usa passport-local-mongoose, sino a mano, se podria con un paquete pero abstenecerce
 * 
 * 4 - Continuar con el video de Angela, que me quedé en el minuto 27
 * 
 * 
 * X - Ejemplo con facebook, el cual es similar a google, puesto que ambos se basan en autho02
 * https://github.com/passport/todos-express-facebook
 */