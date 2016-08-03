import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class RecognitionOnlyCanvas extends React.Component {
	
	constructor(){
		super();

		this.recognitionHandler = this.recognitionHandler.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);
		this.clearCanvasCallback = this.clearCanvasCallback.bind(this);
		this.recognize = this.recognize.bind(this);
		this.recognitionHandler = this.recognitionHandler.bind(this);

		this.state = {
				recognize: false,
	     		enabledGestures: ["X", "O", "Vertical Line", "Horizontal Line"],
	      		clearRecognitionCanvas: false,
	  		};
	}

	recognize(){
		this.setState({
			recognize: true,
		});
	}

	recognitionHandler(gesture){
		this.setState({
	    	recognize: false,
	    });
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


	render(){

		const divStyle = {
	      border: '1px solid black',
	   	};

		return(
				<div>
					<div style={divStyle}>
						<RecognitionCanvas
							width={String(screen.width * 0.8)}
							height={String(screen.height * 0.5)}
							doRecognition={this.state.recognize}
							doClearCanvas={this.state.clearRecognitionCanvas}
							clearCanvasHandler={this.clearCanvasCallback}
							recognitionHandler={this.recognitionHandler}
							recognitionUsingTimeout={false}
							enabledGestures={this.state.enabledGestures}
						/>
						<ButtonToolbar>
							<Button onClick={ this.recognize }>Recognize</Button>
							<Button onClick={ this.clearCanvas }>Clear Canvas</Button>
						</ButtonToolbar>
					</div>
				</div>
			);
			
	}
}

