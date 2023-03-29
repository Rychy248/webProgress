
document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", 
        function () {

            this.classList.add("sound"); // adding higlith the button
            
            let my_audio = new Audio(
                "/Sesion 13 Advanced JavaScript and DOM/static/sounds/" + 
                (
                    (this.textContent === "w") ? "tom-1" :
                    (this.textContent === "a") ? "tom-2" :
                    (this.textContent === "s") ? "tom-3" :
                    (this.textContent === "d") ? "tom-4" :
                    (this.textContent === "j") ? "snare" :
                    (this.textContent === "k") ? "crash" :
                    "kick-bass" 
                ) + ".mp3"
            );

            my_audio.play(); //play the sound
            setTimeout(() => { this.classList.remove("sound"); }, 200); // removing the higlith of the button
        }
    );

}); 