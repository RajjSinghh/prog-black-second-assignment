alert("Hello, world!");

function setup() {
    let canvas = createCanvas(400,400);
    canvas.id("canvas")
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
    c = color(255,255,255)
    fill(c);
    rect(0,0,400,400);
}
