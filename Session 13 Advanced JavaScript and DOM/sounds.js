
export function createAudio(letter) {
    
    return new Audio(
        "./static/sounds/" + 
        (
            (letter === "w") ? "tom-1" :
            (letter === "a") ? "tom-2" :
            (letter === "s") ? "tom-3" :
            (letter === "d") ? "tom-4" :
            (letter === "j") ? "snare" :
            (letter === "k") ? "crash" :
            "kick-bass" 
        ) + ".mp3"
    );

};