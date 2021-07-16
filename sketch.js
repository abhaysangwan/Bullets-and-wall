var bullet,wall;
var thickness,speed,weight;
var wallLeftEdge,hascollided,bullet,bulletRightEdge

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(25,30);

  bullet= createSprite(500,200,50,50);
  wall= createSprite(1200,200,60,100);

  bullet.velocityX=speed;



  thickness=random(22,81);

}

function draw() {
  background("black");

  if(hascollided(bullet,wall))
  {
    bullet.velocity=random
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10)
    {
      wall.shapeColor="green";
    }

    if(damage<10)
    {
      wall.shapeColor="red"
    }
  }

  drawSprites();
    hascollided(bullet,wall);
}

function hascollided(bullet, wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>wallLeftEdge)
{
  return true;
}
return false;
}
