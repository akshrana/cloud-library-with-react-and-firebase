function bird(){

this.y=width/2;
this.x=25;
this.gravity=0.7;
this.velocity=0;
this.lift=-15;
this.show=()=>{
	fill(255);
ellipse(this.x,this.y,16,16);

}

this.up=()=>
{
this.velocity=this.lift;

	
}


this.update=()=>{
this.velocity+=this.gravity;
this.velocity*=0.9;
this.y+=this.velocity;
if(this.y>height-3)
{
this.y=height-3;
}

}



}