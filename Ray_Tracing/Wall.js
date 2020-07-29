class Wall {

  constructor(x1, y1, x2, y2) {
    this.start = createVector(x1, y1);
    this.end = createVector(x2, y2);
    this.dir = p5.Vector.fromAngle(this.end.x - this.start.x, this.end.y - this.start.y);
  }
  
  draw() {
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

}
