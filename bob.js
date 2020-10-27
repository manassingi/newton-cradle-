class bob
{
	constructor(x,y)
	{
		var options={
			
			isStatic:false,
			restitution:1,
			friction:0,
			//frictionAir:0.1,
			slop: 1,
			inertia: Infinity
			
			}
			this.body=Bodies.rectangle(x, y, 65,65, options);
		this.x= x;
		this.y= y;
		//this.color= color;
		World.add(world, this.body);

	}
	display()
	{
		  var angle = this.body.angle;
			var pos = this.body.position;
		push();
		translate(pos.x,pos.y);
		rotate(angle);
		strokeWeight(3.5);
        stroke("#fff");
		fill("black");
		ellipse(0,0,60,60);
		pop();
	}

}
