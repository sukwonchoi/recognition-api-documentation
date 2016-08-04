import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar, FormGroup, Checkbox } from 'react-bootstrap'

export default class NormalDrawingCanvas extends React.Component {
	
	constructor(){
		super();
		this.recognitionCallback = this.recognitionCallback.bind(this);
	
		this.state = {
	      enabledGestures: ["X", "O"],
	  	};
	}

	recognitionCallback(gesture){
		var element = document.elementFromPoint(gesture.centreX, gesture.centreY);
		console.log(element);
	}

	render(){

		const outerDivStyle = {
		  width: "800px",
	      height: "600px",
	      margin: "20px 60px",
	      border: "1px solid blue",
		}

		const divStyle = {
	      width: "100%",
	      height: "100%",
    	};

    	const canvasStyle = {
	      "background-color": "rgba(255, 0, 0, .1)",
	      "position" : "absolute",
	      "z-index": 9999
    	};

    	const formgroupStyle = {
    		'position' : "absolute",
    		"margin-left" : "150px"

    	}


		return(
				<div style={outerDivStyle}>
					<div style={divStyle}>
						<RecognitionCanvas 
							recognitionTime={600} 
							recognitionHandler={this.recognitionCallback}
							width= {"800"}
							height= {"600"}
							beautification={true}
							enabledGestures={this.state.enabledGestures}
							style={canvasStyle}
						/>
						<FormGroup style={formgroupStyle}>
					      <Checkbox>
					        1
					      </Checkbox>
					      {'\n\n'}
					      <Checkbox>
					        2
					      </Checkbox>
					      {'\n\n'}
					      <Checkbox>
					        3
					      </Checkbox>
					    </FormGroup>
					</div>
				</div>
			);
		
	}
}

