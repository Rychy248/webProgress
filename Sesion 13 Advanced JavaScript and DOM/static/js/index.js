import { createAudio } from "./../../sounds.js";

document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", 
        function () {

            this.classList.add("sound"); // adding higlith the button
            
            let my_audio = createAudio(this.textContent)

            my_audio.play(); //play the sound

            setTimeout(() => { this.classList.remove("sound"); }, 200); // removing the higlith of the button
        }
    );

}); 