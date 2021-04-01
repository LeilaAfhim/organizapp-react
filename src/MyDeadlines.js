import React from 'react';
import { Scrollbar } from "react-scrollbars-custom";
import Avatar from 'react-avatar';
import './MyTasks.css';
import Options from "./images/options.svg";
import Deadline from "./images/deadline.svg";




export default function MyDeadlines(){
    return(
        <div className="MyDeadlines">
<Scrollbar className="scrollbar" style={{ width: 400, height: 550 }}>
    <div>
        <button className="card">
             
  <h4>MY DEADLINES</h4>

  <button className="tasks">
      <p><img className="deadline"src={Deadline} width="30px"/>12.05.21<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
          <Avatar className="options" name="options"  src= {Options} size="25px"/>
      </p>
  </button>

<button className="tasks">
      <p><img className="deadline"src={Deadline} width="30px"/>20.05.21<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
          <Avatar className="options" name="options"  src= {Options} size="25px"/>
      </p>
  </button>

  <button className="tasks">
      <p><img className="deadline"src={Deadline} width="30px"/>5.06.21<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
          <Avatar className="options" name="options"  src= {Options} size="25px"/>
      </p>
  </button>

  <button className="tasks">
      <p><img className="deadline"src={Deadline} width="30px"/>15.06.21<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
          <Avatar className="options" name="options"  src= {Options} size="25px"/>
      </p>
  </button>



  </button>
  </div>
</Scrollbar>
</div>

    );
}