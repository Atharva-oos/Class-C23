class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(300,560,600,10,options);
        this.width=600;
        this.height=10;
        World.add(myWorld,this.body);

    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}