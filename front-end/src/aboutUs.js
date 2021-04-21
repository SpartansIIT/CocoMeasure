import React from 'react';
import './aboutUs.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';

function aboutUs(){
    return(
        <div className="box">
              <img src="assets\Coco\ Image\ background\ 3.png">
              </img>
              <h2>Manodya Mendis</h2>
              <h3>2018629 </h3>
              <h3>w1761956</h3>
          </div>
    );
}

export default aboutUs;