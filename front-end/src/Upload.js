import React, { Component } from 'react';
import axios from 'axios';
import './Upload.css';

export class UploadPic extends Component {
	state={
		profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
	  }
	  imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () =>{
		  if(reader.readyState === 2){
			this.setState({profileImg: reader.result})
		  }
		}
		reader.readAsDataURL(e.target.files[0])
	  };


		render() {
		const { profileImg} = this.state
			return (
				<div className="WholePage">
					<div className="container2">
						<h1 className="UploadImage">Upload Your Image</h1>
						<div className="imgHolder">
							<img src={profileImg} alt="" id="img" className="image" />
						</div>
						<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
						<div className="label">
							<form id="upload-file" method="post" encType="multipart/form-data">
							<label className="image-upload" htmlFor="input">
								<i className="material-icons"></i>
								Select a Photo from gallery
							</label>
							</form>
						  </div>
						<div>
							<button type="button" class="" id="btn-predict">Predict!</button>
						</div>
						<h3 id="result">
							<span> </span>
						</h3>
					</div>
				</div>
			);
		}
	}

export default UploadPic;