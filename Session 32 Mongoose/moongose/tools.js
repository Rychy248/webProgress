//jshint esversion:6

// native modules
const readline = require(`node:readline`);
const util = require('node:util');


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

module.exports = {
    input
};