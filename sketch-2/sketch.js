let img1; // Declare variable 'img'.
let img2;
var capturer;
let canvas = {
  width: 500,
  height: 500,
}

function setup() {
  frameRate(8);
  createCanvas(canvas.width, canvas.height);
  capturer = new window.CCapture({
    format: 'webm',
    framerate: 8
  });
  img1 = loadImage('/assets/DSC03305.jpg'); // Load the image
  img2 = loadImage('/assets/DSC03308.jpg'); // Load the image
}

function draw() {
  // record(8000, () => {
    background(img1);
    image(img2, 0, 0);
    const maxWidth = 100;
    const variation = 20;
    
    drawBlendSection(2, 2, variation, MULTIPLY, maxWidth);
    drawBlendSection(2, 2, variation, MULTIPLY, maxWidth);
    drawBlendSection(2, 2, variation, LIGHTEST, maxWidth);
    drawBlendSection(2, 2, variation, LIGHTEST, maxWidth);
    drawBlendSection(2, 2, variation, SUBTRACT, maxWidth);
    drawBlendSection(2, 2, variation, BURN, maxWidth);
    drawBlendSection(2, 2, variation, BURN, maxWidth);
  // });
}

function drawBlendSection(barWidth, spacing, variation, blendMode, maxWidth ) {
  let x = random(50, canvas.width-100)
  let y = random(50, canvas.height-100)
  let width = random(30, maxWidth);
  let height = random(30, maxWidth);

  if (width < height) {
    blendVerticalBars(x, y, width, height, barWidth, spacing, variation, blendMode);
  } else {
    blendHorizontalBars(x, y, width, height, barWidth, spacing, variation, blendMode)
  }
}