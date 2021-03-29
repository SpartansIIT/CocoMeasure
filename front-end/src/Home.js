import React from 'react';
import './Home.css';

import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';

function Home(){
    return(
        <div className="content">


        <h1 className ="Coco">Coco Measure</h1>

        <h2 className="Measure">Measure before you buy it ..</h2>

        <button className="btn"><Link to="/Upload">Upload Image</Link></button>
        <button className="btn">Capture Photo</button>




      </div>
  );
}

export default Home;