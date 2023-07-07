
// function getUsersById(req, res, next){
//     User.findById(req.params.id, function(error, user){
//       if(error) return next(error);
//       return res.status(200).json(user);
//     });
// };

// MODEL IMPORT
const { dailyGetTodoList, dailyPostTodoList, dailyDeleteTodoList, insertDefaults } = require("../models/dailyModel");

// UTILS IMPORT
const { getDate } = require("../utils/getDate")

function dailyGet(req, res, next){
    let today = getDate();
    
    let todayData = {
        dayName: today.dayName,
        date: today.date
    };

    let todoList = dailyGetTodoList();
    // console.log("TODO GETTED: "+ JSON.stringify(todoList) + "  ;"+todoList);
    // THE CALLBACK FUNCTION IT'S OPTIONAL INSIDE THE RENDER IT'S OPTIONAL
    // MADE WITH AN SYNCRNOUS FUNCTION
    todoList
    .then((result)=>{
        // console.log("RES: "+result)
        if (result.length == 0){
            insertDefaults()
            .then(()=>{
                res.redirect("/");
            });
        }else{

            res.render("index",{dayMsg:today.dayMsg, todayData:todayData, todoList:result},((err,html)=>{
                if (err) {
                    console.log("Error at render: ")
                    console.log(err)
                } else {
                    res.send("ERROR!");
                }
            }));
        };
    });
    
};

function dailyPost(req, res, next){
    dailyPostTodoList(req)
    .then((data)=>{
        res.json(data);
    });
};

function dailyDelete(req,res,next) {
    dailyDeleteTodoList(req)
    .then((data)=>{
        console.log("CONTROLLER");
        console.log(data);
        res.json(data);
    });
};

module.exports = { dailyGet, dailyPost, dailyDelete };
