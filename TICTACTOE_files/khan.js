var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var fontSize = 20;
var textColor = "rgb(0,0,0)";

var line = function(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
};

var text = function(str, x, y, w, h) {
    ctx.font = fontSize + "px Helvetica";
    ctx.fillStyle = textColor;
    ctx.fillText(str, x, y + fontSize / 2);
};

var mouseIsPressed = 0;
var mouseX = 0;
var mouseY = 0;

var rgb = function(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

var background = function(r, g, b) {
    ctx.fillStyle = rgb(r, g, b);
    ctx.fillRect(0, 0, c.width, c.height);
};

var stroke = function(r, g, b) {
    ctx.strokeStyle = rgb(r, g, b);
};

var strokeWeight = function(d) {
    ctx.lineWidth = d;
};

var textSize = function(d) {
    fontSize = d;
};

var fill = function(r, g, b) {
    textColor = rgb(r, g, b);
};

var run = function() {
    if (typeof draw !== 'undefined') {
	draw();
	clearInterval();
    }
};

document.body.onmouseup = function(evt) {
};

document.body.onmousedown = function(evt) { 
};

document.body.onclick = function(evt) {
    mouseX = evt.clientX;
    mouseY = evt.clientY;
    mouseIsPressed = 1;
    console.log('hi ho');
    run();
    mouseIsPressed = 0;
}

setInterval(run, 500);
