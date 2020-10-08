class Sides{
    constructor(x,y,w,h){
        
     this.body= Bodies.rectangle(x,y,w,h,{isStatic:true});
     this.w=w;
     this.h=h;

     World.add(world,this.body);

    }

    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.w,this.h);

    }
}