import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, httpPost, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const SUBCODES_ENDPOINT_URI = `${API_BASE_URI}/expenses/sub-codes`;
const SUBCODE_DETAILS_ENDPOINT_URI = '/details';
const SUBCODE_AFFECTATIONS_ENDPOINT_URI = '/affectations';

export const listSubcode = async ( accessToken, params ) => {
	const options = buildDefaultOptions(accessToken);
	const jsonFilter = params?.filter ? JSON.stringify(params?.filter) : undefined;

	const setbuildURLQuery = {
		pageSize: params?.pageSize,
        page: params?.page,
        filter: jsonFilter
	}
	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${SUBCODES_ENDPOINT_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	}

	return response;
}

export const getSubcodeDetails = async ( accessToken, subcodeId) => {
	const URL = `${SUBCODES_ENDPOINT_URI}/${subcodeId}${SUBCODE_DETAILS_ENDPOINT_URI}`;
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

export const getSubcodeData = async ( accessToken, subcodeId) => {
	const URL = `${SUBCODES_ENDPOINT_URI}/${subcodeId}`;
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



export const postSubcode = async ( accessToken, data ) => {
	const URL = `${SUBCODES_ENDPOINT_URI}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpPost( URL, data, options );
	}
	catch( error ) {
		return error;
	}
	
	return response;
};

// Subcode Affectations
export const getSubcodeAffectations = async ( accessToken, subcodeId) => {
	const URL = `${SUBCODES_ENDPOINT_URI}/${subcodeId}${SUBCODE_AFFECTATIONS_ENDPOINT_URI}`;
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