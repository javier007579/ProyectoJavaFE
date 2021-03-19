import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const CONTROL_BUDGETS_URI = `${API_BASE_URI}/expenses/control-budgets`;

export const getBudgetItemsControl = async( accessToken, params={} ) => {
		if( params?.filter ) {
		params.filter = JSON.stringify(params.filter);
	}
	const queryString = buildURLQuery(params);
	const URL = `${CONTROL_BUDGETS_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	let response

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		response= error;
	};
	
	return response;
};