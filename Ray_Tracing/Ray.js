class Ray {
  constructor(pos, angle) {
    this.place = pos;
    this.dir = p5.Vector.fromAngle(angle);
  }

  updatePos(pos) {
    this.place = pos;
  }

  cast(wall) {
    let x1 = wall.start.x;
    let y1 = wall.start.y;
    let x2 = wall.end.x;
    let y2 = wall.end.y;

    let x3 = this.place.x;
    let y3 = this.place.y;
    let x4 = this.place.x + this.dir.x;
    let y4 = this.place.y + this.dir.y;

    let numer = (x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4);
    let denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denom == 0) return;

    let t = numer / denom;

    numer = (x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3);

    let u = -(numer / denom);

    if (t > 0 && t < 1 && u > 0) {
      const pt = createVector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    } else {
      return;
    }
  }

  rotate(angle) {
    this.dir.rotate(angle);
  }

  draw(pt) {
    line(this.place.x, this.place.y, pt.x, pt.y);
  }

}
