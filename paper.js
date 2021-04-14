class paper{
    constructor(x,y,radius,size,angle){
   var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2,
    

   }
   this.image = loadImage("paper.png");
   this.width = width;
   this.height = height;
   this.body = Bodies.circle(x, y, radius, options)
  
   World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        Size(4)
        pop();

    }
}