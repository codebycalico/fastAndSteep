var i=30;
var x=30;

function setup(){
  createCanvas(600,600);
  background(0);
  frameRate(60);
  setInterval(tf,5500);
}

function draw(){

  stroke(255);
  fill(255);
  ellipse(300,300,350);

  noStroke();
  fill(0);
  ellipse(300,300,i);
  i = i + 5;
  if (i>width+250){
      stroke(0);
      fill(255);
      ellipse(300,300,x);
      x = x + 5;
  }

  stroke(0);
  line(0,0,600,600);
  line(10,0,600,590);
  line(0,10,590,600);

  noFill();
  stroke(0);
  ellipse(300,300,423);

  stroke(255);
  line(600,0,0,600);
  line(590,0,0,590);
  line(600,10,10,600);

  noFill();
  stroke(255,0,0);
  ellipse(300,300,380);
  stroke(255);
  ellipse(300,300,420);
  stroke(255,0,0);
  ellipse(300,300,460);
  
  stroke(255,0,0);
  fill(0);
  triangle(50,300,225,200,495,395);
  stroke(255);
  triangle(60,290,230,205,490,415);
  stroke(255,0,0);
  triangle(70,280,235,210,485,435);
  stroke(255);
  triangle(80,270,240,215,480,455);
  stroke(255,0,0);
  triangle(90,260,245,220,475,475);
  stroke(255);
  triangle(100,250,250,225,470,495);
  stroke(255,0,0);
  triangle(110,240,255,230,465,515);
  stroke(255);
  triangle(120,230,260,235,460,535);
  stroke(255,0,0);
  triangle(130,220,265,240,455,555);
  stroke(255);
  triangle(140,210,270,245,450,575);
  stroke(255,0,0);
  triangle(150,200,275,250,445,595);
  }

  function tf(){
  i=75;
  x=75;
  }