var box ; 
function setup() 
{
  createCanvas(1100,1000);
  box= createSprite(300,300,60,60)
};

function draw() 
{
  background("blue");

  if( keyIsDown (RIGHT_ARROW))
  {
    box.position.x=box.position.x +3;
  }
if( keyIsDown(LEFT_ARROW))
{
box.position.x=box.position.x -3;
  
}
 
if( keyIsDown (DOWN_ARROW))
{
  box.position.y=box.position.y +3;
}
if( keyIsDown(UP_ARROW))
{
box.position.y=box.position.y -3;

}


  drawSprites();

}




