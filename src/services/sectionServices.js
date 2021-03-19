import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const SECTION_ENDPOINT_URI = '/expenses/sections';

export const listSection = async ( accessToken, page, pageSize, filter ) => {
	const jsonFilter = filter ? JSON.stringify(filter) : undefined;

	const setbuildURLQuery = {
		pageSize,
		page,
		filter: jsonFilter
	};

	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${API_BASE_URI}${SECTION_ENDPOINT_URI}?${queryString}`;
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



export const listSectorsBySectionId = async ( accessToken, sectionId ) => {
	const URL = `${API_BASE_URI}${SECTION_ENDPOINT_URI}/${sectionId}/sectors`;
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