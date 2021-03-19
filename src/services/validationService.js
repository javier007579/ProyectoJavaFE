import moment from 'moment';

export const PASSWORD_REGEX = /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}$/i;
export const PASSWORD_INVALID_MSG = 'La contraseña debe tener al menos 8 caracteres y debe incluir al menos una letra mayúscula, una minúscula y un número.';

export const isWeekday = (date) => {
	date = moment(date);
	const day = date.isoWeekday();
	return day !== 6 && day !== 7;
};

export const isNumeric = (num) => {
	return !isNaN(num);
}

export const isBoolean = value => (value === true || value === false);

export const isValidEmail = (mail) => {
	return ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) );
}

export const isEmptyString = value => !(value && typeof value === 'string' && value.trim() && value.trim().length > 0);

export const isNotEmptyArray = value => (Array.isArray(value) && value.length > 0);

export const isNotEmptyObject = value => ( typeof value === 'object' && Object.keys(value).length>0 );

export const validatePasswordFormat = value => ( RegExp(/^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}$/i).test(value) );