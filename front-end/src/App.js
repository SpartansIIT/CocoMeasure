import React, { useState, useEffect } from 'react';

import Home from './Home';
import Upload from './Upload';
import camera from './camera';


import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';
function App() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">


      <Router>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/Upload" component={ Upload }></Route>
        <Route exact path="/camera" component={ camera }></Route>

      </Router>

    </div>
  );
}

export default App;