import React, { Component } from 'react';
import logo from './logo.svg';
import gsign from './gsign.png'
import './App.css';
import Mst1 from'./Mst1.js';
import Upload from'./Upload.js';
import Notesdisp from'./Notesdisp.js';
import Home from'./Home.js';
import Choose from'./Choose.js';
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
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import Rebase from 're-base';
const config={


  apiKey: "AIzaSyCkwZkvgeOzhpU__iqolXbM1dE7Gv4qR6U",
    authDomain: "cumst-bc486.firebaseapp.com",
    databaseURL: "https://cumst-bc486.firebaseio.com",
    projectId: "cumst-bc486",
    storageBucket: "cumst-bc486.appspot.com",
    messagingSenderId: "330860551651"
};



firebase.initializeApp(config);
firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
class App extends Component {

 constructor()
    { 
        super();
        this.state={
              val:"choose",upload:"",subject:"",isSignIn:false,mst:"",chapter:"",player:""
                    }
     }

   statusNew=(numx)=>{
this.setState({sem:numx,val:'home'});


   }

   status=(num1,num2,num3,num4,num5)=>{

  this.setState({val:num1,mst:num2,subject:num3,chapter:num4,player:num5});
}
uiConfig={
signInFlow:"popup",
signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID],
callbacks:{signInSuccess:()=>false}
}
 
componentDidMount=()=>
{


firebase.auth().onAuthStateChanged(user=>{
this.setState({isSignIn:!!user})}

)

}
  


  render() {

    if(this.state.isSignIn===false){
     return (<div>    <div class="main">
                    <div id="header" class="container">
                    </div>
                    <img src={clogo } style={{ height: 120, width: 350,position:'absolute',top:'7px',left:'20px' }} class="imi"/>
                   <hr/>

                    <img src={gsign} class="login" style={{}} />

                    </div>
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            

  </div>);
    }
    else{

 if(this.state.val==="choose")
    {
    return (<Choose statusNew={this.statusNew} urlpro={firebase.auth().currentUser.photoURL} namepro={firebase.auth().currentUser.displayName}  />);
    }

    if(this.state.val==="unit1"||this.state.val==="unit2"||this.state.val==="unit3")
    {
    return (<Mst1 status={this.status} mst={this.state.mst}  chapter={this.state.chapter} subject={this.state.subject}/>);
    }
    if(this.state.val==="subjects")
    {
    return (<Subjects sem={this.state.sem} status={this.status} mst={this.state.mst} />);
    }
    if(this.state.val==="home")
    {
    return (<div> <Home sem={this.state.sem} statusNew={this.statusNew}  status={this.status} urlpro={firebase.auth().currentUser.photoURL} namepro={firebase.auth().currentUser.displayName} /></div> );
    }
     if(this.state.val==="upload")
    {
    return (<Upload status={this.status}/>);
    }
     if(this.state.val==="disc")
    {
    return (<Disc status={this.status}/>);
    }
    if(this.state.val==="disp")
    {
    return (<Notesdisp status={this.status} mst={this.state.mst}  chapter={this.state.chapter} subject={this.state.subject}/> );
    }
         if(this.state.val==="tt")
    {
    return (<Datesheet status={this.status}/>);
    }
        if(this.state.val==="game")
    {
    return (<Game status={this.status}/>);
    }
    if(this.state.val==="game1")
    {
    return (<Game1 status={this.status}/>);
    }
    if(this.state.val==="game2")
    {
    return (<Game2 status={this.status} player={this.state.player}/>);
    }
  }
  }
}

export default App;
