import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useForm } from "react-hook-form";
import { Row, Card, Image, Form, Button, Spinner } from 'react-bootstrap';
import config from 'Config';

import logo from 'App/assets/images/logo_gobierno_misiones.png';
import LoggedOutCard from 'src/components/general/LoggedOutCard';
import FormFieldError from 'src/components/general/FormFieldError';

import { trySendForgotPasswordEmail } from 'src/redux/login/loginActionCreator';
import { getIsFetching } from 'src/redux/login/loginReducer';
import { LOGIN_URI } from 'src/routes';


const ForgotPasswordPage = props => {

	const dispatch = useDispatch();
	const { register, handleSubmit, reset, errors } = useForm();
	const isFetching = useSelector( state => getIsFetching(state) );

	const emailRequiredMsg = 'Debe ingresar un correo electrónico.';
	const emailValidationObj = { required: emailRequiredMsg };

	const onClickGoToLoginPage = event => {
		event.preventDefault();
		dispatch( push(LOGIN_URI) );
	};
	
	const onSubmit = data => {
		dispatch( trySendForgotPasswordEmail( data?.email, reset) );
	};

	const forgottenPA = <>
		<Row className='h-100 justify-content-center align-items-center my-3'>
			<Image src={logo} fluid />
		</Row>

		<Card.Title className='text-center mb-4 mt-1 text-main-color'>
			<span className='h4 text-main-color'>
				{config.appSettings.name} {config.appSettings.version}
			</span>
		</Card.Title>

		<hr />

		<h6 className='text-center mb-3 text-black-color'>Envío de correo electrónico para recuperar contraseña</h6>

		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group className='mx-3' controlId='emailControl'>
				<Form.Label size='lg' className='text-main-color'>
					Correo electrónico
				</Form.Label>
				<Form.Control name='email' size='lg' type='email' placeholder='example@example.com' ref={register(emailValidationObj)} className='placeholderOpacity'/>
				<FormFieldError errors={errors.email}/>
			</Form.Group>
			<Form.Group className='mx-3'>
				<Button size='lg' variant='success' className='w-100 mt-3' type='submit' disabled={isFetching}>
					{
						isFetching ?
							<Spinner animation='border'/>
						:
							'Enviar'
					}
				</Button>
			</Form.Group>
		</Form>

		<div className='text-center'>
			<a href='#' onClick={onClickGoToLoginPage}>
				Volver al Inicio de Sesión
			</a>
		</div>
	</>;

	return <LoggedOutCard cardContent={forgottenPA}/>;
};

export default ForgotPasswordPage;