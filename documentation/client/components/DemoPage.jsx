import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

export default class DemoPage extends React.Component {
	
	constructor(){
		super();
		this.test = this.test.bind(this);
		this.alg = "$p";
	}

	test(){
		console.log("test");
	}

	render(){
		return(
				<div>
					<RecognitionCanvas recognitionAlgorithm={this.alg} 
					recognitionTime={40} 
					recognitionListener={this.test}
					undoListener={this.test} 
					redoListener={this.test} 
					clearCanvasListener={this.test}
					width="100%"
					height="100%"
					beautification={true}
					disabledGestures={this.test}
					enabledGestures={this.test}
					addGestures={new Array()}/>
				</div>
			);
		
	}
}

