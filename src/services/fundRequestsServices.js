import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery, httpPost, httpPut, httpDelete } from './httpServices';

const API_BASE_URI = `${config.apis.fundsRequestsApi.URL}`;
const FUND_REQUESTS_URI = `${API_BASE_URI}/fund-requests`;


// List fund requests
export const listFundRequests = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		page: params?.page || 0,
		size: params?.size || 10,
		sort: 'id,asc' || '',
		name: params?.name,
		code: params?.code,
		fiscalYearId:params?.fiscalYearId
	};

	const queryString = buildURLQuery(paramsToSend);
	const URL = `${FUND_REQUESTS_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


//New fund requests
export const newFundRequests = async (accessToken, params) => {

	const options = buildDefaultOptions(accessToken);
	let response;

	try {
		response = await httpPost(FUND_REQUESTS_URI, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};


//Edit fund requests
export const editFundRequests = async (accessToken, serviceId, params) => {
	const URL = `${FUND_REQUESTS_URI}/${serviceId}`
	const options = buildDefaultOptions(accessToken);
	let response;
	try {
		response = await httpPut(URL, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

//Delete fund requests
export const deleteFundRequests = async (accessToken, id) => {

	const options = buildDefaultOptions(accessToken);
	let response;
	const URL = `${FUND_REQUESTS_URI}/${id}`;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

// Detail fund requests
export const getFundRequestsId = async (accessToken, foundRequestId) => {
	const URL = `${FUND_REQUESTS_URI}/${foundRequestId}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
}

