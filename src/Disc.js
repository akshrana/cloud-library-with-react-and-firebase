import React, { Component } from 'react';
import clogo from './logo.png';
import Send from './send.png';
import firebase from 'firebase';
import ChatCard from'./ChatCard.js';
import loadgif from './loadgif.gif';
import backi from './backi.png';

class Disc extends Component {
constructor()
{

super();
this.state={chat:"",realChat:"false",compi:[]}

}

text=(event)=>
{

this.setState({chat:event.target.value})

}
chatSend(){
 
 var postKey=firebase.database().ref('chatData/').push().key;

   var currentdate = new Date(); 
var datetime = "posted on: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
         var postData={
           Name:firebase.auth().currentUser.displayName,
           Chat:this.state.chat,
           time:datetime

         };
         var updates={};
         updates['/chats/'+postKey]=postData;
         firebase.database().ref().update(updates);
         console.log("databaseSuccess");
document.getElementById('clear').value = "";
}

componentDidMount=()=>
{
   
 var comp=[];
 var myarray=[];
 	const dbrefobj=firebase.database().ref().child('chats')
 	dbrefobj.on('value',(snap)=>{//console.log(snap.val())
   var postObject= snap.val();
//   var keys=Object.keys(postObject);
  // console.log(postObject[keys[0]].Name);
   
myarray=[];
for (var key in postObject) {
    if (postObject.hasOwnProperty(key)) {
    	
        myarray.push(postObject[key]);
    

    }
}
myarray.reverse();
   comp=myarray.map((user,i)=>{


return(<ChatCard key={i} name={myarray[i].Name} chat={myarray[i].Chat} date={myarray[i].time} /> 
        
	   );

})
  
this.setState({realChat:'yes',compi:comp})

})

}
 render=()=>{

return(
 <div className="Mst1">

<div id="header" class="container">


  <h1 style={{}} class="dib br2 pa2 extrasd">Discussion Forum</h1>
  <span  ><button class='br-pill dim back' onClick={()=>{this.props.status('home')}}><img src={backi} style={{height:50,width:120}}/></button></span>
   
</div>

<img src={clogo }  class="imi welc"/>
  
   {
  this.state.realChat=='false'?<img style={{position:'absolute',top:'50%',right:'50%'}} src={loadgif}/>:
 
  <div id="banner-wrapperch" style={{position:'relative',right:0,}}> <span style={{borderRadius:30}} >{this.state.compi}<br/><br/><br/></span> <span  class=" dib bg-blue zIndex:1"> <img style={{zIndex:1 ,height: 60, width: 60,position:'fixed',bottom:'20px',left:'0px',borderRadius:100 }}  src={firebase.auth().currentUser.photoURL}/><textarea class="f4 chatb"  id="clear" placeHolder={"commenting publicly as " + firebase.auth().currentUser.displayName} style={{}} name="message" rows="" cols="" onChange={this.text}></textarea>
   <button class=' bg-white grow h3 w3 sendb' style={{}}  onClick={()=>{this.chatSend()}}><img style={{height:40,width:60}}  src={Send}/></button>
   </span>

   </div>

}
   <h1 style={{position:'fixed',bottom:-20,height:100,width:'100%',zIndex:0}} class="dib bg-white "><br/></h1>
     <br/><br/><br/><br/>
  
     
</div>
);
}
}
export default Disc;