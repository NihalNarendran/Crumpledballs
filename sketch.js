var paper,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(150,500);
  leftWall  = new Dustbin(530,580,20,100);
  rightWall  = new Dustbin(670,580,20,100);
  bottomBase = new Dustbin(600,725,170,20);
  ground = new Ground(400,650,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  leftWall.display();
  rightWall.display();
  bottomBase.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:700,y:-700})
  }
}

