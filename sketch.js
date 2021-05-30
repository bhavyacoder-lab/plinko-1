const Engine = matter.Engine;
const World = matter.World;
const Bodies = matter.Bodies;
const Body = matter.Body;

var Divisions = [];
var particles = [];
var plinkos = [];
var DivisionsHeight = 300;

function preload(){

}


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  World = Engine.World;
  ground = new Ground(400,690,800,20);
  ball1 = new particle(200,200,10);
  ball2 = new particle(200,210,10);
  ball3 = new particle(200,220,10);
  ball4 = new particle(200,230,10);
  ball5 = new particle(200,240,10);
  ball6 = new particle(200,250,10);
  
  for(var i =0; i<width;i = i+80){
    Division.push(new Divisions(k,divisionheight/2,10,divisionheight));
  }
  for(var j =40;j<width;j=j+50){
    plinkos.push(new plinko(j,75));
  }
  for(var j = 15;j<width-10;j=j+50){
    plinkos.push(new plinko(j,175));
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k =0;k<Divisions.length;k++){
    Divisions[k].display();
  }
  if(framecount%60===0){
    particles.push(new particle(random(width/2-30,width/2+30)10,10);
  }



}

function draw() {
  background(255,255,255); 
  rectMode(center); 
  drawSprites();
}
display(){
  
}