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
		toastr.info('Canvas Cleared');
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
			position: 'relative',
	      	border: '1px solid black',
    	};

		return(
				<div>
					<div>
						<RecognitionCanvas
							width={900}
							height={400}
							color={this.state.color}
							recognitionUsingTimeout={false}
							doClearCanvas={this.state.clearRecognitionCanvas}
							clearCanvasHandler={this.clearCanvasCallback}
							style={divStyle}
							className=""
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



