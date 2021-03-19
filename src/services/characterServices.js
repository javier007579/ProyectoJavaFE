import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const CHARACTER_ENDPOINT_URI = '/expenses/characters';

export const listCharacter = async ( accessToken, page, pageSize, filter ) => {
	const jsonFilter = filter ? JSON.stringify(filter) : undefined;

	const setbuildURLQuery = {
		pageSize,
		page,
		filter: jsonFilter
	};

	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${API_BASE_URI}${CHARACTER_ENDPOINT_URI}?${queryString}`;
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