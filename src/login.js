import Login from './components/login/RootComponent';
import Mock from './components/login/MockComponent';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
	<Mock>
		<Login/>
	</Mock>,
	document.getElementById('login')
)