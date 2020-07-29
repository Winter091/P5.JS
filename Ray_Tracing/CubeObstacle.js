class CubeObstacle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.size = createVector(r, r);
    this.walls = [];
    this.walls.push(new Wall(x, y, x, y + r));
    this.walls.push(new Wall(x, y + r, x + r, y + r));
    this.walls.push(new Wall(x + r, y + r, x + r, y));
    this.walls.push(new Wall(x, y, x + r, y));
  }

  draw() {
    push();
    fill(color(200));
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    pop();
  }
}
