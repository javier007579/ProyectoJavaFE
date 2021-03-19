import { push } from 'connected-react-router';
import config from 'Config';

import * as ACTIONS from './loginActions';
import * as ROUTES from 'src/routes';
import * as SERVICES from 'src/services/loginServices';

export const tryLogInAction = ( username, password ) => {
	return async ( dispatch, getState ) => {
		dispatch( ACTIONS.loginRequest( username, password ) );

		const response = await SERVICES.postLogin( username, password );

		if( !response.hasOwnProperty("error") ) {
			dispatch( push(ROUTES.INDEX_PAGE) );
			dispatch( ACTIONS.loginRequestSuccess(response) );
		}
		else {
			dispatch( ACTIONS.loginRequestFailure(response.error) );
		}
		return response;
	}
};

// Current Password
export const tryCurrentPassword = ( username, password ) => {
	return async ( dispatch, getState ) => {
		dispatch( ACTIONS.currentPasswordRequest( username, password ) );

		const response = await SERVICES.postCurrentPassword( username, password );

		if( !response.hasOwnProperty("error") ) {
			dispatch( push(ROUTES.INDEX_PAGE) );
			dispatch( ACTIONS.currentPasswordRequestSuccess(response) );
		}
		else {
			dispatch( ACTIONS.currentPasswordRequestFailure(response.error) );
		}
		return response;
	}
};

export const trySendForgotPasswordEmail = ( email, reset ) => {
	return async ( dispatch, getState ) => {

		dispatch( ACTIONS.forgotPasswordSendEmailRequest(email) );

        const response = await SERVICES.postForgotPasswordSendEmail(email);
		
		if( response?.status == 200 ) {
			dispatch( ACTIONS.forgotPasswordSendEmailRequestResolve() );
		}
		else {
		}
		
		return response;

		reset ? reset() : false;
	};
};

// Restablecer contraseña por panel de usuario
export const trySendRestorePasswordEmail = ( email, reset ) => {
	return async ( dispatch, getState ) => {

		dispatch( ACTIONS.restorePasswordSendEmailRequest(email) );

        const response = await SERVICES.postRestorePasswordSendEmail(email);
		
		if( response?.status == 200 ) {
			dispatch( ACTIONS.restorePasswordSendEmailRequestResolve() );
		}
		else {
		}
		
		return response;

	};
};

export const trySendResetPassword = ( password, token ) => {
	return async ( dispatch, getState ) => {
		dispatch( ACTIONS.resetPasswordRequest() );

		const response = await SERVICES.resetPassword( password, token );

		if( response?.status == 200 ) {
			dispatch( ACTIONS.resetPasswordRequestSuccess() );
			dispatch( push(ROUTES.LOGIN_URI) );
		}
		else {
			dispatch( ACTIONS.resetPasswordRequestFailure() );
		}
	};
};