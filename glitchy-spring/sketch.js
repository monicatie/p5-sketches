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
  // createLoop(3, { gif: { render: false, open: true, download: true, fileName: "loop.gif"}})
}

var startMillis;
function draw() {
  if (frameCount === 1) {
    // start the recording on the first frame
    // this avoids the code freeze which occurs if capturer.start is called
    // in the setup, since v0.9 of p5.js
    capturer.start();
    console.log("capture start")
  }

  if (startMillis == null) {
    startMillis = millis();
  }

  // duration in milliseconds
  var duration = 3000;

  // compute how far we are through the animation as a value between 0 and 1.
  var elapsed = millis() - startMillis;
  var t = map(elapsed, 0, duration, 0, 1);

  // if we have passed t=1 then end the animation.
  if (t > 1) {
    noLoop();
    console.log('finished recording.');
    capturer.stop();
    capturer.save();
    return;
  }

  // Displays the image at its actual size at point (0,0)
  background(img1);
  image(img2, 0, 0);
  let x = random(500)
  let y = random(500)
  let width = random(30, 250);
  let height = random(30, 250);
  blend(img1, x, y, width, height, x, y, width, height, SUBTRACT);

  // handle saving the frame
  console.log('capturing frame');
  capturer.capture(document.getElementById('defaultCanvas0'));
}