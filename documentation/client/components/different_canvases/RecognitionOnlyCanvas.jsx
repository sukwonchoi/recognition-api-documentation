import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class RecognitionOnlyCanvas extends React.Component {
	
	constructor(){
		super();

		this.test = this.test.bind(this);
		this.recognitionHandler = this.recognitionHandler.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);
		this.clearCanvasCallback = this.clearCanvasCallback.bind(this);
		this.recognize = this.recognize.bind(this);
		this.recognitionHandler = this.recognitionHandler.bind(this);

		this.state = {
			recognize: false,
      disabledGestures: ["Vertical Line", "Horizontal Line"],
      enabledGestures: ["X", "O"],
      clearRecognitionCanvas: false,
  	};
	}

	recognize(){
		this.setState({
			recognize: true,
		});
	}

  recognitionHandler(gesture){
    console.log(gesture);

    this.setState({
    	recognize: false,
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

	test(){
		console.log("test");
	}

	render(){

		const divStyle = {
	      border: '1px solid black',
    	};

	    // recognitionAlgorithm: 	React.PropTypes.string,
	    // recognitionTime: 		React.PropTypes.number,
	    // recognitionUsingTimeout:React.PropTypes.bool,

	    // //Handlers
	    // undoHandler: 			React.PropTypes.func,
	    // redoHandler: 			React.PropTypes.func,
	    // recognitionHandler: 	React.PropTypes.func,
	    // actionHandler:			React.PropTypes.func,
	    
	    // //Width and height of the canvas
	    // width: 					React.PropTypes.string.isRequired,
	    // height: 				React.PropTypes.string.isRequired,
	    // style:					React.PropTypes.any,

	    // //Other settings
	    // beautification: 		React.PropTypes.bool,
	    // color: 					React.PropTypes.string,
	    // disabledGestures: 		React.PropTypes.arrayOf(React.PropTypes.string),
	    // enabledGestures: 		React.PropTypes.arrayOf(React.PropTypes.string),

	    // //Action triggers
	    // doUndo:					React.PropTypes.bool,
	    // doRedo:					React.PropTypes.bool,
	    // doClearCanvas:			React.PropTypes.bool,
	    // doRecognition:			React.PropTypes.bool,
	    // doRetrieveGestures:		React.PropTypes.bool


		return(
				<div>
					<div style={divStyle}>
						<RecognitionCanvas
							width={String(screen.width * 0.8)}
							height={String(screen.height * 0.5)}
							doRecognition={this.state.recognize}
							doClearCanvas={this.state.clearRecognitionCanvas}
							clearCanvasHandler={this.clearCanvasCallback}
							recognitionHandler={this.recognitionHandler}
							recognitionUsingTimeout={false}
							disabledGestures={this.state.disabledGestures}
							enabledGestures={this.state.enabledGestures}
						/>

						<ButtonToolbar>
							<Button onClick={ this.recognize }>Recognize</Button>
							<Button onClick={ this.clearCanvas }>Clear Canvas</Button>
						</ButtonToolbar>
					</div>
				</div>
			);
		
	}
}

