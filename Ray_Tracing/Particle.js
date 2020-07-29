class Particle {
  constructor(FOV) {
    this.pos = createVector(width / 4, height / 4);
    this.dir = createVector(1, 0);
    this.rays = [];
    this.fov = FOV;
    for (let i = -FOV / 2; i < FOV / 2; i += (1 / RAYS_PER_DEGREE)) {
      this.rays.push(new Ray(this.pos, radians(i)));
    }
  }

  updateFOV(newFOV) {
    this.fov = newFOV;
    this.rays = [];
    for (let i = - newFOV / 2; i < newFOV / 2; i += (1 / RAYS_PER_DEGREE)) {
      this.rays.push(new Ray(this.pos, radians(i) + this.dir.heading()));
    }
  }

  rotate(angle)
  {
    this.dir.rotate(angle);
    for (let ray of this.rays)
    {
      ray.rotate(angle);
    }
  }

  updatePos(dir) {
    this.pos.x += this.dir.x * dir;
    this.pos.y += this.dir.y * dir;
    for (let ray of this.rays) {
      ray.updatePos(this.pos);
    }

  }

  draw (walls) {
    let scene = Array(this.FOV);
    let index = 0;

    for (let ray of this.rays)
    {

        let shortest = Infinity;
        let shortestPt;
        let angle;

        for (let wall of walls)
        {
          let pt = ray.cast(wall);
          if (pt)
          {
            const d = p5.Vector.dist(ray.place, pt);
            if (d < shortest)
            {
              angle = this.dir.angleBetween(ray.dir);
              shortest = d;
              shortestPt = pt;
            }
          }
        }

        if (shortestPt) {
          scene[index] = shortest * cos(angle);
          ray.draw(shortestPt);
        }
        index += 1;
    }
    return scene;
  }

}
