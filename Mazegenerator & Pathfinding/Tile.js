class Tile {
  constructor(x, y, size) {
    this.walls = [];
    this.walls.push(new Wall(x * size, y * size, x * size + size, y * size));
    this.walls.push(new Wall(x * size + size, y * size + size, x * size + size, y * size));
    this.walls.push(new Wall(x * size + size, y * size + size, x * size, y * size + size));
    this.walls.push(new Wall(x * size, y * size, x * size, y * size + size));
    this.wallEnable = [true, true, true, true];
    this.visited = false;
    this.pos = createVector(x, y);
    this.size = size;
    this.isCorrectPath = false;
    this.wereHere = false;
  }

  checkNeighbors(tiles) {
    let neighbors = [];

    let x = this.pos.x;
    let y = this.pos.y;

    if (this.pos.y > 0)
      if (!tiles[x][y - 1].visited)
        neighbors.push(tiles[x][y - 1]);

    if (this.pos.y < tilesH - 1)
      if (!tiles[x][y + 1].visited)
        neighbors.push(tiles[x][y + 1]);

    if (this.pos.x > 0)
      if (!tiles[x - 1][y].visited)
        neighbors.push(tiles[x - 1][y]);

    if (this.pos.x < tilesW - 1)
      if (!tiles[x + 1][y].visited)
        neighbors.push(tiles[x + 1][y]);

    if (neighbors.length > 0) {
      let rand = Math.floor(random() * neighbors.length);
      return neighbors[rand];
    } else {
      return null;
    }
  }

  checkWall(other) {
    if (other.pos.x > this.pos.x) if (this.walls[1]) return true;
    if (other.pos.x  < this.pos.x) if (this.walls[3]) return true;
    if (other.pos.y > this.pos.y) if (this.walls[2]) return true;
    if (other.pos.y < this.pos.y) if (this.walls[0]) return true;
    return false;
  }

  removeWall(other) {
    if (other.pos.x > this.pos.x) this.wallEnable[1] = false;
    if (other.pos.x  < this.pos.x) this.wallEnable[3] = false;
    if (other.pos.y > this.pos.y) this.wallEnable[2] = false;
    if (other.pos.y < this.pos.y) this.wallEnable[0] = false;
  }

  draw() {
    if (this.visited) fill(181, 29, 240);
    else fill(55);
    if (this.isCorrectPath) fill(251, 151, 58);
    noStroke();
    rect(this.pos.x * this.size, this.pos.y * this.size, this.size, this.size);

    for (let i = 0; i < 4; i++) {
      if (this.wallEnable[i]) {
          this.walls[i].draw();
      }
    }
  }

  highlight() {
    noStroke();
    fill(73,190,24);
    rect(this.pos.x * this.size, this.pos.y * this.size, this.size, this.size);
  }

}
