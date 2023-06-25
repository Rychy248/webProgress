
const { workItem } = require("./mongoose/itemModel");
const { create, read } = require("./mongoose/mongooseController")

async function workGetTodoList(){
    let data = await read(workItem);
    console.log("DATA GETT FROM MODEL:");
    console.log(data);

    
    return data;
};

async function workPostTodoList(req){
    console.log("Data Catched, FROM WORK;")
    console.log(req.body);

    return {
        statusCode:200,
        msg:"task adedd",
    };

};

module.exports = { workGetTodoList, workPostTodoList };
