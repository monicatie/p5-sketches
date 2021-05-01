let img1; // Declare variable 'img'.
let img2;
var capturer;

function setup() {
  frameRate(15);
  createCanvas(500, 500);
  capturer = new window.CCapture({
    format: 'webm',
    framerate: 15
  });
  img1 = loadImage('/assets/DSC03305.jpg'); // Load the image
  img2 = loadImage('/assets/DSC03308.jpg'); // Load the image
}

function draw() {
  // record(3000, () => {
    background(img1);
    image(img2, 0, 0);
    let x = random(500)
    let y = random(500)
    let width = random(30, 250);
    let height = random(30, 250);

    let barWidth = 5;
    let spacing = 2;
    // if (width > height) {
      // for (var i = 0; i < Math.floor(height/(barWidth+spacing)); i++) {
      //   blend(img1, x, y, width, barWidth, x, y, width, barWidth, SUBTRACT);
      // }
    // }
  // })
    blend(img1, 100, 100, 50, 200, 100, 100, 50, 200, SUBTRACT);

}