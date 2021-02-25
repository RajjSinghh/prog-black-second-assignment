alert("Hello, world!");
console.log("HEY");

// var canvas = document.getElementById("Canvas");
// var context = canvas.getContext("2d");
// context.fillStyle = "#FF0000";

// var mousePressed = false;
// var lastX, lastY;
// var ctx;

function setup() {
    createCanvas(400,400);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
        ellipse(mouseX,mouseY,20,20);
    }
}
	
function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


//code found from https://www.codicode.com/art/how_to_draw_on_a_html5_canvas_with_a_mouse.aspx
