
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new bob(250,350)
    bobObject2 = new bob(300,350)
	  bobObject3 = new bob(350,350)
	  bobObject4 = new bob(400,350)
	  bobObject5 = new bob(450,350)

	  roof = new Roof(400,10,400,50)

      rope1=new rope(bobObject1.body,roof.body,-100,0)
      rope2=new rope(bobObject2.body,roof.body,-50,0)
      rope3=new rope(bobObject3.body,roof.body,-0,0)
      rope4=new rope(bobObject4.body,roof.body,+50,0)
      rope5=new rope(bobObject5.body,roof.body,+100,0)



      

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  Engine.update(engine)

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  roof.display()
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0})
	}

}


