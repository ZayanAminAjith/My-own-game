var backgroundImg,titleImg,title,playButton,temple,templeImg;
var gamestate = 0,ground;
var boy,boystanding,boyrunningright,boyrunningleft,boyjumping,wood_image;
var groundf,groundf2,groundf3,groundf4;

function preload(){
  backgroundImg = loadImage("Assets/background.jpg")
  titleImg = loadImage("Assets/title.png")
  templeImg = loadImage("Assets/temple.png")
  boystandingright = loadAnimation("Assets/Boy/Standing Right/Boy standing 1.png",
                                   "Assets/Boy/Standing Right/Boy standing 2.png",
                                   "Assets/Boy/Standing Right/Boy standing 3.png",
                                   "Assets/Boy/Standing Right/Boy standing 4.png")
  boystandingleft = loadAnimation("Assets/Boy/Standing Left/Boy standing 1.png",
                                  "Assets/Boy/Standing Left/Boy standing 2.png",
                                  "Assets/Boy/Standing Left/Boy standing 3.png",
                                  "Assets/Boy/Standing Left/Boy standing 4.png")                         
  wood_image = loadImage("Assets/wood.png")
  boyrunningright = loadAnimation("Assets/Boy/Running Right/Boy running right 1.png",
                                  "Assets/Boy/Running Right/Boy running right 2.png",
                                  "Assets/Boy/Running Right/Boy running right 3.png",
                                  "Assets/Boy/Running Right/Boy running right 4.png",
                                  "Assets/Boy/Running Right/Boy running right 5.png",
                                  "Assets/Boy/Running Right/Boy running right 6.png")
  boyrunningleft = loadAnimation("Assets/Boy/Running Left/Boy running Left 1.png",
                                 "Assets/Boy/Running Left/Boy running Left 2.png",
                                 "Assets/Boy/Running Left/Boy running Left 3.png",
                                 "Assets/Boy/Running Left/Boy running Left 4.png",
                                 "Assets/Boy/Running Left/Boy running Left 5.png",
                                 "Assets/Boy/Running Left/Boy running Left 6.png")
  }

function setup(){
  createCanvas(windowWidth,windowHeight)

  if(gamestate == 0){
    begin()
  }

  groundf = createSprite(width/2,height-30,width+100,5)
  groundf.visible = false
  groundf2 = createSprite(width/2-100,height-135,width-20,35)
  groundf2.visible = false
  groundf3 = createSprite(width-400,height-247,width+100,35)
  groundf3.visible = false
  groundf4 = createSprite(width/2-100,height-357,width-20,35)
  groundf4.visible = false

  ground = new Wood(-60,height-50,width+100, 100)
  ground2 = new Wood(-60,height-160,width-20, 50)
  ground3 = new Wood(60,height-270,width+20, 50)
  ground4 = new Wood(-60,height-380,width-20, 50)
  ground5 = new Wood(60,height-540,width+20, 50)

  boystandingright.frameDelay = 10
  boystandingleft.frameDelay = 10
  
  boy = createSprite(0 + 70,height-65)
  boy.scale = 0.5
  boy.addAnimation("boystandingright", boystandingright)
  boy.addAnimation("boystandingleft", boystandingleft)
  boy.addAnimation("boyrunningright", boyrunningright)
  boy.addAnimation("boyrunningleft", boyrunningleft)
  
}

function draw(){
  background(backgroundImg)
  
  if(gamestate == 1){
    play()
    
  }
  
  drawSprites()
}

function playButtonClicked(){
  title.hide()
  temple.visible = false
  playButton.hide()
  gamestate = 1
}

function play(){
  
  ground.show()
  ground2.show()
  ground3.show()
  ground4.show()

  boy.collide(groundf)
  boy.collide(groundf2)
  boy.collide(groundf3)
  boy.collide(groundf4)

  if(keyDown('D') || keyDown(RIGHT_ARROW)){
    boy.x+=5
    boy.changeAnimation("boyrunningright")
  }
  if(keyDown('A') || keyDown(LEFT_ARROW)){
    boy.x-=5
    boy.changeAnimation("boyrunningleft")
  }
  if(keyDown('W') || keyDown(UP_ARROW) || keyDown('SPACE')){
    boy.velocityY = -17
  }

  boy.velocityY+=1
}

function begin(){
   
  
  title = createImg("Assets/title.png")
  title.position(width/2 - width/3.7, 0 - -40)
  title.size(620,128)

  playButton = createButton("PLAY");
  playButton.class("customButton");
  playButton.position(width/2 - 90, height/2 - 50)
  playButton.mousePressed(playButtonClicked)

  push()
  imageMode(CENTER)
  temple = createSprite(width/2, height - 120)
  temple.addImage("temple" ,templeImg)
  temple.scale = 0.6

  pop()

}

function keyReleased(){
  if(keyCode==97 || keyCode==65){
    boy.changeAnimation("boystandingleft")
  }

  if(keyCode=68 || keyCode==100){
    boy.changeAnimation("boystandingright")
  }
}