var doodler,doodlerimg
var plateform,plateformimg,plateformgroup
var bg,backgroundimg
var score=0;
var gamestate="play";

function preload(){
backgroundimg=loadImage("background.png");
doodlerimg=loadImage("doodler-guy.png");
plateformimg=loadImage("platform.png")

}
function setup(){
 createCanvas(600,600)   
 bg=createSprite(300,300);
bg.addImage("bg",backgroundimg)
bg.velocityY=1;
bg.scale=1.5
doodler=createSprite(200,300);
doodler.addImage(doodlerimg)
doodler.scale=0.6
}
function draw(){
background("black")
if(bg.y>300){
bg.y=200
}
platform()
drawSprites()
}
function platform(){
if(frameCount%120===0){
plateform=createSprite(150,-10)
plateform.addImage(plateformimg)
plateform.velocityY=1;
plateform.x=Math.round(random(50,500))
plateform.depth=doodler.depth-1
}
}