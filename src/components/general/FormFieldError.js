import React from 'react';
import { Alert } from 'react-bootstrap';

const FormFieldError = props => {
	const { errors=false } = props;
	return <>
		{
			errors ?
				<Alert variant='danger' className='form-field-error mb-0 py-1 mt-1'>
					{errors?.message}
				</Alert>
			: null
		}
	</>;
};

export default FormFieldError;