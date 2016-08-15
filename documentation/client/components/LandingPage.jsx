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
				<div ref="main" className="container bs-docs-container">
        	<WelcomeBox />
          <Grid>
            <Row>
              <Col md={4}>
                <h2>Cross-platform</h2>
                <h4>
                  Recognition Canvas is a completely cross-platform react component that works seemlessly
                  on all OS including Android, iOS and Windows.
                </h4>
              </Col>
              <Col md={4}>
                <h2>Single-component</h2>
                <h4>
                  Recognition Canvas is a single component that only needs React to get started.
                </h4>
              </Col>
              <Col md={4}>
                <h2>Extensible</h2>
                <h4>
                  Recognition Canvas can easily be extended with different shapes and beautifications
                </h4>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
