//jshint esversion:6

// native modules

// thirdy modules 
const mongoose = require(`mongoose`);

// local modules
const { person, fruit } = require("./model")
const { input } = require("./tools");

/**
 * Subfunction to use for select a item
 */
async function elementSelect(operation="Delete") {
    console.log("\nSELECT ONE person TO "+operation);
    let persons = await read(print=true);
    let option = Number(await input(`Type the person you want to ${operation}: `));
    let validOption = false

    if( 0 <= --option && option< persons.length){
        validOption = true;
    }else{
        console.log("Option it's in outrange: "+ ++option);
        console.log(`${operation} operation was canceled....`);
    };
    
    return {
        persons:persons,
        option:option,
        validOption:validOption
    };
};


/**
 * @param {Object} personElement
 * Just create a person element
*/
async function create() {
    
    person.create({
        name:await input("Set the name: "),
        age:Number( await input("Set the age: "))
    })
    .then((register)=>{
        console.log(register);
    });

    return "create option";
};

/**
 * read the values of persons collections
 * @returns string
 */
async function read(print=true) {
    let persons = await person.find();

    let s = await person.findOne();
    s.favoriteFruit = await fruit.findOne();
    await s.save();

    if (print) {
        persons.forEach((element, index)=>{
            console.log(`person ${++index}) Name: ${element.name}, Age: ${element.age}, fruit: ${element.favoriteFruit}.`);
        });
    };    
    
    return persons;
};

/**
 * update a specific person element
 */
async function update() {
    let {persons, option, validOption} = await elementSelect(operation="Update");

    if(validOption){
        let [name, age, toUpdate] = ["", -1, {}];
        
        console.log(`ITEM TO UPDATE: name ${persons[option].name}`)
        console.log("Just pres enter for keep the value, or type the new value for change\n")
        
        name = await input("New name?: ")
        age = Number(await input("New rating?: "));

        if (name.length > 2) {
            toUpdate.name = name;
        };
        if (name >= 0 && rating <= 5) {
            toUpdate.rating = rating;
        };

        console.log(await person.updateOne(
                { _id: `${persons[option]._id}` },toUpdate
            )
        );
    };
    
    return "UPDATE option. Closed.\n";
};

/**
 * Delete a specific element
 */
async function del() {
    let {persons, option, validOption} = await elementSelect(operation="Delete");
    
    if(validOption){
        console.log(`ITEM TO DELETE: name ${persons[option].name}`)
        console.log(await person.deleteOne({ _id: `${persons[option]._id}` }));
    };
    
    return "delete option. Closed.\n";
};

async function main() {
    await mongoose.connect(`mongodb://127.0.0.1:27017/fruitsDB`);

    let [option, play] = [0,true];
    let finalCase = async function () {
        await input("Continue...");
        console.clear();
    };

    while (play) {
        console.log(`
        Play: ${play} Last Option: ${option}

        Select an option:
        1) Create a person
        2) Read the persons
        3) Update a person
        4) Delete a person
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
                await mongoose.connection.close();
                // await mongoose.disconnect()
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
