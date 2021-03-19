import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

/* const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const SERVICE_ENDPOINT_URI = '/base/services'; */

const API_BASE_URI = `${config.apis.coreApi.URL}`;
const ADMINISTRATIVE_SERVICE_URI = `${API_BASE_URI}/services`;

export const listService = async ( accessToken, page, pageSize, filter ) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		page: page?.page || 0,
		size: pageSize?.size || 1000
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



