import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class UndoRedoCanvas extends React.Component {
	
	constructor(){
		super();
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
	undo(){
    	this.setState({ undo: true });
  	}

	redo(){
    	this.setState({ redo: true });
  	} 

	redoCallback(gesture){
		this.setState({ redo: false });
  	}

 	undoCallback(gesture){
		this.setState({ undo: false });
  	}

	render(){

		const divStyle = {
	      border: '1px solid black',
    	};
    	const canvasStyle = {

    	};

		return(
				<div style={divStyle}>
					<RecognitionCanvas
						recognitionUsingTimeout={false}
						doUndo={this.state.undo}
						doRedo={this.state.redo}
						undoHandler={this.undoCallback} 
						redoHandler={this.redoCallback}
						width= {900}
						height= {String(screen.height * 0.5)}
						beautification={false}
						enabledGestures={this.state.enabledGestures}
						style={canvasStyle}
					/>
					<ButtonToolbar>
						<Button onClick={ this.undo }>Undo</Button>
						<Button onClick={ this.redo }>Redo</Button>
					</ButtonToolbar>
				</div>
			);
		
	}
}

