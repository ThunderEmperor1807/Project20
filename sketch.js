var background1,backgroundImg;
var cat,cat1Img,cat2Img,catAnime;
var mouse,mouse1Img,mouse2Img,mouseAnime;

function preload() {
    
    backgroundImg=loadImage("garden.png")
    cat1Img=loadAnimation("cat1.png")
    catAnime=loadAnimation("cat2.png","cat3.png")
    cat2Img=loadAnimation("cat4.png")
    mouse1Img=loadAnimation("mouse1.png")
    mouseAnime=loadAnimation("mouse2.png","mouse3.png")
    mouse2Img=loadAnimation("mouse4.png")
    
}

function setup(){
    createCanvas(975,705);

    background1=createSprite(487.5,352.5)
    background1.addImage(backgroundImg)

    cat=createSprite(800,600,100,100)
    cat.addAnimation("catSitting",cat1Img)
    //cat.changeAnimaton("catSitting")
    cat.scale=0.15
    cat.width=100

    mouse=createSprite(100,600,100,100)
    mouse.addAnimation("mouseSitting",mouse1Img)
    //mouse.changeAnimaton("mouseSitting")
    mouse.scale=0.15
    mouse.width=50
    
    console.log(cat.width)
}

function draw() {
    background(0);
    console.log(cat.width)
    cat.width=100
    mouse.width=50
    if (cat.x-mouse.x<=cat.width/2+mouse.width/2){
        cat.velocityX=0
        cat.addAnimation("catHappy",cat2Img)
        cat.changeAnimation("catHappy")
        mouse.addAnimation("mouseHappy",mouse2Img)
        mouse.changeAnimation("mouseHappy")
}

    keyPressed()    

    drawSprites();

    textSize(30)
    fill("Black")
    text("Press Left Arrow to watch Tom and Jerry",200,300)
}


function keyPressed(){

  if (keyDown("left")){
    cat.width=100
    mouse.width=50
    cat.addAnimation("catRunning",catAnime)
    cat.changeAnimation("catRunning")
    cat.velocityX=-2
    mouse.addAnimation("mouseTeasing",mouseAnime)
    mouse.changeAnimation("mouseTeasing")
  }


}
