var myFace;
var numPixels = 10;
var xpos = 100;
var ypos = 100;

function setup() {
  createCanvas(500,500);
  myFace = new Face();
}

function draw() {
  background(255);
  ellipse(xpos+25,ypos+25,150,150);
  rect(xpos,ypos+50,50,25);
  ellipse(xpos,ypos,25,25);
  ellipse(xpos+50,ypos,25,25);
  myFace.smile();
}

function keyPressed()
{
  // UP key
  if(keyCode == UP_ARROW)
  {
    ypos = ypos - numPixels; 
  }
 
  // DOWN key
  if(keyCode == DOWN_ARROW)
  { 
    ypos = ypos + numPixels; 
  }
 
  // RIGHT key
  if(keyCode == RIGHT_ARROW)
  {
    xpos = xpos + numPixels; 
  }
 
  // LEFT key
  if(keyCode == LEFT_ARROW)
  {
    xpos = xpos - numPixels; 
  }
}

function Face ()
{
this.smile= function()
{
  if (xpos > 500)
  {
  xpos = 300;
  }
  if (xpos < 0)
  {
  xpos = 300;  
  }
  if (ypos < 0)
  {
   ypos = 300;   
  }
  if (xpos > 500)
  {
  ypos = 300;
  }
}  
}
