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

const { openWeather, restCountriesAPI } = require("./apiKeys.js");
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

function getCountries(){
    return new Promise((resolve, reject) => {        
        
        let countries = "";
        
        https.get(restCountriesAPI.url, function(resp){
        
            resp.on("data",(chunk)=>{
                countries += chunk;
            })
        
            resp.on("end",()=>{
                let data = JSON.parse(countries);
                let reestruct = [];
    
                data.forEach((element)=> {
                    
                    let language = `${Object.keys(element.languages)[0]}`;

                    reestruct.push({
                        name:`${element.name.common}`,
                        capital:`${element.capital}`,
                        latitude:`${element.latlng[0]}`,
                        longitude:`${element.latlng[1]}`,
                        languages:`${language}`
                    });
                });
    
                let html = `
                <form action="/" method="post">
                <select name="countries" id="countries">`;
                
                reestruct.forEach((item,index)=>{
                    html += "<option value='" + JSON.stringify(item) + "'>"+item.name +"</option>"
                });
                html+= "</select> <button type='submit'>Consult</button> </form> <br> <h5>Created by Rychy, <a>jorgeajrha@gmail.com</a></h5>";

                resolve(html);
            });
            
        }).on("error", (err) => {
            reject(err);
        });
    });
};

function getWheater(lat,lng){
    return new Promise((resolve, reject) => {        

        let apiUrl = openWeather.endPoint + "?" + new URLSearchParams({
            lat:lat,
            lon:lng,
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

                let html = `
                ${style}
                <br><br>
                <h1>APIs Consumed</h1>
                <h3><a href="https://openweathermap.org/weather-conditions" tarjet="_blank">Open Weather</a> | <a href="https://restcountries.com" tarjet="_blank">rest Countries</a></h3>
                
                <div class="api-wrap">
                    <img class="api-bg" src="${myPrincipal.imgUrl}" alt="${myPrincipal.weather}.png">
                    <div class="api-content">
                        <h2>City: ${myPrincipal.city}</h2>
                        <h3>Weather: ${myPrincipal.weather}</h3>
                        <p>Weather Description: ${myPrincipal.weatherDesc}</p>
                        <p>Sea Level ${myPrincipal.seaLevel}</p>
                        <img src="${myPrincipal.imgUrl}" alt="${myPrincipal.weather}.png">
                        <h2>Temperature: ${myPrincipal.degre} degress</h2>
                `;            
                resolve(html);

                

            });
        }).on("error", (err) => {
            reject(err);
        });

    });
};


myApp.get("/",(req,res)=>{
    let myHtml="";
    getWheater(openWeather.latitude,openWeather.longtitude)
    .then(function(html){
        myHtml += html;
        return getCountries();
    })
    .then(function(html){
        myHtml += "</div> </div>" // closing the weather divs
        myHtml+= html
        res.send(myHtml);
            
    })
    .catch(err=>console.log(err));
    
});

myApp.post("/",(req,res)=>{

    let myHtml="";
    let contryData = JSON.parse(req.body.countries)
    let extraCountryData = `
            <h3>Countrie: ${contryData.name} | Capital: ${contryData.capital}</h3>
            <p>Languague: ${contryData.languages}</p>
            <p>lat: ${contryData.latitude}, long: ${contryData.longitude}</p>
        </div> 
    </div>
    `;
        
    getWheater(contryData.latitude,contryData.longitude)
    .then(function(html){
        myHtml += html;
        return getCountries();
    })
    .then(function(html){
        myHtml += extraCountryData;
        myHtml+= html;

        res.send(myHtml);            
    })
    .catch(err=>console.log(err));

});

myApp.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
});

