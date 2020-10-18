var frect, mrect
var frect1, mrect1


function setup() {
  createCanvas(800,400)
  frect=createSprite(200, 200, 50, 50);
  frect.shapeColor = "green";
  
  mrect=createSprite(400, 200, 50, 50);
  mrect.shapeColor = "green";


  frect1=createSprite(15, 400, 50, 50);
  frect1.shapeColor = "green";
  frect1.velocityX=4;

  mrect1=createSprite(400, 400, 50, 50);
  mrect1.shapeColor = "green";
  mrect1.velocityX=-4;
}



function draw() {
  background(255,255,255);  
  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

  if (mrect.x - frect.x < frect.width/2 + mrect.width/2 
     && frect.x - mrect.x < frect.width/2 + mrect.width/2
     && mrect.y - frect.y < frect.height/2 + mrect.height/2
     && frect.y - mrect.y < frect.height/2 + mrect.height/2)
  {
    frect.shapeColor="red";
    mrect.shapeColor="red";
  }

  else
  {
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }

  if (mrect1.x - frect1.x < frect1.width/2 + mrect1.width/2 
    && frect1.x - mrect1.x < frect1.width/2 + mrect1.width/2)
   {
     frect1.velocityX=frect1.velocityX * (-1)
     mrect1.velocityX=mrect1.velocityX * (-1)
   }


  drawSprites();

}