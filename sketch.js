var trex, trex_running,cloud,trex_collided;
var ground,invisibleGround,cloudImage, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
}

function setup() {
  createCanvas(600, 200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  
  

  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2;


  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10) ;
  invisibleGround.visible = false;
  var rand = Math.round(random(1,100))
  console.log(rand)
}

function draw() {
  background(220);
  console.log(frameCount);
  
  if(ground.x<0)
{
  ground.x = ground.width/2;
}
 
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space") && trex.y >=100) {
    trex.velocityY = -10;
  }
 
  trex.velocityY = trex.velocityY + 0.8
  
 //evitar que el Trex caiga
  trex.collide(invisibleGround);

  //llama a la funcion 
  spawnClouds();
  drawSprites();
}
function spawnClouds(){
  if(frameCount % 60 === 0){
cloud = createSprite(600,100,40,10);
cloud.addImage(cloudImage);
cloud.y = Math.round(random(10,60))
cloud.scale = 0.4;
cloud.velocityX =-3;
}
}
