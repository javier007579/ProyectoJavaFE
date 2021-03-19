import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const PRINCIPAL_BUDGET_ENDPOINT_URI = '/expenses/principal-budgets';
const PARTIAL_BUDGET_LIST_BY_PRINCIPAL_BUDGET_ID_ENDPOINT_URI = '/partial-budgets';

export const listPartialBudgetByPrincipalBudgetId = async ( accessToken, principalBudgetId ) => {
	const URL = `${API_BASE_URI}${PRINCIPAL_BUDGET_ENDPOINT_URI}/${principalBudgetId}${PARTIAL_BUDGET_LIST_BY_PRINCIPAL_BUDGET_ID_ENDPOINT_URI}`;
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