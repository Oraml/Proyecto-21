
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1

var canvasGround
var trashcanG
var trashcanL
var trashcanR

function preload()
{
//No se necesita a falta de imágenes	
}

function setup() {
createCanvas(800, 700);


engine = Engine.create();
world = engine.world;

canvasGround =new Ground(200,200,200,200);
trashcanG = new Ground(390,200,20,400);
trashcanL = new Ground(10,200,20,400);
trashcanR = new Ground(200,10,400,20);

ball1 = new Ball(50,50,20,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  trashcanG.enable
  trashcanL.enable
  trashcanR.enable
  
	ball1.show
}
function force2(){

	Body.applyForce(ball1,{x:0,y:0},{x:0.5,y:0.5});
  }


