//jshint esversion:6

// native modules
var path = require('path');

// dependeci modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// setting the express ap
const app = express();
const port = 3000;

// setting Middle ware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

// PREPARING THE VIEWS
app.set("views",path.join(__dirname,"views"));
app.set('view engine', 'ejs');


app.get("/",((req,res)=>{
    let today = new Date();
    let options = {
        weekday:"long",
        month:"short",
        day:"numeric",
        year:"numeric"
    }
    
    let splitedData = today.toLocaleDateString("en-US", options).replace(/,/g,"").split(" "); //[ 'Sunday', 'May', '28,', '2023' ]
    let dayMsg =  splitedData[0] == "Sunday" || splitedData[0] == "Saturday" ? "Its a weekend day" : "Its a work day";
    

    let todayData = {
        dayName: splitedData[0],
        date: `${splitedData[2]}/${splitedData[1]}/${splitedData[3]}`
    };

    let todoList = ["Buy Food","Cook Food","Eat Food"];

    res.render("index",{dayMsg:dayMsg, todayData:todayData, todoList:todoList})
    /*
    res.render("index",{dayMsg:dayMsg, people:people},((err,html)=>{
        if (err) {
            console.log("Error at: ")
            console.log(err)
        } else {
            res.send(html);
            console.log("Index served")
        }
    }));
    */
    
}));

app.listen(port,(()=>{
    console.log(`App serverd at port ${port}`);
}));
