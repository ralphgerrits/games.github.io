var kater, toren, piano;

function preload() {
  kater = loadImage("images/brieck.jpg");
  toren = loadImage("images/toren.jpg"); // Let op het pad naar de eiffeltoren afbeelding
  piano = loadImage("images/piano.jpg"); // Let op het pad naar de piano afbeelding
}

function setup() {
  canvas = createCanvas(850, 300);
  canvas.parent('processing');
  noLoop();
  background('grey');
  fill('white');
  textFont("Verdana");
  textSize(14);
  noStroke();
  rect(25, 25, 250, 250);
  rect(300, 25, 250, 250);
}

function draw() {
  text("afmeting kater: " + kater.width + " x " + kater.height, 30, 20);
  text("afmeting toren: " + toren.width + " x " + toren.height, 305, 20);
  text("afmeting piano: " + piano.width + " x " + piano.height, 580, 20);

  image(kater, 25, 25, 250, 250);
  image(toren, 300, 25, 250, 250);
  image(piano, 575, 25, 250, 250);
}
