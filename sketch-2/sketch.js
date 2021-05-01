let img1; // Declare variable 'img'.
let img2;
var capturer;
let canvas = {
  width: 500,
  height: 500,
}

function setup() {
  frameRate(1);
  createCanvas(canvas.width, canvas.height);
  capturer = new window.CCapture({
    format: 'webm',
    framerate: 6
  });
  img1 = loadImage('/assets/DSC03305.jpg'); // Load the image
  img2 = loadImage('/assets/DSC03308.jpg'); // Load the image
}

function draw() {
  // record(3000, () => {
    background(img1);
    image(img2, 0, 0);
    let x = random(50, canvas.width-100)
    let y = random(50, canvas.height-100)
    let width = random(30, 250);
    let height = random(30, 250);

    let barWidth = 2;
    let spacing = 2;
    if (width < height) {
      blendVerticalBars(x, y, width, height, barWidth, spacing, 12, DARKEST);
    } else {
      blendHorizontalBars(x, y, width, height, barWidth, spacing, 20, DARKEST)
    }
  // });
}