
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1000,1000);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();

	let options={
		mouse: canvasmouse
	};
	mConstraint= MouseConstraint.create(engine,options)
	World.add(world,mConstraint);
	rectMode(CENTER);




	roofObject=new roof(400,200,700,50);

	//bobDiameter=40;

	bobObject1 = new bob(340, 450);
	bobObject2 = new bob(400, 450);
	bobObject3 = new bob(460, 450);
	bobObject4 = new bob(520, 450);
	bobObject5 = new bob(580, 450);
  
	rope1 = new rope(bobObject1.body, { x: 340, y: 200 });
	rope2 = new rope(bobObject2.body, { x: 400, y: 200 });
	rope3= new rope(bobObject3.body, { x: 460, y: 200 });
	rope4 = new rope(bobObject4.body, { x: 520, y: 200 });
	rope5 = new rope(bobObject5.body, { x: 580, y: 200 });
	
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  
	
  
 
  
  
 
}



function mouseDragged(){

	Matter.Body.setPosition(bobObject1.body,{x:mouseX, y:mouseY })
}






