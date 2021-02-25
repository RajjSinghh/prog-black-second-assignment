alert("Hello, world!");

function setup() {
    createCanvas(400,400);
    rect(0,0, 400,400)
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
        ellipse(mouseX,mouseY,20,20);
    }
}
	
function clearArea() {
    // Use the identity matrix while clearing the canvas
    clear();
    background(255);
}
