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
}

function draw() {
  // record(8000, () => {

  // });
}