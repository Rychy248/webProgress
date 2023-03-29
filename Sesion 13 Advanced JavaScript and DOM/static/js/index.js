
document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", 
        function () {
            let my_audio = new Audio('/Sesion 13 Advanced JavaScript and DOM/static/sounds/tom-1.mp3');
            my_audio.play();
        }
    );
}); 

