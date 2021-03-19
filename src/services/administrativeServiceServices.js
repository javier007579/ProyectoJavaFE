import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery, httpPost, httpPut, httpDelete } from './httpServices';

const API_BASE_URI = `${config.apis.coreApi.URL}`;
const ADMINISTRATIVE_SERVICE_URI = `${API_BASE_URI}/services`;
const ADMINISTRATIVE_SERVICE_TYPES_URI = `${API_BASE_URI}/service-types`;
const USER_ADMINISTRATIVE_SERVICE_URI = `${API_BASE_URI}/users`;


// List administrative service
export const listAdministrativeService = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		page: params?.page || 0,
		size: params?.size || 10,
		sort: 'code,asc' || '',
		name: params?.name,
		code: params?.code
	};

	const queryString = buildURLQuery(paramsToSend);
	const URL = `${ADMINISTRATIVE_SERVICE_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


// List all administrative service
export const listAllAdministrativeService = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		page: params?.page || 0,
		size: params?.size || 1000,
		sort: params?.sort || ''
	};

	const queryString = buildURLQuery(paramsToSend);
	const URL = `${ADMINISTRATIVE_SERVICE_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// List administrative service types endpoint call
export const listAdministrativeServiceTypes = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		name: params?.name || '',
		page: params?.page || 0,
		size: params?.size || 1000,
		sort: params?.sort || ''
	};

	const queryString = buildURLQuery(paramsToSend);
	const URL = `${ADMINISTRATIVE_SERVICE_TYPES_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

//New Administrative Service
export const newAdministrativeService = async (accessToken, params) => {

	const options = buildDefaultOptions(accessToken);
	let response;

	try {
		response = await httpPost(ADMINISTRATIVE_SERVICE_URI, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};


//Edit Administrative Service
export const editAdministrativeService = async (accessToken, serviceId, params) => {
	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${serviceId}`
	const options = buildDefaultOptions(accessToken);
	let response;
	try {
		response = await httpPut(URL, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

//Delete Administrative Service
export const deleteAdministrativeService = async (accessToken, id) => {

	const options = buildDefaultOptions(accessToken);
	let response;
	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${id}`;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

// Detail administrative service
export const getAdministrativeServiceId = async (accessToken, administrativeServiceId) => {
	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${administrativeServiceId}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
}

// Organism administrative service
export const getAdministrativeServiceOrganismId = async (accessToken, administrativeServiceId, exerciseId) => {
	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${administrativeServiceId}/exercise/${exerciseId}/organisms`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
}

//Add Organism Administrative Service
export const addOrganismAdministrativeService = async (accessToken, administrativeServiceId, excerciseId, params) => {

	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${administrativeServiceId}/organisms?idExercise=${excerciseId}&idOrganism=${params}`;
	const options = buildDefaultOptions(accessToken);
	let response;

	try {
		response = await httpPost(URL, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

//Remove Organism Administrative Service
export const removeOrganismAdministrativeService = async (accessToken, administrativeServiceId, excerciseId, OrganismId) => {

	const options = buildDefaultOptions(accessToken);
	let response;
	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${administrativeServiceId}/organisms?idExercise=${excerciseId}&idOrganism=${OrganismId}`;


	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};



// Users administrative service
export const getAdministrativeServiceUserId = async (accessToken, administrativeServiceId) => {
	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${administrativeServiceId}/users`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
}


//Add Users Administrative Service
export const addUserAdministrativeService = async (accessToken, administrativeServiceId, params) => {

	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${administrativeServiceId}/users`;
	const options = buildDefaultOptions(accessToken);
	let response;
	try {
		response = await httpPost(URL, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

//Remove User Administrative Service
export const removeUserAdministrativeService = async (accessToken, administrativeServiceId, UserId) => {

	const options = buildDefaultOptions(accessToken);
	let response;
	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${administrativeServiceId}/users/${UserId}`;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

// Add all Users Administrative Service
export const addAllUsersServiceAdministrativeService = async (accessToken, UserId) => {

	const options = buildDefaultOptions(accessToken);
	const URL = `${USER_ADMINISTRATIVE_SERVICE_URI}/${UserId}/services/all`;
	let response;

	try {
		response = await httpPost(URL, UserId, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

// Remove all Users Administrative Service
export const removeAllUsersServiceAdministrativeService = async (accessToken, UserId) => {

	const options = buildDefaultOptions(accessToken);
	const URL = `${USER_ADMINISTRATIVE_SERVICE_URI}/${UserId}/services/all`;
	let response;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};


//List all administrative services by User 
export const listAllServiceAdministrativeByUser = async (accessToken, userId) => {
	const URL = `${USER_ADMINISTRATIVE_SERVICE_URI}/${userId}/services`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
}

//Add New Users Administrative Service
export const addNewUserAdministrativeService = async (accessToken, administrativeServiceId, params) => {

	const URL = `${USER_ADMINISTRATIVE_SERVICE_URI}/${administrativeServiceId}/services`;
	
	const options = buildDefaultOptions(accessToken);
	let response;
	try {
		response = await httpPost(URL, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

// Get Jurisdictions by Services and Exercise	
export const getJurisdictionsByServicesIdAndExerciseId = async( accessToken, servicesId, exerciseId ) => {
	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${servicesId}/exercises/${exerciseId}/jurisdictions`;
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

// Get Organisms By Jurisdictions, Services and Exercise	
export const getOrganismsByJurisdictionsIdByServicesIdAndExerciseId = async( accessToken, servicesId, exerciseId, jurisdictionsId ) => {
	const URL = `${ADMINISTRATIVE_SERVICE_URI}/${servicesId}/exercises/${exerciseId}/jurisdictions/${jurisdictionsId}/organisms`;
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