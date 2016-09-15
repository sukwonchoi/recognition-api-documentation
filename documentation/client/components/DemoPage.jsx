import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';
import Codemirror from 'react-codemirror';
import Anchor from './Anchor.jsx';
import { Accordion, Collapse, Button, Panel, PageHeader, FormGroup, Checkbox, Nav, Row, SubNav, NavItem } from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';
import ApiList from './ApiList.jsx';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/theme/zenburn.css';

import Waypoint from 'react-waypoint';

import UndoRedoCanvas from './different_canvases/UndoRedoCanvas.jsx';
import NormalDrawingCanvas from './different_canvases/NormalDrawingCanvas.jsx';
import ColorCanvas from './different_canvases/ColorCanvas.jsx';
import BeautificationCanvas from './different_canvases/BeautificationCanvas.jsx';
import RecognitionOnlyCanvas from './different_canvases/RecognitionOnlyCanvas.jsx';

export default class DemoPage extends React.Component {

	constructor(){
		super();
		this.state = {
			activeNavItemHref: null,
			colorOpen: true,
			recognitionOpen: true,
			undoOpen: true,
			beautificationOpen: true,
			codeColor :
`
import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

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
							className=""
						/>
						
						--Some sort of input to change the color--
					</div>
				</div>
			);
		
	}
}
`,
			codeRecognition :
`
import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class RecognitionOnlyCanvas extends React.Component {
	
	constructor(){
		super();

		this.recognitionHandler = this.recognitionHandler.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);
		this.clearCanvasCallback = this.clearCanvasCallback.bind(this);
		this.recognize = this.recognize.bind(this);
		this.recognitionHandler = this.recognitionHandler.bind(this);

		this.state = {
				recognize: false,
	     		enabledGestures: ["X", "O", "Vertical Line", "Horizontal Line"],
	      		clearRecognitionCanvas: false,
	  		};
	}

	recognize(){
		this.setState({
			recognize: true,
		});
	}

	recognitionHandler(gesture){
		window.alert(gesture);
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


	render(){
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
							enabledGestures={this.state.enabledGestures}
						/>
						
					</div>
				</div>
			);
			
	}
}


`,
			codeUndoRedo : 

`
import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class UndoRedoCanvas extends React.Component {
	
	constructor(){
		super();
		this.undo = this.undo.bind(this);
		this.undoCallback = this.undoCallback.bind(this);
		this.redo = this.redo.bind(this);
		this.redoCallback = this.redoCallback.bind(this);


		this.state = {
      		enabledGestures: ["X", "O"],
      		undo: false,
      		redo: false,
  		};
	}
	undo(){
    	this.setState({ undo: true });
  	}

	redo(){
    	this.setState({ redo: true });
  	} 

	redoCallback(gesture){
		this.setState({ redo: false });
  	}

 	undoCallback(gesture){
		this.setState({ undo: false });
  	}

	render(){

		const divStyle = {
	      border: '1px solid black',
    	};
    	const canvasStyle = {

    	};

		return(
				<div style={divStyle}>
					<RecognitionCanvas
						recognitionUsingTimeout={false}
						doUndo={this.state.undo}
						doRedo={this.state.redo}
						undoHandler={this.undoCallback} 
						redoHandler={this.redoCallback}
						width= {900}
						height= {String(screen.height * 0.5)}
						beautification={false}
						enabledGestures={this.state.enabledGestures}
						style={canvasStyle}
					/>
					<ButtonToolbar>
						<Button onClick={ this.undo }>Undo</Button>
						<Button onClick={ this.redo }>Redo</Button>
					</ButtonToolbar>
				</div>
			);
		
	}
}
`,
			codeBeautification :
`
import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';

import { Button, ButtonToolbar } from 'react-bootstrap'

export default class BeautificationCanvas extends React.Component {
	
	constructor(){
		super();

		this.recognitionCallback = this.recognitionCallback.bind(this);
	
		this.state = {
	      enabledGestures: ["X", "O", "Vertical Line", "Horizontal Line"],
	  	};
	}

	recognitionCallback(gesture){
		console.log(gesture.shape);
	}

	render(){

		const divStyle = {
	      border: '2px solid black',
    	};

		return(
				<div>
					<div style={divStyle}>
						<RecognitionCanvas 
							recognitionTime={600} 
							recognitionHandler={this.recognitionCallback}
							width= {String(screen.width * 0.8)}
							height= {String(screen.height * 0.5)}
							beautification={true}
							enabledGestures={this.state.enabledGestures}
						/>
					</div>
				</div>
			);
		
	}
}
`,
		}

		this.updateCode = this.updateCode.bind(this);

		this.getMain = this.getMain.bind(this);
		this.handleNavItemSelect = this.handleNavItemSelect.bind(this);


		this.handleNavItemSelect = this.handleNavItemSelect.bind(this);
		this.updateActiveHref = this.updateActiveHref.bind(this);
		this.onBefore = this.onBefore.bind(this);
		this.onAfter = this.onAfter.bind(this);
		this.setActiveNavItem = this.setActiveNavItem.bind(this);

		this.sections = {
			color: "#color",
			recognition: "#recognition",
			undoredo: "#undoredo",
			beautification: "#beautification",
			props: "#props",
		}

	}
	handleArrowClick(event){
		var source = event.target || event.srcElement;
		window.source = source;
		console.log(source);
		var icon = source.getElementsByClassName("collapsible-icon")[0].getElementsByClassName("glyphicon")[0];
		var iconClass = icon.className;
		if (iconClass.includes("glyphicon-minus")) {
			icon.className = "glyphicon glyphicon-plus";
		} else {
			icon.className = "glyphicon glyphicon-minus";
		}
	}
	getMain(){
		return this.refs.Main;
	}

