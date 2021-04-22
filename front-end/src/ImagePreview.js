import React from 'react';
import PropTypes from 'prop-types';

import './imagePreview.css';

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';
{/*  function submitPhoto() {
    const url = "http://127.0.0.1:5000/upload";
    var t0 = performance.now();
    const request = axios.post(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            img: dataUri
        })
       
    }).catch(error => {
      console.warn(error);
    });
    console.log("captured image sent to backend successfully");
    
    
 .then(function(response, data) {
      data = response.data;
      var t1 = performance.now();
      console.log(data);
      console.log("The time it took to predict the image " + (t1 - t0) + " milliseconds.")
    }); */}
  
 

  return (
    <div className={'demo-image-preview ' + classNameFullscreen}>
      <img src={dataUri} />

      <h1 className="photocap">
          Photo Captured Successfully 
      </h1>

       {/* <button onClick={submitPhoto} className="btnPred">predict</button> */}
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;