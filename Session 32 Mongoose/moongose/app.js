//jshint esversion:6

// native modules
const readline = require(`node:readline`);
const util = require('node:util');

// thirdy modules 
const mongoose = require(`mongoose`);

// local modules
const { fruitSchema, fruit } = require("./model")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = util.promisify(rl.question).bind(rl);
/**
 * 
 * @param {string} msg a messega for the user
 * @returns 
 */
async function input(msg="Type someting: ") {
    return await question(`${msg}`);
};



/**
 * Subfunction to use for select a item
 */
async function elementSelect(operation="Delete") {
    console.log("\nSELECT ONE FRUIT TO "+operation);
    let fruits = await read(print=true);
    let option = Number(await input("Type the fruit you want to delete: "));
    let validOption = false

    if( 0 <= --option && option< fruits.length){
        validOption = true;
    }else{
        console.log("Option it's in outrange: "+ ++option);
        console.log(`${operation} operation was canceled....`);
    };
    
    return {
        fruits:fruits,
        option:option,
        validOption:validOption
    };
};


/**
 * @param {Object} fruitElement
 * Just create a fruit element
*/
async function create() {
    await mongoose.connect(`mongodb://127.0.0.1:27017/fruitsDB`);
    
    fruit.create({
        name:await input("Set the name: "),
        rating:Number( await input("Put the rating: ")),
        review:await input("Set the a review: ")
    })
    .then((register)=>{
        console.log(register);
    });

    return "create option";
};

/**
 * read the values of fruits collections
 * @returns string
 */
async function read(print=true) {
    await mongoose.connect(`mongodb://127.0.0.1:27017/fruitsDB`);
    let fruits = await fruit.find()
    
    if (print) {
        fruits.forEach((element, index)=>{
            console.log(`Fruit ${++index} Name: ${element.name}, Rating: ${element.rating}, review: ${element.review}.`);
        });
    };
    
    
    return fruits;
};

/**
 * update a specific fruit element
 */
async function update() {
    let {fruits, option, validOption} = await elementSelect(operation="Update");

    if(validOption){
        let [name, rating, review, toUpdate] = ["", -1, "", {}];
        
        await mongoose.connect(`mongodb://127.0.0.1:27017/fruitsDB`);

        console.log(`ITEM TO UPDATE: name ${fruits[option].name}`)
        console.log("Just pres enter for keep the value, or type the new value for change\n")
        name = await input("New name?: ")
        rating = Number(await input("New rating?: "));
        review = await input("New review?: ");

        if (name.length > 2) {
            toUpdate.name = name;
        };
        if (rating >= 0 && rating <= 5) {
            toUpdate.rating = rating;
        };
        if (review.length > 2) {
            toUpdate.review = review;
        };

        console.log(await fruit.updateOne(
                { _id: `${fruits[option]._id}` },toUpdate
            )
        );
    };
    
    return "UPDATE option. Closed.\n";
};

/**
 * Delete a specific element
 */
async function del() {
    let {fruits, option, validOption} = await elementSelect(operation="Delete");
    
    if(validOption){
        await mongoose.connect(`mongodb://127.0.0.1:27017/fruitsDB`);
        console.log(`ITEM TO DELETE: name ${fruits[option].name}`)
        console.log(await fruit.deleteOne({ _id: `${fruits[option]._id}` }));
    };
    
    return "delete option. Closed.\n";
};

async function main() {
    let [option, play] = [0,true];

    let finalCase = async function () {
        await input("Continue...");
        console.clear();
    };

    while (play) {
        console.log(`
        Play: ${play} Last Option: ${option}

        Select an option:
        1) Create a fruit
        2) Read the fruits
        3) Update a fruit
        4) Delete a fruit
        5) Break the system
        `);

        option = Number( await input("Select an option: "));
        
        switch (option) {
            case 1:
                console.log( await create());
                await finalCase();
                break;
            case 2:
                await read();
                await finalCase();
                break;
            case 3:
                console.log( await update());
                await finalCase();
                break;
            case 4:
                console.log( await del());
                await finalCase();
                break;
            case 5:
                console.log("See you soon");
                process.exit(0);
                break;
        
            default:
                await input("Invalid option");
                console.clear();
                break;
        };
    };

    return 0;
};

main().catch(err =>{
    console.log(err);
});
