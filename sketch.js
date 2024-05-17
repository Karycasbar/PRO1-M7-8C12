
var trex ,trex_running;
var ground;
var groundImage;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png" );
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
 

  //crear sprite de Trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);

  //agregar tamaño y posicion al trex
  trex.scale = 0.5;

  //crear sprite del suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground", groundImage);
 
}

function draw(){
  background("white")

  ground.velocityX = -2;
  console.log(ground.x);

  if(ground.x<0){
    ground.x = ground.width/2;
  }

  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;

  //trex choca con el suelo
  trex.collide(ground);
  
  drawSprites();
}
