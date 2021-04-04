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

function setup() {
    let canvas = createCanvas(400,400);
    pixelDensity(1);
    canvas.id("canvas")
    rect(0,0, 400,400)
    //loadPixels();
    print("SET UP")
}

function draw() {
        // for (var y = 0; y < height; y++){
        //     let row = [];
        //     for (var x = 0; x < width; x++){
        //         let index = (x + y * width) * 4;
        //         let rgb = [pixels[index], pixels[index + 1], pixels[index + 2]];
        //         row.push(rgb);
        //     }
        //     img.push(row);
        // }
       
       // }
    //print("In draw")
    if (mouseIsPressed && mouseX <= 400 && mouseY <= 400 && 0 <= mouseX && 0 <= mouseY) {
        print("In circle drawing")
        fill(0);
        ellipse(mouseX,mouseY,10,10);

        loadPixels();
       // while (mouseIsPressed) {
        //    fill(0);
         //   ellipse(mouseX,mouseY,10,10);
            //loadPixels();
        
        //print(x.length, "X LENGTH");
        //print(pixelCoords, "Pixel Coords");
            //#adda rray of coords
    // for (var i = 0; i < x.length; i++) {
    //     if (!(x[i] == mouseX && y[i] == Math.trunc(mouseY))) {
        if (!pixelCoords.includes((mouseX.toString()+Math.trunc(mouseY).toString()))){
            //print("WORKED", x, y, mouseX, mouseY);
            //print("COORDS", (mouseX.toString()+Math.trunc(mouseY).toString()))
            x.push(mouseX);
            y.push(Math.trunc(mouseY));
            t.push(Date.now() - timeZero); 
            pixelCoords.push(mouseX.toString()+Math.trunc(mouseY).toString());
            addToArray = true; }
    
            //hasClicked = false;
        
        // array.push([x,y,t]);
        // print(array.length);
        // img.push(array);
        // print(img.length);
        updatePixels();
         }
    
    if ((!mouseIsPressed )&& addToArray) {
        addToArray = false;
       // print("in not mouse pressedd")
        array.push([x,y,t]);
        //print(array.length, "ARRAY");
        img.push(array);
        //print(img.length, "IMG");
        array = [];
        x = [];
        y = [];
        t = [];
        timeZero = Date.now();
    }
    if (pressed){
        print("In collecting points")
        pressed = !pressed;
        print(img, "img json");
        data = {"pixels":img}
        httpPost("http://127.0.0.1:5000/send/image", 'json', data, (res) => alert(res["result"]), (res) => console.log("failure, ", res));
        img = [];
        
        }
    //updatePixels();
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
}
