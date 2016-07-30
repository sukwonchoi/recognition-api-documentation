import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

export default class NormalDrawingCanvas extends React.Component {
	
	constructor(){
		super();
		this.test = this.test.bind(this);
		this.alg = "$p";
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
						<RecognitionCanvas recognitionAlgorithm={this.alg} 
							recognitionTime={1000} 
							recognitionListener={this.test}
							undoListener={this.test} 
							redoListener={this.test} 
							clearCanvasListener={this.test}
							addGestureListener={this.test}
							width= {String(screen.width * 0.8)}
							height= {String(screen.height * 0.5)}
							beautification={false}
							disabledGestures={[""]}
							enabledGestures={[""]}
						/>
					</div>
				</div>
			);
		
	}
}

