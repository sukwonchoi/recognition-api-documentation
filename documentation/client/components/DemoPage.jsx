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

		const undoRedoCanvasCode = "";
		const normalDrawingCanvas = "";
		const colorCanvas = "";
		const recognitionOnlyCanvas = "";
		const beautificationCanvas = "";


		return(
				<div>
					<div>
						<h1>Undo and Redo</h1>
						<UndoRedoCanvas />
						<pre>
							<code>
							{`

import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

export default class UndoRedoCanvas extends React.Component {
	
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
		<RecognitionCanvas
		  recognitionAlgorithm={this.alg}
		  recognitionTime={1000}
		  recognitionListener={this.test}
		  undoListener={this.test}
		  redoListener={this.test}
		  clearCanvasListener={this.test}
		  width= {screen.width * 0.8}
		  height= {screen.height * 0.5}
		  beautification={false}
		  disabledGestures={[""]}
		  enabledGestures={[""]}
	   />
	  </div>
    );
  }
}
			          		`}
			          		</code>
			         	</pre>
					</div>
					<div>
						<h1>Drawing</h1>
						<NormalDrawingCanvas />
						<pre>
							<code>
							{`

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
    return(
      <div>
	    <RecognitionCanvas
	      recognitionAlgorithm={this.alg}
	      recognitionTime={1000}
		  recognitionListener={this.test}
		  undoListener={this.test}
		  redoListener={this.test}
		  clearCanvasListener={this.test}
		  width= {screen.width * 0.8}
		  height= {screen.height * 0.5}
		  beautification={false}
		  disabledGestures={[""]}
		  enabledGestures={[""]}
	   />
	  </div>
    );
  }
}
			          		`}
			          		</code>
			         	</pre>
					</div>
					<div>
						<h1>Colors</h1>
						<ColorCanvas />
						<pre>
							<code>
							{`

import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

export default class ColorCanvas extends React.Component {
	
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
	    <RecognitionCanvas
	      recognitionAlgorithm={this.alg}
	      recognitionTime={1000}
		  recognitionListener={this.test}
		  undoListener={this.test}
		  redoListener={this.test}
		  clearCanvasListener={this.test}
		  width= {screen.width * 0.8}
		  height= {screen.height * 0.5}
		  beautification={false}
		  disabledGestures={[""]}
		  enabledGestures={[""]}
	   />
	  </div>
    );
  }
}
			          		`}
			          		</code>
			         	</pre>
					</div>
					<div>
						<h1>Recognition - Static</h1>
						<RecognitionOnlyCanvas />
						<pre>
							<code>
							{`

import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

export default class RecognitionOnlyCanvas extends React.Component {
	
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
	    <RecognitionCanvas
	      recognitionAlgorithm={this.alg}
	      recognitionTime={1000}
		  recognitionListener={this.test}
		  undoListener={this.test}
		  redoListener={this.test}
		  clearCanvasListener={this.test}
		  width= {screen.width * 0.8}
		  height= {screen.height * 0.5}
		  beautification={false}
		  disabledGestures={[""]}
		  enabledGestures={[""]}
	   />
	  </div>
    );
  }
}
			          		`}
			          		</code>
			         	</pre>
					</div>
					<div>
						<h1>Beautification</h1>
						<BeautificationCanvas />
						<pre>
							<code>
							{`

import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

export default class BeautificationCanvas extends React.Component {
	
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
	    <RecognitionCanvas
	      recognitionAlgorithm={this.alg}
	      recognitionTime={1000}
		  recognitionListener={this.test}
		  undoListener={this.test}
		  redoListener={this.test}
		  clearCanvasListener={this.test}
		  width= {screen.width * 0.8}
		  height= {screen.height * 0.5}
		  beautification={false}
		  disabledGestures={[""]}
		  enabledGestures={[""]}
	   />
	  </div>
    );
  }
}
			          		`}
			          		</code>
			         	</pre>
					</div>
				</div>
			);
		
	}
}

