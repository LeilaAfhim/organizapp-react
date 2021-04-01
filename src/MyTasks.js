import React from 'react';
import { Scrollbar } from "react-scrollbars-custom";
import Avatar from 'react-avatar';
import './MyTasks.css';
import Options from "./images/options.svg";





export default function MyTasks(){
    return(
<Scrollbar className="scrollbar" style={{ width: 400, height: 550 }}>
    <div>
        <button className="card">
             
  <h4>MY TASKS OF THE DAY</h4>

  <button className="tasks">
      <p>9:00 <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
          <Avatar className="options" name="options"  src= {Options} size="30px"/>
      </p>
  </button>

<button className="tasks">
      <p>10:00 <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
          <Avatar className="options" name="options"  src= {Options} size="30px"/>
      </p>
  </button>

  <button className="tasks">
      <p>11:00 <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
          <Avatar className="options" name="options"  src= {Options} size="30px"/>
      </p>
  </button>

  <button className="tasks">
      <p>12:00 <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
          <Avatar className="options" name="options"  src= {Options} size="30px"/>
      </p>
  </button>

  <button className="tasks">
      <p>13:00 <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>
          <Avatar className="options" name="options"  src= {Options} size="30px"/>
      </p>
  </button>



  </button>
  </div>
</Scrollbar>

    );
}


