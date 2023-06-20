
function workGetTodoList(){
    return ["Hello","World"];
};

function workPostTodoList(req){
    console.log("Data Catched, FROM WORK;")
    console.log(req.body);

    return {
        statusCode:200,
        msg:"task adedd",
    };

};

module.exports = { workGetTodoList, workPostTodoList };
