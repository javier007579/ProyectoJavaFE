import config from 'Config';
import { isNotEmptyArray } from 'src/services/validationService';


export const getCurrentYear = () => new Date().getFullYear();

export const getCurrentPeriod = periods => {
	let currentPeriod;
	if( isNotEmptyArray(periods) ) {
		currentPeriod = periods?.find( period => (period?.year == getCurrentYear()) );
		if( !currentPeriod ) {
			currentPeriod = periods[0];
		}
	}
	return currentPeriod;
};

export const parseIntOrUndefined = valueToParse => {
	const parsedValue = parseInt(valueToParse);
	return isNaN(parsedValue) ? undefined : parsedValue;
};

export const parseFloatOrUndefined = valueToParse => {
	const parsedValue = parseFloat(valueToParse);
	return isNaN(parsedValue) ? undefined : parsedValue;
};

export const removeLastChar = (text, char) => {
    if( text && char && typeof text === 'string' && typeof char === 'string' ) {
        return text.slice( 0, text.lastIndexOf(char) );
    }
};

export const openStreamPDFFile = streamPdf => {
	//Create a Blob from the PDF Stream
	const file = new Blob(
		[streamPdf],
		{type: 'application/pdf'});

	//Build a URL from the file
	const fileURL = URL.createObjectURL(file);

	//Open the URL on new Window
	window.open(fileURL);
}

// Getters HTTP request headers
export const getContentTypeHeader = headers => ( headers["Content-Type"] || headers["content-type"] );

export const downloadStreamFile = ( response, partialFileName ) => {
	// Response data
	const headers = response?.headers;
	const streamFile = response?.data;
	const mimeType = getContentTypeHeader(headers);

	// File attributes
	const today = new Date();
	const dateString = `${today.getFullYear()}_${today.getMonth()+1}_${today.getDate()}`;
	const fileExtension = extractFileExtensionFromContentType(mimeType);
	const fileName = `${dateString}-${partialFileName}.${fileExtension}`;

	// It is necessary to create a new blob object with mime-type explicitly set
	// otherwise only Chrome works like it should
	var newBlob = new Blob([streamFile], {type: mimeType})

	// IE doesn't allow using a blob object directly as link href
	// instead it is necessary to use msSaveOrOpenBlob
	if (window.navigator && window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveOrOpenBlob(newBlob);
		return;
	} 

	// For other browsers: 
	// Create a link pointing to the ObjectURL containing the blob.
	const data = window.URL.createObjectURL(newBlob);
	var link = document.createElement('a');
	link.href = data;
	link.download = fileName;
	link.click();
	setTimeout(function(){
		// For Firefox it is necessary to delay revoking the ObjectURL
		window.URL.revokeObjectURL(data);
	}, 100);
};

// Check if a date is valid
export const isValidDate = dateToValidate => {
	let retorno = false;
	if( dateToValidate ) {
		const dateObj = new Date(dateToValidate);
		retorno = !isNaN(dateObj.getFullYear());
	}
	return retorno;
};

// Converts a date into strin with format 'DD/MM/YYYY'
export const dateToStringFormatedToShowARG = dateToConvert => {
	let retorno;
	if( isValidDate(dateToConvert) ) {
		const theDateObj = new Date(dateToConvert);
		const theYear = theDateObj.getFullYear();
		let theMont = (theDateObj.getMonth()+1)?.toString();
		theMont = theMont.length==1 ? '0'+theMont : theMont;
		let theDay = theDateObj.getDate()?.toString();
		theDay = theDay.length==1 ? '0'+theDay : theDay;
		retorno = `${theDay}/${theMont}/${theYear}`;
	}
	return retorno;
};

// Converts a date into strin with format 'YYYY/MM/DD'
export const dateToStringFormatedToShowUSA = dateToConvert => {
	let retorno;
	if( isValidDate(dateToConvert) ) {
		const theDateObj = new Date(dateToConvert);
		const theYear = theDateObj.getFullYear();
		let theMont = (theDateObj.getMonth()+1)?.toString();
		theMont = theMont.length==1 ? '0'+theMont : theMont;
		let theDay = theDateObj.getDate().toString();
		theDay = theDay.length==1 ? '0'+theDay : theDay;
		retorno = `${theYear}-${theMont}-${theDay}`;
	}
	return retorno;
};

// Converts a date into strin with format 'YYYY-MM-DD' return 'DD/MM/YYYY'
export const dateNeutralFormatedToShowARG = dateToConvert => {
	let retorno;
	if( isValidDate(dateToConvert) ) {
		retorno = dateToConvert.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
	}
	return retorno;
};


// Control date is correct
export const dateToControl = dateToControl => {
	let retorno;
	if( isValidDate(dateToControl) ) {
		let dateControlMinimo = '1970-01-01';
		//date today
		let date = new Date();
		let dateToday = ( date.getFullYear()  + "-" + (date.getMonth() +1) + "-" + date.getDate() );

		if (dateToControl && dateToControl < dateControlMinimo){
			 retorno = true;
		}
		else if (dateToControl && dateToControl > dateToday){
			retorno = true;
	    }  
	}
	return retorno;
};



