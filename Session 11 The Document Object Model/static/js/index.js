

function hiExternalJS(){
    alert("Hello from Index.js, \n\n An external JS file!")
};

function randomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * 17)

        color += (num === 16) ? "F"
                :(num === 14) ? "E"
                :(num === 13) ? "D"
                :(num === 12) ? "C"
                :(num === 11) ? "B"
                :(num === 10) ? "A"
                :num
                ;
    };

    return color;
};

function changeMyTtile(color=false){
    let container = document.getElementById("DOM-box");

    console.log("Im the 'The first Child' container.firstElementChild " + container.firstElementChild);
    
    if(color){
        alert("Color changed ");
        container.firstElementChild.style.color = randomColor();
    }else{
        alert("Im the 'The first Child' container.firstElementChild " + JSON.stringify(container.firstElementChild));
        container.firstElementChild.innerHTML = "I'm modified succesfull";
    };
};

function querySelectorInputs() {

    //Encontrar un elemento a traves del valor de sus atributos
    let checboxes = document.querySelectorAll("input[type='checkbox']");

    alert("All checkboxes marqued with js");
    checboxes.forEach(checkbox => {
        checkbox.click()
    });
};

function mangoToKiwi() {
    alert("list element 'Mango' has changed to 'Kiwi'");
    document.querySelector("#DOM-box ul").lastElementChild.innerHTML = "Kiwi";
};