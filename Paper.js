class Paper {
    constructor(x,y,width){
        var options = {   
         isStatic:false,
         friction:1.5,
         density:0.5
        }
        this.body = Matter.Bodies.circle(x,y,width-15,options)
        this.width = width;
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body)
    }
        display(){      
            var pos = this.body.position;
            var angle = this.body.angle
            push();            
            imageMode(RADIUS)
            image(this.image,pos.x,pos.y,this.width,this.width) 
            pop();
        }
}