var straalWit = 20;
var xPositieWit;
var yPositieWit;
var xSnelheidWit = 8;
var ySnelheidWit = 5;
var zwaartekracht = 0.1; // Zwaartekrachtsnelheid
var aantrekkingskracht = 0.5; // Aantrekkingskracht met pijltjestoetsen
var stuiterFactor = 0.7; // Verlaagde stuiteringsfactor

var straalBlauw = 20;
var xPositieBlauw;
var yPositieBlauw;

function setup() {
  canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  frameRate(50);
  colorMode(RGB, 255, 255, 255, 1);
  background(0, 0, 75, 1);
  noStroke();
  textFont("Verdana");
  textSize(20);
  xPositieWit = straalWit;
  yPositieWit = height / 2;
  
  xPositieBlauw = width / 2;
  yPositieBlauw = height - straalBlauw;
}

function draw() {
  background(0, 0, 75, 0.05);
  
  // Blauw balletje
  fill(0, 0, 255, 1);
  ellipse(xPositieBlauw, yPositieBlauw, 2 * straalBlauw);
  
  // Witte bewegende bal
  fill(255, 255, 255, 1);
  ellipse(xPositieWit, yPositieWit, 2 * straalWit);

  // Onderlinge afstand berekenen met de dist-functie
  var onderlingeAfstand = dist(xPositieWit, yPositieWit, xPositieBlauw, yPositieBlauw);

  if (onderlingeAfstand <= straalWit + straalBlauw) {
    eindScherm();
    noLoop();
  }

  gebruikBesturing();

  // Aantrekkingskracht van zijkanten
  if (keyIsDown(LEFT_ARROW)) {
    xSnelheidWit -= aantrekkingskracht; // Aantrekkingskracht naar links
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xSnelheidWit += aantrekkingskracht; // Aantrekkingskracht naar rechts
  }

  // Zwaartekracht toevoegen
  ySnelheidWit += zwaartekracht;

  // Harde terugstuitering bij de zijkanten voor de witte bal
  if (xPositieWit - straalWit < 0) {
    xPositieWit = straalWit;
    xSnelheidWit *= -1 * stuiterFactor; // Verlaag de stuiteringsfactor voor snelheid
  }

  if (xPositieWit + straalWit > width) {
    xPositieWit = width - straalWit;
    xSnelheidWit *= -1 * stuiterFactor; // Verlaag de stuiteringsfactor voor snelheid
  }

  if (yPositieWit - straalWit < 0) {
    yPositieWit = straalWit;
    ySnelheidWit *= -1 * stuiterFactor; // Verlaag de stuiteringsfactor voor snelheid
  }

  if (yPositieWit + straalWit > height) {
    yPositieWit = height - straalWit;
    ySnelheidWit *= -1 * stuiterFactor; // Verlaag de stuiteringsfactor voor snelheid
  }
  
  // Beweging witte bal
  xPositieWit += xSnelheidWit;
  yPositieWit += ySnelheidWit;
}

function gebruikBesturing() {
  // Aantrekkingskracht van zijkanten altijd actief
  if (keyIsDown(LEFT_ARROW)) {
    xSnelheidWit -= aantrekkingskracht; // Aantrekkingskracht naar links
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xSnelheidWit += aantrekkingskracht; // Aantrekkingskracht naar rechts
  }
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEPAKT!", width/2 - 50, height/2);
  noLoop();
}
