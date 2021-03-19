import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, buildURLQuery, httpPost } from './httpServices'

const API_BASE_URI = `${config.apis.coreApi.URL}`;
const LEGAL_INSTRUMENT_ENDPOINT_URI = '/legal-instruments';
const FILE_TO_LEGAL_INSTRUMENT_ENDPOINT_URI = '/files';

// GET legal instrument
export const getLegalInstruments = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${LEGAL_INSTRUMENT_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error.response;
	}

	return response;
};

// POST legal instrument
export const postLegalInstrument = async (accessToken, params) => {
	const URL = `${API_BASE_URI}${LEGAL_INSTRUMENT_ENDPOINT_URI}`;
	const options = buildDefaultOptions(accessToken);

	options.headers['Content-Type'] = 'multipart/form-data';
	const formData = new FormData();
	formData.append("file", params?.file[0]);
	formData.append("date", params?.date);
	formData.append("description", params?.description);
	formData.append("number", params?.number);
	formData.append("legalInstrumentType.id", params?.legalInstrumentTypeId);
	formData.append("legalInstrumentType.name", params?.legalInstrumentTypeName);

	let response;

	try {
		response = await httpPost(URL, formData, options);
	}
	catch (error) {
		return error.response;
	}

	return response;
};

// GET file of legal instrument
export const getFileOfLegalInstruments = async (accessToken, legalInstrumentId) => {
	const URL = `${API_BASE_URI}${LEGAL_INSTRUMENT_ENDPOINT_URI}/${legalInstrumentId}${FILE_TO_LEGAL_INSTRUMENT_ENDPOINT_URI}`;
	const options = buildDefaultOptions(accessToken, 'blob');
	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error.response;
	}
	
	return response;
};

// POST file to legal instrument
export const postFileToLegalInstruments = async (accessToken, legalInstrumentId, params) => {
	const URL = `${API_BASE_URI}${LEGAL_INSTRUMENT_ENDPOINT_URI}/${legalInstrumentId}${FILE_TO_LEGAL_INSTRUMENT_ENDPOINT_URI}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpPost(URL, params, options);
	}
	catch (error) {
		return error.response;
	}

	return response;
};