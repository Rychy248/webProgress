




// RELEATD DOCUMENTATION ABOUT ASYN FUNCTINOS INSIDE THE PROMISE DOCUMENTATION
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await




/* general description
----Inside an async function, you can use the await keyword before a
----call to a function that returns a promise. This makes the code wait at that point until
----the promise is settled, at which point the fulfilled value of the promise is treated as a
----return value, or the rejected value is thrown.
*/

console.log("Hello world FROM asyncFuncs.js");

async function fetchProducts() {
    try {
        console.log("USING ASYNC functions with fetch");
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        };
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the parsed JSON object or throw an error
        const data = await response.json();
        console.log(data[0].name);
    } catch (error) {
    console.error(`Could not get products: ${error}`);
    };
};

function BADfetchProducts(params) {
    console.log("Note though that async functions always return a promise,\
    so you can't do something like");
    
    async function fetchProducts() {
        try {
            const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
            );
            if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
            };
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Could not get products: ${error}`);
        };
    };

    const promise = fetchProducts();
    console.log(promise);
    console.log(promise[0].name); // "promise" is a Promise object, so this will not work
};

function goodFetchProducts() {
    console.log("Make a async function work insade a sync function");

    async function fetchProducts() {
        try {
            const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
            );
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            };
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Could not get products: ${error}`);
        };
    };

    const promise = fetchProducts();
    promise.then((data) => console.log(data[0].name));      
};

// CALLS 
// fetchProducts();
// BADfetchProducts();
goodFetchProducts();


console.log(`You'll probably use async functions a lot where you might otherwise use promise chains, and they make working with promises much more intuitive.

Keep in mind that just like a promise chain, await forces asynchronous operations to be completed in series. This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case then something like Promise.all() will be more performant.
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await
`)