


const superheroes = require('superheroes');


// console.log(superheroes.all);
//=> ['3-D Man', 'A-Bomb', …]

for (let index = 0; index < 20; index++) {
    console.log(`[${index}]${superheroes.random()},  - `);
}
//=> 'Spider-Ham'