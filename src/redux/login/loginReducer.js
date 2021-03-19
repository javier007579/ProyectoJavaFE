import * as ACTION_TYPES from './loginActionTypes';

export const loginReducerInitialState = {
	hasError: false,
	isFetching: false,
	username: undefined,
	password: undefined,
	isLoggedIn: false,
	authentication: undefined,
	error: undefined,
	resetPassword: {
		isFetching: false,
		hasError: false,
		error: undefined
	}
};

export const loginReducer = (state = loginReducerInitialState, action) => {
	switch (action.type) {

		// Login actions
		case ACTION_TYPES.LOGIN_REQUEST: {
			const { username, password } = action.payload;
			return {
				...state,
				isFetching: true,
				hasError: false,
				isLoggedIn: false,
				error: undefined,
				username,
				password
			};
		}
		case ACTION_TYPES.LOGIN_REQUEST_SUCCESS: {
			const isLoggedIn = (action && action.payload && !action.payload.hasOwnProperty("error"));
			return {
				...state,
				isFetching: false,
				hasError: false,
				error: undefined,
				password: undefined,
				isLoggedIn,
				authentication: {...action.payload}
			};
		}
		case ACTION_TYPES.LOGIN_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				isFetching: false,
				hasError: true,
				isLoggedIn: false,
				error
			};
		}
		// END Login actions



		// Forgot password actions
		case ACTION_TYPES.FORGOT_PASSWORD_SEND_EMAIL_REQUEST: {
			return {
				...state,
				isFetching: true,
				hasError: false
			};
		}
		case ACTION_TYPES.FORGOT_PASSWORD_SEND_EMAIL_REQUEST_RESOLVE: {
			return {
				...state,
				isFetching: false,
				hasError: false
			};
		}
		// END Forgot password actions



		// Reset password actions
		case ACTION_TYPES.RESET_PASSWORD_REQUEST: {
			return {
				...state,
				resetPassword: {
					...state.resetPassword,
					isFetching: true,
					hasError: false,
					error: loginReducerInitialState.resetPassword.error
				}
			};
		}
		case ACTION_TYPES.RESET_PASSWORD_REQUEST_SUCCESS: {
			return {
				...state,
				resetPassword: {
					...state.resetPassword,
					isFetching: false,
					hasError: false,
					error: loginReducerInitialState.resetPassword.error
				}
			};
		}
		case ACTION_TYPES.RESET_PASSWORD_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				resetPassword: {
					...state.resetPassword,
					isFetching: false,
					hasError: true,
					error
				}
			};
		}
		// END Reset password actions



		case ACTION_TYPES.LOGOUT: {
			return {
				...loginReducerInitialState
			};
		}

		// Current Password actions
		case ACTION_TYPES.CURRENT_PASSWORD_REQUEST: {
			const { username, password } = action.payload;
			return {
				...state,
				isFetching: true,
				hasError: false,
				isLoggedIn: false,
				error: undefined,
				username,
				password
			};
		}
		case ACTION_TYPES.CURRENT_PASSWORD_REQUEST_SUCCESS: {
			const isLoggedIn = (action && action.payload && !action.payload.hasOwnProperty("error"));
			return {
				...state,
				isFetching: false,
				hasError: false,
				error: undefined,
				password: undefined,
				isLoggedIn,
				authentication: {...action.payload}
			};
		}
		case ACTION_TYPES.CURRENT_PASSWORD_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				isFetching: false,
				hasError: true,
				isLoggedIn: false,
				error
			};
		}
		// END Current Password actions

		// Restablecer contraseña por panel de usuario actions
		case ACTION_TYPES.RESTORE_PASSWORD_SEND_EMAIL_REQUEST: {
			return {
				...state,
				isFetching: true,
				hasError: false
			};
		}
		case ACTION_TYPES.RESTORE_PASSWORD_SEND_EMAIL_REQUEST_RESOLVE: {
			return {
				...state,
				isFetching: false,
				hasError: false
			};
		}
		// END Restablecer contraseña por panel de usuario actions




		default: {
			return state;
		}
	}
};

export default loginReducer;

export const getLoginReducer = state => state.loginReducer;

export const getIsLoggedIn = state => getLoginReducer(state).isLoggedIn;

export const getIsFetching = state => getLoginReducer(state).isFetching;

export const getUsername = state => getLoginReducer(state).username;

export const getUserAuthentication = state => getLoginReducer(state)?.authentication;
export const getExpiresDate = state => getUserAuthentication(state)?.expires_dates;
export const getAccessToken = state => getUserAuthentication(state)?.access_token;
export const getProfileName = state => getUserAuthentication(state)?.profile_name;
export const getAlias = state => getUserAuthentication(state)?.alias;
export const getEmail = state => getUserAuthentication(state)?.email;

export const getUserPermissions = state => getUserAuthentication(state)?.permissions;
export const getUserPermissionsSecurity = state => getUserPermissions(state)?.security;
export const getUserPermissionsControlBudget = state => getUserPermissions(state)?.controlBudget;
export const getUserPermissionsReports = state => getUserPermissions(state)?.reports;
export const getUserPermissionsExecutionBudget = state => getUserPermissions(state)?.executionBudget;
export const getUserPermissionsPeriods = state => getUserPermissions(state)?.periods;
export const getUserPermissionsServices = state => getUserPermissions(state)?.services;
export const getUserPermissionsBudgetItemControl = state => getUserPermissions(state) ? getUserPermissions(state)['budgetViewer'] : undefined;
export const getUserPermissionsOrganisms = state => getUserPermissions(state)?.organisms;
export const getUserPermissionsUsers = state => getUserPermissions(state)?.users;

export const getResetPassword = state => getLoginReducer(state)?.resetPassword;
export const getResetPasswordIsFetching = state => getResetPassword(state)?.isFetching;
export const getResetPasswordHasError = state => getResetPassword(state)?.hasError;

