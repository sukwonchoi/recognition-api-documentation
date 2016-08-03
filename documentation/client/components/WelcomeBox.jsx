import React, { Component } from 'react';

import { Link } from 'react-router';

import { Button, ButtonToolbar, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavigationBar extends Component{

	render(){
		return(
			<Jumbotron>
				<h1>Digital Ink Recognition API</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
				in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
				sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				<p>
					<ButtonToolbar>
						<LinkContainer to="/gettingstarted">
							<Button bsStyle="primary" bsSize="large">Getting Started</Button>
						</LinkContainer>
						<LinkContainer to="/demo">
							<Button bsStyle="success" bsSize="large">Demo</Button>
						</LinkContainer>
					</ButtonToolbar>
				</p>
			</Jumbotron>

			);
	}
}