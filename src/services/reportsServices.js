import config from 'Config';
import { buildDefaultOptions } from './globalServices';
import { httpGet, httpPost, buildURLQuery } from './httpServices';

const API_BASE_URI = `${config.apis.presupuestoApi.URL}`;
const REQUEST_FUND_API_BASE_URI = `${config.apis.fundsRequestsApi.URL}`;
const REPORTS_ENDPOINT_URI = '/expenses/reports/';
const REPORTS_ENDPOINT_REQUEST_FUND_URI = '/reports/';
const REPORT_CONSOLIDATED_PURPOSE_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}consolidated-purpose`;
const REPORT_CONSOLIDATED_ECONOMIC_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}consolidated-economic`;


// Report consolidated by purpose
export const getReportConsolidatedByPurpose = async (accessToken, data) => {
	const queryString = buildURLQuery(data);
	const URL = `${API_BASE_URI}${REPORT_CONSOLIDATED_PURPOSE_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


// Report consolidated by economic
export const getReportConsolidatedEconomic = async (accessToken, data) => {
	const queryString = buildURLQuery(data);
	const URL = `${API_BASE_URI}${REPORT_CONSOLIDATED_ECONOMIC_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



//Jurisdiction Analytic
const REPORT_JURISDICTION_ANALYTIC_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}analytic-jurisdiction`;

export const getReportJurisdictionAnalytic = async (accessToken, data) => {
	const queryString = buildURLQuery(data);
	const URL = `${API_BASE_URI}${REPORT_JURISDICTION_ANALYTIC_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



//Organism Analytic
const REPORT_ORGANISM_ANALYTIC_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}analytic-organization`;

export const getReportOrganismAnalytic = async (accessToken, data) => {
	const queryString = buildURLQuery(data);
	const URL = `${API_BASE_URI}${REPORT_ORGANISM_ANALYTIC_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



//Jurisdiction Total
const REPORT_JURISDICTION_TOTAL_PURPOSE_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}jurisdiction-purpose`;
const REPORT_JURISDICTION_TOTAL_ECONOMIC_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}jurisdiction-economic`;
//Jurisdiction Total By Purpose
export const getReportJurisdictionTotalByPurpose = async (accessToken, data) => {
	const queryString = buildURLQuery(data);
	const URL = `${API_BASE_URI}${REPORT_JURISDICTION_TOTAL_PURPOSE_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



//Jurisdiction Total By Economic
export const getReportJurisdictionTotalEconomic = async (accessToken, data) => {
	const queryString = buildURLQuery(data);
	const URL = `${API_BASE_URI}${REPORT_JURISDICTION_TOTAL_ECONOMIC_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



// Report Organization Total by Purpose
const REPORT_ORGANIZATION_TOTAL_PURPOSE_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}organization-purpose`;
export const getReportOrganizationTotalByPurpose = async (accessToken, data) => {
	const queryString = buildURLQuery(data);
	const URL = `${API_BASE_URI}${REPORT_ORGANIZATION_TOTAL_PURPOSE_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



// Report Organization Total by Economic
const REPORT_ORGANIZATION_TOTAL_ECONOMIC_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}organization-economic`;
export const getReportOrganizationTotalByEconomic = async (accessToken, data) => {
	const queryString = buildURLQuery(data);
	const URL = `${API_BASE_URI}${REPORT_ORGANIZATION_TOTAL_ECONOMIC_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



// Report Crossed
const REPORT_CROSSED_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}crossed`;
export const getReportCrossed = async (accessToken, data) => {
	const queryString = buildURLQuery(data);
	const URL = `${API_BASE_URI}${REPORT_CROSSED_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


// Report Instrument Legal Modify
const REPORT_INSTRUMENT_LEGAL_MODIFY_ENDPOINT_URI = `${REPORTS_ENDPOINT_URI}legal-instrument`;
export const getReportInstrumentLegalModify = async (accessToken, data) => {
	const queryString = buildURLQuery(data);

	const URL = `${API_BASE_URI}${REPORT_INSTRUMENT_LEGAL_MODIFY_ENDPOINT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report affectations by administrative document
const REPORT_AFFECTATIONS_BY_ADMINISTRATIVE_DOCUMENT_URI = `${REPORTS_ENDPOINT_URI}affectations-document-administrative`;
export const getReportAffectationsByAdministrativeDocument = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_AFFECTATIONS_BY_ADMINISTRATIVE_DOCUMENT_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};



// Report movement
const REPORT_MOVEMENT_URI = `${REPORTS_ENDPOINT_URI}movements`;
export const getReportMovement = async (accessToken, movementId, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_MOVEMENT_URI}/${movementId}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Download report by URL
export const getReportByURL = async (accessToken, reportUrl) => {
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(reportUrl, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report Credit Modify - Report Credit Execution 
const REPORT_CREDIT_MODIFY_CREDIT_EXECUTION_URI = `${REPORTS_ENDPOINT_URI}credit-modification-status`;
export const getReportCreditModifyCreditExecution = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_CREDIT_MODIFY_CREDIT_EXECUTION_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report Table Totals - Report Credit Execution 
const REPORT_TABLE_TOTALS_CREDIT_EXECUTION_URI = `${REPORTS_ENDPOINT_URI}totals`;
export const getReportTableTotalsCreditExecution = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_TABLE_TOTALS_CREDIT_EXECUTION_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report Budget status - Report Credit Execution 
const REPORT_BUDGET_STATUS_CREDIT_EXECUTION_URI = `${REPORTS_ENDPOINT_URI}budget-execution-status`;
export const getReportBudgetStatusCreditExecution = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_BUDGET_STATUS_CREDIT_EXECUTION_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report Works Budget Analytical Record - Report Credit Execution 
const REPORT_WORKS_BUDGET_ANALYTICAL_RECORD_CREDIT_EXECUTION_URI = `${REPORTS_ENDPOINT_URI}analytic-budget-accounting`;
export const getReportWorksBudgetAnalyticalRecordCreditExecution = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_WORKS_BUDGET_ANALYTICAL_RECORD_CREDIT_EXECUTION_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report Movements Status - Report Credit Execution 
const REPORT_MOVEMENTS_STATUS_CREDIT_EXECUTION_URI = `${REPORTS_ENDPOINT_URI}credit-movements-status`;
export const getReportMovementsStatusCreditExecution = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_MOVEMENTS_STATUS_CREDIT_EXECUTION_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report Delayed Files - Report Credit Execution 
const REPORT_DELAYED_FILES_CREDIT_EXECUTION_URI = `${REPORTS_ENDPOINT_URI}pending-administrative-documents`;
export const getReportDelayedFilesCreditExecution = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_DELAYED_FILES_CREDIT_EXECUTION_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report balance status payment list - Report Credit Execution 
const REPORT_BALANCE_STATUS_PAYMENT_LIST_CREDIT_EXECUTION_URI = `${REPORTS_ENDPOINT_URI}payments-list`;
export const getReportBalanceStatusPaymentListCreditExecution = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_BALANCE_STATUS_PAYMENT_LIST_CREDIT_EXECUTION_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


// Report Budget Analytical Accounting - Report Credit Execution 
const REPORT_BUDGET_ANALYTICAL_ACCOUNTING_CREDIT_EXECUTION_URI = `${REPORTS_ENDPOINT_URI}analytic-budget-accounting`;
export const getReportBudgetAnalyticalAccountingCreditExecution = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_BUDGET_ANALYTICAL_ACCOUNTING_CREDIT_EXECUTION_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report Budget status generated- Report Credit Execution 
const REPORT_BUDGET_STATUS_CREDIT_EXECUTION_GENERATED_URI = `${REPORTS_ENDPOINT_URI}report`;
export const getReportBudgetStatusCreditExecutionGenerated = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${API_BASE_URI}${REPORT_BUDGET_STATUS_CREDIT_EXECUTION_GENERATED_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	} 8

	return response;
};

// Report Crossed

const REPORT_BUDGETGENERATEDLIST_URI = `${REPORTS_ENDPOINT_URI}stored-reports`;
export const getReportBudgetGenerateList = async (accessToken) => {

	const URL = `${API_BASE_URI}${REPORT_BUDGETGENERATEDLIST_URI}`;
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

// Report delivery orders - Report Request Fund
const REPORT_DELIVERY_ORDERS_FUND_REQUEST_URI = `${REPORTS_ENDPOINT_REQUEST_FUND_URI}delivery-orders`;
export const getReportDeliveryOrdersFundRequest = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${REQUEST_FUND_API_BASE_URI}${REPORT_DELIVERY_ORDERS_FUND_REQUEST_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report payment order administrative service fund request - Report Request Fund
const REPORT_PAYMENT_ORDER_ADMINISTRATIVE_SERVICE_FUND_REQUEST_URI = `${REPORTS_ENDPOINT_REQUEST_FUND_URI}payment-order-administrative-service`;
export const getReportPaymentOrderAdministrativeServiceFundRequest = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${REQUEST_FUND_API_BASE_URI}${REPORT_PAYMENT_ORDER_ADMINISTRATIVE_SERVICE_FUND_REQUEST_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report service direction - Report Request Fund
const REPORT_SERVICE_DIRECTION_FUND_REQUEST_URI = `${REPORTS_ENDPOINT_REQUEST_FUND_URI}fund-request-service-direction`;
export const getReportReportServiceDirectionFundRequest = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${REQUEST_FUND_API_BASE_URI}${REPORT_SERVICE_DIRECTION_FUND_REQUEST_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};


// Report service direction - Report Request Fund
const REPORT_FUND_REQUEST_URI = `${REPORTS_ENDPOINT_REQUEST_FUND_URI}fund-request`;
export const getReportReportFundRequest = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${REQUEST_FUND_API_BASE_URI}${REPORT_FUND_REQUEST_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;
	console.log("URL es ", URL)
	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report service direction - Report Request Fund
const REPORT_PROVIDER_FUND_REQUEST_URI = `${REPORTS_ENDPOINT_REQUEST_FUND_URI}fund-request-provider`;
export const getReportProviderFundRequest = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${REQUEST_FUND_API_BASE_URI}${REPORT_PROVIDER_FUND_REQUEST_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};

// Report service fund request bank - Report Request bank
const REPORT_FUND_REQUEST_BANK_URI = `${REPORTS_ENDPOINT_REQUEST_FUND_URI}fund-request-bank-account`;
export const getReportFundRequestBankAccount = async (accessToken, params) => {
	const queryString = buildURLQuery(params);
	const URL = `${REQUEST_FUND_API_BASE_URI}${REPORT_FUND_REQUEST_BANK_URI}?${queryString}`;
	const options = buildDefaultOptions(accessToken, 'blob');

	let response;

	try {
		response = await httpGet(URL, options);
	}
	catch (error) {
		return error;
	}

	return response;
};