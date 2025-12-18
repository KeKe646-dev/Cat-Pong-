var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0;
var score2;
var bg;
var bgm;
var hit;
var miss;
var y = 320;
var y2 = 100
var y3 = 65
let ballColor = ["#ffe694", "#ff94e4", "#5c7fff"];
let ballC = ballColor[0];
let sixseven
let twentyone
let x2 = 100
let x3 = 130
// sprites
var kittya;

var charL;
var charT;
var charE;

function preload() {
  hit = loadSound("comedic-boing_76bpm_F_major.wav");
  miss = loadSound("boo womp.wav");
  bgm = loadSound("CatPong theme.mp3")
  sixseven = loadSound("6 7 Kid Sound Effect.mp3")
  twentyone = loadSound("21 - Sound Effect (HD).mp3")
}

function setup() {
  createCanvas(400, 400);
bgm.loop()
  kittya = loadImage("Kitty hit.png");
  bg = loadImage("Court.png");
  score2 = loadImage("score.png");
  charL= loadImage("leahs.png");
}

function changeBall() {
  let bc = int(random(0, 3));
  ballC = ballColor[bc];
}

function draw() {
  background("rgba(255, 177, 217, 1)");
  image(bg, 0, 0);
  image(score2, 0, 0);
  
  
   if
(keyIsPressed){
if
(keyCode ==
LEFT_ARROW ){
x2= x2-60;
}
else if (keyCode == RIGHT_ARROW){
x2= x2+ 60;}
}
  
  push()
  translate(90,-40)
  fill(200,200,200,0)
  noStroke()
  rect(x3, y3, 40, 15);
pop()
  
  
  push()
  scale(0.1)
  translate(1500,0)
  image(kittya,x2,y2)
  pop()
  
  push()
  translate(100,-65)
  // fill(200,200,200,0)
  // noStroke()
  rect(mouseX, y, 50, 15);
pop()
  
  push()
  translate(-150,1)
  image(charL, mouseX, 0);
pop()
  

  move();
  display();
  bounce();
  paddle();
  // paddle2();

  push()
  textSize(24);
  fill("black")
  strokeWeight(6)
  text(score, 40, 75);
  if (score === 67){
    sixseven.play()
  }
  if (score === 21){
    twentyone.play()
  }
  pop()
}

function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}

function bounce() {
  if (xBall < 10 || xBall > 400 - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 || yBall > 300 - 10) {
    ySpeed *= -1;
  }
}

function display() {
  fill(ballC);
  ellipse(xBall, yBall, 20, 20);
}

function paddle() {
  if (xBall > mouseX && xBall < mouseX + 90 && yBall + 10 >= 300) {
    xSpeed *= -1;
    ySpeed *= -1;
    score++;
    hit.play();
  }
  
  function paddle2()
  {
    if (xBall > x2 && xBall < x +120 && yBall + 10>=60){
         xSpeed *= -1;
    ySpeed *= -1;
    hit.play();
        }
  }

  if (yBall > y) {
    miss.play();
  }
}
