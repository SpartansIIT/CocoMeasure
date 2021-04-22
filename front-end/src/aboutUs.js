import React from 'react';
import './aboutUs.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';

function aboutUs(){
    return(
        
        <div className="wholepage">
             <nav className="navbar">

<div className="nav">

  <div className="nav-logo"> 

    <h1 className ="AppName">Coco Measure</h1>
    
  </div> 

</div>

<div className="spacer"/>

<div className="navContainer">

  <ul className={"nav-menu"}>
    <li className="nav-item">
      <NavLink
        exact
        to="/"
        className="nav-links"
      >
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        exact
        to="/Gazette"
        className="nav-links"
      >
        Gazette
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        exact
        to="/aboutUs"
        className="nav-links"
      >
        About us
      </NavLink>
    </li>

  </ul>

</div>
</nav>



            
          <div className="box">
            <img className="imgAbout1" />;
            
            <h1> <br />
            Bhushitha Ekanayake<br />
            2019156<br />w1761194</h1>
              
          </div>

          <div className="box">
            <img className="imgAbout2" />;
            
            <h1> <br />
            Nisandi Jayasuriya<br />
            20191144<br />w1790017</h1>
              
          </div>

          <div className="box">
            <img className="imgAbout3" />;
            
            <h1> <br />
              Manodya Mendis<br />
              2018629<br />w1761956</h1>
              
          </div>
          <div className="box">
            <img className="imgAbout4" />;
            
            <h1> <br />
              Youjith	Deelake<br />
              2018137<br />w1714901</h1>
              
          </div>
          <div className="box">
            <img className="imgAbout5" />;
            
            <h1> <br />
              Denuwan	Gunasinghe<br />
              2018583<br />w1742255</h1>
              
          </div>

          <div className="box">
            <img className="imgAbout6" />;
            
            <h1> <br />
              Pasal	Wickramasinghe<br />
              2018277<br />w1715783</h1>
              
          </div>

        </div>
       
    );
}

export default aboutUs;