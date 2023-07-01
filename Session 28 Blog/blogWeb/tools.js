
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

/**
 * @param {Array} posts
 * @param {string} title
 */
function getMatch(posts,title){
    let matchedFlag = false, index = 0;
    
    while (!matchedFlag && posts.length -1 >= index) {
        if (posts[index++].title === title){
            matchedFlag = true;
        };
    };

    return {matchedFlag:matchedFlag,index:--index};
};

/**
 * @param {Object} post
 * @param {Number} index
 * @return {object} An object formed with two keys: title, content
 */
function truncatePost(post){
    return {
        title : post.title,
        content : (post.content.length > 100) ? post.content.slice(0,100-1) : 
            (post.content.length > 50) ? post.content.slice(0,50-1) :
            (post.content.length > 30) ? post.content.slice(0,30-1) :
            (post.content.length > 20) ? post.content.slice(0,20-1) :
            (post.content.length > 10) ? post.content.slice(0,10-1) :
            post.content,
    };
};

/**
 * @param {Array} posts
 * @return {Array} An array formed with objects, with 3 keys: title, content, and index
 */
function truncatePosts(posts){
    let postsToRender = [];

    posts.forEach((post)=>{
        postsToRender.push(truncatePost(post));
    });

    return postsToRender
};

module.exports = { capitalizeWord, getMatch, truncatePosts }