  updateActiveHref() {
  	if(this.updateActiveHrefHandle != null){
  		return;
  	}
  	this.updateActiveHrefHandle = setTimeout(() => {
  		this.updateActiveHrefHandle = null;
  		this.setActiveNavItem();
  	});
  }
  componentDidMount() {
    this.afterSections = {};
    Object.keys(this.sections).forEach(
      key => this.afterSections[this.sections[key]] = false
    );
    window.afterSections = this.afterSections;
    const { hash } = window.location;
    if (this.afterSections[hash] !== undefined) {
      for (const href of Object.keys(this.afterSections)) {
        this.afterSections[href] = true;

        if (href === hash) {
          this.setActiveNavItem();
          break;
        }
      }
    }
  }

	handleNavItemSelect(key, e){
		window.location = e.target.href;
	}
  onBefore(href) {
  	console.log(href);
    this.afterSections[href] = false;
    this.updateActiveHref();
  }

  onAfter(href) {
  	console.log(href);
    this.afterSections[href] = true;
    this.updateActiveHref();
  }



  setActiveNavItem() {
    let activeNavItemHref = null;

    for (const href of Object.keys(this.afterSections)) {
      if (!this.afterSections[href]) {
        break;
      }

      activeNavItemHref = href;
    }
    console.log("set active nav item: " + activeNavItemHref);
    this.setState({ activeNavItemHref });
  }
	
