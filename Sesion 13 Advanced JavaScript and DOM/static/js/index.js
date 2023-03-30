import { createAudio } from "./../../sounds.js";

document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", 
        function () {

            this.classList.add("pressed"); // adding higlith the button
            this.classList.add("sound"); // adding higlith the button
            
            let my_audio = createAudio(this.textContent)
            my_audio.play(); //play the sound

            setTimeout(() => { 
                this.classList.remove("pressed");
                this.classList.remove("sound");
            }, 200); // removing the higlith of the button
        }
    );

}); 

function clickButton(btnClass) {
    if (["w","a","s","d","j","k","l"].includes(btnClass)) {
        document.querySelector(`.drum.${btnClass}`).click();
    };
};

document.addEventListener("keydown",(event)=>{
    clickButton(event.key.toLowerCase());
});