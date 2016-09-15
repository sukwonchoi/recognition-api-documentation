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
		toastr.info('Canvas Cleared');
		this.setState({
			clearRecognitionCanvas: false,
		});
	 }
	recognitionCallback(gesture){
		toastr.success('Beautified gesture: ' + gesture.shape);
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
							doClearCanvas={this.state.clearRecognitionCanvas}
							clearCanvasHandler={this.clearCanvasCallback}
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

