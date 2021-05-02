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
  noFill()
  const midLine = canvas.height/2
  line(0, midLine, canvas.width, midLine);

  const mainCurve = generateCenterCurve(canvas);

  drawCurve(generateParallelCurve(mainCurve, -30))
  drawCurve(generateParallelCurve(mainCurve, -70), 10, 51)
  drawCurve(mainCurve);
  drawCurve(generateParallelCurve(mainCurve, 10))
  drawCurve(generateParallelCurve(mainCurve, 100))
  drawCurve(generateParallelCurve(mainCurve, 110))

  noLoop();
}

function generateParallelCurve(points, offset) {
  return points.map(p => {
    return {x: p.x, y: p.y + offset}
  })
}


/**
 * Generate a random up and down curve that kind of wavers around
 * but within canvas bounds
 * @param {object} canvas 
 * @returns array of points {x: , y: }
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
 * @param {int} thickness - thickness
 */
function drawCurve(points, thickness, fillColor) {
  if (fillColor) {
    fill(fillColor)
  } else {
    noFill()
  }
  beginShape();
  points.forEach(p => curveVertex(p.x,p.y))
  points.reverse().forEach(p => curveVertex(p.x, p.y + thickness))
  endShape();
}