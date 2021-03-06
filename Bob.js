class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options)
        this.width = width
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(1)
        fill("red");
        ellipse(pos.x, pos.y, 40);
    }
}