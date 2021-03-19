import config from 'Config';
import axios from 'axios';
import { buildDefaultOptions } from './globalServices';
import { httpGet, httpPost, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const CREDIT_URI = `${API_BASE_URI}/expenses/credits`;
const SUBCODE_URI = `${API_BASE_URI}/expenses/sub-codes`;

export const listCredits = async ( accessToken, page, pageSize, filter ) => {
	const jsonFilter = filter ? JSON.stringify(filter) : undefined;

	const setbuildURLQuery = {
		pageSize,
        page,
        filter: jsonFilter
    }
    
	const queryString = buildURLQuery(setbuildURLQuery);
	const URL = `${CREDIT_URI}?${queryString}`;
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

export const getCodesFromCreditId = async ( accessToken, creditId ) => {
	const URL = `${CREDIT_URI}/${creditId}/codes`;
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		return error;
	}
	
	return response;
}



export const postCredit = async ( accessToken, data ) => {
	const options = buildDefaultOptions(accessToken);

	let response;

	try {
		response = await httpPost( CREDIT_URI, data, options );
	}
	catch( error ) {
		return error;
	}
	
	return response;
};



export const getTotalAmounts = async ( accessToken, filter, cancelToken ) => {
	const jsonFilter = filter ? JSON.stringify(filter) : undefined;

	const setbuildURLQuery = {
        filter: jsonFilter
    }
    
	const queryString = buildURLQuery(setbuildURLQuery);

	const URL = `${SUBCODE_URI}/amounts/totals?${queryString}`;
	const options = buildDefaultOptions(accessToken);

	cancelToken ? options.cancelToken = cancelToken : undefined;

	let response;

	try {
		response = await httpGet( URL, options );
	}
	catch( error ) {
		if (axios.isCancel){//Cancel Request
			return {status: 204}
		}
		return error;
	}

	return response;
};