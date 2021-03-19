import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, httpPost, httpPut, httpDelete, buildURLQuery } from './httpServices';

const API_BASE_URI_V1 = `${config.apis.authApi.URL}/v1`;
const API_BASE_URI_V2 = `${config.apis.authApi.URL}/v2`;
const USER_ENDPOINT_URL = '/users/filtered';

//User
export const listUser = async ( accessToken, Page, PageSize=1000, FilterText ) => {

	const setbuildUrlQuery = {
		Page,
		PageSize,
		FilterText
	};

	const queryString = buildURLQuery(setbuildUrlQuery);
	const URL = `${API_BASE_URI_V2}${USER_ENDPOINT_URL}?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

//New User
const USER_ENDPOINT_URL_POST = '/users';

export const newUser = async ( accessToken, name='', alias='', password='', email='', description='description' ) => {

	const URL = `${API_BASE_URI_V2}${USER_ENDPOINT_URL_POST}`;
	const options = buildDefaultOptions(accessToken);
		
	const params = {
		name,
		alias,
		password,
		email,
		description
    }

    let response;

	try {
		response = await httpPost( URL, params, options );
	}
	catch( error ) {
		return error?.response||error;
	}

	return response;
};

//Edit User
const USER_ENDPOINT_URL_PUT = '/users';

export const editUser = async ( accessToken, userData ) => {

	const URL = `${API_BASE_URI_V2}${USER_ENDPOINT_URL_PUT}`;
	const options = buildDefaultOptions(accessToken);
		
	const params = {
		password: userData?.password,
		id: userData?.id,
		name: userData?.name,
		alias: userData?.alias,
		description: userData?.description||'description',
		email: userData?.email,
		valid: userData?.valid
	};

    let response;
	try {
		response = await httpPut( URL, params, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

//Delete User
const USER_ENDPOINT_URL_DELETE = '/users';

export const deleteUser = async ( accessToken, id=0 ) => {

	const URL = `${API_BASE_URI_V2}${USER_ENDPOINT_URL_DELETE}/${id}`;
	const options = buildDefaultOptions(accessToken);
	
    let response;
	try {
		response = await httpDelete( URL, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

//Profiles
const PROFILE_ENDPOINT_URL = '/profiles';

export const listProfile = async ( accessToken ) => {

	const URL = `${API_BASE_URI_V2}${PROFILE_ENDPOINT_URL}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

//Profiles New
const PROFILE_ENDPOINT_URL_POST = '/profiles';

export const newProfile = async ( accessToken, name='', permissionId=21, applicationId=4 ) => {

	const URL = `${API_BASE_URI_V2}${PROFILE_ENDPOINT_URL_POST}`;
	const options = buildDefaultOptions(accessToken);
		
	const params = {
		name,
		permissionId,
		applicationId
    }

    let response;

	try {
		response = await httpPost( URL, params, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

//Profiles Edit
const PROFILE_ENDPOINT_URL_PUT = '/profiles';

export const editProfile = async ( accessToken, id=0, name='', permissionId=21, applicationId=4 ) => {

	const URL = `${API_BASE_URI_V2}${PROFILE_ENDPOINT_URL_PUT}`;
	const options = buildDefaultOptions(accessToken);
		
	const params = {
		id,
		name,
		permissionId,
		applicationId
    }

    let response;
	try {
		response = await httpPut( URL, params, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

//Profiles Delete
const PROFILE_ENDPOINT_URL_DELETE = '/profiles';

export const deleteProfile = async ( accessToken, id=0 ) => {

	const URL = `${API_BASE_URI_V2}${PROFILE_ENDPOINT_URL_DELETE}/${id}`;
	const options = buildDefaultOptions(accessToken);
	
    let response;
	try {
		response = await httpDelete( URL, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};


// Add user to profile
const POST_USER_X_APPLICATION_X_PROFILE_ENDPOINT = '/userxapplicationxprofiles';

export const postUserXApplicationXProfile = async ( accessToken, params ) => {
	const URL = `${API_BASE_URI_V1}${POST_USER_X_APPLICATION_X_PROFILE_ENDPOINT}`;
	const options = buildDefaultOptions(accessToken);

	let response;
	try {
		response = await httpPost( URL, params, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

// Edit User X Application X Profile
const PUT_USER_X_APPLICATION_X_PROFILE_ENDPOINT_URI = '/userxapplicationxprofiles';

export const editUserXApplicationXProfile = async ( accessToken, params ) => {
	const URL = `${API_BASE_URI_V1}${PUT_USER_X_APPLICATION_X_PROFILE_ENDPOINT_URI}`;
	const options = buildDefaultOptions(accessToken);

	let response;
	try {
		response = await httpPut( URL, params, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

// List Users X Application X Profile
const LIST_USERS_X_APPLICATION_X_PROFILE_ENDPOINT = '/userxapplicationxprofiles';

export const listUsersXApplicationXProfile = async ( accessToken ) => {
	const URL = `${API_BASE_URI_V1}${LIST_USERS_X_APPLICATION_X_PROFILE_ENDPOINT}`;
	const options = buildDefaultOptions(accessToken);

	let response;
	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

// List Users X Application X Profile
const USER_ID_URI = '/users';

export const getUserData = async ( accessToken, idUser ) => {
	const URL = `${API_BASE_URI_V2}${USER_ID_URI}/${idUser}`;
	const options = buildDefaultOptions(accessToken);

	let response;
	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};

//Edit User Change Password
export const editUserChangePassword = async ( accessToken, userData ) => {

	const URL = `${API_BASE_URI_V2}${USER_ENDPOINT_URL_PUT}`;
	const options = buildDefaultOptions(accessToken);
		
	const params = {
		password: userData?.password,
		id: userData?.id,
		name: userData?.name,
		alias: userData?.alias,
		description: userData?.description||'description',
		email: userData?.email,
		valid: userData?.valid
	};

    let response;
	try {
		response = await httpPut( URL, params, options );
	}
	catch( error ) {
		return error;
	}

	return response;
};