import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, httpPost, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const AFFECTATION_URI = `${API_BASE_URI}/expenses/affectations`;
const AFFECTATION_STATUS_URI = `${API_BASE_URI}/expenses/affectation-status`;
const AFFECTATION_STATUS_AVAILABLES_URI = `${AFFECTATION_STATUS_URI}/availables`;
const AFFECTATION_TRANSACTIONS_URI = `${API_BASE_URI}/expenses/affectation-transactions`;

export const listAffectationTypes = async( accessToken, params={} ) => {
	const queryString = buildURLQuery(params);
	const URL = `${AFFECTATION_STATUS_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	let response

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	};

	return response;
};


export const postAffectation = async( accessToken, body) => {
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpPost( AFFECTATION_URI, body, options);
	}
	catch(error) {
		return error;
	}

	return response;
};



// Affectation transactions (Endpoint: /v1/expenses/affectation-transactions)
export const getAffectationTransactions = async ( accessToken, params={} ) => {
	if( params?.filter ) {
		params.filter = JSON.stringify(params.filter);
	}
	const queryString = buildURLQuery(params);
	const URL = `${AFFECTATION_TRANSACTIONS_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	};

	return response;
};



// Availables affectations status
export const getAvailablesAffectationsStatus = async( accessToken, params ) => {
	if( !params )
		return;

	const paramsToSend = {
		sub_code_id: params?.sub_code_id,
		administrative_document_organism_code: params?.administrative_document_organism_code,
		administrative_document_number: params?.administrative_document_number,
		administrative_document_year: params?.administrative_document_year
	};

	const options = buildDefaultOptions(accessToken);
	const queryString = buildURLQuery(paramsToSend);
	const URL = `${AFFECTATION_STATUS_AVAILABLES_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	};

	return response;
};

// affectations subcode
export const getAffectationSubcode = async( accessToken, params ) => {
	if( !params )
		return;

	const paramsToSend = {};
	params.page ? paramsToSend.page = params.page : undefined;
	params.pagesize ? paramsToSend.pagesize = params.pagesize : undefined;
	params.filter ? paramsToSend.filter = JSON.stringify(params?.filter) : undefined;

	const options = buildDefaultOptions(accessToken);
	const queryString = buildURLQuery(paramsToSend);
	const URL = `${AFFECTATION_URI}?${queryString}`;

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	};

	return response;
};