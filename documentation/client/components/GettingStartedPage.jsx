import React, { Component } from 'react';
import { PageHeader, Well, Panel, Col, Grid, Row} from 'react-bootstrap';
import Codemirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/theme/solarized.css';

export default class GettingStartedPage extends React.Component {
	render(){
		var options = {
			lineNumbers: false,
			readOnly: true,
			mode: "javascript"
		}

		return(
				<div>
					<PageHeader title="Getting Started"/>
					<div ref="main" className="container bs-docs-container">
						<Grid>
							<Row>
								<h3>Installing</h3>
							</Row>
							<Row>
			        	<span>If you do not have npm, go here to set up at <a href="https://docs.npmjs.com/getting-started/what-is-npm">https://docs.npmjs.com/getting-started/what-is-npm</a></span>
			        	<span>. It will guide a step by step through <code>node.js</code> and <code>npm.js</code>{"\n"}</span>
								<Col md={6} >
									<Panel header="npm (recommended)">
										$ npm install recognition-canvas --save
									</Panel>
								</Col>
								<Col md={6} >
									<Panel header="bower">
										$ bower install react recognition-canvas	
									</Panel>
								</Col>
							</Row>
							<Row>
								<div className="bs-callout bs-callout-warning">
									<h4>RecognitionCanvas is a React component</h4>
									<p>Although it has seemless integration with different operating systems, it must be used with React only</p>
								</div>
							</Row>
							<Row>
								<h3>Importing</h3>
							</Row>
							<Row>
								<Col>
									<h4>CommonJS</h4>
										<pre className= "cm-s-solarized">
											<code>
												<span className="cm-keyword">var </span>
		        						<span className="cm-def">RecognitionCanvas </span>
		        						<span className="cm-variable">= require(</span>
		        						<span className="cm-keyword">'recognition-canvas/src/RecognitionCanvas'</span>
		        						<span className="cm-variable">)</span>
		        						{'\n'}
		        						<span className="cm-comment">// or</span>
		        						{'\n'}
		        						<span className="cm-keyword">var </span>
		        						<span className="cm-def">RecognitionCanvas </span>
		        						<span className="cm-variable">= require(</span>
		        						<span className="cm-keyword">'recognition-canvas'</span>
		        						<span className="cm-variable">).</span>
		        						<span className="cm-def">RecognitionCanvas </span>
										</code>
									</pre>
								</Col>
							</Row>
							<Row>
								<Col>
									<h4>ES6</h4>
										<pre className= "cm-s-solarized">
											<code>
												<span className="cm-keyword">import </span>
												<span className="cm-def">RecognitionCanvas </span>
												<span className="cm-keyword">from </span>
												<span className="cm-string">'recognition-canvas'</span>
											</code>
										</pre>
								</Col>
							</Row>
							<Row>
								<Col>
									<h4>AMD</h4>
									<pre className= "cm-s-solarized">
										<code>
											<span className="cm-variable">define([</span>
											<span className="cm-string">'recognition-canvas'</span>
											<span className="cm-variable">], </span>
											<span className="cm-keyword">function</span>
											<span className="cm-variable">(</span>
											<span className="cm-def">RecognitionCanvas</span>
											<span className="cm-variable">) {"{"} </span>
											{'\n\t'}
											<span className="cm-keyword">var </span>
											<span className="cm-def">RecognitionCanvas </span>
											<span className="cm-variable">=</span>
											<span className="cm-keyword"> RecognitionCanvas</span>
											<span className="cm-variable">.</span>
											<span className="cm-def">RecognitionCanvas</span>
											{'\n'}
											<span className="cm-variable">{"}"} </span>
										</code>
									</pre>
								</Col>
							</Row>
							<Row>
								<h3>Browser support</h3>
							</Row>
							</Grid>
						</div>
				</div>	
			);
	}
}

// const exp = (
// 		<DocumentationPage title="Documentation" />
// 	);
// export default exp;
