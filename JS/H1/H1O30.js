var rij = 0;

function setup() {
  canvas = createCanvas(501, 501);
  canvas.parent('processing');
  background('white');
  fill('black');
  textSize(12);
  drawGrid();
}

function drawGrid() {
  for (var rij = 0; rij < 9; rij++) {
    for (var kolom = 0; kolom < 9; kolom++) {
      var x = kolom * 50;
      var y = rij * 50;

      // Nummering aan de rechterzijkant en onderkant buiten het raster
      if (rij === 8) {
        fill('white');
        rect(x, y, 50, 50);
        fill('black');
        text(kolom, x + 25, y + 70);
      } else if (kolom === 8) {
        fill('white');
        rect(x, y, 50, 50);
        fill('black');
        text(rij, x + 70, y + 25);
      } else {
        fill('white');
        rect(x, y, 50, 50);
      }

      // Oranje cel (6e kolom, 3e rij) markeren
      if (kolom === 6 && rij === 3) {
        fill('orange');
        rect(x, y, 50, 50);
      }
    }
  }
}
