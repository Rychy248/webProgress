const emojipedia = require("./data")

// -------------------------
console.log("Map method");
function createArr1(emoji) {
    return emoji.meaning.substring(0,100);
};
const meanings1 = emojipedia.map(createArr1);
console.log("Result:" ,meanings1);

// -------------------------
console.log("Filter method");
function myFilter(emoji) {
        return emoji.meaning.length <= 150
};
// const meanings2 = emojipedia.filter(myFilter);
const meanings2 = emojipedia.filter((emoji)=>emoji.meaning.length <= 150);
console.log("Result:" ,meanings2);

// -------------------------
console.log("reduce method");
// sum of id
const sumOfIndex = emojipedia
    .map((emoji)=>emoji.id)
    .reduce((acumulator,currentValue)=>acumulator + currentValue)
;

console.log("Result, SumOfIndexes:" ,sumOfIndex);

// -------------------------
console.log("find method");
// find the emoji with id 2
const element = emojipedia
    .find((emoji)=>emoji.id === 2)
;
console.log("Result, id = 2:" ,element);


// -------------------------
console.log("findIndex of id 2");
// find the emoji with id 2
const index = emojipedia
    .findIndex((emoji)=>emoji.id === 2)
;
console.log("Result, indexOf id = 2:" ,index);
