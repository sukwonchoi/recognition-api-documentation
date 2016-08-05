import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas';
import Codemirror from 'react-codemirror';
import { Accordion, Panel, PageHeader, FormGroup, Checkbox, Nav, SubNav, NavItem } from 'react-bootstrap';
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
			code :
				`
import React, { Component } from 'react';
import RecognitionCanvas from 'recognition-canvas'
export default class UndoRedoCanvas extends React.Component {

}`,
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
			undoredo: "#undoredo",
			beautification: "#beautification",
			recognition: "#recognition",
			color: "#color",
			selection: "#selection",
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
  	console.log("asdf")
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
		
		// <UndoRedoCanvas />
		// <NormalDrawingCanvas />
		// <ColorCanvas />
		//<NormalDrawingCanvas inline/>



		return(
				<div>
					<PageHeader title="Demo"/>
					<div ref="main" className="container bs-docs-container">
						<div className="row">
							<div className="col-md-10" role="main">
								{this.renderScrollSpy(this.sections.undoredo)}
								<Panel header="Undo and Redo" eventKey="1">
									<UndoRedoCanvas />
									<Codemirror value={this.state.code} onChange={this.updateCode} options={options} ref="cm"/>
								</Panel>

								{this.renderScrollSpy(this.sections.beautification)}
								<Panel header="Beautification" eventKey="2">
									<BeautificationCanvas />
									<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
								</Panel>

								{this.renderScrollSpy(this.sections.recognition)}
								<Panel header="Recognition" eventKey="3">
									<RecognitionOnlyCanvas />
									<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
								</Panel>

								{this.renderScrollSpy(this.sections.color)}
								<Panel header="Color" eventKey="4">
									<ColorCanvas />
									<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
								</Panel>

								{this.renderScrollSpy(this.sections.selection)}
								<Panel header="Selection" eventKey="5">
								
									<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
								</Panel>
								<h3>Props</h3>
								<ApiList />
							</div>
							<div className="col-md-2 bs-docs-sidebar-holder">
								<AutoAffix viewportOffsetTop={15} container={this.getMain}>
									<div className="bs-docs-sidebar hidden-print" role="complementary">
										<Nav className="bs-docs-sidenav" activeHref={this.state.activeNavItemHref} onSelect={this.handleNavItemSelect}>
											<NavItem href={this.sections.undoredo}>Undo/Redo</NavItem>
											<NavItem href={this.sections.beautification}>Beautification</NavItem>
											<NavItem href={this.sections.recognition}>Recognition</NavItem>
											<NavItem href={this.sections.color}>Color</NavItem>
											<NavItem href={this.sections.selection}>Selection</NavItem>
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

