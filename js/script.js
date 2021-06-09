
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

function criarBG() {
    context.fillStyle = "lightgree";
    context.fillRect(0,0,16 * box, 16 * box );
}

criarBG();

