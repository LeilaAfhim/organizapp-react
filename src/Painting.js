import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import Avatar from 'react-avatar';
import Member from "./Member";
import './Painting.css';
import Chat from"./images/chat.svg";
import Picture from "./images/painting.jpg";
import Check from "./images/check.svg";
import Filter from "./images/filter.svg";
import Map from "./images/map.PNG";
import Doc from "./images/doc.svg";
import Lana from "./images/lana.png";
import Rob from "./images/Rob.png";
import Lucas from "./images/Lucas.png";
import Alice from "./images/Alice.png";
import English from "./images/en.svg";
import Esp from "./images/es.svg";
import Italian from "./images/it.svg";
import French from "./images/fr.svg";


import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





export default function Painting (){
return(
<div>
 
    <Member/>
 
<h1>PAINTING TASKS</h1>

<div className="optionTasksPainting">
   <Avatar className="Filter" name="Filter" src={Filter}size="30px"/> 
 <input className="SearchInput"
        type="text"
        placeholder="Search"/>
   <Dropdown className="Dropdown">
  <Dropdown.Toggle className="DropName" variant="success" id="dropdown-basic">
    MY FILTER
  </Dropdown.Toggle>

  <Dropdown.Menu >
      <button className="MyFilterSaved">
    <Dropdown.Item href="#/action-1">YC-REL1</Dropdown.Item><br/>
    <Dropdown.Item href="#/action-2">PAS-POR</Dropdown.Item><br/>
   
    </button>
  </Dropdown.Menu>
</Dropdown>


</div>

<div>
<Scrollbar className="scrollbarPaintingTask" style={{ width: 1370, height: 560 }}>
<button className="PaintingTasks">
<h5 className="Reference">RA135468</h5>
<img src={Picture} width="100px"/>
<p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour YC </p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour P</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Map</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Descritpion</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Contact</p><br/>
<button className="MyTasks">Take the task(s)</button>
<button className="MyTasks">Assign the task(s)</button>
</button>

<button className="PaintingTasks">
<h5 className="Reference">RA135468</h5>
<img src={Picture} width="100px"/>
<p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour YC </p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour P</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Map</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Descritpion</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Contact</p><br/>
<button className="MyTasks">Take the task(s)</button>
<button className="MyTasks">Assign the task(s)</button>
</button>

<button className="PaintingTasks">
<h5 className="Reference">RA135468</h5>
<img src={Picture} width="100px"/>
<p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour YC </p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour P</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Map</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Descritpion</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Contact</p><br/>
<button className="MyTasks">Take the task(s)</button>
<button className="MyTasks">Assign the task(s)</button>
</button>

<button className="PaintingTasks">
<h5 className="Reference">RA135468</h5>
<img src={Picture} width="100px"/>
<p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour YC </p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour P</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Map</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Descritpion</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Contact</p><br/>
<button className="MyTasks">Take the task(s)</button>
<button className="MyTasks">Assign the task(s)</button>
</button>

<button className="PaintingTasks">
<h5 className="Reference">RA135468</h5>
<img src={Picture} width="100px"/>
<p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour YC </p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour P</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Map</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Descritpion</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Contact</p><br/>
<button className="MyTasks">Take the task(s)</button>
<button className="MyTasks">Assign the task(s)</button>
</button>

<button className="PaintingTasks">
<h5 className="Reference">RA135468</h5>
<img src={Picture} width="100px"/>
<p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour YC </p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour P</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Map</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Descritpion</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Contact</p><br/>
<button className="MyTasks">Take the task(s)</button>
<button className="MyTasks">Assign the task(s)</button>
</button>


<button className="PaintingTasks">
<h5 className="Reference">RA135468</h5>
<img src={Picture} width="100px"/>
<p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour YC </p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Script tour P</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Map</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Descritpion</p><br/>
<Avatar className="Check" name="Check" src={Check}size="20px"/><p className="Task1">Contact</p><br/>
<button className="MyTasks">Take the task(s)</button>
<button className="MyTasks">Assign the task(s)</button>
</button>

</Scrollbar>
</div>


<div>
  <Avatar className="Chat" name="Chat"  src= {Chat} size="40px"/>  



////////



<h1 className="TitlePaintingID">PAINTING ID</h1>

<div className="optionTasksPainting">
   <Avatar className="Filter" name="Filter" src={Filter}size="30px"/> 
 <input className="SearchInput"
        type="text"
        placeholder="Search"/>
   <Dropdown className="Dropdown">
  <Dropdown.Toggle className="DropName" variant="success" id="dropdown-basic">
    MY FILTER
  </Dropdown.Toggle>

  <Dropdown.Menu >
      <button className="MyFilterSaved">
    <Dropdown.Item href="#/action-1">YC-REL1</Dropdown.Item><br/>
    <Dropdown.Item href="#/action-2">PAS-POR</Dropdown.Item><br/>
   
    </button>
  </Dropdown.Menu>
</Dropdown>
</div>

<div>
<Scrollbar className="scrollbarPaintingID" style={{ width: 1370, height: 670 }}>
<button className="PaintingCardID">
<h5></h5><button className="Edit">EDIT</button>

<Container>
    <Row>
         <Col sm={6}>
<button className="PictureCard">
   <p className="Title">RA135468</p>
    <img className="Picture" src={Picture} width="200px"/>
    <p className="Text">
  Lorem Ipsum<br/>      
+32 000 00 00<br/>
dd/mm/yyyy<br/>
Expressionist<br/>
Abstract<br/>
</p>
</button>
</Col>
<Col sm={3}>
    <button className="MapCard">
        <p className="Title">MAP</p>
        <img className="PictureMap" src={Map} width="200px"/>
        <p className="Text">1th floor - 16B</p>
    </button>
</Col>
</Row>

<Row>

 <Col sm={6}>
<button className="DescriptionCard">
    <p className="Title">DESCRIPTION</p>
   <p className="Text">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
</button>
</Col>

<Col sm={3}>
<button className="ScriptCard">
 <p className="Title">SCRIPT TOUR</p>   
 <button className="ButtonScript">
 <p className="Text">Young Child</p>
 <button className="ButtonDoc"><Avatar  name="Alice" src={Doc}size="20px"/> </button>
 <Avatar name="Alice" src={Alice}size="35px" round="20px"/> 
 <p>03.12.20</p>
</button>
<button className="ButtonScript">
<p className="Text">Teenager</p>
 <button className="ButtonDoc"><Avatar  name="Alice" src={Doc}size="20px"/> </button>
 <Avatar name="Alice" src={Lana}size="35px" round="20px"/> 
 <p>03.12.20</p>
 </button>

 <button className="ButtonScript">
<p className="Text">Passionate</p>
 <button className="ButtonDoc"><Avatar  name="Alice" src={Doc}size="20px"/> </button>
 <Avatar name="Alice" src={Rob}size="35px" round="20px"/> 
 <p>03.12.20</p>
 </button>

 <button className="ButtonScript">
<p className="Text">Blind Person</p>
 <button className="ButtonDoc"><Avatar  name="Alice" src={Doc}size="20px"/> </button>
 <Avatar name="Alice" src={Lucas}size="35px" round="20px"/> 
 <p>03.12.20</p>
 </button> 

</button>
</Col>
<Col sm={3}>
<button className="VoiceCard">
<p className="Title">VOICE TOUR</p>
 <button className="ButtonVoice">
<p className="Text">Young Child</p>
<button className="ButtonDoc"><Avatar  name="Eng" src={English}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="Esp" src={Esp}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="fr" src={French}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="it" src={Italian}size="30px"/> </button>
</button>

<button className="ButtonVoice">
<p className="Text">Teenager</p>
<button className="ButtonDoc"><Avatar  name="Eng" src={English}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="Esp" src={Esp}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="fr" src={French}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="it" src={Italian}size="30px"/> </button>
</button>

<button className="ButtonVoice">
<p className="Text">Passionate</p>
<button className="ButtonDoc"><Avatar  name="Eng" src={English}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="Esp" src={Esp}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="fr" src={French}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="it" src={Italian}size="30px"/> </button>
</button>

<button className="ButtonVoice">
<p className="Text">Blind Person</p>
<button className="ButtonDoc"><Avatar  name="Eng" src={English}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="Esp" src={Esp}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="fr" src={French}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="it" src={Italian}size="30px"/> </button>
</button>

</button>
</Col>

</Row>

</Container>
</button>



<button className="PaintingCardID">
<h5></h5><button className="Edit">EDIT</button>

<Container>
    <Row>
         <Col sm={6}>
<button className="PictureCard">
   <p className="Title">RA135468</p>
    <img className="Picture" src={Picture} width="200px"/>
    <p className="Text">
  Lorem Ipsum<br/>      
+32 000 00 00<br/>
dd/mm/yyyy<br/>
Expressionist<br/>
Abstract<br/>
</p>
</button>
</Col>
<Col sm={3}>
    <button className="MapCard">
        <p className="Title">MAP</p>
        <img className="PictureMap" src={Map} width="200px"/>
        <p className="Text">1th floor - 16B</p>
    </button>
</Col>
</Row>

<Row>

 <Col sm={6}>
<button className="DescriptionCard">
    <p className="Title">DESCRIPTION</p>
   <p className="Text">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
</button>
</Col>

<Col sm={3}>
<button className="ScriptCard">
 <p className="Title">SCRIPT TOUR</p>   
 <button className="ButtonScript">
 <p className="Text">Young Child</p>
 <button className="ButtonDoc"><Avatar  name="Alice" src={Doc}size="20px"/> </button>
 <Avatar name="Alice" src={Alice}size="35px" round="20px"/> 
 <p>03.12.20</p>
</button>
<button className="ButtonScript">
<p className="Text">Teenager</p>
 <button className="ButtonDoc"><Avatar  name="Alice" src={Doc}size="20px"/> </button>
 <Avatar name="Alice" src={Lana}size="35px" round="20px"/> 
 <p>03.12.20</p>
 </button>

 <button className="ButtonScript">
<p className="Text">Passionate</p>
 <button className="ButtonDoc"><Avatar  name="Alice" src={Doc}size="20px"/> </button>
 <Avatar name="Alice" src={Rob}size="35px" round="20px"/> 
 <p>03.12.20</p>
 </button>

 <button className="ButtonScript">
<p className="Text">Blind Person</p>
 <button className="ButtonDoc"><Avatar  name="Alice" src={Doc}size="20px"/> </button>
 <Avatar name="Alice" src={Lucas}size="35px" round="20px"/> 
 <p>03.12.20</p>
 </button> 

</button>
</Col>
<Col sm={3}>
<button className="VoiceCard">
<p className="Title">VOICE TOUR</p>
 <button className="ButtonVoice">
<p className="Text">Young Child</p>
<button className="ButtonDoc"><Avatar  name="Eng" src={English}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="Esp" src={Esp}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="fr" src={French}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="it" src={Italian}size="30px"/> </button>
</button>

<button className="ButtonVoice">
<p className="Text">Teenager</p>
<button className="ButtonDoc"><Avatar  name="Eng" src={English}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="Esp" src={Esp}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="fr" src={French}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="it" src={Italian}size="30px"/> </button>
</button>

<button className="ButtonVoice">
<p className="Text">Passionate</p>
<button className="ButtonDoc"><Avatar  name="Eng" src={English}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="Esp" src={Esp}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="fr" src={French}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="it" src={Italian}size="30px"/> </button>
</button>

<button className="ButtonVoice">
<p className="Text">Blind Person</p>
<button className="ButtonDoc"><Avatar  name="Eng" src={English}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="Esp" src={Esp}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="fr" src={French}size="30px"/> </button>
<button className="ButtonDoc"><Avatar  name="it" src={Italian}size="30px"/> </button>
</button>

</button>
</Col>

</Row>

</Container>

</button>
</Scrollbar>
</div>






</div>
</div>
);

}