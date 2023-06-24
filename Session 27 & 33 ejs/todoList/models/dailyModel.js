// const mongoose = require(`mongoose`);

const { dayItem } = require("./mongoose/itemModel");
const { create, read } = require("./mongoose/mongooseController")


function dailyGetTodoList(){
    //dayItem is model
    // let data = read(dayItem).then((result)=>{
    //     console.log("MODEL: "+ JSON.stringify(result)+" type of: "+typeof(result))
    //     return result
    // });
    // return data;
    let data = () =>{
        return new Promise((res,rej)=>{
            read(dayItem)
            .then((response)=>{
                res(response);
                // console.log("RESPOINSE: "+response)
                }
            );
        });
    };
    console.log(data())
    return data();
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
