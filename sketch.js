var trex
var dino
var solo
var piso
var nuvem
var imgn
var cacto
var cacto1
var cacto2
var cacto3
var cacto4
var cacto5
var cacto6
var cactos
var belgica
var estadodejogo="jogar"
var parar
var fim
var fim2
var ri
var riimg
function preload(){
    dino=loadAnimation("trex1.png","trex3.png","trex4.png")
    piso=loadImage("ground2.png")
    imgn=loadImage("cloud.png")
    cacto1=loadImage("obstacle1.png")
    cacto2=loadImage("obstacle2.png")
    cacto3=loadImage("obstacle3.png")
    cacto4=loadImage("obstacle4.png")
    cacto5=loadImage("obstacle5.png")
    cacto6=loadImage("obstacle6.png")
    parar=loadAnimation("trex_collided.png")
    fim2=loadImage("gameOver.png")
    riimg=loadImage("restart.png")



}

function setup(){
    createCanvas(600,200)
    trex=createSprite(50,160,20,50)
    trex.addAnimation("correndo",dino)  
    trex.scale=0.5
    solo=createSprite(200,180,400,20)
    solo.addImage("chão",piso)
   trex.addAnimation("parando",parar)
   trex.changeAnimation("correndo")
cactos=createGroup() 
belgica=createGroup()
fim=createSprite(300,100)
fim.addImage("fim2",fim2)
fim.visible=false
ri=createSprite(300,140)
ri.addImage("riimg",riimg)
ri.scale=0.5
ri.visible=false
}

function draw(){
  background("green") 
  
    
   


    if (estadodejogo=="jogar"){
        solo.velocityX=-7
        if (keyDown("space")&&trex.y>70){
            trex.velocityY=-20
        }
        //gravidade
        trex.velocityY+=1.9999999999999999
        if (solo.x<0){
            solo.x=solo.width/2
        }
        nuvens()
        obstaculos()
        trex.collide(solo)
        if (cactos.isTouching(trex))
        
        estadodejogo="fimdejogo"
        
    }
    if (estadodejogo=="fimdejogo"){
    solo.velocityX=0
    cactos.setVelocityXEach(0)
    belgica.setVelocityXEach(0)
    trex.changeAnimation("parando")
     cactos.setLifetimeEach(-1)                         
    belgica.setLifetimeEach(-1)
trex.velocityY=0
fim.visible=true
ri.visible=true
    
    if (mousePressedOver(ri)){
        reiniciar()
    }
    }
    drawSprites()

    
}


function nuvens(){
if(frameCount%60==0){

    nuvem=createSprite(600,100,40,10)
    nuvem.addImage("nuvem",imgn)
    nuvem.velocityX=-7
nuvem.y=Math.round(random(13,100))
console.log(nuvem.depth)
nuvem.depth=trex.depth
trex.depth+=1
nuvem.lifetime=200
belgica.add(nuvem)
}
}
function obstaculos (){
    if(frameCount%60==0){
       
    cacto=createSprite(400,165,10,40)
cacto.velocityX=-7
cacto.lifetime=200
cactos.add(cacto)
cacto.scale=0.59999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
var imagemaleatoria=Math.round(random(1,6))
switch(imagemaleatoria){
case 1:
        cacto.addImage(cacto1)
        break;
case 2:
        cacto.addImage(cacto2)
        break;
case 3:
        cacto.addImage(cacto3)
        break;
case 4:
        cacto.addImage(cacto4)
        break;
case 5:
        cacto.addImage(cacto5)
        break;
case 6:
        cacto.addImage(cacto6)
        break;
default: break

}

    }
}












function reiniciar(){

estadodejgo="jogar"
fim.visible=false
ri.visible=false
cactos.destroyEach()
belgica.destroyEach()
trex.changeAnimation("correndo")
}
