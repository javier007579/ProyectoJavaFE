import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices'

/* const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const PERIOD_LIST_URI = '/expenses/periods'; */

const API_BASE_URI = `${config.apis.coreApi.URL}`;
const PERIOD_LIST_URI = '/exercises';

export const listPeriods = async ( accessToken, page=0, size=100 ) => {
	const setbuildURLQuery = {
        // filterText,
        page,
        size
    }
    
	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${API_BASE_URI}${PERIOD_LIST_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error.response;
	}
	
	return response;
};



