import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery, httpPost, httpPut, httpDelete } from './httpServices';

const API_BASE_URI = `${config.apis.coreApi.URL}`;
const ADMINISTRATIVE_ORGAMISM_URI = `${API_BASE_URI}/organisms`;
const ADMINISTRATIVE_ORGAMISM_CLASSIFIER_URI = `${API_BASE_URI}/organism-classifiers`;


// List administrative ORGAMISM
export const listAdministrativeOrganism = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		page: params?.page || 0,
		size: params?.size || 1000
	};

	const queryString = buildURLQuery(paramsToSend);
	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// List One administrative ORGAMISM
export const listOneAdministrativeOrganism = async (accessToken, organismId) => {
	const options = buildDefaultOptions(accessToken);

	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${organismId}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


// List administrative ORGAMISM types endpoint call
export const listAdministrativeOrganismTypes = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		name: params?.name || '',
		page: params?.page || 0,
		size: params?.size || 1000,
		sort: params?.sort || ''
	};

	const queryString = buildURLQuery(paramsToSend);
	const URL = `${ADMINISTRATIVE_ORGAMISM_TYPES_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

//New Administrative ORGAMISM
export const newAdministrativeOrganism = async (accessToken, params) => {

	const options = buildDefaultOptions(accessToken);
	let response;

	try {
		response = await httpPost(ADMINISTRATIVE_ORGAMISM_URI, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};


//Edit Administrative ORGAMISM
export const editAdministrativeOrganism = async (accessToken, organismId, params) => {
	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${organismId}`
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

//Delete Administrative ORGAMISM
export const deleteAdministrativeOrganism = async (accessToken, id) => {

	const options = buildDefaultOptions(accessToken);
	let response;
	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${id}`;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

// Detail administrative ORGAMISM
export const getAdministrativeOrganismId = async (accessToken, administrativeOrganismId) => {
	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${administrativeOrganismId}`;
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

// Organism administrative ORGAMISM
export const getAdministrativeOrganismOrganismId = async (accessToken, administrativeOrganismId) => {
	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${administrativeOrganismId}/organisms`;
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

//Add Organism Administrative ORGAMISM
export const addOrganismAdministrativeOrganism = async (accessToken, administrativeOrganismId, params) => {

	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${administrativeOrganismId}/organisms`;
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

//Remove Organism Administrative ORGAMISM
export const removeOrganismAdministrativeOrganism = async (accessToken, administrativeOrganismId, OrganismId) => {

	const options = buildDefaultOptions(accessToken);
	let response;
	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${administrativeOrganismId}/organisms/${OrganismId}`;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};



// Users administrative ORGAMISM
export const getAdministrativeOrganismUserId = async (accessToken, administrativeOrganismId) => {
	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${administrativeOrganismId}/users`;
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


//Add Users Administrative ORGAMISM
export const addUserAdministrativeOrganism = async (accessToken, administrativeOrganismId, params) => {

	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${administrativeOrganismId}/users`;
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

//Remove User Administrative ORGAMISM
export const removeUserAdministrativeOrganism = async (accessToken, administrativeOrganismId, UserId) => {

	const options = buildDefaultOptions(accessToken);
	let response;
	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${administrativeOrganismId}/users/${UserId}`;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

// Classifier administrative ORGAMISM
export const classifierAdministrativeOrganism = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const URL = `${ADMINISTRATIVE_ORGAMISM_CLASSIFIER_URI}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Service Administrative manager Organism  
export const getServiceAdministrativeManagerOrganism  = async (accessToken, administrativeOrganismId, exerciseId) => {
	const URL = `${ADMINISTRATIVE_ORGAMISM_URI}/${administrativeOrganismId}/exercises/${exerciseId}/services`;
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
