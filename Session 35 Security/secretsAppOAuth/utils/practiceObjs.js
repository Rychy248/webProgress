

let a = {
    b : "value",
    set B(value){//this getter can't be "b", cause, it's going into a recursive situation and don't save anything
        this.b = `b${value}`;
    },
    get B(){ //this getter can't be "b", cause, it's going into a recursive situation
        return this.b.slice(1);
    }
};
console.log(a);
console.log(a.B);
a.B = "Hello world"
console.log(a);
console.log(a.B);
a.B = "Hello"
console.log(a);
console.log(a.B);