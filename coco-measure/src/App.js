import React from 'react';
import Nav from './Nav';
import Upload from './Upload';
import Gazette from './Gazette';
import { BrowserRouter as Router,Switch, Route, } from 'react-router-dom';
import UploadPic from './UploadPic';



function App() {

  return (

    <Router>

      <div className="A">

        
      <Switch>

      <Route Path=" /Upload" component={Upload}/>
      </Switch>
      
    </div>
    </Router>
  );
}


export default App;
