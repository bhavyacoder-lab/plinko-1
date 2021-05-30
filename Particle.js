Class particle{
    constructor(x,y,r){
        var options ={
        restitution:0.4
        }
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(World,this.body);
    
}
display(){
var pos = this.body.position;
var angle = this.body.angle;

Push();
translate(pos.x,pos.y);
rotate(angle);
nostroke();
Fill(this.color);
ellipsedMode(RADIUS);
ellipse(0,0,this.r,this.r);
Pop();
}
};