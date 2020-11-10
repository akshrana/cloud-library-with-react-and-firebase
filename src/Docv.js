import React, { Component } from 'react';
import clogo from './logo.png';
import close from './close.png';
import Send from './send.png';
import firebase from 'firebase';
import ChatCard from'./ChatCard.js';
import loadgif from './loadgif.gif';
class Docv extends Component {
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
 <div className="Mst1" style={{zIndex:-4}}>
 
   {
  this.state.realChat=='false'?<img style={{position:'absolute',top:'50%',right:'50%'}} src={loadgif}/>:
 
  <div id="" style={{position:'relative',right:0,}}> <span >{this.state.compi}<br/><br/><br/></span> <span  class=" dib bg-blue zIndex:1"> <img style={{zIndex:1 ,height: 60, width: 60,position:'fixed',bottom:'20px',left:'0px',borderRadius:100 }}  src={firebase.auth().currentUser.photoURL}/><textarea id="clear" class="f4" placeHolder={"commenting publicly as " + firebase.auth().currentUser.displayName} style={{zIndex:1 ,position:'fixed',bottom:'10px',left:'70px'}} name="message" rows="3" cols="38" onChange={this.text}></textarea>
   <button class=' bg-white grow h3 w3' style={{zIndex:1, position:'fixed',bottom:'20px',left:'430px'}}  onClick={()=>{this.chatSend()}}><img style={{height:40,width:60}}  src={Send}/></button>
   </span>

   </div>

}
   
   
     
</div>
);
}
}
export default Docv;