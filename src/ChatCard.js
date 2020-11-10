import React, { Component } from 'react';
import Cardi from "./cardi.png"
import Proo from "./proo.png"
import Fevico from "./fevico.png"
import firebase from 'firebase';
import Notesdisp from'./Notesdisp.js';


class ChatCard extends Component {

constructor()
{
super();
this.state={}

}


render()
  { 
  	

      return(
<div style={{borderRadius:40}}> <h1 class="bg-white dib  f6 ccard" ><img class="dib" style={{ height: 30, width: 30,position:'relative',left:5,top:5 ,borderRadius:50}} src={Proo}/><span class="bg-blue"style={{position:'relative',left:8,top:0}}>{this.props.name } </span><span class="bg-white datee" style={{}}>{this.props.date}</span><br/><br/><span class="f5" style={{width:350}}>{this.props.chat}</span></h1>


        </div>
);        
  }
}
export default ChatCard;
