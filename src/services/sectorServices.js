import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const SECTOR_ENDPOINT_URI = '/expenses/sectors';
const PRINCIPAL_BUDGET_LIST_BY_SECTOR_ID_ENDPOINT_URI = '/principal-budgets';

export const listPrincipalBudgetBySectorId = async ( accessToken, sectorId ) => {
	const URL = `${API_BASE_URI}${SECTOR_ENDPOINT_URI}/${sectorId}${PRINCIPAL_BUDGET_LIST_BY_SECTOR_ID_ENDPOINT_URI}`;
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