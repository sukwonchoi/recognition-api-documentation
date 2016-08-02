import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class UndoRedoCanvas extends React.Component {
	
	constructor(){
		super();
		this.test = this.test.bind(this);
		this.recognitionCallback = this.recognitionCallback.bind(this);
		this.undo = this.undo.bind(this);
		this.undoCallback = this.undoCallback.bind(this);
		this.redo = this.redo.bind(this);
		this.redoCallback = this.redoCallback.bind(this);


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

	recognitionCallback(gesture){  
    console.log("recognition callback ");
    console.log(gesture);
  }

	undo(){
    this.setState({ undo: true });
  }

	redo(){
		console.log("redo");
    this.setState({ redo: true });
  } 

	redoCallback(gesture){
		this.setState({ redo: false });
    console.log("redid gesture: " + gesture.shape);
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
						<ButtonToolbar>
							<Button onClick={ this.undo }>Undo</Button>
							<Button onClick={ this.redo }>Redo</Button>
						</ButtonToolbar>
					</div>
				</div>
			);
		
	}
}

