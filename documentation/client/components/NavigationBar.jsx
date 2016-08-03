import React, { Component } from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavigationBar extends Component{
 
  render(){
    
    return(
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <p>Digital Ink Recognition API</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullRight>
        <LinkContainer to ="/gettingstarted">
            <NavItem eventKey={1} href="#">Geting Started</NavItem>
          </LinkContainer>
          <LinkContainer to="/demo">
            <NavItem eventKey={2} href="#">Demo</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
      );

  }
}
