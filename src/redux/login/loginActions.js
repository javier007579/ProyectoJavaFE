import * as ACTION_TYPES from './loginActionTypes';

// Login actions
export const loginRequest = (username, password) => ({
	type: ACTION_TYPES.LOGIN_REQUEST,
	payload: {
		username,
		password
	}
});

export const loginRequestSuccess = response => ({
	type: ACTION_TYPES.LOGIN_REQUEST_SUCCESS,
	payload: response
});

export const loginRequestFailure = error => ({
	type: ACTION_TYPES.LOGIN_REQUEST_FAILURE,
	payload: {
		error
	}
});
// END Login actions



// Forgot password send email actions
export const forgotPasswordSendEmailRequest = email => ({
	type: ACTION_TYPES.FORGOT_PASSWORD_SEND_EMAIL_REQUEST,
	payload: {
		email
	}
});
export const forgotPasswordSendEmailRequestResolve = () => ({
	type: ACTION_TYPES.FORGOT_PASSWORD_SEND_EMAIL_REQUEST_RESOLVE
});
// END Forgot password send email actions

// Restablecer contraseña por panel de usuario actions
export const restorePasswordSendEmailRequest = email => ({
	type: ACTION_TYPES.RESTORE_PASSWORD_SEND_EMAIL_REQUEST,
	payload: {
		email
	}
});
export const restorePasswordSendEmailRequestResolve = () => ({
	type: ACTION_TYPES.RESTORE_PASSWORD_SEND_EMAIL_REQUEST_RESOLVE
});
// END Restablecer contraseña por panel de usuario actions


// Reset password actions
export const resetPasswordRequest = () => ({
	type: ACTION_TYPES.RESET_PASSWORD_REQUEST
});
export const resetPasswordRequestSuccess = response => ({
	type: ACTION_TYPES.RESET_PASSWORD_REQUEST_SUCCESS,
	payload: response
});
export const resetPasswordRequestFailure = error => ({
	type: ACTION_TYPES.RESET_PASSWORD_REQUEST_FAILURE,
	payload: {
		error
	}
});
// END Reset password actions



// Logout actions
export const logout = () => ({
	type: ACTION_TYPES.LOGOUT
});
// END Logout actions

// Current Password actions
export const currentPasswordRequest = (username, password) => ({
	type: ACTION_TYPES.CURRENT_PASSWORD_REQUEST,
	payload: {
		username,
		password
	}
});

export const currentPasswordRequestSuccess = response => ({
	type: ACTION_TYPES.CURRENT_PASSWORD_REQUEST_SUCCESS,
	payload: response
});

export const currentPasswordRequestFailure = error => ({
	type: ACTION_TYPES.CURRENT_PASSWORD_REQUEST_FAILURE,
	payload: {
		error
	}
});
// END Current Password actions