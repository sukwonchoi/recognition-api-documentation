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
        
      </div>
    );
  }
}

// export default const landingPageInstance = (
//     <LandingPage />
//   );

// export default landingPageInstance;

