import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, httpPost, httpPut, httpPatch,  httpDelete, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.coreApi.URL}`;
const EXERCISE_ENDPOINT_URI = `${API_BASE_URI}/exercises`;
const SERVICES_BY_EXERCISE_ID_URI = '/services';

const API_PRESUPUESTO_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const PERIODS_MONTHLY_ENDPOINT_URI = `${API_PRESUPUESTO_BASE_URI}/expenses/monthly-periods`;
const ENABLE_DATE_MONTHLY_PERIOD_CREDIT_EXECUTION_ENDPOINT_URI = `${API_PRESUPUESTO_BASE_URI}/expenses/enabled-date-monthly-period`;

// List exercises service
export const listExercises = async (accessToken, params) => {
	const options = buildDefaultOptions(accessToken);

	const paramsToSend = {
		page: params?.page || 0,
		size: params?.size || 10,
		sort: params?.sort || ''
	};

	const queryString = buildURLQuery(paramsToSend);
	const URL = `${EXERCISE_ENDPOINT_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



// Create exercise service
export const createExercise = async (accessToken, data) => {
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpPost(EXERCISE_ENDPOINT_URI, data, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



// Edit exercise service
export const editExercise = async (accessToken, exerciseId, data) => {
	const options = buildDefaultOptions(accessToken);
	const URL = `${EXERCISE_ENDPOINT_URI}/${exerciseId}`;

	let response;

	try {
		response = await httpPut(URL, data, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



// Get services by exercise ID
export const getServicesByExerciseId = async (accessToken, exerciseId) => {
	const options = buildDefaultOptions(accessToken);
	const URL = `${EXERCISE_ENDPOINT_URI}/${exerciseId}${SERVICES_BY_EXERCISE_ID_URI}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



// Add service to exercise
export const addServiceToExercise = async (accessToken, exerciseId, serviceId) => {
	const options = buildDefaultOptions(accessToken);
	const URL = `${EXERCISE_ENDPOINT_URI}/${exerciseId}${SERVICES_BY_EXERCISE_ID_URI}`;

	const paramsToSend = Array.isArray(serviceId) ? serviceId : [serviceId];

	let response;

	try {
		response = await httpPost(URL, paramsToSend, options);
	}
	catch (error) {
		return error;
	}

	return response;
}



// Delete service from exercise
export const deleteServiceFromExercise = async (accessToken, exerciseId, serviceId) => {
	const options = buildDefaultOptions(accessToken);
	const URL = `${EXERCISE_ENDPOINT_URI}/${exerciseId}${SERVICES_BY_EXERCISE_ID_URI}/${serviceId}`;

	let response;

	try {
		response = await httpDelete(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
}

// Active service to exercise
export const activeServiceFromExercise = async (accessToken, exerciseId, serviceId) => {
	const options = buildDefaultOptions(accessToken);
	const URL = `${EXERCISE_ENDPOINT_URI}/${exerciseId}/${serviceId}`;

	const paramsToSend = Array.isArray(serviceId) ? serviceId : [serviceId];

	let response;

	try {
		response = await httpPost(URL, paramsToSend, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


// Closed exercise service
export const closedExercise = async (accessToken, exerciseId, paramsToSend) => {
	const options = buildDefaultOptions(accessToken);

	const URL = `${EXERCISE_ENDPOINT_URI}/${exerciseId}/close`;

	let response;

	try {
		response = await httpPatch(URL, paramsToSend, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


// Get Edit Legal Instrument Exercise types
export const getEditLegalInstrumentExercise = async (accessToken, exerciseId) => {
	const options = buildDefaultOptions(accessToken);
	const URL = `${EXERCISE_ENDPOINT_URI}/${exerciseId}/legal-instruments`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Enable exercise service
export const enableExercise = async (accessToken, exerciseId, paramsToSend) => {
	const options = buildDefaultOptions(accessToken);

	const URL = `${EXERCISE_ENDPOINT_URI}/${exerciseId}/execution`;

	let response;

	try {
		response = await httpPatch(URL, paramsToSend, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// List exercises by ID
export const listExercisesById = async (accessToken, exerciseId) => {
	const options = buildDefaultOptions(accessToken);

	const URL = `${EXERCISE_ENDPOINT_URI}/${exerciseId}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


// List Periods Monthly
export const listPeriodsMonthly = async (accessToken, periodId=9) => {
	const options = buildDefaultOptions(accessToken);

	const URL = `${PERIODS_MONTHLY_ENDPOINT_URI}?periodId=${periodId}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report enabled date monthly period - Report Credit Execution 
export const getReportEnableDateMonthlyPeriodCreditExecution = async (accessToken, periodId=9) => {
	const options = buildDefaultOptions(accessToken);

	const URL = `${ENABLE_DATE_MONTHLY_PERIOD_CREDIT_EXECUTION_ENDPOINT_URI}?periodId=${periodId}`;

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

