/*
LAB 5 - Translation and Rotation

Move the origin point with translate() so the image appears in the center of the canvas. Then, add a conditional statement that controls the canvas rotation.

*/
var a = 0;

function setup() {
  createCanvas(400, 300);
  console.log("Lab 5 - Translation and Rotation");
}

function draw() {
  background(200);
  push();
  translate(width/2, height/2);
  ellipse(0, 0, 100);
  line(-width, 0, width, 0);
  line(0, -height, 0, height);
  pop();

  push(); // create a new temporary drawing layer
  translate(width/3, height/2); // change these arguments
  
  //add an if() statement here
  if(mouseIsPressed){
    a += .02;
  } else {
    a = 0;
  }
  
  rotate(a);
  stroke('blue');
  line(-width, 0, width, 0);
  stroke('red');
  line(0, -height, 0, height);
  stroke(0); // black line
  line(0, -50, 40, -20); // right arm
  line(0, -50, -40, -20); // left arm
  fill(255); // white
  ellipse(0, 0, 55); // bottom circle
  ellipse(0, -35, 40); // middle
  ellipse(0, -60, 30); // head
  fill(0); // black
  rectMode(CENTER); // center all rectangles
  rect(0, -82, 20, 20); // top hat
  line(-20, -72, 20, -72); // brim
  ellipse(-7, -65, 5); // eye
  ellipse(7, -65, 5); // eye
  ellipse(0, -60, 5); // nose
  ellipse(0, -40, 5); // button
  ellipse(0, -30, 5); // button
  ellipse(0, -20, 5); // button

  pop(); // dispose of the drawing layer
}

