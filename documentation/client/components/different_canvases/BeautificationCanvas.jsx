import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class BeautificationCanvas extends React.Component {
	
	constructor(){
		super();
		this.test = this.test.bind(this);
		this.alg = "$p";

		this.state = {
			recognitionAlgorithm: "$p",
      disabledGestures: ["Vertical Line", "Horizontal Line"],
      enabledGestures: ["X", "O"],
      recognitionAlgorithm: "$p",
      undo: false,
      redo: false,
      clearRecognitionCanvas: false,
  	};
	}

	test(){
		console.log("test");
	}

	render(){

		const divStyle = {
	      border: '2px solid black',
    	};


		return(
				<div>
					<div style={divStyle}>
						<RecognitionCanvas recognitionAlgorithm={this.state.recognitionAlgorithm} 
							recognitionTime={600} 
							recognitionListener={this.recognitionCallback}
							undo={this.state.undo}
							redo={this.state.redo}
							undoListener={this.undoCallback} 
							redoListener={this.redoCallback} 
							clearCanvasListener={this.test}
							addGestureListener={this.test}
							width= {String(screen.width * 0.8)}
							height= {String(screen.height * 0.5)}
							beautification={false}
							disabledGestures={this.state.disabledGestures}
							enabledGestures={this.state.enabledGestures}
						/>
					</div>
				</div>
			);
		
	}
}

