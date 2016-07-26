import React, { Component } from 'react';
import NavigationBar from './NavigationBar.jsx';
import WelcomeBox from './WelcomeBox.jsx';

// App component - represents the whole app

export default class LandingPage extends React.Component {

	componentDidMount(){
	}
  render () {
    return (
      <div>
        <WelcomeBox />
      </div>
    );
  }
}

