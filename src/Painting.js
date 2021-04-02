import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import Avatar from 'react-avatar';
import Member from "./Member";
import './Painting.css';
import Chat from"./images/chat.svg";
import Picture from "./images/painting.jpg";
import Check from "./images/check.svg";
import Filter from "./images/filter.svg";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'





export default function Painting (){
return(
<div>
 
    <Member/>
 
<h1>PAINTING TASKS</h1>

<div className="optionTasksPainting">
   <Avatar className="Filter" name="Filter" src={Filter}size="30px"/> 
 
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
</div>
</div>
);

}