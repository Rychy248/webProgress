// const mongoose = require(`mongoose`);

const { dayItem } = require("./mongoose/itemModel");
const { create, read } = require("./mongoose/mongooseController")


async function dailyGetTodoList(){
    //dayItem is model
    let data = await read(dayItem);
    console.log("DATA GETT FROM MODEL:");
    console.log(data);
    return data;
};

async function dailyPostTodoList(req){
    console.log("Data Catched;")
    console.log(req.body);

    return {
        statusCode:200,
        msg:"task adedd",
    };

};

module.exports = { dailyGetTodoList, dailyPostTodoList };
