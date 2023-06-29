// MODEL IMPORT
const { customGetTodoList, customPostTodoList, customDeleteTodoList, insertDefaults } = require("../models/customModel");
// local module

const { capitalizeWord } = require("../utils/capitalice");

async function customGet(req, res){
    let modelName = capitalizeWord(req.params.modelName);
    let result = await customGetTodoList(modelName);

    if (result.length == 0){
        insertDefaults(modelName)
        .then(()=>{
            res.redirect(`/custom/${modelName}`);
        });
    }else{
        res.render("custom",{todoList:result,modelName:modelName});
    };
};

function customPost(req, res){
    customPostTodoList(req)
    .then((data)=>{
        res.json(data);
    }).catch(err=>res.json({err:err}))
    ;
};

function customDelete(req,res) {
    customDeleteTodoList(req)
    .then((data)=>{
        console.log("CONTROLLER");
        console.log(data);
        res.json(data);
    });
};

module.exports = { customGet, customPost, customDelete };
