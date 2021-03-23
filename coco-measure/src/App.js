import React from 'react';
import Nav from './Nav';
import Upload from './Upload';
import Gazette from './Gazette';
import { BrowserRouter as Router,Switch, Route, } from 'react-router-dom';
import UploadPic from './UploadPic';
import camera from './camera';



function App() {

  return (

    <Router>

      <div className="A">

        
      <Switch>
      <Route Path=" /UploadPic" component={UploadPic}/>
      {/* <Route Path=" /camera" component={camera}/> */}
      </Switch>
      
      
    </div>
    </Router>
  );
}


export default App;
