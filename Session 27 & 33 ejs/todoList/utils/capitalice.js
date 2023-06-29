/**
 * @param {string} word
 */
function capitalizeWord(word) {

    let word1 = word.toLowerCase().trim().replace(/[-,_]/g," "),
        firstChar = word1.charAt(0).toUpperCase(),
        splitedWords = word1.split(" "),
        validWords = [],
        newString = "";

    splitedWords.forEach(word=>{
        if (word !== "") {
            validWords.push(word)
        };
    });

    validWords[0] = `${firstChar}${validWords[0].slice(1)}`;
    validWords.forEach((word,index)=>{
        newString += `${word}`
        newString += (index < validWords.length -1)? ` ` : ``;
    });

    return newString;
};


module.exports = { capitalizeWord }