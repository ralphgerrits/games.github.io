var kleur = 'indianred';
var afstand;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('lavender');
  fill('black');

  mouseX = constrain(mouseX, 25, width - 25);
  mouseY = constrain(mouseY, 25, height - 25);

  // Kleur aanpassen aan de randen
  if (mouseX >= width - 30 || mouseX <= 30 || mouseY <= 30 || mouseY >= height - 30) {
    kleur = 'red';
  } else {
    // Afstand berekenen tot zwarte bol
    afstand = dist(mouseX, mouseY, width / 2, height / 2);

    // Stralen van de cirkels
    var straalZwarteCirkel = 50;
    var straalRodeCirkel = 5;

    // Kleur van JOS aanpassen op basis van afstand
    if (afstand <= straalZwarteCirkel - straalRodeCirkel) {
      kleur = 'red';
    } else {
      kleur = 'indianred';
    }
  }

  // Achtergrondkleur aanpassen op basis van positie van JOS
  if (mouseX <= width / 2) {
    background('yellow');
  } else {
    background('white');
  }

  // Coördinaten en afstand weergeven
  text("Beweeg de muis | x = " + round(mouseX) + " en y = " + round(mouseY), 10, 20);
  text("Afstand tot zwarte bol: " + round(afstand), 10, 40);

  ellipse(width / 2, height / 2, 100);
  tekenJos(mouseX, mouseY, kleur);
}

function tekenJos(x, y, kleur) {
  push();
  translate(x, y);
  scale(1);
  noStroke();
  fill(kleur);
  ellipse(0, 0, 50);
  fill('slategray');
  ellipse(-7, -10, 17);
  ellipse(7, -10, 17);
  fill('white');
  ellipse(-7, -8, 7, 13);
  ellipse(7, -8, 7, 13);
  fill('orange');
  ellipse(0, 3, 17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}
