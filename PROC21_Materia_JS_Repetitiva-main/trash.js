class Ball{
    constructor(x, y, r){
    var ball_options= {
    isStatic: false
    restitution: .3
    friction: 0
    density: 1.2
    }
    this.r = r
    this.body = Bodies.circle(x,y,r, option);
    World.add (world, this.body)
    }

    show(){
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
     fill("E4E4E4");
    ellipse(pos.x, pos.y, this.r);
    pop();
    }

}