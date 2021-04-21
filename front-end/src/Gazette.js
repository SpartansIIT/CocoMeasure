import React, { useState, useEffect } from 'react';


import './Gazette.css';

import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';
function Gazette() {

  return (
    <div className="gazette">
      <div className = "gazette_desc">
          <h1 className ="gazetteheading">The Gazette of maximum retail price of coconuts</h1>
          <h3 className="gazettedescription">The Consumer Affairs Authority (CAA) in the Extraordinary Gazette No.2194/73, ordered a maximum retail price on coconut.
          The order shall come into effect from 25th September 2020.</h3>
      </div>

      {/* <div className = "gazetteimg">
        <img src={require('assets\coconut retail price gazette.jpg')}/>
      </div> */}
        

    </div>
  );
}

export default Gazette;