import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';
import Codemirror from 'react-codemirror';
import { Accordion, Panel, FormGroup, Checkbox } from 'react-bootstrap';
import ApiList from './ApiList.jsx';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/theme/zenburn.css';

import UndoRedoCanvas from './different_canvases/UndoRedoCanvas.jsx';
import NormalDrawingCanvas from './different_canvases/NormalDrawingCanvas.jsx';
import ColorCanvas from './different_canvases/ColorCanvas.jsx';
import BeautificationCanvas from './different_canvases/BeautificationCanvas.jsx';
import RecognitionOnlyCanvas from './different_canvases/RecognitionOnlyCanvas.jsx';

export default class DemoPage extends React.Component {
	
	constructor(){
		super();
		this.state = {
			code :
				`
import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas'
export default class UndoRedoCanvas extends React.Component {

}`,
		}

		this.updateCode = this.updateCode.bind(this);
	}

	updateCode(newCode){
		console.log(newCode);
	}

	render(){

		const undoRedoCanvasCode = "";
		const normalDrawingCanvas = "";
		const colorCanvas = "";
		const recognitionOnlyCanvas = "";
		const beautificationCanvas = "";	
		
		var options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: "javascript"
		}
		
		// <UndoRedoCanvas />
		// <NormalDrawingCanvas />
		// <ColorCanvas />
		//<NormalDrawingCanvas inline/>
		return(
				<div>
					<Panel header="Undo and Redo" eventKey="1">
					 	<UndoRedoCanvas />
						<Codemirror value={this.state.code} onChange={this.updateCode} options={options} ref="cm"/>
					</Panel>
					<Panel header="Beautification" eventKey="2">
						<BeautificationCanvas />
					 	<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
					</Panel>
					<Panel header="Recognition" eventKey="3">
					   	<RecognitionOnlyCanvas />
						<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
					</Panel>
					<Panel header="Color" eventKey="4">
					   	<ColorCanvas />
						<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
					</Panel>
					<Panel header="Selection" eventKey="5">
						
						<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
					</Panel>
					<h3>Props</h3>
					<ApiList />
				</div>
			);
		
	}
}

