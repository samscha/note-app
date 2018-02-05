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

import App from './components/App';

import './styles/css/index.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root'),
);
