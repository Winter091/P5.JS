let walls = [];
let cubes = [];
let particle;
let scene = new Array();
let fovSlider;

const sceneW = 400;
const sceneH = 400;

const RAYS_PER_DEGREE = 2;

function setup()
{
  createCanvas(800, 400);
  background(0);
  stroke(255);

  fovSlider = createSlider(0, 360, 60);
  particle = new Particle(60);

  for (let i = 0; i < 10; i++) {
  cubes.push(new CubeObstacle(random() * sceneW, random() * sceneH, random() * 100));
  }

  for (let cube of cubes) {
    walls.push(cube.walls[0]);
    walls.push(cube.walls[1]);
    walls.push(cube.walls[2]);
    walls.push(cube.walls[3]);
  }

  // Boundaries
  walls.push(new Wall(0, 0, sceneW, 0));
  walls.push(new Wall(sceneW, 0, sceneW, sceneH));
  walls.push(new Wall(sceneW, sceneH, 0, sceneH));
  walls.push(new Wall(0, sceneH, 0, 0));
}

function draw()
{
  background(0);
  stroke(255);
  for (let wall of walls) {
    wall.draw();
  }

  particle.updateFOV(fovSlider.value());
  fill(255);
  textSize(24);
  text(fovSlider.value(), 20, sceneH - 20);

  if (keyIsDown(LEFT_ARROW)) {
    particle.rotate(-0.02);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    particle.rotate(0.02);
  }
  if (keyIsDown(UP_ARROW)) {
    particle.updatePos(1);
  }
  if (keyIsDown(DOWN_ARROW)) {
    particle.updatePos(-1);
  }

  stroke(255, 110);
  scene = particle.draw(walls);

  // Colored ground and sky
  rectMode(CORNER);
  fill(126, 207, 30);
  rect(sceneW, sceneH / 2, sceneW, sceneH / 2);
  fill(146, 226, 253);
  rect(sceneW, 0, sceneW, sceneH / 2);

  for (let i = 0; i < scene.length; i += 1)
  {
    w = sceneW / particle.fov / RAYS_PER_DEGREE;
    c = map(scene[i], 0, sceneW, 255, 0);
    //h = map(scene[i], 0, sceneW, sceneH, 0);
    h = 255 / scene[i] * 50;

    rectMode(CENTER);
    noStroke();
    fill(c);
    rect(sceneW + i * w + w / 2, sceneH / 2, w + 1, h);
  }
}
