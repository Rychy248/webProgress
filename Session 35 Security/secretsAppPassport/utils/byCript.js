

const bcrypt = require('bcrypt');
const saltRounds = 2;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash)
    });
});

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    console.log(hash);
});


bcrypt.hash(myPlaintextPassword, saltRounds)
.then(function(hash) {
    console.log(hash);
});

// the differente result it's produced because of the random salt created at each round
// or exceution of the password