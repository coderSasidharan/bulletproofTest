var wall, thickness
var bullet, speed, weight

function setup() {
  createCanvas(1366,400);
  thickness=random(22,83);
  wall=createSprite(1250,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(0,200,20,5);
  bullet.shapeColor="white";
  bullet.velocityX=speed/4;
}

function draw() {
  background(20);
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    calcDamage();
  }

  fill("white");
  textSize(30);
  text("Bullet Proofing Test",550,50);

  fill("cyan");
  textSize(20);
  text("Bullet Speed:"+round(speed)+"km/h",300,100);

  fill("yellow");
  textSize(20);
  text("Bullet Weight:"+round(weight)+"g",600,100);

  fill("magenta");
  textSize(20);
  text("Wall Thickness:"+round(thickness)+"cm",900,100);


  drawSprites();
}

function calcDamage(){
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>=10){
    wall.shapeColor="red";
    fill("red");
    textSize(100);
    text("Fail",600,250);
  } else {
    wall.shapeColor="green";
    fill("green");
    textSize(100);
    text("Bullet Proof",400,250);
  }
}