	//
	renderScrollSpy(href){
		let ScrollSpy = ({ href, onBefore, onAfter }) => (
			<Waypoint
				onEnter={({ previousPosition }) => (
					previousPosition === Waypoint.above && onBefore(href)
				)}
				onLeave={({ currentPosition }) => (
						currentPosition === Waypoint.above && onAfter(href)
				)}
				topOffset={10}
				bottomOffset={10}
				/>
			);

		return(
			<ScrollSpy 
				href={href}
				onBefore={this.onBefore}
				onAfter={this.onAfter}
			/>
		);
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
					<PageHeader title="Demo"/>

											
					<div ref="main" className="container">
							<div className="collapsible-icon"></div>
							<i className="fa fa-minus"></i>
						<div className="row">
							<div className="col-md-10" role="main">
								
								{this.renderScrollSpy(this.sections.color)}
								<div className="bs-docs-section">
									<h2 className="page-header">
										<Anchor id="color">Color</Anchor>
									</h2>
									<ColorCanvas />
									<div className="collapsible-content">
										<Button className="collapsible-header" onClick={ (e) => { console.log("sweg"); this.setState({colorOpen: !this.state.colorOpen }); this.handleArrowClick(e)}}>
											
											<div className="collapsible-icon">Code</div>
										</Button>
										<Collapse in={this.state.colorOpen}>
											<div>
												<Row>
													<Codemirror value={this.state.codeColor} onChange={this.updateCode} options={options} />
												</Row>
											</div>
										</Collapse>
									</div>
								</div>
								{this.renderScrollSpy(this.sections.recognition)}
								<div className="bs-docs-section">
									<h2 className="page-header">
										<Anchor id="recognition">Recognition</Anchor>
									</h2>
									<RecognitionOnlyCanvas />
									<div className="collapsible-content">
										<Button className="collapsible-header" onClick={ (e) => { this.setState({recognitionOpen: !this.state.recognitionOpen }); this.handleArrowClick(e)}}>
											
											<div className="collapsible-icon">Code</div>
										</Button>
										<Collapse in={this.state.recognitionOpen}>
											<div>
												<Row>
													<Codemirror value={this.state.codeUndoRedo} onChange={this.updateCode} options={options} />
												</Row>
											</div>
										</Collapse>
									</div>
								</div>

								{this.renderScrollSpy(this.sections.undoredo)}
								<div className="bs-docs-section">
									<h2 className="page-header">
										<Anchor id="undoredo">Undo Redo</Anchor>
									</h2>
									<UndoRedoCanvas />
									<div className="collapsible-content">
										<Button className="collapsible-header" onClick={ (e) => { this.setState({undoOpen: !this.state.undoOpen }); this.handleArrowClick(e)}}>
											
											<div className="collapsible-icon">Code</div>
										</Button>
										<Collapse in={this.state.undoOpen}>
											<div>
												<Row>
													<Codemirror value={this.state.codeUndoRedo} onChange={this.updateCode} options={options} />
												</Row>
											</div>
										</Collapse>
									</div>
								</div>

								{this.renderScrollSpy(this.sections.beautification)}
								<div className="bs-docs-section">
									<h2 className="page-header">
										<Anchor id="beautification">Beautification</Anchor>
									</h2>
									<BeautificationCanvas />
									<div className="collapsible-content">
										<Button className="collapsible-header" onClick={ (e) => { this.setState({beautificationOpen: !this.state.beautificationOpen }); this.handleArrowClick(e)}}>
											
											<div className="collapsible-icon">Code</div>
										</Button>
										<Collapse in={this.state.beautificationOpen}>
											<div>
												<Row>
													<Codemirror value={this.state.codeBeautification} onChange={this.updateCode} options={options} />
												</Row>
											</div>
										</Collapse>
									</div>
								</div>

								{this.renderScrollSpy(this.sections.props)}
								<div className="bs-docs-section">
									<h2 className="page-header">
										<Anchor id="props">Props</Anchor>
									</h2>
									<ApiList />
								</div>
							</div>
							<div className="col-md-2 bs-docs-sidebar-holder">
								<AutoAffix viewportOffsetTop={15} container={this.getMain}>
									<div className="bs-docs-sidebar hidden-print" role="complementary">
										<Nav className="bs-docs-sidenav" activeHref={this.state.activeNavItemHref} onSelect={this.handleNavItemSelect}>
											<NavItem href={this.sections.color}>Color</NavItem>
											<NavItem href={this.sections.recognition}>Recognition</NavItem>
											<NavItem href={this.sections.undoredo}>Undo/Redo</NavItem>
											<NavItem href={this.sections.beautification}>Beautification</NavItem>
											<NavItem href={this.sections.props}>Props</NavItem>
										</Nav>
										<a className="back-to-top" href="#top">Back to top</a>
									</div>
								</AutoAffix>
							</div>
						</div>
					</div>
				</div>
			);
		
	}
}