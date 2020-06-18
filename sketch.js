// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var circle1;
var rectangle1,rectangle2,rectangle3;
var dustbin, launcher;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    circle1= new Ball(200,550,70);

    dustbin= new Dustbin(1000,550);

    rectangle1=new Rectangle(928,500,15,130)
    rectangle2=new Rectangle(1079,500,15,130)
    rectangle3=new Rectangle(998,570,140,15)

    ground= new Ground(600,600,1600,20);

    launcher = new Launcher(circle1.body,{x:50,y:350});

}

function draw(){
    background("yellow");
    Engine.update(engine);

    circle1.display();
    
    dustbin.display();

    ground.display();
    
    rectangle1.display();
    rectangle2.display();
    rectangle3.display();

    launcher.display();

   

}
function mouseDragged(){
    Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    launcher.fly();
}
