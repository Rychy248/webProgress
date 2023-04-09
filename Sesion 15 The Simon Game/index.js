// ----------------------GLOBAL VARIABLES
let inputTypingFlag = false;
let showSquenceFlag = true;

let gameActive = false;
let gameOver = false;
let higScore = 0;
let playerName = "";
let playerActionWait = false;

let sequence = [];
let playerSequence = [];

// ----------------------FUNCTIONS


//KeyBoard Control
function keyHandler(event){
    let key = event.key.toUpperCase();
    let btnNum="";
    let classQuarter="";

    if (!inputTypingFlag){
        if (!gameActive && key === "A") {
            startGame()
    
        }else if (playerActionWait){
    
            switch (key) {
                case "A":
                    // (index === "A" || index === "4") ? "blue" :
                    if(checkInput(key)){ //valid input")
                        btnNum = `${key}`;
                        classQuarter = `quarter-circle${4}`;
                        btnPressed(btnNum, classQuarter);
                    };
                    break;

                case "W":
                    //(index === "W" || index === "1") ? "green" :
                    if(checkInput(key)){ //valid input")
                        btnNum = `${key}`;
                        classQuarter = `quarter-circle${1}`;
                        btnPressed(btnNum, classQuarter);
                    };
                    break;

                case "D":
                    //(index === "D" || index === "2") ? "red" :
                    if(checkInput(key)){ //valid input")
                        btnNum = `${key}`;
                        classQuarter = `quarter-circle${2}`;
                        btnPressed(btnNum, classQuarter);
                    };
                    break;
    
                case "S":
                    //(index === "S" || index === "3") ? "yellow" :
                    if(checkInput(key)){ //valid input")
                        btnNum = `${key}`;
                        classQuarter = `quarter-circle${3}`;
                        btnPressed(btnNum, classQuarter);
                    };
                    break;
                    
                default:
                    if (!gameActive) {
                        startGame()
                    };
                    break;
            };
        };
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
        //invalid player actions
        playerActionWait = false;
        playerSequence = [];
        document.querySelector("#level-title").innerText = `${(playerName.length > 0)? playerName + " ": ""}Pay Atention!`

        this.disabled = true;
        this.classList.add("button-disabled")
        showSquenceFlag = false;

        let time = 400;
        
        sequence.forEach((element,index) => {

            time += 400;

            setTimeout(() => {
                let classQuarter = `quarter-circle${element}`;
                btnPressed(element, classQuarter);
                
                if (index === (sequence.length -1)){
                    document.querySelector("#level-title").innerText = `Le'ts Go${(playerName.length > 0)? " " + playerName : ""}!`
                    //active player actions
                    playerActionWait = true;
                };
            }, time);

        });
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

            if (playerActionWait){
                if(sequence.length === playerSequence.length){
                    playerSequence = []; //cleaning player input
                    setTimeout(() => {
                        nextSequence(); //NEXT LEVEL
                    }, 500);
                };
            };
        }, 100);
    };
};

function btnClicked(){
    if(gameActive && playerActionWait){
        let btnNum = `${this.getAttribute("btn")}`;
        if(checkInput(btnNum)){ //valid input")
            let classQuarter = `quarter-circle${btnNum}`;
            btnPressed(btnNum, classQuarter);
        };
    };
};

//UPDATE LEVEL
function updateLevel() {
    //hig Score and SCORE
    let level = sequence.length;
    if (higScore < level) {
        higScore = level;
        document.querySelector(".container-data .high-score").innerText = `-${(higScore > 9)? higScore : "0"+higScore}-`;
    };
    document.querySelector(".container-data .score").innerText = `-${(level > 9)? level : "0"+level}-`;
};

// NEXT SEQUENCE
function nextSequence() {
    let btnNum = `${Math.floor(Math.random() * 4) + 1}`;

    sequence.push(btnNum);
    // active button Show Sequence
    if(!showSquenceFlag){
        activeShowSquence();
    };
    
    updateLevel();

    let classQuarter = `quarter-circle${btnNum}`;
    playerActionWait = true;
    btnPressed(btnNum, classQuarter);
    
};

// START THE GAME
function startGame() {

    gameActive = true;
    // set the higScore
    document.querySelector(".container-data .high-score").innerText = `-${(higScore > 9)? higScore : "0"+higScore}-`;
    
    document.querySelectorAll(".container-circle .btn").forEach((btn, index) => {
        btn.style.opacity = '1';

    });
    document.querySelector("#level-title").innerText = `Le'ts Go${(playerName.length > 0)? " " + playerName : ""}!`
    nextSequence();
};

//RESET LEVEL
function resetLevel() {
    
    playSound("over");
    playerSequence = [];
    sequence = [];

    // background red
    document.querySelector("body").classList.add("game-over");
    setTimeout(() => {
        document.querySelector("body").classList.remove("game-over");
    }, 400);

    // opacity of circle
    document.querySelectorAll(".container-circle .btn").forEach((btn) => {
        btn.style.opacity = '0.5';
    });
    // game over title
    document.querySelector("#level-title").innerText = `Game Over${(playerName.length > 0)? " " + playerName : ""}!`
        
    gameOver = false;
    setTimeout(() => {
        startGame();
    }, 1000);
};

//CHECK LEVEL
function checkInput(key) {
    let myKey = key;
    let validCheck = false;

    if (["A","W","D","S"].includes(myKey)){
        myKey = (myKey === "W")? "1" :
            (myKey === "D")? "2" :
            (myKey === "S")? "3" :
            "4"
        ;
    };

    if (["1","2","3","4"].includes(myKey)){
        validCheck = true;
        playerSequence.push(myKey);

        let playerIndex = playerSequence.length - 1;

        if (sequence[playerIndex] != myKey) {
            validCheck = false; // the key or click is correct, but ins't in the sequence
            playerActionWait = false;
            gameOver = true;
            gameActive = false;
            resetLevel();
        };
    };

    return validCheck;
    
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
    value.addEventListener("click",btnClicked);
});
