import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './components/App.jsx'

import DemoPage from './components/DemoPage.jsx';
import GettingStartedPage from './components/GettingStartedPage.jsx';
import LandingPage from './components/LandingPage.jsx';



import { Router, Route, IndexRoute, browserHistory } from 'react-router';


const router = (
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<IndexRoute name="Home" component={ LandingPage }></IndexRoute>
			<Route path="/gettingstarted" component={ GettingStartedPage }></Route>
			<Route path="/demo" component={ DemoPage }></Route>
		</Route>
	</Router>
	);

Meteor.startup(() => {
  render(router, document.getElementById('render-target'));
});