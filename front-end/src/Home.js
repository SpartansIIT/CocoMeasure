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
        <div className="nav-container">
          

          <ul className={"nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
              >
                Blog
              </NavLink>
            </li>
           
          </ul>
        
        </div>
      </nav>

           

        <div className="nav">

          <div className="nav-logo"> 
            <h1 className ="AppName">Coco Measure</h1>
            <h3 className="Moto">Measure before you buy it...</h3>
          </div> 

       

        </div>

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

        {/* <button className="btn">Capture Photo</button> */}




      </div>
  );
}

export default Home;