
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	
}

function setup() 
{
	createCanvas(1200, 450);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	D4 = new Dustbin (1000,350,200,190);
	

   
	paper= new Paper (100,375,50);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("grey");

  
  
  drawSprites();
 paper.display();
 ground.display();
 
 D4.display();
 
}


if(paper.isTouching(D4)){
	paper.visible  = false
}
function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:640,y:-400});

	}



}

