

function hiExternalJS(){
    alert("Hello from Index.js, \n\n An external JS file!")
};

function changeMyTtile(){
    let container = document.getElementById("DOM-box");

    console.log("Im the 'The first Child' container.firstElementChild " + container.firstElementChild);
    alert("Im the 'The first Child' container.firstElementChild " + JSON.stringify(container.firstElementChild));

    container.firstElementChild.innerHTML = "I'm modified succesfull";
};