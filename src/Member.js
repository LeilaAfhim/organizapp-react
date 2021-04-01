import React from "react";
import Avatar from 'react-avatar';
import Lana from "./images/lana.png";
import Alice from "./images/Alice.png";
import Lucas from "./images/Lucas.png";
import Rob from "./images/Rob.png";
import Notification from "./images/notification.svg";
import Email from "./images/email.svg";
import Profile from "./images/profile.svg";
import './Member.css';



export default function Member(){

    return(

<div>
<button className= "member">
    <p>
         <Avatar className="Member" name="Alice"  src= {Rob} round="25px" size="40px"/>  
 <Avatar className="Member" name="Alice"  src= {Lucas} round="25px" size="40px"/>  
 <Avatar className="Member" name="Alice"  src= {Alice} round="25px" size="40px"/>       
<Avatar className="Member" name="Alice"  src= {Lana} round="25px" size="40px"/>
<Avatar className="Icon" name="Alice"  src= {Profile} size="20px"/>
<Avatar className="Icon" name="Alice"  src= {Email} size="20px"/>
<Avatar className="Icon" name="Alice"  src= {Notification} size="20px"/>

</p>
</button>
</div>

    );
}