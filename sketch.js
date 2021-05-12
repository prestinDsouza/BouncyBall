const Engine= Matter.Engine
const World = Matter.World
const Bodies =Matter.Bodies

var myWorld,myEngine,ground,ball

function setup() {
  createCanvas(800,400);
  myEngine=Engine.create()
  myWorld=myEngine.world
  var Options ={
    isStatic:true
  }
  ground=Bodies.rectangle(400,350,800,50,Options);
World.add(myWorld,ground)
var bOptions = {
  restitution:1
}
ball=Bodies.circle(100,100,10,bOptions);
World.add(myWorld,ball)

}

function draw() {
  background(0);

  Engine.update(myEngine)
  rectMode(CENTER);  
 rect(ground.position.x,ground.position.y,800,50);
 ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,10,10);

}