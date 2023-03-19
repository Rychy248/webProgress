
var white = "#fff";
var borderRadius = "30px";
var borderWeigh = "2px";
var borderWeightBol= "4px";
var principalColor = "#75c6ee";
var secondaryColor = "#424651";
var thirdColor = "#AF3B6E";
var forthColor = "#fad3ea";
var fithColor = "#4aad7d";
var whiteColor = "#fff";
var blackColor = "#000";
var grayColor = "#f3f3f3";


function fieldWhite(){
    document.querySelector("fieldset").style.backgroundColor = white;
};

function h2High(){
    document.querySelector("fieldset h2").style.fontSize = "4.5rem";
    document.querySelector(".container-flex button[onclick='h2High()']").hidden = true;
    document.querySelector(".container-flex button[onclick='h2Normal()']").hidden = false;
};
function h2Normal(){
    document.querySelector("fieldset h2").style.fontSize = "2rem";
    document.querySelector(".container-flex button[onclick='h2High()']").hidden = false;
    document.querySelector(".container-flex button[onclick='h2Normal()']").hidden = true;
};
function liChar1(){
    document.querySelector("#myTodoDoList").style.listStyleType = "circle";

    document.querySelector(".container-flex button[onclick='liChar1()']").hidden = true;
    document.querySelector(".container-flex button[onclick='liChar2()']").hidden = false;
};
function liChar2(){
    document.querySelector("#myTodoDoList").style.listStyleType = "square";

    document.querySelector(".container-flex button[onclick='liChar1()']").hidden = false;
    document.querySelector(".container-flex button[onclick='liChar2()']").hidden = true;
};

function CheckBgColor(){
    let check = document.querySelectorAll("fieldset .chekcDIv")[0];
    check.style.backgroundColor = fithColor;
    check.style.borderRadius = borderRadius;
    check.style.padding = "15px";
    check.firstElementChild.style.color = white;
    check.lastElementChild.style.color = grayColor;
};

function checkboxClases(){
    let check = document.querySelectorAll("fieldset .chekcDIv")[1];
    console.log(check.classList)
    alert(check.classList)
};

function addCheckClass(){
    document.querySelectorAll("fieldset .chekcDIv")[1].classList.add("bg-green");
    document.querySelectorAll("fieldset .chekcDIv")[1].classList.remove("thisIsAnotherClass");
};
function removCheckClass(){
    document.querySelectorAll("fieldset .chekcDIv")[1].classList.remove("bg-green");
};
function hideP(){
    document.querySelector("footer").classList.toggle("unvisibility");
};