//Formater number in Formater Money Peso AR
export const formatterPeso = new Intl.NumberFormat('es-CO', {
	style: 'currency',
	currency: 'COP',
	minimumFractionDigits: 2
})

export const extractFileExtensionFromContentType = mimeType => {
	switch( mimeType ) {
		case 'application/pdf': {
			return 'pdf';
		}
		case 'application/vnd.ms-excel': {
			return 'xls';
		}
		case 'image/png': {
			return 'png';
		}
		case 'image/jpeg': {
			return 'jpg';
		}
		case 'text/plain': {
			return 'txt';
		}
		default: {
			return 'txt';
		}
	}
};

// Builds the "Credit number"(Numero de partida) froms a credit object
export const getCreditNumber = creditData => {
	const serviceNumber = creditData.service?.number;
	const jurisdicctionNumber = creditData.organization?.jurisdiction?.number;
	const organizationNumber = creditData.organization?.number;
	const characterCode = creditData.character?.code;
	const accountNumber = creditData.account?.number;
	const purposeNumber = creditData.functionality?.purpose?.number;
	const functionalityNumber = creditData.functionality?.number;

	const sectionNumber = creditData.partialBudget?.principalBudget?.sector?.section?.number;
	const sectorNumber = creditData.partialBudget?.principalBudget?.sector?.number;
	const principalBudgetNumber = creditData.partialBudget?.principalBudget?.number;
	const partialBudgetNumber = creditData.partialBudget?.number;
	return `${serviceNumber}-${jurisdicctionNumber}-${organizationNumber}-${characterCode}-${accountNumber}-${purposeNumber}-${functionalityNumber}-${sectionNumber}-${sectorNumber}-${principalBudgetNumber}-${partialBudgetNumber}`;
};

// Returns an array with current year and three previous year.
export const getAdministrativeDocumentYearsOptions = () => {
	const currentYear = getCurrentYear();
	const yearsOptions = [ currentYear ];
	for( let i=0; i<5; i++ ) {
		yearsOptions.push( currentYear-(i+1) );
	}
	return yearsOptions;
};

export const getExerciseTypeValueToShow = value => {
	switch(value) {
		case 'FORMULATION':
			return 'Formulación';
		case 'EXECUTION':
			return 'Ejecución';
		case 'COMPLEMENTARY':
			return 'Complementario';
		case 'CLOSED':
			return 'Cerrado';
		default:
			return;
	}
};

export const getOrderPayTypeValueToShow = value => {
	switch(value) {
		case 'ORDEN_DE_PAGO':
			return 'Orden de pago';
		case 'ORDEN_DE_PAGO_DE_HABERES':
			return 'Orden de pago de haberes';
		case 'ORDEN_DE_PAGO_INSTITUCION_DE_FONDOS_PERMANENTES':
			return 'Orden de Pago institución de fondos permanentes';
		case 'ORDEN_DE_CARGO':
			return 'Orden de cargo';
		case 'ORDEN_DE_PAGO_REMESAS':
			return 'Orden de pago remesas';
		case 'ORDEN_DE_PAGO_DEPOSITO_INDEBIDO ':
			return 'Orden de pago deposito indebido';
		default:
			return;
	}
};

export const numberNegativeRed = item => {	
	return `${item < 0 ? 'text-danger' : ''}`;
}



// Get credit attribute name for "Control de partida" tree
export const getCreditAttributeName = item => {
	let retorno = '';
	if( item ) {
		if( item?.jurisdictions ) {
			retorno = 'SERVICIO';
		}
		else if( item?.organizations ) {
			retorno = 'JURISDICCIÓN';
		}
		else if( item?.characters ) {
			retorno = 'UNIDAD DE ORGANIZACIÓN';
		}
		else if( item?.accounts ) {
			retorno = 'CARÁCTER';
		}
		else if( item?.purposes ) {
			retorno = 'CUENTA';
		}
		else if( item?.functionalities ) {
			retorno = 'FINALIDAD';
		}
		else if( item?.sections ) {
			retorno = 'FUNCIÓN';
		}
		else if( item?.sectors ) {
			retorno = 'SECCIÓN';
		}
		else if( item?.principalBudgets ) {
			retorno = 'SECTOR';
		}
		else if( item?.partialBudgets ) {
			retorno = 'PARTIDA PRINCIPAL';
		}
		else if( item?.codes ) {
			retorno = 'PARTIDA PARCIAL';
		}
		else if( item?.subCodes ) {
			retorno = 'CÓDIGO';
		}
	}

	return retorno;
};

//Formater Separdor de Miles
export const formaterNumberThousandsSeparator = valueNumber => {
	
	let retorno;
	
		var entrada = valueNumber?.split(','),
		parteEntera = entrada[0].replace(/\./g, ''),
		parteDecimal = entrada[1],
		salida = parteEntera?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
		
		retorno = salida + (parteDecimal !== undefined ? ',' + parteDecimal : '');

	return retorno;
};

// Focus Input
export const focusSelectInputByElementID = focusID => {
	//Focus
	document.getElementById(focusID).focus();
	//Select
	document.getElementById(focusID).select();
}