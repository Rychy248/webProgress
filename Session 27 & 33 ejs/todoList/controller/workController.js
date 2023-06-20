
function workGet(req, res, next){
    let todoList = ["Hello"];
    res.render("work",{todoList:todoList});
};

function workPost(req, res, next){
    console.log("Data Catched, FROM WORK;")
    console.log(req.body);

    res.statusCode = 200;
    res.json({
        statusCode:200,
        msg:"task adedd",
    });
};


module.exports = { workGet, workPost };
