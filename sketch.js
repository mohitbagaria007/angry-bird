var fixedrect, movingrect;

function setup() {
  createCanvas(800,800);
 movingrect = createSprite(400, 200, 50, 50); 
 movingrect.shapeColor = "blue" ;
 fixedrect = createSprite(400,400,50,50); 
fixedrect.shapeColor = "blue" ; 

movingrect.debug = "true"; 
fixedrect.debug = "true"; 

}

function draw() { 

  movingrect.y = World.mouseY ;
  movingrect.x = World.mouseX;  

  if(movingrect.x - fixedrect.x === movingrect.width/2 + fixedrect.width/2 ) { 
    movingrect.shapeColor = "red"; 
    fixedrect.shapeColor = "red";  
  }

    else{ 
      movingrect.shapeColor = "blue"; 
      fixedrect.shapeColor = "blue";
    }

  
   background(0,0,0);  
  drawSprites();
}