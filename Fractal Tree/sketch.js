let slider;
let diffAngle;

function setup()
{
  createCanvas(900, 900);
  slider = createSlider(0, PI, PI / 8, PI / 128);
  slider.position(10, 10);
}

function draw()
{
  background(0);
  //noLoop();
  stroke(255);
  strokeWeight(2);
  diffAngle = slider.value();

  translate(width / 2, height - 50);
  drawBranch(180);
}

function drawBranch(len) {
  line(0, 0, 0, -len);

  if (len > 10) {
    translate(0, -len);

    stroke(map(len, 0, 250, 200, 255));

    push();
    rotate(diffAngle);
    drawBranch(len * 0.75);
    pop();

    rotate(-diffAngle);
    drawBranch(len * 0.75);
  }
}
