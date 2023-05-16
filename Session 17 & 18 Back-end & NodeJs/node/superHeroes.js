


const superheroes = require('superheroes');
const supervillains = require('supervillains');


// console.log(superheroes.all);
//=> ['3-D Man', 'A-Bomb', …]

console.log(`SUPERHEROE - PRINCIPAL ENEMIE`);
for (let index = 0; index < 21; index++) {
    console.log(`[${index}] ${superheroes.random()} - ${supervillains.random()}`);
}
//=> 'Spider-Ham'