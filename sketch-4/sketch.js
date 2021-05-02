var capturer;
let canvas = {
  width: 1000,
  height: 500,
  border: 10, // Keep within this border
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
  const midLine = canvas.height/2
  line(0, midLine, canvas.width, midLine);
  noFill();

  const mainCurve = generateCenterCurve(canvas);

  drawCurve(mainCurve);
  noLoop();
}

/**
 * Generate a random up and down curve that kind of wavers around
 * but within canvas bounds
 * @param {object} canvas 
 * @returns 
 */
function generateCenterCurve(canvas) {
  const midLine = canvas.height/2
  const curve = [
    {x: 0, y: midLine},
    {x: 0, y: midLine},
  ];

  const xscale = 15;
  let lastY = midLine;
  for (let i = 1; i < canvas.width / xscale; i++) {
    const x = i * xscale;
    let yVariability;
    if (lastY > canvas.height - canvas.border) {
      yVariability = randomGaussian(-10, 5)
    } else if (lastY < canvas.border) {
      yVariability = randomGaussian(10, 5)
    } else {
      yVariability = randomGaussian(20, 10)
    }
    let y = randomGaussian(lastY, yVariability);

    // Keep y within canvas bounds
    y = Math.max(canvas.border, y);
    y = Math.min(y, canvas.height - canvas.border)

    lastY = y;
    curve.push({x: x, y: y});
  }
  curve.push({x: canvas.width, y: midLine});
  curve.push({x: canvas.width, y: midLine});
  return curve;
}

/**
 * 
 * @param {array} points - array of {x,y} tuple coordinates
 */
function drawCurve(points) {
  beginShape();
  points.forEach(p => curveVertex(p.x,p.y))
  endShape();
}