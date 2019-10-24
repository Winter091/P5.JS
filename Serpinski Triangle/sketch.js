var N = 5;

function setup()
{
  createCanvas(600, 600);
}

function draw()
{
  background(0);
  noLoop();
  noStroke();
  fill(255);

  translate(width / 2, height);
  triangle(-width / 2, 0, 0, -height, width / 2, 0);
  fillTriangle(width / 2, height / 2, 1);
  //save("SerpinskiTriangle.png");
}

function fillTriangle(w, h, iter) {
  fill(0);
  triangle(0, 0, -w / 2, -h, w / 2, -h);

  if (iter < N) {
    push();
    translate(-w / 2, 0);
    fillTriangle(w / 2, h / 2, iter + 1);
    pop();

    push();
    translate(w / 2, 0);
    fillTriangle(w / 2, h / 2, iter + 1);
    pop();

    push();
    translate(0, -h);
    fillTriangle(w / 2, h / 2, iter + 1);
    pop();
  }
}
