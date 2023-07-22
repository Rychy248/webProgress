

const { userModel } = require("./models")

const user = {
    
    model : userModel,

    /**
     * 
     * @param {{email:"",password:""}} document
     */
    create : async function (doc={}){
        return await this.model.create(doc)
    },
    read: async function (query={}){
        return await this.model.find(query);
    },
};


module.exports = { user }


// example with todo express app with passport local
// https://github.com/passport/todos-express-password