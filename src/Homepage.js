import React from "react";
import './App.css';
import Avatar from 'react-avatar';
import Lana from "./images/lana.png";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import MyTasks from "./MyTasks";
import TeamChat from "./TeamChat";
import MyDeadlines from "./MyDeadlines";
import Member from "./Member";



export default function Homepage (){
return(
  
<div>
<Member/>
 
<h1><Avatar className="lanaAvatar" name="lana"  src= {Lana} round="50px" size="100px"/> WELCOME BACK LANA !</h1>






<Container className="homeCard">
     
<MyTasks/>
 <MyDeadlines/>
<TeamChat/>


</Container>

</div>

);

}