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

	  this.clearCanvas = this.clearCanvas.bind(this);
	  this.clearCanvasCallback = this.clearCanvasCallback.bind(this);
	}

	clearCanvas(){
		this.setState({
			clearRecognitionCanvas: true,
		});
	}
	
	clearCanvasCallback(){
		this.setState({
			clearRecognitionCanvas: false,
		});
	 }
	recognitionCallback(gesture){
		console.log(gesture.shape);
	}

	render(){

		const divStyle = {
	      border: '2px solid black',
    	};

		return(
				<div>
					<div style={divStyle}>
						<RecognitionCanvas 
							recognitionTime={600} 
							recognitionHandler={this.recognitionCallback}
							doClearCanvas={this.state.clearRecognitionCanvas}
							width= {String(screen.width * 0.8)}
							height= {String(screen.height * 0.5)}
							beautification={true}
							enabledGestures={this.state.enabledGestures}
						/>
						<ButtonToolbar>
							<Button onClick={ this.clearCanvas }>Clear Canvas</Button>
						</ButtonToolbar>
					</div>
				</div>
			);
		
	}
}

