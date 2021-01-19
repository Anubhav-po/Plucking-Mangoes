class Dustbin{   
    constructor(x,y){
    
        var options={
            isStatic: true
        }
    
    this.body=Bodies.rectangle(x,y,this.width,height,options);
    this.width=this.width;
    this.height=height;
    Matter.Body.setAngle(this.body,angle);
    World.add(world,this.body);
    
    }
    //functions
    
    display(){
    
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        strokeWeight (4);
        rectMode(CENTER);
        fill ("white");
        rect(0,0,this.width,this.height);
        pop ();
    
    }
    
    }
    