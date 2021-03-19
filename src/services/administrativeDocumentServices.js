import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, httpPost, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const ADMINISTRATIVE_DOCUMENT_URI = `${API_BASE_URI}/expenses/administrative-documents`;

const ADMINISTRATIVE_DOCUMENT_BY_ORDEN_PAY_URI = `${API_BASE_URI}/expenses/affectations`;

// Get administrative document service
export const getAdministrativeDocument = async (accessToken, params = {}) => {
	if (!params || !params?.year || !params?.number || !params?.organismCode) {
		return new Error('Invalid parameters.');
	}

	const URL = `${ADMINISTRATIVE_DOCUMENT_URI}/${params.organismCode}/${params.number}/${params.year}`;
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


export const getAllAdministrativeDocument = async (accessToken, {page=0,pageSize=100,filter={}}) => {

	const jsonFilter = filter ? JSON.stringify(filter) : undefined;

	const setbuildURLQuery = {
		page:page,
		pageSize:pageSize,
		 filter: jsonFilter
	};

const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${ADMINISTRATIVE_DOCUMENT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

return response;

};

// Get administrative document by Order Pay service
export const getAdministrativeDocumentByOrderPay = async (accessToken, page=1, pageSize=10, filter={}) => {
	
	const jsonFilter = filter ? JSON.stringify(filter) : undefined;


	const setbuildURLQuery = {
		page:page,
		pageSize:pageSize,
		filter: jsonFilter
	};

	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${ADMINISTRATIVE_DOCUMENT_BY_ORDEN_PAY_URI}?${queryString}`;


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



