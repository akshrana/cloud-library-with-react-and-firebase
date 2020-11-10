import React, { Component } from 'react';
import Cardi from "./cardi.png"
import Doc from "./doc.png"
import Ppt from "./ppt.jpg"
import Fevico from "./fevico.png"
import firebase from 'firebase';
import Notesdisp from'./Notesdisp.js';


class Card extends Component {

 state={likes:this.props.likes,views:this.props.views}


liker=(name,act,file)=>
{
var fibase=firebase.database().ref('notesData/');

  var postKey=firebase.database().ref('notesData/').push().key;

        
         var postData={
           Name:name,
           Activity:act,
           File:file
         };
         var updates={};
         updates['/spy/'+postKey]=postData;
         firebase.database().ref().update(updates);
         console.log("databaseSuccess");


firebase.database().ref('/posts/'+this.props.nid).update({likes:this.props.likes+1});
firebase.database().ref('/posts/').once('value').then((snapshot)=>{
var postObject= snapshot.val();
var c=postObject[this.props.nid].likes;
this.setState({likes:c});
var x = document.getElementById(this.props.nid); 
x.style.background = '#2f5fd8'; 

})
}
viewer=(name,act,file)=>
{


var fibase=firebase.database().ref('notesData/');

  var postKey=firebase.database().ref('notesData/').push().key;

        
         var postData={
           Name:name,
           Activity:act,
           File:file
         };
         var updates={};
         updates['/spy/'+postKey]=postData;
         firebase.database().ref().update(updates);
      
    

 
firebase.database().ref('/posts/'+this.props.nid).update({views:this.state.views+1});
firebase.database().ref('/posts/').once('value').then((snapshot)=>{
var postObject= snapshot.val();
var c=postObject[this.props.nid].views;
this.setState({views:c});

})
}
render()
  { 

      return(
<div class="dib  rvc tc" style={{}}>
  
     
         <span style={{display:'block' ,textAlign:'center'}}>{this.props.tag==="pdf"?<img src={Cardi} class="rimi" />:this.props.tag==="doc"?<img src={Doc} class="rimi" />:<img src={Ppt} class='rimi'  />}</span>
        <span class="tc" style={{height:50}} > <p class=" " style={{textAlign:'center' ,height:60}}>   {this.props.name}</p></span>
        <a  onClick={()=>{this.viewer(firebase.auth().currentUser.displayName,'view',this.props.name)}} class=" bg-navy rview" target="_blank" href={"https://docs.google.com/gview?url="+encodeURIComponent(this.props.url)} style={{textDecoration:'none'}}>view file</a>
                <a  onClick={()=>{this.viewer(firebase.auth().currentUser.displayName,'download',this.props.name)}} class=" bg-navy rview" target="_blank"  href={this.props.url} style={{textDecoration:'none'}}>download</a>
         <button id={this.props.nid} class="dib battu " style={{} } onClick={()=>{this.liker(firebase.auth().currentUser.displayName,'like',this.props.name); }}><img style={{height:30,width:30}}src={Fevico}/><span style={{position:"relative",bottom:8}} >{this.props.likes>=this.state.likes?this.props.likes:this.state.likes}likes</span></button>
          
         <p class="dib " style={{position:'relative', bottom:9,left:0}}>views {this.props.views>=this.state.views?this.props.views:this.state.views}</p>
          
      

        </div>
);        
  }
}
export default Card;
