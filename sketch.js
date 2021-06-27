
var bg;
var barrier;
var boy ,boyimg,boyfliped;
var boyShakingHand;
var snow,snowimg;
var snowBall;
var music;
function preload() {
bg = loadImage("snow3.jpg")
boyimg = loadAnimation("boy1.png","boy2.png");
//boyfliped = loadAnimation("boyfliped.png","boyfliped.png")
boyShakingHand = loadAnimation("boyshake1.png","boyshake2.png")
snowimg = loadImage("snowfalkes.png")
snowBall = loadImage("snow ball.png")
music = loadSound("Diviners+Savannah+ft+Philly+K.mp3")
}


function setup() {
  createCanvas(1920,1080);
  boy = createSprite(800, 500, 50, 50);
  boy.addAnimation("Shaking",boyShakingHand);
  boy.scale = 0.2

  music.loop();

  barrier = createSprite(800,700,50,50)
  barrier.visible = false
}

function draw() {
  background(bg);  
  if(keyDown("space") && boy.y >= 520) {
    boy.velocityY = -12;
  }
  boy.velocityY = boy.velocityY + 0.8       
   snow();
   snowball();


  boy.collide(barrier)
  drawSprites();
}

function snow() {
  if (frameCount % 90 === 0) {
    var snow10 = createSprite(600,120,40,10);
    snow10.x = Math.round(random(1920  ,100));
   snow10.addImage(snowimg);
    snow10.scale = 0.2;
    snow10.velocityY = 3;
    console.log("hello world")
     //assign lifetime to the variable
    snow10.lifetime = 200;
  }
}

function snowball() {
  if (frameCount % 40 === 0) {
    var snowball = createSprite(600,120,40,10);
    snowball.x = Math.round(random(1920,100));
    snowball.addImage(snowBall);
    snowball.scale = 01;
    snowball.velocityY = 5;
    console.log("hello world")
     //assign lifetime to the variable
     snowball.lifetime = 200;
  }
}