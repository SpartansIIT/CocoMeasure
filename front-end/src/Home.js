import React from 'react';
import './Home.css';

import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';

function Home(){
    return(
        <div className="content">

             <nav>
      <ul>
            <li>
                <a href="Home.html">[][][]</a>               
                <ul>
                    <li><a href=""> Help ?</a></li>
                    <li><a href=""> FAQ</a></li>
                    <li><a href=""> Gazette</a></li>
                    <li><a href=""> About Us</a></li>

                </ul>
            </li> 
        </ul>

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
            <button className="btn">View Price Categories</button>
          </div>
        </div>

        {/* <button className="btn">Capture Photo</button> */}




      </div>
  );
}

export default Home;