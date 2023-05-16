// ----------------------GLOBAL VARIABLES
let inputTypingFlag = false;

// ----------------------FUNCTIONS

// input focus or blur
function inputTyping(event){
    if (event.type === "blur") {
        this.classList.remove("input-focus");
        inputTypingFlag = false;
    }else{ // event type == "focus"
        this.classList.add("input-focus")
        inputTypingFlag = true;
    }
};

// ----------------------ADDING EVENTS

// gettin if typing in an input
document.querySelectorAll("input").forEach((value, index)=>{
    value.addEventListener("focus", inputTyping);
})
document.querySelectorAll("input").forEach((value, index)=>{
    value.addEventListener("blur", inputTyping);
});

