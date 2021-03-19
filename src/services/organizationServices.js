import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

/* const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const ORGANIZATION_TYPES_ENDPOINT_URI = '/base/organization-types'; */
const API_BASE_URI = `${config.apis.coreApi.URL}`;
const ORGANIZATION_TYPES_ENDPOINT_URI = '/organism-classifiers';

export const listOrganizationTypes = async ( accessToken) => {

	const URL = `${API_BASE_URI}${ORGANIZATION_TYPES_ENDPOINT_URI}`;
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

//Organization
/* const ORGANIZATION_ENDPOINT_URI = '/base/organizations'; */
const ORGANIZATION_ENDPOINT_URI = '/organisms';

export const listOrganizations = async ( accessToken, page, size ) => {

	const setbuildURLQuery = {
		page,
		size
	};

	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${API_BASE_URI}${ORGANIZATION_ENDPOINT_URI}?${queryString}`;
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