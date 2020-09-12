document.getElementById("big-button").addEventListener("click", handler_a1);
document.getElementById("big-button").addEventListener("mouseover", handler_a2);

function handler_a1(e) {
    (new Audio('a1.mp3')).play();
    document.getElementById("big-button").classList.add('hide');
    e.target.removeEventListener(e.type, arguments.callee);
}

function handler_a2(e) {
    (new Audio('a2.mp3')).play();
    e.target.removeEventListener(e.type, arguments.callee);
}