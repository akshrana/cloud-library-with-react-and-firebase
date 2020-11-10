import React, { Component } from 'react';
import loadgif from './loadgif.gif';
import firebase from 'firebase';
import Notesdisp from'./Notesdisp.js';
import clogo from './logo.png';
import backi from './backi.png';
import up from './noti.png';
class Datesheet extends Component {

constructor()
{
super();
this.state={url:'',stat:'',urltoc:'',urlnos:'',urldwdm:'',url:'java',urltt:'',urloe:'',sub:''}

}

   componentDidMount=()=>

{
 var comp=[];
 var myarray=[];
  const dbrefobj=firebase.database().ref().child('timetable')
  dbrefobj.on('value',(snap)=>{//console.log(snap.val())
   var postObject= snap.val();
 var keys=Object.keys(postObject);
  console.log(postObject[keys[0]]);
  this.setState({url:postObject[keys[0]]})
   
})

  const dbrefobj1=firebase.database().ref().child('sylabuss')
  dbrefobj1.on('value',(snap)=>{//console.log(snap.val())
   var postObject= snap.val();
 var keys=Object.keys(postObject);
  console.log(postObject.java.url);
  this.setState({urlnos:postObject.nos.url})
  this.setState({urltoc:postObject.toc.url})
  this.setState({urldwdm:postObject.dwdm.url})
  this.setState({urljava:postObject.java.url})
  this.setState({urltt:postObject.tt.url})
  this.setState({urloe:postObject.oe.url})
})


}
chn=(event)=>
{
if(event.target.value=='dates')
  this.setState({stat:'dates'})
if(event.target.value=='syllabus')
  this.setState({stat:'syllabus'})


}
sub=(event)=>
{
if(event.target.value=='nos')
  this.setState({sub:'nos'})
if(event.target.value=='toc')
  this.setState({sub:'toc'})
if(event.target.value=='dwdm')
  this.setState({sub:'dwdm'})
if(event.target.value=='java')
  this.setState({sub:'java'})
if(event.target.value=='tt')
  this.setState({sub:'tt'})
if(event.target.value=='oe')
  this.setState({sub:'oe'})


}
render()
  { 
  	
      return(<div>

 
<div id="header" class="container">


  <span style={{}} ><button class='br-pill dim back' onClick={()=>{this.props.status('home')}}><img src={backi} style={{height:50,width:120}}/></button></span>

</div>
<hr style={{position:'relative',zIndex:10}}/>
<img src={clogo } class="imi welc"/>
<marquee direction="left" class="marci" style={{}}><h3 class="colu" style={{}}>you can check DateSheet and Syllabus here. Loading may take time as per your connection speed</h3></marquee>
<img src={up} style={{height:20,position:'relative',left:-1000,top:3}}/>
<div  class='' style={{}}><select class=' newsel'  name="shift1 " onChange={this.chn}  >
  <option  value=' ' >select service</option>
  <option  value='dates' >DateSheet</option>
    <option value='syllabus' >Syllabus</option>
    </select>
  </div>


{
  this.state.stat!='dates'?<div></div>:

  this.state.url==''?<div><img class="loadgi" style={{}} src={loadgif}/></div>:<img src={this.state.url} class="datesh"/>

  }
  {
  this.state.stat=='syllabus'?<div>

<select class=' newsel1'  name="shift1 " onChange={this.sub}  >
  <option value=' ' >select subject</option>
  <option value='nos' >Network OS</option>
    <option value='toc' >Toc</option>
    <option value='dwdm' >DW&DM</option>
    <option value='java' >Advanced Java</option>
    <option value='tt' >Technical Training</option>
    <option value='oe' >Open Elective</option>
    </select>
</div>:<div></div>}
{this.state.stat=='syllabus'?this.state.sub=='nos'?this.state.urlnos==''? <div><img class="loadgi" style={{}} src={loadgif}/></div>  :<img src={this.state.urlnos} class="datesh"/>:<div></div>:<div></div>}
{this.state.stat=='syllabus'?this.state.sub=='toc'?this.state.urltoc==''? <div><img class="loadgi" style={{}} src={loadgif}/></div>  :<img src={this.state.urltoc} class="datesh"/>:<div></div>:<div></div>}
{this.state.stat=='syllabus'?this.state.sub=='dwdm'?this.state.urldwdm==''? <div><img class="loadgi" style={{}} src={loadgif}/></div>  :<img src={this.state.urldwdm} class="datesh"/>:<div></div>:<div></div>}
{this.state.stat=='syllabus'?this.state.sub=='java'?this.state.urljava==''? <div><img class="loadgi" style={{}} src={loadgif}/></div>  :<img src={this.state.urljava} class="datesh"/>:<div></div>:<div></div>}
{this.state.stat=='syllabus'?this.state.sub=='tt'?this.state.urltt==''? <div><img class="loadgi" style={{}} src={loadgif}/></div>  :<img src={this.state.urltt} class="datesh"/>:<div></div>:<div></div>}
{this.state.stat=='syllabus'?this.state.sub=='oe'?this.state.urloe==''? <div><img class="loadgi" style={{}} src={loadgif}/></div>  :<img src={this.state.urloe} class="datesh"/>:<div></div>:<div></div>}




  



</div>

     

  );        
  }
}
export default Datesheet;
