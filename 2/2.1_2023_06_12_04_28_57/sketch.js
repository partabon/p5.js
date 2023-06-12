function setup() {
  createCanvas(400, 300);
  print("Hola");
  background(100);
}

function draw() {
  
   fill(255,0,0,100);
  noStroke();
  ellipse(mouseX,mouseY,25,25);
}

function mousePressed() {
  background(100);
}
