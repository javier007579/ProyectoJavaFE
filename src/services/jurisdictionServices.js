import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.coreApi.URL}`;
const JURISDICTION_ENDPOINT_URI = '/jurisdictions';
const ORGANIZATIONS_BY_JURISDICTIONS_ID = '/organizations';

export const listJurisdiction = async ( accessToken, page, size) => {

	const setbuildURLQuery = {
		page,
		size
	};

	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${API_BASE_URI}${JURISDICTION_ENDPOINT_URI}?${queryString}`;
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



export const listOrganizationsByJurisdictionId = async( accessToken, jurisdictionId ) => {
	const URL = `${API_BASE_URI}${JURISDICTION_ENDPOINT_URI}/${jurisdictionId}${ORGANIZATIONS_BY_JURISDICTIONS_ID}`;
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