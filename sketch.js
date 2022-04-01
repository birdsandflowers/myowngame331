var gameState = "start";

function preload() {
  boy_running = loadAnimation("boy/boy1.png","boy/boy2.png","boy/boy3.png","boy/boy4.png","boy/boy5.png");
  junglebackgroundimg = loadImage("junglebackground.jpg");
  jungleplayimg = loadImage("playjungle.webp");
  coinsimg = loadImage("coins.png");

}

function setup() {
  createCanvas(800,400);
  invisibleGround = createSprite(200,390,400,10);
  invisibleGround.visible = false;
  
  junglebackground = createSprite(400, 200, 400, 20);
  junglebackground.addImage("jungle.jpg", jungleplayimg);
  junglebackground.scale = 1.5
  junglebackground.visible = false



  boy = createSprite(50,350,20,50);
  boy.addAnimation("running", boy_running);
  boy.scale = 1.5;

  coinsGroup=createGroup()
}

function draw() {

  if (gameState === "start") {
    background(junglebackgroundimg);
  }

  if (gameState === "play") {
    junglebackground.visible = true;
    junglebackground.velocityX=-5
    if (junglebackground.x < width/2){
      junglebackground.x = junglebackground.width/2;
      
    }
    if(keyDown("space")) {
      boy.velocityY = -12;
    }
  
    boy.velocityY = boy.velocityY + 0.8
    boy.collide(invisibleGround);
    spawnCoins();
    drawSprites();
  }

  if (gameState === "end") {
    background("green")
  }

}

function mouseClicked() {
  if (gameState === "start") {
    gameState = "play"
  }
}
function spawnCoins() {
  //write code here to spawn the clouds
  if (frameCount % 90 === 0) {
    var coins = createSprite(700,120,40,10);
    coins.y = Math.round(random(50,250));
    coins.addImage(coinsimg);
    coins.scale = 0.05;
    coins.velocityX = -3;
    
     //assign lifetime to the variable
    coins.lifetime = 200;
    
    
    //add each cloud to the group
    coinsGroup.add(coins);
  }
  
}
