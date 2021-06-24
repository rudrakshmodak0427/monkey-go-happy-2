//I am not sure if it works because it would not lt me run it      said ther was an error on line 2757
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  obstacle=createSprite(90,0,20,20);
  obstacle.addImage("obstacle", obstacleImage);
  obstacle.scale=0.1;
}


function draw() {
background(255);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(frameCount%100===0){
  banana=createSprite(80,200,20,20);
  banana.addImage("banana", bananaImage);
  banana.scale=0.1;
  }
  
  banana.lifetime=100;
  
stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("blck");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50);
  
  drawSprites();
}






