import React, { Component } from 'react';
import { PageHeader, Well, Panel, Col, Grid, Row } from 'react-bootstrap';
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
					<div>
				        <PageHeader>
				        	Getting Started
				        </PageHeader>
				        <Grid>
			        		<Row>
			        			<h3>Installing</h3>
			        		</Row>
			        		<Row>
								<p>

								</p>
							</Row>
				        	<Row>
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
						        <div className="bs-callout bs-callout-info">
						        	<h4>THIS IS A HEADER</h4>
						        	<p>THIS IS A PARAGRAPH</p>
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
			        						<span className="cm-keyword">import </span>
			        						<span className="cm-def">RecognitionCanvas </span>
			        						<span className="cm-keyword">from </span>
			        						<span className="cm-string">'recognition-canvas'</span>
			        					</code>
			        				</pre>
			        			</Col>
						    </Row>
					    </Grid>
					    <PageHeader>
				        	Browser support
				        </PageHeader>
				        <Grid>
				        	<Row>

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
