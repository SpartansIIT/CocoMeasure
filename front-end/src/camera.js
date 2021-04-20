import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './imagePreview.css';
 
import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
 
function App (props) {
  const [dataUri, setDataUri] = useState('');
 
  function handleTakePhotoAnimationDone (dataUri) {
    console.log('Captured photo successfully');
    setDataUri(dataUri);
  }

  const isFullscreen = false;

  
  return (
    <div>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
      }
    </div>
  );
}
 
export default App;