import React, { Component } from 'react';

import { Link } from 'react-router';

import { Button, ButtonToolbar, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavigationBar extends Component{

	render(){
		return(
			<Jumbotron>
				<h1>Recognition Canvas</h1>
				<p>
					<ButtonToolbar>
						<LinkContainer to="/gettingstarted">
							<Button bsStyle="primary" bsSize="large">Getting Started</Button>
						</LinkContainer>
						<LinkContainer to="/demo">
							<Button bsStyle="success" bsSize="large">Demo</Button>
						</LinkContainer>
						<Button bsStyle="default" bsSize="large" href="https://www.npmjs.com/package/recognition-canvas">
							npm
						</Button>
					</ButtonToolbar>
				</p>
			</Jumbotron>

			);
	}
}