import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import throttle from 'lodash.throttle';

import config from 'Config';
import { loadState, saveState } from 'src/redux/localStorage';


export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
	const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const enhancer = composeEnhancer(
		applyMiddleware(
			routerMiddleware(history),
			thunk
		),
	);

	if (!preloadedState) {
		preloadedState = loadState(); 
	}

	const store = createStore(
		createRootReducer(history),
		preloadedState,
		enhancer
	)

	store.subscribe(throttle(() => {
		saveState(store.getState())
	}, config.appSettings.state.SAVING_PERIOD));

	// Hot reloading
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./reducers', () => {
			store.replaceReducer(createRootReducer(history));
		});
	}

	return store
}