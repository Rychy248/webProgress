
function refresh() {
    let endpoint = "https://api.kanye.rest/";

    fetch(endpoint)
        .then((response)=>response.json())
        .then((json)=>{
            document.querySelector("#api-response").innerHTML = `"${json.quote}"`;
        });
};

function jokeAPI() {
    let endpoint = "https://v2.jokeapi.dev/joke/"
    let category = "Programming?";
    let paramteters = "blacklistFlags=sexist,explicit";

    let urlToGET = endpoint + category + paramteters;

    fetch(urlToGET)
        .then((response)=>response.json())
        .then((json)=>{
            document.querySelector("#api-joke-response").innerHTML = `"${json.joke}"`;
        });

};

refresh();
jokeAPI();
document.querySelector("#api-btn").addEventListener("click",refresh);
document.querySelector("#api-btn-joke").addEventListener("click",jokeAPI);
