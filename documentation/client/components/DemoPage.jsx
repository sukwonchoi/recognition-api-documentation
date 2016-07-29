import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import UndoRedoCanvas from './different_canvases/UndoRedoCanvas.jsx'
import NormalDrawingCanvas from './different_canvases/NormalDrawingCanvas.jsx'
import ColorCanvas from './different_canvases/ColorCanvas.jsx'
import RecognitionOnlyCanvas from './different_canvases/RecognitionOnlyCanvas.jsx'
import BeautificationCanvas from './different_canvases/BeautificationCanvas.jsx'

export default class DemoPage extends React.Component {
	
	constructor(){
		super();
	}

	render(){
		return(
				<div>
					<UndoRedoCanvas />
					<NormalDrawingCanvas />
					<ColorCanvas />
					<RecognitionOnlyCanvas />
					<BeautificationCanvas />
				</div>
			);
		
	}
}

