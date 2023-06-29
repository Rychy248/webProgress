

function foo(name){
    // eval(`${name} = {}`)
    name =  {
        name: {
            a : 1,
            b : 2,
        },
        other : "THis is a string"
    };
    
    return name
};

console.log(foo("myVar"));
// module.exports = { foo }
