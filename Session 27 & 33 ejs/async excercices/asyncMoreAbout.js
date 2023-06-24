
// ASYNC FUNCTIONS 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#examples


console.log("Hello world FROM asyncMoreAbout.js");

function returningOf(params) {
    console.log(` Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

        For example, consider the following code:`);

    async function foo() {
        return 1;
    };          

    console.log("Returned of foo()");
    console.log(foo());
    console.log(typeof(foo()));

    console.log("It's similar to: ");

    function foo2() {
        return Promise.resolve(1);
    };

    console.log(foo2());
};

function asyncAndResolve() {
    console.log(`
Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, they are not equivalent.

An async function will return a different reference, whereas Promise.resolve returns the same reference if the given value is a promise.

It can be a problem when you want to check the equality of a promise and a return value of an async function.
    `);

    const p = new Promise((res, rej) => {
        res(1);
    });

    async function asyncReturn() {
        return p;
    }

    function basicReturn() {
        return Promise.resolve(p);
    }

    console.log(p === basicReturn()); // true
    console.log(p === asyncReturn()); // false
};

function asyncExecution() {
    console.log(`
    The body of an async function can be thought of as being split by zero or more await expressions. Top-level code, up to and including the first await expression (if there is one), is run synchronously. In this way, an async function without an await expression will run synchronously. If there is an await expression inside the function body, however, the async function will always complete asynchronously. 
    `);

    async function foo() {
        await 1;
    };

    function foo2() {
        return Promise.resolve(1).then(() => undefined);
    };
    console.log(foo());
    console.log(foo2());
    console.log("Remember, it's similar but the async, return a diferente reference");
    console.log(foo() === foo2()); //await always return a different reference
    console.log(foo2() === foo2()); //In fact foo2,the return is a new promise too, so it's a differente reference for each excution
    console.log(foo2 === foo2); //The function itself, it's a same reference

    /*
        Code after each await expression can be thought of as
        existing in a .then callback. In this way a promise chain is
        progressively constructed with each reentrant step through the function.
        The return value forms the final link in the chain. 
    */
};


function chaining() {
    // 1 - The first line of the body of function foo is executed synchronously, 
    // with the await expression configured with the pending promise. Progress through
    // foo is then suspended and control is yielded back to the function that called foo.
    
    // 2 - Some time later, when the first promise has either been fulfilled or
    // rejected, control moves back into foo. The result of the first promise fulfillment
    // (if it was not rejected) is returned from the await expression. Here 1 is assigned to
    // result1. Progress continues, and the second await expression is evaluated.
    // Again, progress through foo is suspended and control is yielded.
    
    // 3 - Some time later, when the second promise has either been fulfilled or
    // rejected, control re-enters foo. The result of the second promise resolution
    // is returned from the second await expression. Here 2 is assigned to result2.
    // Control moves to the return expression (if any). The default return value of
    // undefined is returned as the resolution value of the current promise.

    async function foo() {
        const result1 = await new Promise((resolve) =>
            setTimeout(() => resolve("1"))
        );
        const result2 = await new Promise((resolve) =>
            setTimeout(() => resolve("2"))
        );
        console.log("RESULT 1: "+result1);
        console.log("RESULT 2: "+result2);
    }
    foo();
    
};


function errorHadling() {
    async function foo() {
        const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
        const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
        Promise.all([p1,p2])
            .then((values)=>{
                p1 = values[0]
                p2 = values[1]
            });
        // const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
    };
    foo().catch(() => {}); // Attempt to swallow all errors...
};

function example1() {
    function resolveAfter2Seconds() {
        console.log("starting slow promise");
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
        });
    };

    function resolveAfter1Second() {
        console.log("starting fast promise");
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
        });
    };

    async function sequentialStart() {
        console.log("==SEQUENTIAL START==");

        // 1. Execution gets here almost instantly
        const slow = await resolveAfter2Seconds();
        console.log(slow); // 2. this runs 2 seconds after 1.

        const fast = await resolveAfter1Second();
        console.log(fast); // 3. this runs 3 seconds after 1.
    };

    async function concurrentStart() {
        console.log("==CONCURRENT START with await==");
        const slow = resolveAfter2Seconds(); // starts timer immediately
        const fast = resolveAfter1Second(); // starts timer immediately

        // 1. Execution gets here almost instantly
        console.log(await slow); // 2. this runs 2 seconds after 1.
        console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
    };

    function concurrentPromise() {
        console.log("==CONCURRENT START with Promise.all==");
        return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
        (messages) => {
            console.log(messages[0]); // slow
            console.log(messages[1]); // fast
        }
        );
    };

    async function parallel() {
        console.log("==PARALLEL with await Promise.all==");

        // Start 2 "jobs" in parallel and wait for both of them to complete
        await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))(),
        ]);
    };

    sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

    // wait above to finish
    setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

    // wait again
    setTimeout(concurrentPromise, 7000); // same as concurrentStart

    // wait again
    setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
};

// calls
// returningOf();
// asyncAndResolve();
// asyncExecution();
// chaining();
// errorHadling();
// example1();