//TODO refactor this at some point, the code got messy
let pressed = false;
let timeZero = Date.now();
let img = [];
let addToArray = false;
let pixelCoords = [];

let x = [];
let y = [];
let t = [];

function setup() {
    let canvas = createCanvas(400,400);
    pixelDensity(1);
    canvas.id("canvas")
    rect(0,0, 400,400)
}

function draw() {
    if (mouseIsPressed && mouseX <= 400 && mouseY <= 400 && 0 <= mouseX && 0 <= mouseY) {
        fill(0);
        ellipse(mouseX,mouseY,10,10);

        loadPixels();
        updatedCoords = (mouseX.toString()+Math.trunc(mouseY).toString())
        if (!pixelCoords.includes(updatedCoords)){
            x.push(mouseX);
            y.push(Math.trunc(mouseY));
            t.push(Date.now() - timeZero); 
            pixelCoords.push(updatedCoords);
            addToArray = true; }
        updatePixels();
         }
    
    if ((!mouseIsPressed )&& addToArray) {
        addToArray = false;
        img.push([x,y,t]);
        x = [];
        y = [];
        t = [];
        timeZero = Date.now();
    }

    if (pressed){
        pressed = !pressed;
        data = {"pixels":img}
        httpPost("http://127.0.0.1:5000/send/image", 'json', data, (res) => alert(res["result"]), (res) => console.log("failure, ", res));
        img = [];
        
        }
}
	
function clearArea() {
    clear();
    c = color(255,255,255)
    fill(c);
    rect(0,0,400,400);
}

function sendPixels(canvas){
    pressed = !pressed;
}
