let pressed = false;

function setup() {
    let canvas = createCanvas(400,400);
    pixelDensity(1);
    canvas.id("canvas")
    rect(0,0, 400,400)
    loadPixels();
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
        ellipse(mouseX,mouseY,20,20);
    }
    if (pressed){
        pressed = !pressed;
        loadPixels();
        // let img = [];
        // for (var y = 0; y < height; y++){
        //     let row = [];
        //     for (var x = 0; x < width; x++){
        //         let index = (x + y * width) * 4;
        //         let rgb = [pixels[index], pixels[index + 1], pixels[index + 2]];
        //         row.push(rgb);
        //     }
        //     img.push(row);
        // }
        let img = [];
        let time;
        //while (true){
           timeZero = Date.now()
           let x = [];
           let y = [];
           let t = [];
            while (mouseIsPressed){
              x.push(mouseX);
              y.push(mouseY);
              t.push(Date.now() - timeZero);
            }
            img.push([x, y, t]);
            x= [];
            y = [];
            z = [];
        //}
        
        //img = pixels;
        print(img)
        updatePixels();
        httpPost("http://127.0.0.1:5000/send/image", img, (res) => alert("success, ", res), (res) => console.log("failure, ", res));
        
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
//    console.log("Hello, World!");
//    let pixels = loadPixels();
//    console.log(pixels);
//    let options = {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: pixels
//    }
//    await fetch("http://127.0.0.1/send/image", JSON.stringify(options));
    pressed = !pressed;
}