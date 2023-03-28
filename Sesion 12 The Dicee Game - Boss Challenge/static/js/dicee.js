const diceeFace = [
    "error",
    "./static/images/dice1.png",
    "./static/images/dice2.png",
    "./static/images/dice3.png",
    "./static/images/dice4.png",
    "./static/images/dice5.png",
    "./static/images/dice6.png"
];

function randomNum() {
    return Math.floor(Math.random() * 6) + 1;
};

function degree(actualDegree){
    // cleaning the actualDegree data
    let degrees = Number(actualDegree.replace("deg",""));
    
    // degree to rotate max 45grades
    degrees += Math.floor(Math.random() * 45) + 1;

    degres = (degrees > 360) ? degres - 360
        :( degrees < 0 )? degrees * -1
        : degrees;
    
    return degrees;
};

function changeDiceeFace(p1, p2){
    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");

    // chagin face
    dice1.src = `${diceeFace[p1]}`;
    dice2.src = `${diceeFace[p2]}`;

    // rotating the dicee
    dice1.style.rotate = `${degree(dice2.style.rotate)}deg`;
    dice2.style.rotate = `${degree(dice2.style.rotate)}deg`;
    
};

function printWinner(p1, p2){
    //deleting the dicees roateted
    document.querySelector(".img1").style.rotate = "0deg";
    document.querySelector(".img2").style.rotate = "0deg";

    // print winner 
    document.querySelector("#player-win").textContent =  (p1 > p2) ? "Player 1" :
                                                        (p1 === p2) ? "Draw" : "Player 2";
};
function hidePlayButton(hide){
    
    document.querySelector("button[onclick='play()']").style.visibility = (hide)? "hidden":"visible";
};
function play() {
    let player1=0;
    let player2=0;
    let time = 100;

    for (let index = 0; index < 16; index++) {
        time += 100;

        setTimeout(() => {
            player1 = randomNum();
            player2 = randomNum();

            changeDiceeFace(player1,player2);
            if (index === 1) {
                hidePlayButton(true);
            } else if (index === 15) {
                printWinner(player1,player2);
                hidePlayButton(false);
            };

        }, time);
    };

};