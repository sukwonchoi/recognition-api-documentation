import React, { Component } from 'react';
import NavigationBar from './NavigationBar.jsx';
import WelcomeBox from './WelcomeBox.jsx';
import { PageHeader, Well, Panel, Col, Grid, Row } from 'react-bootstrap';
import '../main.css'
// App component - represents the whole app

export default class LandingPage extends React.Component {

	componentDidMount(){
	}

  render () {
    return (
      <div>
        <WelcomeBox />
        <div>
	        <PageHeader>
	        	Getting Started
	        </PageHeader>
	        <Grid>
        		<Row>
        			<PageHeader>
        				<small>Installing</small>
        			</PageHeader>
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
			    	<PageHeader>
        				<small>Importing</small>
        			</PageHeader>
			    </Row>
			    <Row>

			    </Row>
		    </Grid>
	    </div>
      </div>
    );
  }
}

// export default const landingPageInstance = (
//     <LandingPage />
//   );

// export default landingPageInstance;

