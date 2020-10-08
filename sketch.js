var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var sides1,sides2,sides3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

    sides1 = new Sides(width/2-100,610,20,100);
    sides2 = new Sides(width/2+100,groundSprite.y-10,200,20);
    sides3 = new Sides(width/2+100,620,20,100);

    
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine=Engine.create();
	world= engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution: false, isStatic: true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic: true});
 	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  //rectMode(CENTER); 
  background(0);
  packageSprite.x=packageBody.position.x;
  packageSprite.y=packageBody.position.y;

  sides1.display();
  sides2.display();
  sides3.display();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    
  }
}



