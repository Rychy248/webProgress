console.log("Hello world FROM somePromises.js");

function simplePromise() {
    const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    
    console.log(fetchPromise);

    fetchPromise.then((response) => {
        console.log(`Received response: ${response.status}`);
    });

    console.log("Started request…");
};    


function twoPromise() {
    console.log("Chaining two promises........");
    const fetchPromise2 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    
    fetchPromise2.then((response) => {
        const jsonPromise = response.json();
        jsonPromise.then((data) => {
            console.log(data[0].name);
        });
    });
};

function twoPromiseRewrited(params) {
    console.log("Rewrited fetch, whitout the nested calls");
    const fetchPromise3 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    
    fetchPromise3
        .then((response) =>  response.json())
        .then((data) => {
            console.log(data[0].name);
        });
    ;
};

function hadlinErrors(params) {
    
    console.log("HANDLING ERRORS.!!!11");
    const fetchPromise4 = fetch(
        "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    
    fetchPromise4
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data[0].name);
        })
        .catch((error) => {
            console.error(`Could not get products: ${error}`);
        })
    ;
};

function multiplePromisesAll(params) {
    console.log("FULLIFED PROMISES PARALEL CALL WITH promiseAll...........");
    console.log("Multiple fecht on the same time");
    const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    const fetchPromise2 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
    );
    const fetchPromise3 = fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    );

    Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
        .then((responses) => {
            let index = 0;
            for (const response of responses) {
                console.log(`PRINTIN PROMISES RESPONSE (${++index}): ${response.url}: ${response.status}`);
            }
        })
        .catch((error) => {
            console.error(`Failed to fetch: ${error}`);
        });
    
};

function badliMultiplePromiseAll() {
    console.log("FULLIFED PROMISES PARALEL CALL WITH promiseAll...........");
    const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    const fetchPromise2 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
    );
    const fetchPromise3 = fetch(
        "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    );

    Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
        .then((responses) => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
        })
        .catch((error) => {
        console.error(`Hi from back-end, sorry failed to fetch: ${error}`);
        })
    ;

};

function multiplePromisesAny() {
    /*
    Sometimes, you might need any one of a set of promises to be fulfilled,
    and don't care which one. In that case, you want Promise.any().
    This is like Promise.all(), except that it is fulfilled as soon as any of
    the array of promises is fulfilled, or rejected if all of them are rejected:
    */
    console.log("FULLIFED Some one promise, PARALEL CALL WITH promiseAny...........");
    const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    const fetchPromise2 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
    );
    const fetchPromise3 = fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    );

    Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
        .then((response) => {
        console.log(`${response.url}: ${response.status}`);
        })
        .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
        })
    ;

        
};




// CALLINGs
// multiplePromisesAny();
