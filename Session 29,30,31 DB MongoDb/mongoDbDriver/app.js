//jshint esversion:6
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017,localhost:27017";

const client = new MongoClient(uri);

async function connect(dbName="fruitDB") {
    try {
        await client.connect();

        console.log("Client Connected");

    } catch(err) {
        console.log(err);
    };
};

async function close() {
    // Ensures that the client will close when you finish/error
    try {
        await client.close();
    } catch (error) {
        console.log("ERROR: "+error);
    };

};
async function getDB(dbName="fruits"){
    try {
        await connect()
        console.log("DB "+dbName+" Connected");
        return database = client.db(dbName);

    } catch(err) {
        console.log(err);
    };
};

async function read(
    collectionName="fruits",
    query={rating:5},
    options={
        sort: { name: 1 },
        projection: { _id: 0,name:1},
    }) {
    try {
        const DB = await getDB();
        const collection = DB.collection(collectionName);
        
        // Query for a movie that has the title 'Back to the Future'
        const product = await collection.find(query,options).toArray();

        console.log("data Getted: \n"+ JSON.stringify(product));
        
    } catch (err){
        // Ensures that the client will close when you finish/error
        console.log(err)
        await close();
    } finally{
        await close();
    };

};

async function insert(collectionName="fruits",element={}) {
    try {
        const DB = await getDB();
        const collection = DB.collection(collectionName);

        let result=null;
        
        console.log(collectionName)
        // Query for a movie that has the title 'Back to the Future'
    
        if (element.length == undefined) {
            result = await collection.insertOne(element);
        }else{
            result = await collection.insertMany(element);
        }

        console.log("data: "+ JSON.stringify(result));
        
    } catch (err){
        // Ensures that the client will close when you finish/error
        console.log(err)
        await close();
    } finally{
        await close();
    };

};

async function main() {
    // await insert("fruits",{"_id":10,name:"pinable",price:6}).catch(console.dir)
    // await insert("fruits",[
    //     { "_id": 5, "name": "Mango", "qty": 5, "rating": 3 },
    //     { "_id": 6, "name": "Limon", "qty": 7, "rating": 1, "microsieverts": 0.1 },
    //     { "_id": 7, "name": "Stranberry", "qty": 6, "rating": 2 },
    //     { "_id": 8, "name": "Melocoton", "qty": 3, "rating": 5 }
    // ]).catch(console.dir);
    await read("fruits",{})
    .catch(console.dir);

};
main();

/* // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

For of iteration and destructuring
const people = [
    {
    name: "Mike Smith",
    family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
    },
    age: 35,
    },
    {
    name: "Tom Jones",
    family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
    },
    age: 25,
    },
];

for (const { name: n, family: { father: f = 233 },} of people) {
    console.log(`Name: ${n}, Father: ${f}`);
}

"Name: Mike Smith, Father: Harry Smith"
"Name: Tom Jones, Father: Richard Jones"
*/