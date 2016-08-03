import React, { Component } from 'react';
import NavigationBar from './NavigationBar.jsx';


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
        <PageHeader>
          <div className="bs-docs-header">
            <div className="container">
              Documentation
            </div>
          </div>
        </PageHeader>
        <div className="container bs-docs-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

