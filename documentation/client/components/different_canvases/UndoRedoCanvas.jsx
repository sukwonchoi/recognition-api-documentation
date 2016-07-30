import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

export default class UndoRedoCanvas extends React.Component {
	
	constructor(){
		super();
		this.test = this.test.bind(this);
		this.recognitionCallback = this.recognitionCallback.bind(this);
		this.undo = this.undo.bind(this);
		this.undoCallback = this.undoCallback.bind(this);


		this.state = {
			recognitionAlgorithm: "$p",
      disabledGestures: ["Vertical Line", "Horizontal Line"],
      enabledGestures: ["X", "O"],
      recognitionAlgorithm: "$p",
      undo: false,
      clearRecognitionCanvas: false,
  	};
	}

	recognitionCallback(gesture){  
    console.log("recognition callback ");
    console.log(gesture);
  }

	undo(){

    this.setState({ undo: true });
  }

  undoCallback(gesture){
		this.setState({ undo: false });
    console.log("undid gesture: " + gesture.shape);
  }

	test(){
	}

	render(){

		const divStyle = {
	      border: '1px solid black',
    	};


		return(
				<div>
					<div style={divStyle}>
						<RecognitionCanvas recognitionAlgorithm={this.state.recognitionAlgorithm} 
							recognitionTime={600} 
							recognitionListener={this.recognitionCallback}
							undo={this.state.undo}
							undoListener={this.undoCallback} 
							redoListener={this.test} 
							clearCanvasListener={this.test}
							width= {screen.width * 0.8}
							height= {screen.height * 0.5}
							beautification={false}
							disabledGestures={this.state.disabledGestures}
							enabledGestures={this.state.enabledGestures}
						/>
					<button onClick={ this.undo }>Undo</button>
					</div>
				</div>
			);
		
	}
}

