import React from 'react';
import './Home.css';
import Gazette from './Gazette';
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';

function Home(){
    return(
        <div className="content">

          <nav className="navbar">

            <div className="nav">

              <div className="nav-logo"> 

                <h1 className ="AppName">Coco Measure</h1>
                <h3 className="Moto">Measure before you buy it...</h3>
                
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

           

          

            <div className = "buttonContainer">        
              <div className = "button1">
                <button className="btn"><Link to="/Upload">Upload an Image</Link></button>
              </div>
        
            <div className = "button2">
              <button className="btn"><Link to="/camera">Capture an Image</Link></button>
            </div>

            <div className = "button3">
              <button className="btn"><Link to="/Pricing">View Price Categories </Link></button>
            </div>
          </div>
          <div className="footer">
            <p>Copyright &copy; 2021 COMPASS. All Rights Reserved </p>
          </div>

        </div>
    );
}

export default Home;