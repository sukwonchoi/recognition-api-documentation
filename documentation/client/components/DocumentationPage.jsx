import React, { Component } from 'react';

import ApiList from './ApiList.jsx'
// App component - represents the whole app

export default class DocumentationPage extends React.Component {
	render(){
		return(
				<div>
					<ApiList />
				</div>	
			);
	}
}

// export default (<DocumentationPage title="Documentation"/>);
