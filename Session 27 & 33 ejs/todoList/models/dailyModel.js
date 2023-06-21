// const mongoose = require(`mongoose`);

const { dayItem } = require("./mongoose/itemModel");
const { create, read } = require("./mongoose/mongooseController")


function dailyGetTodoList(){
    //dayItem is model
    let data = read(dayItem).then((data)=>{
        console.log("MODEL: "+data+" type of: "+typeof(data))
        return data
    });
    return data;
};

function dailyPostTodoList(req){
    console.log("Data Catched;")
    console.log(req.body);

    return {
        statusCode:200,
        msg:"task adedd",
    };

};

module.exports = { dailyGetTodoList, dailyPostTodoList };
