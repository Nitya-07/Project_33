var Engine = Matter.Engine,
 World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle;
var count =0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}

function draw() {
  background("black");
  
  textSize(20)
  text("Score : "+score,20,30);
  text("500",30,530);
  text("500",100,530);
  text("500",190,530);
  text("500",270,530);
  text("100",350,530);
  text("100",430,530);
  text("100",510,530);
  text("200",590,530);
  text("200",670,530);
  text("500",750,530);

  ground.display();

  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y > 760){
       if(particle.body.position.x < 300){
         score=score+500;
         particle=null;  
         if(count >= 5)gameState="end";    
       }
     }
   }
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}