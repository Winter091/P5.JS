function setup()
{
  createCanvas(600, 600);
}

let loopStart = 1185;
let loopEnd = 4740;
let d = 300;

function draw()
{
  background(0);
  noFill();
  stroke(255);
  d *= 1.01;
  if (d > loopEnd)
  {
    d = loopStart;
  }
  drawEllipse(300, 300, d);
}

function drawEllipse(x, y, d)
{
  if (d > 2)
  {
    ellipse(x, y, d);
    drawEllipse(x + d / 2, y, d / 2);
    drawEllipse(x - d / 2, y, d / 2);
  }
}
