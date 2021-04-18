import React, { useState, useEffect } from 'react';

import Home from './Home';


import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';
function Pricing() {

  return (
    <div className="priceCategories">
        <table id="customers">
            <tr>
                <th>Size</th>
                <th>Price</th>
            </tr>

            <tr>
                <td>Below 12 inches</td>
                <td>Rs 60/=</td>
            </tr>

            <tr>
                <td>Between 12 and 13 inches</td>
                <td>Rs 65/=</td>
            </tr>

            <tr>
                <td>Above 13 inches</td>
                <td>Rs 70/=</td>
            </tr>

        </table>


      

    </div>
  );
}

export default Pricing;