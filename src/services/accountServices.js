import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const ACCOUNTS_ENDPOINT_URI = '/expenses/accounts';

export const listAccount = async ( accessToken, page, pageSize, filter ) => {
	const jsonFilter = filter ? JSON.stringify(filter) : undefined;

	const setbuildURLQuery = {
		pageSize,
		page,
		filter: jsonFilter
	};

	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${API_BASE_URI}${ACCOUNTS_ENDPOINT_URI}?${queryString}`;
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