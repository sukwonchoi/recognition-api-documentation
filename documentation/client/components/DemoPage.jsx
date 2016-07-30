import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import Codemirror from 'react-codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/jsx/jsx'


import UndoRedoCanvas from './different_canvases/UndoRedoCanvas.jsx'
import NormalDrawingCanvas from './different_canvases/NormalDrawingCanvas.jsx'
import ColorCanvas from './different_canvases/ColorCanvas.jsx'
import RecognitionOnlyCanvas from './different_canvases/RecognitionOnlyCanvas.jsx'
import BeautificationCanvas from './different_canvases/BeautificationCanvas.jsx'

export default class DemoPage extends React.Component {
	
	constructor(){
		super();
		this.state = {
			code :
				"import React, { Component } from 'react'; \n" +
				"import RecognitionCanvas from 'recognition-canvas';\n" +
				"export default class UndoRedoCanvas extends React.Component { \n\n" +
				"}"
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

		return(
				<div>
					<div>
						<h1>Undo and Redo</h1>
						<UndoRedoCanvas />
						<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
					</div>
				</div>
			);
		
	}
}

