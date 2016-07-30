import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

export default class RecognitionOnlyCanvas extends React.Component {
	
	constructor(){
		super();
		this.test = this.test.bind(this);
		this.recognitionCallback = this.recognitionCallback.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);
		this.clearCanvasCallback = this.clearCanvasCallback.bind(this);

		this.state = {
			recognitionAlgorithm: "$p",
      disabledGestures: ["Vertical Line", "Horizontal Line"],
      enabledGestures: ["X", "O"],
      recognitionAlgorithm: "$p",
      clearRecognitionCanvas: false,
  	};
	}

  recognitionCallback(gesture){
    
    console.log("recognition callback ");
    console.log(gesture);
    this.clearCanvas();

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
							undoListener={this.test} 
							redoListener={this.test}
							addGestureListener={this.test}
							clearCanvas={this.state.clearRecognitionCanvas}
							clearCanvasListener={this.clearCanvasCallback}
							width= {String(screen.width * 0.8)}
							height= {String(screen.height * 0.5)}
							beautification={false}
							disabledGestures={this.state.disabledGestures}
							enabledGestures={this.state.enabledGestures}
						/>
					<button onClick={ this.recognitionCallback }> Recognize</button>
					</div>
				</div>
			);
		
	}
}

