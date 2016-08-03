import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class UndoRedoCanvas extends React.Component {
	
	constructor(){
		super();
		this.recognitionCallback = this.recognitionCallback.bind(this);
		this.undo = this.undo.bind(this);
		this.undoCallback = this.undoCallback.bind(this);
		this.redo = this.redo.bind(this);
		this.redoCallback = this.redoCallback.bind(this);


		this.state = {
      		enabledGestures: ["X", "O"],
      		undo: false,
      		redo: false,
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

	render(){

		const divStyle = {
	      border: '1px solid black',
    	};


		return(
				<div>
					<div style={divStyle}>
						<RecognitionCanvas 
							recognitionTime={0} 
							doUndo={this.state.undo}
							doRedo={this.state.redo}
							undoHandler={this.undoCallback} 
							redoHandler={this.redoCallback}
							recognitionHandler={this.recognitionCallback}
							width= {String(screen.width * 0.8)}
							height= {String(screen.height * 0.5)}
							beautification={false}
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

