import React, { Component } from 'react';
import axios from 'axios';
import './Upload.css';

export class UploadPic extends Component {
	// Constructor
	constructor() {
		super()
		this.state = {
		  previewImageUrl: false,
		  imageHeight: 200,
		  imagePrediction: "",
		}
		this.generatePreviewImageUrl = this.generatePreviewImageUrl.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.uploadHandler = this.uploadHandler.bind(this)
	  }
	
		// Function for previewing the chosen image
		generatePreviewImageUrl(file, callback) {
		  const reader = new FileReader()
		  const url = reader.readAsDataURL(file)
		  reader.onloadend = e => callback(reader.result)
		}
	
		// Event handler when image is chosen
		handleChange(event) {
		  const file = event.target.files[0]
		  
		  // If the image upload is cancelled
		  if (!file) {
			return
		  }
	
		  this.setState({imageFile: file})
		  this.generatePreviewImageUrl(file, previewImageUrl => {
				this.setState({
				  previewImageUrl,
				  imagePrediction:""
				})
			  })
		}
	
		// Function for sending image to the backend
		uploadHandler(e) {
		var self = this;
		const formData = new FormData()
		formData.append('file', this.state.imageFile, 'img.png')
		
		var t0 = performance.now();
		axios.post('http://127.0.0.1:5000/upload', formData)
		.then(function(response, data) {
				data = response.data;
				self.setState({imagePrediction:data})
				var t1 = performance.now();
				console.log("The time it took to predict the image " + (t1 - t0) + " milliseconds.")
			})
		}


	render() {
		return (
			<div className="WholePage">
				<div className="container2">
					<h1 className="UploadImage">Upload your Image</h1>
					
					
					{/* Button for choosing an image */}
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.handleChange} />
					<div className="label">
						<form id="upload-file" method="post" encType="multipart/form-data">
						<label className="image-upload" htmlFor="input">
							<i className="material-icons"></i>
							Choose your Photo
						</label>
						</form>
					</div>


					{/* Field for previewing the chosen image */}
					<div>
						{ this.state.previewImageUrl &&
						<img height={this.state.imageHeight} alt="" className="image" src={this.state.previewImageUrl} /> 
						}
						
					</div>

					{/* Button for sending image to backend */}
					<div>
						<button onClick={this.uploadHandler} id="btn-predict">Predict</button>
						
					</div>
					

					<div className="prediction">
          				{ this.state.imagePrediction &&
            				<p>The model predicted: {this.state.imagePrediction} </p>
          				}
          			</div>
				</div>
			</div>
		);
	}
}

export default UploadPic;