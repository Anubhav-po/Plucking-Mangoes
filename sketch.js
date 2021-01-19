
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	//Create the Bodies Here.
	ground1=new Ground(600,780,1200,30);
    World.add(world,ground1);
  
}


function draw() {
  background(0,0,0);  

  Engine.update(engine);
  
  ground1.display();
 
}



