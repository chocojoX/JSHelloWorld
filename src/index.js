//import "./styles.css";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 800, 600);

ctx.fillStyle = "#00f";
ctx.fillRect(400, 300, 100, 100);

ctx.fillStyle = "#f00";
ctx.fillRect(100, 50, 80, 80);
