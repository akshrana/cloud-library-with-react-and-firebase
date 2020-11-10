import React, { Component } from 'react';
import logo from './logo.svg';
import gsign from './gsign.png'
import './App.css';
import Mst1 from'./Mst1.js';
import Upload from'./Upload.js';
import Notesdisp from'./Notesdisp.js';
import Home from'./Home.js';
import up from './noti.png';
import disci from './disci.png';
import dati from './dati.png';
import gami from './gami.png';
import Disc from'./Disc.js';
import Game from'./Game.js';
import Game1 from'./Game1.js';
import Game2 from'./Game2.js';
import './Fonts.css';
import 'tachyons';
import clogo from './logo.png';
import Subjects from'./Subjects.js';
import Datesheet from'./Datesheet.js';
import firebase from 'firebase';
import admini from './admini.png';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Choose extends Component
{


  authn=()=>
  {

//var pass = prompt("Enter Admin password to access");


if(firebase.auth().currentUser.email==="akshitrana2611@gmail.com"||firebase.auth().currentUser.email==="cu.16bcs1182@gmail.com"||firebase.auth().currentUser.email==="tyagirajat200@gmail.com")
{
this.props.status('upload')
}
else
window.alert("Access Denied");

}
myFunc=(event)=>{
this.props.statusNew(event.target.value);


}
render(){


return (

<div>

<div id="header" class="container">

<span class="buti"  ><button id="b15" class=' dim h2 ph3 br2 ' onClick={()=>{firebase.auth().signOut()}}>SignOut</button></span>
<div id="mySidenav" style={{}}>


<button id="b12" class=' dim h2 but dib'  onClick={()=>this.authn()}><img src={admini} style={{height:34,width:34}}/></button>
<button id="b13" class=' dim h2 but dib'  onClick={()=>this.props.status('disc')}><img src={disci} style={{height:30,width:30}}/></button>
<button id="b11" class=' dim h2 but dib'  onClick={()=>this.props.status('tt')}><img src={dati} style={{height:30,width:30}}/></button>
<button id="b14" class=' dim h2 but dib'  onClick={()=>this.props.status('game')}><img src={gami} style={{height:30,width:30}}/></button>
</div>
</div>


<img src={clogo }  class="imi welc"/>

<h1 style={{ position:'absolute',top:'20px',right:'180px' }} class="f3 blue welci ">Welcome {firebase.auth().currentUser.displayName}</h1>
<img src={this.props.urlpro} style={{ }} class="imix pp"/>
<hr class="hrhh"/>
<marquee direction="left" class="marc" style={{}}><h3 class="colu" >padhaai ki duniaa m aapka swaagat hai.Please select your Semester</h3></marquee>
 <select class="choo" style={{}} onChange={this.myFunc}>
  <option value="a">Choose Semester</option>
 <option value="VI">Semester VI</option>
  <option value="VII">Semester VII</option>
 </select> 

</div>


	);

}


}
export default Choose;