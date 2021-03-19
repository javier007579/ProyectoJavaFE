import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, httpPost, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.fundsRequestsApi.URL}`;
const BANKACCOUNT_URI = `${API_BASE_URI}/bank-accounts`;


export const getListBankAccountsFundRequest = async (accessToken, params = {}) => {
	const queryString = buildURLQuery(params);
	const URL = `${BANKACCOUNT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	let response

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	};

	return response;
};

