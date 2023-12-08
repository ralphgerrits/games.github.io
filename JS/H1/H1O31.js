var kleur = 'white';

function setup() {
  canvas = createCanvas(501, 501);
  canvas.parent('processing');
  background('coral');
}

function draw() {
  for (var rij = 0; rij < 500; rij += 50) {
    for (var kolom = 0; kolom < 500; kolom += 50) {
      fill(kleur);
      rect(kolom, rij, 50, 50);
      kleur = (kleur === 'white') ? 'black' : 'white'; // Wissel de kleur voor de volgende cel
    }
    // Wissel de kleur aan het einde van elke rij
    kleur = (kleur === 'white') ? 'black' : 'white';
  }
}
