class Dustbin{
 constructor(x,y,width,height){
    var options ={
      isStatic:true,
      friction: 1.0,
      density:1.0        
     }

     this.dustbin = loadImage("dustbinimg.png");
     this.dustbin.scale = 0.5
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
     this.width = width
     this.height = height
}

display(){ 
  image(this.dustbin,515,480,170,170); 
  var pos =this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  strokeWeight(4);
  stroke("green");
  fill(255);
  rect(0, 0, this.width, this.height);
  pop();
  }
}

