var straalWit = 20;
var xPositieWit;
var yPositieWit;
var xSnelheidWit = 8;
var ySnelheidWit = 5;
var aantrekkingskrachtX = 0; // Aantrekkingskracht in de x-richting begint uitgeschakeld
var aantrekkingskrachtY = 0; // Aantrekkingskracht in de y-richting begint uitgeschakeld
var stuiterFactor = 1; // Verlaagde stuiteringsfactor

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
  xSnelheidWit += aantrekkingskrachtX; // Aantrekkingskracht in de x-richting
  ySnelheidWit += aantrekkingskrachtY; // Aantrekkingskracht in de y-richting

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
  // Aantrekkingskracht alleen actief wanneer de linker- of rechterpijl wordt ingedrukt
  if (keyIsDown(LEFT_ARROW)) {
    aantrekkingskrachtX = 0.5; // Aantrekkingskracht naar rechts
    aantrekkingskrachtY = 0.5; // Aantrekkingskracht naar beneden
  } else if (keyIsDown(RIGHT_ARROW)) {
    aantrekkingskrachtX = -0.5; // Aantrekkingskracht naar links
    aantrekkingskrachtY = -0.5; // Aantrekkingskracht naar boven
  } else {
    aantrekkingskrachtX = 0; // Geen aantrekkingskracht in de x-richting als er geen pijltoets wordt ingedrukt
    aantrekkingskrachtY = 0; // Geen aantrekkingskracht in de y-richting als er geen pijltoets wordt ingedrukt
  }
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEPAKT!", width/2 - 50, height/2);
  noLoop();
}
