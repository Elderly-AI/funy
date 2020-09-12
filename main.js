document.getElementById("big-button").addEventListener("click", handler_a1);
document.getElementById("big-button").addEventListener("mouseover", handler_a2);
let playing = null;

function handler_a1(e) {
    if(playing){
        playing.pause();
    }
    (new Audio('a1.mp3')).play();
    document.getElementById("big-button").classList.add('hide');
    e.target.removeEventListener(e.type, arguments.callee);
}

function handler_a2(e) {
    playing = new Audio('a2.mp3');
    playing.play();
    e.target.removeEventListener(e.type, arguments.callee);
}