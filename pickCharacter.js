let tay
let kel
let ed
let lea

function setup(){
createCanvas(400,400);
background("#FCDEEF");

 tay= loadImage ("Taylor.PNG")
  kel = loadImage("Kelise.PNG")
 ed =  loadImage("Eden.PNG")
 lea  = loadImage("Leah.PNG")
  
}

function draw(){
  image(tay,0,0)
   image(kel,0,0)
   image(ed,0,0)
  
  push()
  translate(-30,0)
   image(lea,0,0)
  pop()
  fill("rgb(255,105,194)")
  text('Pick your character', 150, 200);
  
  if(keyPressed = 'A'){
     
     }
  
}