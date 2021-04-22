import React, { useState, useEffect } from 'react';

import { NavLink } from "react-router-dom";

import './Gazette.css';

import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';
function Gazette() {

  return (

    <div className="whole" >

 
      <div className="gazette">
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

      
            <div className = "gazette_desc">
  
              <h1 className ="gazetteheading">The Gazette of maximum retail price of coconuts</h1>
              <h3 className="gazettedescription">The Consumer Affairs Authority (CAA) in the Extraordinary Gazette No.2194/73, ordered a maximum retail price on coconut.
                The order shall <br />come into effect from 25th September 2020.</h3>
              <img className="gazImg"></img>

    
            </div> 



      </div>

    </div>
    
    
  );
}

export default Gazette;