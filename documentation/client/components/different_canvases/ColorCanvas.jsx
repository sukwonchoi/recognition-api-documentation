import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';
import { Button, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

export default class ColorCanvas extends React.Component {
	
	constructor(){
		super();

		this.state = {
		    color: "#000000",
		    clearRecognitionCanvas: false,
		};

		this.handleSelect = this.handleSelect.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);
		this.clearCanvasCallback = this.clearCanvasCallback.bind(this);
	}

	handleSelect(eventKey, event){
		this.setState({
			color: eventKey,
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
							color={this.state.color}
							recognitionUsingTimeout={false}
							doClearCanvas={this.state.clearRecognitionCanvas}
							clearCanvasHandler={this.clearCanvasCallback}
						/>
						
						<ButtonToolbar>	
							<DropdownButton bsStyle={"default"} title={"Color"} onSelect={this.handleSelect}>
						      <MenuItem eventKey="#000000">Black</MenuItem>
						      <MenuItem eventKey="#3e65f2">Blue</MenuItem>
						      <MenuItem eventKey="#ea3434">Red</MenuItem>
						      <MenuItem eventKey="#f2eb3e">Yellow</MenuItem>
						    </DropdownButton>
							<Button onClick={ this.clearCanvas }>Clear Canvas</Button>
						</ButtonToolbar>
					</div>
				</div>
			);
		
	}
}



