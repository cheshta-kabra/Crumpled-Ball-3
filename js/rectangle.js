class Rectangle {
    constructor(x,y,height,width) {
      var options ={
          isStatic:true,
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.height=height;
      this.width=width;
      this.x=x;
      this.y=y;
      World.add(world,this.body);
    }
  
    display() {
      var pos=this.body.position
          rectMode(CENTER);
          strokeWeight(4);
          stroke("black");
          fill("white");
          rect(pos.x,pos.y,this.height,this.width);
      }
  
  }