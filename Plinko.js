class plinko {
    constructor(x,y){
        var options = {
            restitution:1,
            friction:0,
            isStatic:true,
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        world.add(world,this.body);
        
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    Push()
    translate(pos.x,pos.y);
    rotate(angle);
    ImageMode(center);
    noStroke()
    Fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    Pop();
    }
}