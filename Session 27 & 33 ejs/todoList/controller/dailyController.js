
// function getUsersById(req, res, next){
//     User.findById(req.params.id, function(error, user){
//     if(error) return next(error);
//     return res.status(200).json(user);
//     });
// };

// MODEL IMPORT
const { dailyGetTodoList, dailyPostTodoList } = require("../models/dailyModel");

// UTILS IMPORT
const { getDate } = require("../utils/getDate")

function dailyGet(req, res, next){
    let today = getDate();
    
    let todayData = {
        dayName: today.dayName,
        date: today.date
    };

    let todoList = dailyGetTodoList();
    console.log("TODO GETTED: "+todoList)
    // THE CALLBACK FUNCTION IT'S OPTIONAL
    res.render("index",{dayMsg:today.dayMsg, todayData:todayData, todoList:["work","day"]},((err,html)=>{
        if (err) {
            console.log("Error at render: ")
            console.log(err)
        } else {
            res.send(html);
        }
    }));
    
};

function dailyPost(req, res, next){
    res.statusCode = 200;
    res.json(dailyPostTodoList(req));
};


module.exports = { dailyGet, dailyPost };
