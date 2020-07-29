let tiles = [];
let tileSize = 40;
let currCell;
let stack = [];
let tilesW;
let tilesH;
let end = false;
let solved = false;

function setup()
{
  createCanvas(400, 400);
  frameRate(30);
  tilesW =  width / tileSize;
  tilesH =  height / tileSize;

  for (let i = 0; i < tilesW; i++) {
    tiles[i] = new Array(height / tileSize);
    for (let j = 0; j < tilesH; j++) {
      tiles[i][j] = new Tile(i, j, tileSize);
    }
  }

  currCell = tiles[0][0];
  stack.push(currCell);
  currCell.visited = true;
}

function draw() {
  background(55);
  stroke(255);
  strokeWeight(2);

  while (!end) {
    makeLabirinth();
  }

  if (!solved) {
    solveRecursive(tiles[0][0], 0, 0);
    solved = true;
    console.log(tiles);
  }

  for (let i = 0; i < tilesW; i++) {
    for (let j = 0; j < tilesH; j++) {
      tiles[i][j].draw();
    }
  }
  if (!end) currCell.highlight();
}

function makeLabirinth() {
  let nextCell = currCell.checkNeighbors(tiles);

  if (nextCell) {
    currCell.removeWall(nextCell);
    nextCell.removeWall(currCell);
    stack.push(nextCell);
    nextCell.visited = true;
    currCell = nextCell;
  }
  else {
    currCell = stack.pop();
    if (stack.length == 0) end = true;
  }
}


function solveRecursive(curr, ancestor, flag) {
  let x = curr.pos.x;
  let y = curr.pos.y;
  if (flag) {
    let preX = ancestor.pos.x;
    let preY = ancestor.pos.y;
  }
  let end = tiles[tilesW - 1][tilesH - 1];

  if (x == end.pos.x && y == end.pos.y) {
    return true;
  }

  if (tiles[x][y].wereHere) {
    return false;
  }

  if (flag)
    if (curr.checkWall(ancestor)) {
      return false;
    }

  tiles[x][y].wereHere = true;

  if (x != 0) {
    if (solveRecursive(tiles[x - 1][y], tiles[x][y], 1)) {
      tiles[x][y].isCorrectPath = true;
      return true;
    }
  }
  if (x != tilesW - 1) {
    if (solveRecursive(tiles[x + 1][y], tiles[x][y], 1)) {
      tiles[x][y].isCorrectPath = true;
      return true;
    }
  }
  if (y != 0) {
    if (solveRecursive(tiles[x][y - 1], tiles[x][y], 1)) {
      tiles[x][y].isCorrectPath = true;
      return true;
    }
  }
  if (y != tilesH - 1) {
    if (solveRecursive(tiles[x][y + 1], tiles[x][y], 1)) {
      tiles[x][y].isCorrectPath = true;
      return true;
    }
  }
  return false;
}
