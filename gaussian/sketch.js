var capturer;
let canvas = {
  width: 1000,
  height: 500,
}

function setup() {
  createCanvas(canvas.width, canvas.height);
}

function draw() {
  const centerLine = canvas.height/2
  line(0, centerLine, canvas.width, centerLine);
  beginShape();
  const xscale = 25;
  const yscale = 20;
  let xys = [];
  for (let i = 0; i < canvas.width / xscale; i++) {
    const r = randomGaussian(-10, 5)
    const x = i * xscale;
    let y = r + centerLine
    curveVertex(x, y);

    //debugging
    xys.push([x,y,r])
  }
  endShape();

  // Debug curves
  strokeWeight(3);
  xys.forEach(tuple => {
    const x = tuple[0]
    const y = tuple[1]
    const r = Math.floor(tuple[2]*100)/100
    point(x, y)
    text(`r: ${r}`, x, y)
  })
  
  noLoop();
}