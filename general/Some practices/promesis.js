


let a = (calledMethod)=>{
    return new Promise((res,rej)=>{
        res(`${calledMethod}: Promise A`);
    });
};

let b = (calledMethod)=>{
    return new Promise((res,rej)=>{
        res(`${calledMethod}: Promise B`);
    });
};

let c = (calledMethod)=>{
    return new Promise((res,rej)=>{
        res(`${calledMethod}: Promise C`);
    });
};

let d = (calledMethod)=>{
    return new Promise((res,rej)=>{
        res(`${calledMethod}: Promise D`);
    });
};

async function normal() {
    console.log("Excution with then Started");
    a("Then Function")
    .then(res=>{console.log(res); return b("Then Function");})
    .then(res=>{console.log(res); return c("Then Function");})
    .then(res=>{console.log(res); return d("Then Function");})
    .catch(res=>console.log(res));
    console.log("Excution with then Finished");
};
async function asyncExc() {
    console.log("Excution with async started");
    console.log("Async Function, exc; ",await a("Async Function"));
    console.log("Async Function, exc; ",await b("Async Function"));
    console.log("Async Function, exc; ",await c("Async Function"));
    console.log("Async Function, exc; ",await d("Async Function"));
    console.log("Excution with async finished");
};
function promiseAll() {
    console.log("Excution with promiseAll Started");
    Promise.all([a("Promise All"),b("Promise All"),c("Promise All"),d("Promise All")])
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    console.log("Excution with promiseAll finished");
};

normal();
asyncExc();
promiseAll();