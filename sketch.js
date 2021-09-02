var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  doorsGroup = new Group()
  climbersGroup = new Group()
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    spawnDoor();
    drawSprites();
    
}

function spawnDoor(){
  if(frameCount%240 === 0){
    door = createSprite(Math.round(random(120,400)),-50);
    climber = createSprite(200,20);
    climber.x = door.x;
    //console.log(door.x);
    door.scale = 0.5;
    climber.scale = 0.5;
    door.addImage("door",doorImg);
    climber.addImage("climber",climberImg);
    door.velocityY= 1;
    climber.velocityY = 1;
    door.lifetime = 650;
    climber.lifetime = 650;
    doorsGroup.add(door);
    climbersGroup.add(climber);
  }
  

  
}
