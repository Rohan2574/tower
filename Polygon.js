class polygon{
    constructor(x, y,w,h) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }
        this.body = Bodies.square(x, y,w,h, options);
        this.w=50;
        this.h=50;
        this.image = loadImage("polygon.js");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}