import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, httpPost, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const SUBPARTIAL_URI = `${API_BASE_URI}/expenses/sub-partial-budgets`;

export const listSubPartialBudget = async ( accessToken, params ) => {
	const queryString = buildURLQuery(params);
	const URL = `${SUBPARTIAL_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error) {
		return error
	}
	return response;
};