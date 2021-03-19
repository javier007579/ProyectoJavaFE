import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from 'react-hot-loader';
import App from './app'

import configureStore, { history } from "src/redux/store";
import './custom.scss';



if (process.env.NODE_ENV !== 'production') {
	console.log('DEVELOPMENT MODE');
} else {
	console.log('PRODUCTION MODE');
}


const store = configureStore();

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<App history={history} />
			</Provider>
		</AppContainer>,
		document.getElementById("root")
	)
}

render()

// Hot reloading
if (module.hot) {
	// Reload components
	module.hot.accept('./app', () => {
		render()
	})
}