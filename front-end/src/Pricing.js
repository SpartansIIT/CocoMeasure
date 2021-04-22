import React, { useState, useEffect } from 'react';
import './Pricing.css';


import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';
function Pricing() {

  return (
    <div className="priceCategories">
        <table id="customers">
            <div className="pricingpage"> 
                <h1 className ="pricingpagename">CocoMeasure Price List</h1>
                <h3 className="pricingdescription">Prices According to the Consumer Authority Gazzete in 2020.</h3>
            </div>
            <div className = "table">
                <tr>
                    <th id="tableheadsize">Size</th>
                    <th id="tableheadprice">Price</th>
                </tr>

                <tr>
                    <td id="tablecat">Below 12 inches</td>
                    <td id="tableprice">Rs 60/=</td>
                </tr>

                <tr>
                    <td id="tablecat">Between 12 and 13 inches</td>
                    <td id="tableprice">Rs 65/=</td>
                </tr>

                <tr>
                    <td id="tablecat">Above 13 inches</td>
                    <td id="tableprice">Rs 70/=</td>
                </tr>
            </div>

        </table>

      

    </div>
  );
}

export default Pricing;