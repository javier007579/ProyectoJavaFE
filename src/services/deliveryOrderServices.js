import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery, httpPost, httpPut, httpDelete } from './httpServices';

const API_BASE_URI = `${config.apis.coreApi.URL}`;
const DELIVERY_ORDER_URI = `${API_BASE_URI}/delivery-orders`;


// List delivery order
export const listDeliveryOrder = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		page: params?.page || 0,
		size: params?.size || 10,
		sort: 'code,asc' || '',
		name: params?.name,
		code: params?.code
	};

	const queryString = buildURLQuery(paramsToSend);
	const URL = `${DELIVERY_ORDER_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


//New delivery order
export const newDeliveryOrder = async (accessToken, params) => {

	const options = buildDefaultOptions(accessToken);
	let response;

	try {
		response = await httpPost(DELIVERY_ORDER_URI, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};


//Edit delivery order
export const editDeliveryOrder = async (accessToken, serviceId, params) => {
	const URL = `${DELIVERY_ORDER_URI}/${serviceId}`
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

//Delete delivery order
export const deleteDeliveryOrder = async (accessToken, id) => {

	const options = buildDefaultOptions(accessToken);
	let response;
	const URL = `${DELIVERY_ORDER_URI}/${id}`;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

// Detail delivery order
export const getDeliveryOrderId = async (accessToken, administrativeServiceId) => {
	const URL = `${DELIVERY_ORDER_URI}/${administrativeServiceId}`;
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

