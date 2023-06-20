
// function getUsersById(req, res, next){
//     User.findById(req.params.id, function(error, user){
//     if(error) return next(error);
//     return res.status(200).json(user);
//     });
// };

const { getDate } = require("../utils/getDate")

function dailyGet(req, res, next){
    let today = getDate();
    
    let todayData = {
        dayName: today.dayName,
        date: today.date
    };

    let todoList = ["Buy Food","Cook Food","Eat Food"];

    // THE CALLBACK FUNCTION IT'S OPTIONAL
    res.render("index",{dayMsg:today.dayMsg, todayData:todayData, todoList:todoList},((err,html)=>{
        if (err) {
            console.log("Error at: ")
            console.log(err)
        } else {
            res.send(html);
            console.log("Index served")
        }
    }));
    
};

function dailyPost(req, res, next){
    console.log("Data Catched;")
    console.log(req.body);

    res.statusCode = 200;
    res.json({
        statusCode:200,
        msg:"task adedd",
    });
};


module.exports = { dailyGet, dailyPost };
