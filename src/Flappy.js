import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Game from'./Game.js';
import windowSize from 'react-window-size';


class Home extends Component{

a=10;

}
var xy= new Home();
var elem = (document.compatMode === "CSS1Compat") ? 
    document.documentElement :
    document.body;


var width = elem.clientWidth;


var pipes=[];
var bird;
var hitx=false;
var score=1;
var scorehi=0;
var scorem=0;
var sign=1;
export default function sketch (p) {
class bird{

y=p.width/2;
x=25;
gravity=0.7;
velocity=0;
lift=-11;
show=()=>{
	if(score%800==0)
		sign=-sign;
	if(sign==-1){
	p.fill(255);
p.ellipse(this.x,this.y,26,26);}
else{
	p.fill(255);
p.ellipse(this.x,this.y,26,26);
}
}

up=()=>
{
this.velocity=this.lift;

	
}


update=()=>{
this.velocity+=this.gravity;
this.velocity*=0.9;
this.y+=this.velocity;
if(this.y>p.height-3)
{
this.y=p.height-3;
}

}

}

	class pipe{


top=p.random(p.height/2);
bottom=p.random(p.height/2);

w=20;
x=p.width-30;
speed=2;
hitt=false;
score=0;

hit=(bird)=>
{
if(bird.y-20<this.top||bird.y+20>p.height-this.bottom)
	if((bird.x>this.x&&bird.x<this.x+this.w))
		{	this.hitt=true;
			hitx=true;
			
			return true;
            
		
         }
     
    
	return false;


}

show=()=>{
if( p.height-(this.top+this.bottom)>200)
{
	var dif=p.height-(this.top+this.bottom);
	
	this.top=this.top+dif*0.3;
	this.bottom=this.bottom+dif*0.2;
}
if( p.height-(this.top+this.bottom)<60)
{
	
	this.top=40;
	this.bottom=90;
}

p.fill(255);
if(this.hitt==true&&hitx==true){
p.fill(255,0,0);
p.noLoop();

}

p.rect(this.x,0,20,this.top);
p.rect(this.x,p.height-this.bottom,20,this.bottom);

{


}
if(this.hitt==true&&hitx==true){
if(width<450){
p.textSize(24);
p.fill(0, 102, 153);
p.text("final score: "+scorem, 60, 200);
p.text('TAP TO CONTINUE', 60, 250);

scorem=0;
score=0;
bird.y=30;
p.noLoop();
}
else
{
p.textSize(32);
p.fill(0, 102, 153);
p.text("final score: "+scorem, 120, 200);
p.text('CLICK TO CONTINUE', 120, 250);
scorem=0;
score=0;
bird.y=30;


}
}
}

update=()=>
{

this.x-=this.speed;

}

offscreen=()=>
{
if(this.x<-this.w-1)
	return true;
else
	return false;


}

}
 

  p.setup = function () {
 
console.log(xy.a);
 if(width<480)
   p.createCanvas(360,420);
else
	  p.createCanvas(500,500);
	
	 bird= new bird();
	pipes.push(new pipe());

  };




  p.draw = function () {
   if(sign==1)
   p.background(0);
else
	   p.background(241);

score++;
if(score%20==0)
scorem++;
if(scorem>scorehi)
scorehi=scorem;
if(width<480){
p.textSize(22);
p.fill(0, 102, 153);
p.text("score: "+scorem, 240,30);
p.text("hi score: "+scorehi, 10,30);

}
else{
p.textSize(32);
p.fill(0, 102, 153);
p.text("score: "+scorem, 350,30);
p.text("hi score: "+scorehi, 10,30);

}


if(p.frameCount%100==0)
{
pipes.push(new pipe());

}
bird.update();
bird.show();
for(var i=pipes.length-1;i>=0;i--)
{

if(pipes[i].offscreen())
pipes.splice(i,1);

pipes[i].show();
pipes[i].update();
pipes[i].hit(bird);
if(pipes[i].hit(bird))
{


}

}
p.doubleClicked=(event)=> {
bird.up();
}

p.mouseClicked=()=> {
	if(p.mouseY<-20)
	{
		p.remove();
	}
  
	if(hitx==true)
      {pipes=[];
		p.loop();
       hitx=false;

	   }

		else
			bird.up();
}

p.keyPressed=()=> {
	if(p.key==' ')
		bird.up();

	if(p.key=='x'||p.key=='X')
		p.remove();
}



}
}

/*var bird;
var pipes=[];
function setup()
{

	createCanvas(400,600);
	
	bird= new bird();
	pipes.push(new pipe());
}
function draw()
{

background(0);
if(frameCount%100==0)
{
pipes.push(new pipe());

}
bird.update();
bird.show();
for(var i=pipes.length-1;i>=0;i--)
{

if(pipes[i].offscreen())
pipes.splice(i,1);

pipes[i].show();
pipes[i].update();
}
}
function keyPressed() {
	if(key==' ')
		bird.up();
}
*/