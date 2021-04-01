import React from 'react';
import { Scrollbar } from "react-scrollbars-custom";
import Avatar from 'react-avatar';
import './MyTasks.css';
import Options from "./images/options.svg";
import Lana from "./images/lana.png";
import Alice from "./images/Alice.png";
import Lucas from "./images/Lucas.png";




export default function TeamChat(){
    return(
        <div className="TeamChat">
<Scrollbar className="scrollbar" style={{ width: 400, height: 550 }}>
    <div>
        <button className="card">
             
  <h4>TEAM CHAT</h4>

  <button className="chatBox">
      <p className="text"><Avatar className="chatAvatar" name="Lana"  src= {Lana} round="20px" size="30px"/>Mon 12 - 9.30<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
         
      </p>
  </button>

<input className="typeMessage" type="send" placeholder="Type your message">
      
  </input>

<button className="send">SEND</button>


  </button>
  </div>
</Scrollbar>
</div>

    );
}

