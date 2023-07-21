

const { userModel } = require("./models")

const user = {
    
    model : userModel,

    /**
     * 
     * @param {{email:"",password:""}} document
     */
    create : async function (doc={}){
        return await this.model.register({email:doc.email, justToNothing:"Hello world"},doc.password)
    },
    read: async function (query={}){
        return await this.model.find(query);
    },
    authenticate: async function(email,pass){
        //DOC: https://www.npmjs.com/package/passport-local-mongoose
        return await this.model.authenticate()(email, pass);
    }

};


module.exports = { user }


// example with todo express app with passport local
// https://github.com/passport/todos-express-password