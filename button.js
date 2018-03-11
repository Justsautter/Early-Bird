function GiveAdvice() {
    var GiveAdvice = new Audio("that_was_easy.mp3");
    GiveAdvice.play();
}

("#easy").on("click", GiveAdvice);

(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.keyCode == 32) {
        ("#easy").trigger("click");
    }
}