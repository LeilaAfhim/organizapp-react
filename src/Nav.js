import React from "react";
import {Link} from "react-router-dom";
import Home from "./images/home.svg";
import Timeline from "./images/timeline.svg";
import Painting from "./images/paint-palette.svg";
import Statistics from "./images/analysis.svg";
import './App.css';



export default function Nav(){

    return(
<div>
    <button className="navigation">
    <nav>
        <ul>
            <Link to="/Homepage">
            <li>
                 <img className="iconSide" src={Home} width="30px" />
                 <h3>HOME</h3>
            </li>
            </Link>
            <Link to="/Timeline">
            <li>
                <img className="iconSide" src={Timeline} width="30px" />
                 <h3>TIMELINE</h3>
            </li>
            </Link>
           <Link to="/Painting">
            <li>
                 <img className="iconSide" src={Painting} width="30px" />
                 <h3>PAINTING</h3>
                
            </li>
            </Link>
            <Link to="/Statistics">
            <li>
                <img className="iconSide" src={Statistics} width="30px" />
                 <h3>STATISTICS</h3>
            </li>
            </Link>
        </ul>
    </nav>
    </button>
</div>

    );
}