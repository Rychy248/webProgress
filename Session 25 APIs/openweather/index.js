/*
https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/

Types of modules in Node.jS
    -Local Modules
    -Core Modules
    -Third-Party Modules.


    IMPORTIN CORE MODULES
    To import a core module, you have to use the require() method with the core module’s name passed as the argument.

        const fileSystem = require("fs");

    LOCAL MODULES

    These are modules that you can create yourself and use them in your application. A good example of a local module is the module lib.js we created and imported in the main.js file in this tutorial.

    IMPORTING LOCAL MODULES
    To recap, to import a local module, you have to require('./filename') or require('./filename.js') or require('./path/filename.js').

        const moduleName = require('./filename.js');

    You don’t have to add the “.js” extension, Node.js can still load your local module without it as we have learned.

        const moduleName = require('./filename');

    THIRD-PARTY MODULES
    Third-party modules are modules that are downloaded with a package manager such as npm. These modules are usually stored in the node_modules folder.
    You can install third-party modules globally or locally in your project.
    Examples of third party modules are express, mongoose, react, etc.

    Importing Third-Party Modules
    To import a third-party module, you have to use the require() method that takes the third-party module’s name as an argument.

    const fileSystem = require("express");

*/

const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");

const { openWeather } = require("./apiKeys.js");
//importScripts openWeather from "./apiKeys";


const myApp = express();

const port = 3000;
const style = `
<style>
    :root{
        --ubuntu: 'Ubuntu', sans-serif;
        --montserrat: 'Montserrat', sans-serif;
        --code: 'M PLUS 1 Code', sans-serif;

        --principal-color:#d9eeec;
        --secondary-color:#3C70A4;
        --third-color:#64B2CD;
        --forth-color:#DA9833;
        --fifth-color:#F65C78;
    }

    body{
        text-align: center;
        background-color: var(--fifth-color);
    }
    img{
        height: 6rem ;
        opacity: 0.4;
    }

    h1{
        text-aling: center;
        color: var(--principal-color);
    }
    h2 {
        font-family: var(--ubuntu);
        color: black;
        font-weigth: bolder;
    }
    h1, p{
        text-aling: center;
    }

    .api-wrap {
        overflow: hidden;
        position: relative;
    }

    .api-bg {
        opacity: 0.3;
        position: absolute;
        left: 30%;
        top: -40%;
        width: 35rem;
        height: auto;
    }

    .api-content {
        position: relative;
    }          
</style>
`;

myApp.use(bodyParser.urlencoded({extended:true}));

myApp.get("/",(req,res)=>{
    let html = "";
    /*
    let endpoint = "https://api.kanye.rest/";
    fetch(endpoint)
        .then((response)=>response.json())
        .then((json)=>{
            html = `
            ${style}
            <h1>Consuming Key rest API</h1>
            <h2>"${json.quote}"</h2>
            <p id="keny">-Keny</p>
            `;
            res.send(html);
        });

    function jokeAPI() {
        let endpoint = "https://v2.jokeapi.dev/joke/"
        let category = "Programming?";
        let paramteters = "blacklistFlags=sexist,explicit";

        let urlToGET = endpoint + category + paramteters;

        fetch(urlToGET)
            .then((response)=>response.json())
            .then((json)=>{
                document.querySelector("#api-joke-response").innerHTML = `"${json.joke}"`;
            });
    };*/
    
    let apiUrl = openWeather.endPoint + "?" + new URLSearchParams({
        lat:openWeather.latitude,
        lon:openWeather.longtitude,
        appid: openWeather.APIKEY,
        units:openWeather.units,
    });

    
    let data = ``;
    https.get(apiUrl, function (resp){    
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received.
        resp.on('end', () => {
            //replace https://www.w3schools.com/jsref/jsref_replace.asp

            data = JSON.parse(data);
            let myPrincipal = {
                city: data.name,
                weather: data.weather[0].main,
                weatherDesc: data.weather[0].description,
                degre: data.main.temp,
                seaLevel: data.main.sea_level,
                imgUrl:"http://openweathermap.org/img/wn/"+data.weather[0].icon +"@2x.png"
            };

            html = `
            ${style}
            <br><br>
            <h1>API END POINT</h1>
            <h3><a href="https://openweathermap.org/weather-conditions" tarjet="_blank">Open Weather</a></h3>
            
            <div class="api-wrap">
                <img class="api-bg" src="${myPrincipal.imgUrl}" alt="${myPrincipal.weather}.png">
                <div class="api-content">
                    <h2>City: ${myPrincipal.city}</h2>
                    <h3>Weather: ${myPrincipal.weather}</h3>
                    <p>Weather Description: ${myPrincipal.weatherDesc}</p>
                    <p>Sea Level ${myPrincipal.seaLevel}</p>
                    <h2>Temperature: ${myPrincipal.degre} degress</h2>
                    <img src="${myPrincipal.imgUrl}" alt="${myPrincipal.weather}.png">
                </div>
            </div>
            `;

            res.send(html);

    });
    
    }).on("error", (err) => {
        console.log("Error: " + err);
    });
    
});


myApp.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
});

