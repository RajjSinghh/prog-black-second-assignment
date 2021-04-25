//TODO refactor this at some point, the code got messy
let pressed = false;
let timeZero = Date.now();
let img = [];
let addToArray = false;
let xpos = 0;
let ypos = 0;
let pixelCoords = [];

let array = [];
let x = [];
let y = [];
let t = [];

async function getCategory () {
    let targetPara = document.getElementById("target");
    let category = await fetch("http://127.0.0.1:5000/get/category");
    category = await category.json();
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(category.body[0])){
        targetPara.innerHTML = `Draw an ${category.body}`;
    } else {
        targetPara.innerHTML = `Draw a ${category.body}`;
    }
}

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
        if (!pixelCoords.includes((mouseX.toString()+Math.trunc(mouseY).toString()))){
            x.push(mouseX);
            y.push(Math.trunc(mouseY));
            t.push(Date.now() - timeZero); 
            pixelCoords.push(mouseX.toString()+Math.trunc(mouseY).toString());
            addToArray = true; }
        updatePixels();
         }
    
    if ((!mouseIsPressed )&& addToArray) {
        addToArray = false;
        img.push([x,y,t]);
        array = [];
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
    // Use the identity matrix while clearing the canvas
    clear();
    c = color(255,255,255)
    fill(c);
    rect(0,0,400,400);
}

function sendPixels(canvas){
    pressed = !pressed;
    clearArea();
}
