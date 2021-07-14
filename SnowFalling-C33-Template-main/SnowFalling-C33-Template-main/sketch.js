const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var snow1,snow2,snow3,snow4,snow5;
var bg = "sprites/bg1.png";

function preload() {
  getBackgroundImg();
}

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,255,255);
  addImg = (snow1.png);
  if(backgroundImg)
      background(backgroundImg);
      Engine.update(engine);
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  drawSprites();
}

ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    snow1 = new Snow(700,320,70,70);
    snow2 = new Snow(920,320,70,70);
    snow3 = new Snow(706,320,70,70);
    snow4 = new Snow(922,320,70,70);
    snow5 = new Snow(810,160,70,70);

    async function getBackgroundImg(){
      var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
      var responseJSON = await response.json();
  
      var datetime = responseJSON.datetime;
      var hour = datetime.slice(11,13);
      
      if(hour>=0600 && hour<=1900){
          bg = "sprites/snow1.jpg";
      }
      else{
          bg = "sprites/snow2.jpg";
      }
  
      backgroundImg = loadImage(bg);
      console.log(backgroundImg);
  }
