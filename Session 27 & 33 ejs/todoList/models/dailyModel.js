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
    try {
        let data = await create(dayItem,{item:req.body.task});
        return {
            error:0,
            statusCode:200,
            item:[data],
        };

    } catch (error) {
        return {
            statusCode:300,
            error:error
        };
        // throw error;

    };

};

module.exports = { dailyGetTodoList, dailyPostTodoList };
