import React, { Component } from 'react';
import NavigationBar from './NavigationBar.jsx';


import { PageHeader } from 'react-bootstrap';


// App component - represents the whole app

export default class App extends React.Component {

	componentDidMount(){
	}
  render () {
    return (
      <div>
        <NavigationBar />
        <PageHeader>
          <div className="container">Documentation</div>
        </PageHeader>
        <div className="container bs-docs-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

