const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground;
var ball;
function setup() 
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options={
      isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  var a={
    restitution:1.2
  }
  ball=Bodies.circle(200,100,20,a);
  World.add(world,ball);
  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() 
{
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}