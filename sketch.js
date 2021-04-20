var bg,bgI;
var coin,coinI;
var player,playerI
var car1,car1I;
var car2,car2I;
var PLAY=1;
var SERVE=2;
var END=3;
var gamestate=SERVE
var gameover,gameoverI;
var obstacleGroup;
var coinGroup;
var crashSound;
var coinSound;
var backg,backgroundI;
var game,gameI
var reset,resetI
var score =0;
gamestate=PLAY;

function preload(){
  
  bgI=loadImage("track.jpg");
  coinI=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
  playerI=loadImage("c2.png");
  car1I=loadImage("c1.png");
  car2I=loadImage("obstacle2.png");
  gameoverI=loadImage("gameover.png")
  crashSound=loadSound("car-crash-sound-eefect.mp3");
  coinSound=loadSound("coin.wav");
  backgroundI=loadImage("Untitled.png")
  gameI=loadImage("gameover.png")
  resetI=loadImage("download-removebg-preview.png")
  gameresta=loadSound("start.mp3");
  theme=loadSound("theme.mp3");
}

function setup() {
 //theme.play();
  
  createCanvas(displayWidth+380,displayHeight+80);

  
  bg=createSprite(960,250);
  bg.addImage(bgI);
  bg.velocityY=5;
  bg.scale*=2.5;
  
  player=createSprite(600,500);
  player.addImage(playerI);
  player.scale/=2;
  player.setCollider("rectangle",-13,-10,350,650);
  //player.debug=true
  
  //backg=createSprite(275,250)
 // backg.scale=2.2
  
  
  
  obstacleGroup=new Group();
  coinGroup=new Group();
  
}

function draw() {
  gamestate==PLAY;
  
  background("black");
  
  if(gamestate===PLAY){
    //theme.play();
    
 // backg.destroy();
    
  if (keyDown("UP")){
    player.y=player.y-10;
 }
  
  if (keyDown("DOWN")){
    player.y=player.y+5;
 }
  
  if (keyDown("LEFT")){
    player.x=player.x-5;
 }
  
  if (keyDown("RIGHT")){
    player.x=player.x+5;
 }
  
  
    
   if(bg.y>=400){
      bg.y=250;
      bg.velocityY=5;
    }
    
    if(player.isTouching(obstacleGroup)){
    gamestate=END;
    crashSound.play();
    player.destroy();
    bg.destroy();
    coinGroup.destroyEach();
    obstacleGroup.destroyEach();
    
    game=createSprite(275,225)
    game.addImage(gameI)
    game.scale=0.5
      
    reset=createSprite(200,100);
    reset.addImage(resetI);
    reset.scale=0.5
    
   
  }
  
  if(player.isTouching(coinGroup)){
    coinGroup.destroyEach();
    coinSound.play();
    score+=50;
   
  }
  if(score==100){
    car1.velocityY+=5;
    bg.velocityY+=1;
  }
  if(score==200){
    car1.velocityY+=5;
    bg.velocityY+=1;
  }if(score==300){
    car1.velocityY+=5;
    bg.velocityY+=1;
  }if(score==400){
    car1.velocityY+=5;
    bg.velocityY+=1;
  }if(score==500){
    car1.velocityY+=5;
    bg.velocityY+=1;
  }if(score==600){
    car1.velocityY+=5;
    bg.velocityY+=1;
  }if(score==700){
    car1.velocityY+=5;
    bg.velocityY+=1;
  }
  spawnCars();
  spawnCoins();
    
} 
  
  if(gamestate===END){
    obstacleGroup.setVelocityYEach(0)
    coinGroup.setVelocityYEach(0)
    player.velocityY=0
    bg.velocityY=0
    player.destroy();
    //bg.destroy();
    coinGroup.destroyEach();
    obstacleGroup.destroyEach();
    
    if(mousePressedOver(reset)){
    spawnReset();
  }
  }

 /* if(gamestate===SERVE){
    
    backg.addImage(backgroundI)
    */
   
  
  
  
  
  drawSprites();
  textSize(40)
  strokeWeight(4)
  stroke("red")
  fill("black")
 text ("SCORE = "+score,100,100)
 if(score==800){
  textSize(100)
  fill("black")
  text ("!!WINNER!!",750,300)
  gamestate=END
  

} 
textSize(40)
  strokeWeight(4)
  stroke("red")
  fill("black")
text ("score to win 800",1500,100) 
}

function spawnCars(){
  if(frameCount%90==0){
    car1=createSprite(Math.round(random(200,1300)),-50);
    car1.addImage(car1I);
    car1.velocityY=5;
    car1.lifetime=140;
    car1.scale/=2 ; 
    car1.setCollider("rectangle",-13,-10,350,650);
    //car1.debug=true
    obstacleGroup.add(car1)
    
  }
  

    
  }
 


function spawnCoins(){
  if(frameCount%90==0){
    coin=createSprite(Math.round(random(400,1150)));
    coin.addAnimation("moving",coinI);
    coin.velocityY=5;
    coin.lifetime=110;
    coin.scale=0.15 ;
    
    coinGroup.add(coin)
    
  }
}

function spawnReset(){
  gamestate=PLAY
  game.visible=false
  reset.visible=false
  bg.visible=true
  bg=createSprite(960,250);
  bg.addImage(bgI);
  bg.velocityY=4;
  bg.scale*=2.5;
  player=createSprite(600,500);
  player.addImage(playerI);
 player.scale/=2;
 car1.velocityY=5;
 score=0;
 gameresta.play();
 // player.setCollider("rectangle",-19,26,35,70);
}