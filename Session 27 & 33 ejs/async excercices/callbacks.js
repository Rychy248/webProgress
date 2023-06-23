// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

// using synchronous  functions, synchronous Program
console.log("using synchronous  functions, synchronous Program");
function doStep1(init) {
    return init + 1;
}

function doStep2(init) {
    return init + 2;
}

function doStep3(init) {
    return init + 3;
}

function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
}

doOperation();


console.log("using CALLBACKS");
function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
};

function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
};

function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
};

function doOperation() {
    doStep1(0, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3) => {
                console.log(`result: ${result3}`);
            });
        });
    });
};

doOperation();


/*
*    Most modern asynchronous APIs don't use callbacks.
*    Instead, the foundation of asynchronous programming in JavaScript is 
*    the Promise, and that's the subject of the next article.
*
*/