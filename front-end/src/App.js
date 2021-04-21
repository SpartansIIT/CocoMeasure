import React from 'react';

import Home from './Home';
import Upload from './Upload';
import camera from './camera';
import Pricing from './Pricing';
import Gazette from './Gazette';
import aboutUs from './aboutUs';



import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';
function App() {

  return (
    <div className="App">


      <Router>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/Upload" component={ Upload }></Route>
        <Route exact path="/camera" component={ camera }></Route>
        <Route exact path="/Pricing" component={ Pricing }></Route>
        <Route exact path="/Gazette" component={ Gazette }></Route>
        <Route exact path="/aboutUs" component={ aboutUs }></Route>


      </Router>

    </div>
  );
}

export default App;