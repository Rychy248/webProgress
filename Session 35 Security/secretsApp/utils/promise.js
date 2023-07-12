let a = (num)=>{
    console.log("Number recibed ", num);

    return new Promise((res,rej)=>{
        res(num);
    });
};


let b = function(x){
    return x>10? true: false;
};

let c = (something)=>{
    console.log(something)

    return new Promise((res,rej)=>{
        res("Res from c");
    });
};

/**
a(25)
.then(data=>{
    if(b(data)){
        c("Hello from c")
        .then(data=>{
            console.log("THEN C");
            console.log(data);
            throw new Error("Hello Error from c then");
        })
        .catch(err=>{
            console.log("CATCH FROM C");
            console.log(err);
        });
        throw new Error("Out");
    };
})
.catch(err=>{
    console.log("CATCH FROM A");
    console.log(err);
});
 */


a(25)
.then(data=>{
    if(b(data)){
        return c("Hello from c")
    }else{
        throw new Error("Error from a");
    };
})
.then(data=>{
    // console.log("THEN C");
    if(data){
        console.log(data);
    }else{
        throw new Error("Hello Error from c then");
    };
})
.catch(err=>{
    console.log("General CATCH");
    console.log(err);
});
