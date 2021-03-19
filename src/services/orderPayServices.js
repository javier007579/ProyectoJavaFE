import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery, httpPost, httpPut, httpDelete } from './httpServices';

const API_BASE_URI = `${config.apis.fundsRequestsApi.URL}`;
const ORDER_PAY_URI = `${API_BASE_URI}/payment-orders`;

const API_PRESUPUESTO_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const AFFECTATION_URI = `${API_PRESUPUESTO_BASE_URI}/expenses/affectations-movements`;


// List orden pay
export const listOrderPay = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		page: params?.page || 0,
		size: params?.size || 10,
		sort: 'id,asc' || ''
	};

	const queryString = buildURLQuery(paramsToSend);
	const URL = `${ORDER_PAY_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Detail orden pay
export const detailOrderPay = async (accessToken, ordenPayID) => {
	const options = buildDefaultOptions(accessToken);

	const URL = `${ORDER_PAY_URI}/${ordenPayID}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


//New order pay
export const newOrderPay = async (accessToken, params) => {

	const options = buildDefaultOptions(accessToken);
	let response;

	try {
		response = await httpPost(ORDER_PAY_URI, params, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};


//Edit order pay
export const editOrderPay = async (accessToken, serviceId, params) => {
	const URL = `${ORDER_PAY_URI}/${serviceId}`
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

//Delete order pay
export const deleteOrderPay = async (accessToken, id) => {

	const options = buildDefaultOptions(accessToken);
	let response;
	const URL = `${ORDER_PAY_URI}/${id}`;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error?.response || error;
	}
	return response;
};

// Detail orden pay
export const getOrderPayId = async (accessToken, administrativeServiceId) => {
	const URL = `${ORDER_PAY_URI}/${administrativeServiceId}`;
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


// affectations movements by ID orden pay
export const getAffectationsMovementsByIDOrderPay = async (accessToken, params=38) => {
	const options = buildDefaultOptions(accessToken);

	
	const URL = `${AFFECTATION_URI}?affectationMovementIds[]=${params}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};
