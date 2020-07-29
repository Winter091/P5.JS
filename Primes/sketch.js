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

  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(5);
  noFill();
  
  for (let i = 1; i < 10; i++)
  {
	point(0, 0);
  }

  point(0, 0);
}
