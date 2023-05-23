const apiKey = require("./apiKeys");
const client = require("@mailchimp/mailchimp_marketing");

// USAR EL HTMLOutputElement, PORQUE LA LIBRERIA DE ELLOS NO SIRVE

client.setConfig({
    apiKey: apiKey.apiKey,
    server: apiKey.server,
});

const run = async () => {
    const response = await client.root.getRoot();
    console.log(response);
};

run();



/*
async function run() {
    
    let response;
    try {
        response = await mailchimp.ping.get();
    } catch (error) {
        throw new Error(error);
        response = error;
        console.log(error);
    };

    console.log(response);
    return(response);
}

run();
*/