import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as notifications } from 'react-notification-system-redux';
import { LOGOUT } from 'src/redux/login/loginActionTypes';

import { loginReducer } from 'src/redux/login/loginReducer';

import { userReducer, userReducerInitialState } from 'src/redux/user/userReducer';


const createRootReducer = history => {
	const appReducer = combineReducers({
		router: connectRouter(history),
		notifications,
		loginReducer,
		userReducer,

	});
	return (state, action) => {
		if (action.type === LOGOUT) {

	
			state.userReducer = userReducerInitialState;


		}
		return appReducer(state, action);

	}

};

export default createRootReducer;
