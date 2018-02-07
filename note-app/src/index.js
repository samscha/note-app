// react
import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// react-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import rootReducer from './reducers';

import Home from './components/Login/Home';
import App from './components/App/App';

import './styles/css/index.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Switch>
					<Route path="/app/:username" component={App} />
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root'),
);
