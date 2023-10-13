var letterGrootte = 50;
var marge = 20;

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  textFont("Brush Script MT");
  textSize(letterGrootte);
  textLeading(1.2*letterGrootte);
  //noLoop();
}

function draw() {
  background('orange');
  fill('yellow');
  textAlign(LEFT, TOP);
  text("mouseX:"+round(mouseX) + " mouseY:"+round(mouseY),mouseX,mouseY);

  translate(50,50);
  fill('black');
  text("vensterGrootte:\n" + windowWidth + " x " + windowHeight,0,0);
  text("canvasGrootte:\n " + width + " x " + height,0,120);
  
  translate(500,0);
  fill('dodgerblue');
  stroke('white');
  strokeWeight(10);
  rect(0,0,400,200);

  translate(25,25);
  noStroke();
  fill('white');
  textAlign(CENTER, CENTER);
  text("hoi",0,0,350,150);
}
