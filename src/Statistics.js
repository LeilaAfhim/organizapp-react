import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import Avatar from 'react-avatar';
import Member from "./Member";
import './Statistics.css';
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




export default function Statistics (){



return(
<div>
 <Member/>
 
<h1>STATISTICS</h1>

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
    <button className="CardMemberStat">
   
  <h3 className="CardTitleMember">MEMBER</h3>
<Avatar className="FilterStat" name="Filter" src={Filter}size="30px"/> 
<div className="DropdownStat">
   <Dropdown >
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



<div className="LanaStat">
  <Avatar className="Lana" name="Lana" src={Lana}size="80px" round="40px"/> <br/>
  <div className="TextStat">
    <h2 className="Name">LANA</h2><h3 className="Role">CURATOR</h3><h6 className="TaskOverview">Task Overview - March 21</h6>
</div>     
</div>

   
 

<div className="AvatarButton">     
             <Avatar className="MemberAvatarStat" name="Lana" src={Lana}size="50px" round="25px"/> <br/>
             <Avatar className="MemberAvatarStat" name="Lucas" src={Lucas}size="50px" round="25px"/> <br/>
             <Avatar className="MemberAvatarStat" name="Rob" src={Rob}size="50px" round="25px"/> <br/>
             <Avatar className="MemberAvatarStat" name="Alice" src={Alice}size="50px" round="25px"/>     
</div>




    </button>
</div>



<div>
    <button className="CardVoiceTourStat">
   
  <h3 className="CardTitleVT">VOICE TOUR</h3>
<Avatar className="FilterVT" name="Filter" src={Filter}size="30px"/> 
<div className="DropdownVT">
   <Dropdown >
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



  <div className="TextVT">
    <h2 className="Name">YOUNG CHILD</h2><h6 className="TaskOverview">Task Overview - March 21</h6>
</div>     



<div className="VTButton">     
<button className="YC">YOUNG CHILD</button>
<button className="Cat">TEENAGER</button>
<button className="Cat">PASSIONATE</button>
<button className="Cat">BLIND PERSON</button>
</div>



    </button>
</div>
</div>









);

}