import React from "react";
import './Timeline.css';
import { Scrollbar } from "react-scrollbars-custom";
import Avatar from 'react-avatar';
import Member from "./Member";
import Container from 'react-bootstrap/Container';
import Lana from "./images/lana.png";
import Rob from "./images/Rob.png";
import Lucas from "./images/Lucas.png";
import Alice from "./images/Alice.png";
import Option from "./images/options.svg";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import leftArrow from "./images/leftArrow.svg";
import rightArrow from"./images/rightArrow.svg";
import Chat from"./images/chat.svg";




export default function Timeline (){
return(
<div>
 
    <Member/>
    <div>
<h1>TIMELINE</h1>

</div>

<div className="Month">
  
<h4 className="March"><Avatar className="ArrowLeft" name="Arrow" src={leftArrow}size="20px"/> March<Avatar className="ArrowRight" name="Arrow"src={rightArrow}size="20px"/> </h4>

</div>
<button className="addTask">ADD A TASK</button>

<div>
<ButtonToolbar className="Date" aria-label="Toolbar with button groups">
  <ButtonGroup className="mr-2" aria-label="First group">
    <button className="Number" >1</button> <button className="Number">2</button> <button className="Number">3</button> <button className="Number">4</button> <button className="Number" >5</button> <button className="Number">6</button> <button className="Number">7</button> <button className="Number">8</button> <button className="Number" >9</button> <button className="Number">10</button> <button className="Number">11</button> <button className="Number">12</button> <button className="Number" >13</button> <button className="Number">14</button> <button className="Number">15</button> <button className="Number">16</button> <button className="Number" >17</button> <button className="Number">18</button> <button className="Number">18</button> <button className="Number">19</button> <button className="Number" >20</button> <button className="Number">21</button> <button className="Number">22</button> <button className="Number">23</button> <button className="Number" >24</button> <button className="Number">25</button> <button className="Number">26</button> <button className="Number">27</button> <button className="Number" >28</button> <button className="Number">29</button> <button className="Number">30</button> <button className="Number">31</button>
  </ButtonGroup>
</ButtonToolbar>
</div>

<div>
<button className="CardMember">
<Avatar className="CardMemberIcon" name="Member"  src= {Lana} round="15px" size="40px"/>
<Avatar className="CardMemberIcon" name="Member"  src= {Lucas} round="15px" size="40px"/>
<Avatar className="CardMemberIcon" name="Member"  src= {Alice} round="15px" size="40px"/>
<Avatar className="CardMemberIcon" name="Member"  src= {Rob} round="15px" size="40px"/>
</button>
</div>




<div>
<ButtonToolbar className="CardTask" aria-label="Toolbar with button groups">
  <ButtonGroup className="mr-2" aria-label="First group">
<button className="Task" >Script tour Yound Child Eng<Avatar className="option" name="option" src= {Option} size="20px"/></button>
  </ButtonGroup>
</ButtonToolbar>
</div> 

<div >
  <Avatar className="Chat" name="Chat"  src= {Chat} size="40px"/>  
</div>
</div>
);

}