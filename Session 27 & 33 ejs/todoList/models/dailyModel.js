
function dailyGetTodoList(){
    return ["Buy Food","Cook Food","Eat Food"];
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
