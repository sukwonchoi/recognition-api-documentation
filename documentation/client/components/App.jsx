import React, { Component } from 'react';
import NavigationBar from './NavigationBar.jsx';
import PageFooter from './PageFooter.jsx';

import { PageHeader } from 'react-bootstrap';


// App component - represents the whole app

export default class App extends React.Component {

	componentDidMount(){
    window.props = this.props.children;
	}
  render () {
    return (
      <div>
        <NavigationBar />
          {this.props.children}
        <PageFooter />
      </div>
    );
  }
}

