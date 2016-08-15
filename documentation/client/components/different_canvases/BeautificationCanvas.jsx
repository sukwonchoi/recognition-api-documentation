import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class BeautificationCanvas extends React.Component {
	
	constructor(){
		super();

		this.recognitionCallback = this.recognitionCallback.bind(this);
	
		this.state = {
	      enabledGestures: ["X", "O", "Vertical Line", "Horizontal Line"],
	  	};
	}

	recognitionCallback(gesture){
		console.log(gesture.shape);
	}

	render(){

		const divStyle = {
	      border: '1px solid black',
    	};

		return(
				<div>
					<div style={divStyle}>
						<RecognitionCanvas 
							recognitionTime={600} 
							recognitionHandler={this.recognitionCallback}
							width= {String(screen.width * 0.8)}
							height= {String(screen.height * 0.5)}
							beautification={true}
							enabledGestures={this.state.enabledGestures}
						/>
					</div>
				</div>
			);
		
	}
}

