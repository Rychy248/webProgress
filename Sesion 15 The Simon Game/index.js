// ----------------------GLOBAL VARIABLES
let inputTypingFlag = false;
let showSquenceFlag = true;
let gameActive = false;
let gameOver = false;

let playerName = "";

// ----------------------FUNCTIONS

// START THE GAME
function startGame() {
    gameActive = true;
    document.querySelectorAll(".container-circle .btn").forEach((btn, index) => {
        btn.style.opacity = '1';
        // this.addEventListener('transitionend', () => this.remove());
        // btn.classList.remove("btn-opacity");
    });
    document.querySelector("#level-title").innerText = `Le'ts Go${(playerName.length > 0)? " " + playerName : ""}!`
    // document.querySelector("#level-title .color-2").addEventListener("click",startGame)    
};

//KeyBoard Control
function keyHandler(event){
    let key = event.key.toUpperCase();
    let btnNum="";
    let classQuarter="";
    if (!inputTypingFlag){
        switch (key) {
            case "A":
                if (!gameActive) {
                    startGame()
                }else{                    
                    btnNum = `${key}`;
                    classQuarter = `quarter-circle${4}`;
                    // (index === "A" || index === "4") ? "blue" :
                    btnPressed(btnNum, classQuarter);
                };

                break;
            case "W":
                btnNum = `${key}`;
                classQuarter = `quarter-circle${1}`;
                //(index === "W" || index === "1") ? "green" :
                btnPressed(btnNum, classQuarter);

                break;
            case "D":
                btnNum = `${key}`;
                classQuarter = `quarter-circle${2}`;
                //(index === "D" || index === "2") ? "red" :
                btnPressed(btnNum, classQuarter);

                break;
            case "S":
                btnNum = `${key}`;
                classQuarter = `quarter-circle${3}`;
                //(index === "S" || index === "3") ? "yellow" :
                btnPressed(btnNum, classQuarter);
                
                break;
                
            default:
                if (!gameActive) {
                    startGame()
                };
                break;
        }
    };
};

// input focus or blur
function inputTyping(event){
    if (event.type === "blur") {
        this.classList.remove("input-focus");
        inputTypingFlag = false;
        
        let inputText = this.value;
        let parentIsContainerData = this.parentElement.parentElement.classList == "container-data";
        if (inputText.length > 3 && parentIsContainerData){
            // formating name
            inputText = inputText[0].toUpperCase() + inputText.slice(1, (inputText.length)).toLowerCase()
            playerName = inputText;
            // print name
            document.querySelector(".container-data label").innerText =  inputText;
            // hided input, with JS VANILLA
            this.style.opacity = '0';
            this.addEventListener('transitionend', () => this.remove());

        }else if (parentIsContainerData){
            alert("Typer a name bigger than 3 characters");
        };
    }else{ // event type == "focus"
        this.classList.add("input-focus")
        inputTypingFlag = true;
    }
};


// SHOW SEQUENCE ACTIVE AND DESACTIINB THE BUTTON
function showSquence(event) {
    if (showSquenceFlag){
        this.disabled = true;
        this.classList.add("button-disabled")
        showSquenceFlag = false;
    };
};
function activeShowSquence(){
    let btn = document.querySelector(".container-data button");
    if (!showSquenceFlag){
        showSquenceFlag = true;
        btn.disabled = false;
        btn.classList.remove("button-disabled")
    };
};

// PLAY SOUND
function playSound(index){
    let audio = new Audio(
            "./sounds/" + 
            (
                (index === "W" || index === "1") ? "green" :
                (index === "D" || index === "2") ? "red" :
                (index === "S" || index === "3") ? "yellow" :
                (index === "A" || index === "4") ? "blue" :
                "wrong" 
            ) + ".mp3"
        );
    audio.play(); //play the sound
};

// BUTTON PRESSED 
function btnPressed(index,classQuarter){
    if (gameActive){
        let btn = document.querySelector(`.${classQuarter}`)
    
        playSound(index);
    
        btn.classList.add("pressed");
        btn.classList.add(`${classQuarter}-clicked`);
    
        setTimeout(() => {
            btn.classList.remove("pressed");
            btn.classList.remove(`${classQuarter}-clicked`);
        }, 100);
    };
};

function bntClicked(){
    if(gameActive){
        let btnNum = `${this.getAttribute("btn")}`;
        let classQuarter = `quarter-circle${btnNum}`;
        btnPressed(btnNum, classQuarter);
    };
};


// ----------------------ADDING EVENTS
//START THE GAME
document.querySelector("#level-title .color-2").addEventListener("click",startGame)

// getting the keyboard
document.addEventListener("keydown",keyHandler);

// gettin if typing in an input
document.querySelectorAll("input").forEach((value, index)=>{
    value.addEventListener("focus", inputTyping);
})
document.querySelectorAll("input").forEach((value, index)=>{
    value.addEventListener("blur", inputTyping);
});



// button show squence
document.querySelector(".container-data button").addEventListener("click",showSquence);



// pressing the principal buttons
document.querySelectorAll(".container-circle .btn").forEach((value, index) => {
    value.addEventListener("click",bntClicked);
});
