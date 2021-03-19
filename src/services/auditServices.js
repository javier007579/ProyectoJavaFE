import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const AUDIT_ENDPOINT_URI = '/expenses/audit';

export const listAudits = async ( accessToken, params ) => {

	const setbuildURLQuery = {
		page: params?.page || 1,
		pageSize: params?.size || 10
	};

	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${API_BASE_URI}${AUDIT_ENDPOINT_URI}?${queryString}`;
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



export const listSectorsByAuditId = async ( accessToken, sectionId ) => {
	const URL = `${API_BASE_URI}${AUDIT_ENDPOINT_URI}/${sectionId}/sectors`;
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