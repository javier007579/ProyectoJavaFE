import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Form, Button, Col } from 'react-bootstrap';
import { faSave, faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FormFieldError from 'src/components/general/FormFieldError';

export const MODES = {
	ACCOUNT: 'ACCOUNT',
	CODE: 'CODE',
	SUBCODE: 'SUBCODE'
};

const ModalNewCodeSubcode = props => {

	const { show, setShow, mode=MODES.CODE, handleNewAccount, handleNewCode, handleNewSubcode, valueInputQs } = props;
	const { register, handleSubmit, errors } = useForm();

	// Title
	let modalTitleText;
	switch( mode ) {
		case MODES.CODE: {
			modalTitleText = 'Nuevo código';
			break;
		}
		case MODES.SUBCODE: {
			modalTitleText = 'Nuevo subcódigo';
			break;
		}
		case MODES.ACCOUNT: {
			modalTitleText = 'Nueva cuenta';
			break;
		}
		default: {
			modalTitleText = '';
			break;
		}
	};

	// Validations
	const numberRequiredMsg = 'Debe ingresar un número.';
	const numberValidationObj = { required: numberRequiredMsg, validate: value => (value<0||value>254) ? 'El número debe ser positivo y menor a 255.' : undefined };
	const nameRequiredMsg = 'Debe ingresar un nombre.';
	const nameValidationObj = { required: nameRequiredMsg}
	
	// Handle close
	const handleClose = () => {
		setShow(false);
	};

	// Setters data
	const handleSave = data => {
		switch(mode) {
			case MODES.CODE: {
				handleNewCode(data);
				break;
			}
			case MODES.SUBCODE: {
				handleNewSubcode(data);
				break;
			}
			case MODES.ACCOUNT: {
				handleNewAccount(data);
				break;
			}
			default: {
				break;
			}
		}
		handleClose();
	};

	// Focus Input
	const focusInputByElementID = focusID => {
		document.getElementById(focusID)?.focus();
	}

	useEffect(() => {
		focusInputByElementID('name');
	}, [show]);

	return <Modal show={show} onHide={handleClose}>
		<Modal.Header className='text-black-color' closeButton>
			
			<Modal.Title>
				{modalTitleText}
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Form onSubmit={handleSubmit(handleSave)}>
				<Form.Group className='text-black-color'>
					<Col className='text-right font-weight-bold font-italic'>
						<span className='text-danger d-flex mandatory-label'>
							<FontAwesomeIcon icon={faAsterisk} size='xs' className='mr-1 text-danger mandatory-asterisk' />
							Obligatorio
						</span>
					</Col>
					<Form.Label>
					<FontAwesomeIcon icon={faAsterisk} size='xs' className='mr-1 text-danger mandatory-asterisk' />
						Número:
					</Form.Label>
					<Form.Control
						ref={register(numberValidationObj) }
						type='number'
						name='number'
						defaultValue={valueInputQs}
						/>
					<FormFieldError errors={errors.number}/>
				</Form.Group>

				<Form.Group className='text-black-color'>
					<Form.Label>
					<FontAwesomeIcon icon={faAsterisk} size='xs' className='mr-1 text-danger mandatory-asterisk' />
						Nombre:
					</Form.Label>
					<Form.Control
						as="textarea" 
						rows={3}
						ref={register(nameValidationObj)}
						name='name'
						id='name'
						tabIndex='1'
					/>
					<FormFieldError errors={errors.name}/>
				</Form.Group>

				<Form.Group className='d-flex justify-content-between mt-4 mb-1'>
					<Button
						variant='secondary' 
						onClick={handleClose}
						tabIndex='3'
					>
						Cerrar
					</Button>
					<Button 
						variant='primary' 
						type='submit'
						tabIndex='2'
					>
						Guardar
					</Button>
				</Form.Group>
			</Form>
		</Modal.Body>
	</Modal>;
};

export default ModalNewCodeSubcode;