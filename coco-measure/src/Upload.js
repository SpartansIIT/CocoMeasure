import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Upload(){
    return(
        <div className="content">

          
        <h1 className ="Coco">Coco Measure</h1>
        
        <h2 className="Measure">Measure before you buy it ..</h2>


        <button className="btn">Upload Image</button>
        <button className="btn">Capture Photo</button>


      </div>
  );
}

export default Upload;