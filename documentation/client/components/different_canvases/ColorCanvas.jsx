import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';
import { ChromePicker } from 'react-color'


import { Button, ButtonToolbar } from 'react-bootstrap'
export default class ColorCanvas extends React.Component {
	
	

	constructor(){
		super();

		this.state = {
      displayColorPicker: false,
      color: "#000000",
  };

		this.test = this.test.bind(this);
		this.alg = "$p";

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	test(){
		console.log("test");
	}

	handleChange(color){

		this.setState({ 
			color: color.hex,
			displayColorPicker: false
		});
	}

	handleClick() {    
		console.log("Handle close triggered");
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	};

	handleClose() {
		this.setState({ displayColorPicker: false });
	};

	render(){

		const divStyle = {
	      border: '1px solid black',
	      position: 'relative',
    	};

    const popover = {
      position: 'absolute',
      zIndex: '2',
      left: 0,
      bottom: 30,
    }
    const cover = {
      position: 'relative',
      top: 0,
      left: 0,
    }


		return(
				<div>
					<div style={divStyle}>
						<RecognitionCanvas recognitionAlgorithm={this.alg} 
							recognitionTime={1000} 
							recognitionListener={this.test}
							undoListener={this.test} 
							redoListener={this.test} 
							clearCanvasListener={this.test}
							addGestureListener={this.test}
							width= {String(screen.width * 0.8)}
							height= {String(screen.height * 0.5)}
							color={this.state.color}
							beautification={false}
							disabledGestures={[""]}
							enabledGestures={[""]}
						/>
						<Button onClick={ this.handleClick }> Pick Color</Button>
						{ this.state.displayColorPicker ? <div style={ popover }>

							<div style={ cover } onClick={ this.handleClose }/>
								<ChromePicker onChangeComplete={ this.handleChange }/>
							</div> : null }

					</div>
				</div>
			);
		
	}
}



