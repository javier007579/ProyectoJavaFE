import config from 'Config';

import { httpPost, httpPut, handleHttpError } from './httpServices'
import { mapToHttpBody } from './globalServices';

const API_BASE_URI_V2 = `${config.apis.authApi.URL}/v2`;
const AUTH_ENDPOINT = `${config.apis.authApi.AUTHENTICATION_ENDPOINT}`;

export const postLogin = async ( username, password ) => {
	const AUTH_URL = `${API_BASE_URI_V2}${AUTH_ENDPOINT}`;
	
	const details = {
		mode: 'no-cors',
		grant_type: "password",
		email: username,
		password: password,
		client_id: config.apis.authApi.CLIENT_ID,
		app_id: config.apis.authApi.APPLICATION_ID
	};

	const body = mapToHttpBody( details );

	var request = {
		headers: config.apis.authApi.HEADERS
	};

	try {
		let response = await httpPost( AUTH_URL, body, request );
		return response.data;
	}
	catch (error) {
		return handleHttpError( error );
	}
}

// Current Password
export const postCurrentPassword = async ( username, password ) => {
	const AUTH_URL = `${API_BASE_URI_V2}${AUTH_ENDPOINT}`;
	
	const details = {
		mode: 'no-cors',
		grant_type: "password",
		email: username,
		password: password,
		client_id: config.apis.authApi.CLIENT_ID,
		app_id: config.apis.authApi.APPLICATION_ID
	};

	const body = mapToHttpBody( details );

	var request = {
		headers: config.apis.authApi.HEADERS
	};

	try {
		let response = await httpPost( AUTH_URL, body, request );
		return response.data;
	}
	catch (error) {
		return handleHttpError( error );
	}
}


export const postForgotPasswordSendEmail = async email => {
    const URL = `${API_BASE_URI_V2}${config.apis.authApi.RESETPASSWORD_ENDPOINT}`;
    let callbackUrlEmail = window.location.href.replace('forgot-password','reset-password'); 
    const AppId = config.apis.authApi.APPLICATION_ID
    
    const params = {
        appId: AppId,
        email: email,
        callbackUrl: callbackUrlEmail
    }

    var options = {
        headers: {
            ...config.apis.authApi.HEADERS,
            'Content-Type': 'application/json'
        }
    };

    try {
        return await httpPost(URL, params, options);
    }
    catch (error) {
        return handleHttpError(error)
    }
}

// Restablecer contraseña por panel de usuario
export const postRestorePasswordSendEmail = async email => {
    const URL = `${API_BASE_URI_V2}${config.apis.authApi.RESETPASSWORD_ENDPOINT}`;
    let callbackUrlEmail = window.location.href.replace('user-list','reset-password'); 
    const AppId = config.apis.authApi.APPLICATION_ID
    
    const params = {
        appId: AppId,
        email: email,
        callbackUrl: callbackUrlEmail
    }

    var options = {
        headers: {
            ...config.apis.authApi.HEADERS,
            'Content-Type': 'application/json'
        }
    };

    try {
        return await httpPost(URL, params, options);
    }
    catch (error) {
        return handleHttpError(error)
    }
}

export const resetPassword = async ( password, token ) => {
    const URL = `${API_BASE_URI_V2}${config.apis.authApi.RESETPASSWORD_ENDPOINT}`;    
    const AppId = config.apis.authApi.APPLICATION_ID
    
    const params = {
        appId: AppId,       
        identifier: token,
        password: password
    }

    var options = {
        headers: {
            ...config.apis.authApi.HEADERS,
            'Content-Type': 'application/json'
        }
    };

    try {
        let response = await httpPut(URL, params, options);
        return response;
    }
    catch (error) {
        return handleHttpError(error)
    }
}