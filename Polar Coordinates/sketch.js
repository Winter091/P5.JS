let m = 7, n = 7;
let size = 250;
let slider1, slider2;
let PHI = (1 + Math.sqrt(5)) / 2;

function setup()
{
  createCanvas(600, 600);
  slider1 = createSlider(1, 20, 1, 1);
  slider2 = createSlider(1, 20, 1, 1);
}

function draw()
{
  background(0);

  m = slider1.value();
  n = slider2.value();
  push();
  textSize(24);
  fill(255);
  text(m, 10, 20);
  text(n, 40, 20);
  pop();

  translate(width / 2, height / 2);
  stroke(255);
  noFill();

  beginShape();
  for (let i = 0; i < TWO_PI * 7; i+=0.01)
  {
    let r = Math.pow(PHI, i * 2 / PI);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();
}
