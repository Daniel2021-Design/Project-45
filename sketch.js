var boy;
var boyImage;
var backgroundImage;

function preload() {
  boyImage = loadAnimation("Images/Boy.animation1.png","Images/Boy.animation2.png","Images/Boy.animation3.png");
  backgroundImage = loadImage("Images/Background.jpg");

}
function setup() {
  createCanvas(1000,600);
  boy = createSprite(400,500,50,50);
  boy.addAnimation("boyImage",boyImage);
  boy.scale = 0.5;
}

function draw() {
  background(backgroundImage);  
  if(keyDown(UP_ARROW)) {
    boy.y = boy.y-5;
  }

  if(keyDown(DOWN_ARROW)) {
    boy.y = boy.y+5;
  }

  if(keyDown(LEFT_ARROW)) {
    boy.x = boy.x-5;
  }

  if(keyDown(RIGHT_ARROW)) {
    boy.x = boy.x+5;
  }
  drawSprites();
}

