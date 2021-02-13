var canvas;
var music;
var ball;
var plat1;
var plat2;
var plat3;
var plat4;
var wall1;
var wall2;
var wall3;
var wall4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    plat1 = createSprite(700,580,170,20);
    plat1.shapeColor = "green";

    plat2 = createSprite(500,580,170,20);
    plat2.shapeColor = "red";

    plat3 = createSprite(300,580,170,20);
    plat3.shapeColor = "yellow";

    plat4 = createSprite(100,580,170,20);
    plat4.shapeColor = "blue";

    wall1 = createSprite(400,600,800,5);
    wall1.shapeColor = (rgb(169,169,169));

    wall2 = createSprite(400,0,800,5);
    wall2.shapeColor = (rgb(169,169,169));

    wall3 = createSprite(0,300,5,600);
    wall3.shapeColor = (rgb(169,169,169));

    wall4 = createSprite(800,300,5,600);
    wall4.shapeColor = (rgb(169,169,169));

    //create box sprite and give velocity

    ball = createSprite(400,100,30,30);
    ball.x =(random(20,750));
    ball.velocityY = 5;
    ball.velocityX = 5;

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
if(ball.isTouching(wall1) && ball.bounceOff(wall1)||
 (ball.isTouching(wall2) && ball.bounceOff(wall2)||
 (ball.isTouching(wall3) && ball.bounceOff(wall3)||
 (ball.isTouching(wall4) && ball.bounceOff(wall4))))){
} 
   
//add condition to check if box touching surface and make it bounce
if(ball.isTouching(plat1) && ball.bounceOff(plat1)) {
    ball.shapeColor = "green";
    music.play();
}

if(ball.isTouching(plat2) && ball.bounceOff(plat2)){
    ball.shapeColor = "red";
    music.stop();
    ball.velocityY = 0;
    ball.velocityX = 0;
}

if(ball.isTouching(plat3) && ball.bounceOff(plat3)){
    ball.shapeColor = "yellow";
    music.play();
}

if(ball.isTouching(plat4) && ball.bounceOff(plat4)){
    ball.shapeColor = "blue";
    music.stop();
    ball.velocityY = 0;
    ball.velocityX = 0;
}

    
    
}
