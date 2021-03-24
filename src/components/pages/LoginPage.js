import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useForm } from 'react-hook-form';
import { Row, Card, Image, Form, Button, Spinner } from 'react-bootstrap';
import config from 'Config';



import LoggedOutCard from 'src/components/general/LoggedOutCard';
import FormFieldError from 'src/components/general/FormFieldError';
import { tryLogInAction } from 'src/redux/login/loginActionCreator';
import { getIsFetching } from 'src/redux/login/loginReducer';
import {login,forgetPassword,emailExample, password, email, passwordRequiredMsg, emailRequiredMsg, acces} from 'src/utils/label';

import { FORGOT_PASSWORD_URI } from 'src/routes';

const LoginPage = props => {

	const dispatch = useDispatch();
	const { register, handleSubmit, errors } = useForm();

	const isFetching = useSelector(state => getIsFetching(state));

	const emailValidationObj = { required: emailRequiredMsg };
	const passwordValidationObj = { required: passwordRequiredMsg };

	const onClickSubmitForm = data => {
		const { email, password } = data;
		dispatch(tryLogInAction(email, password));
	};

	const onClickGoToForgotPasswordPage = event => {
		event.preventDefault();
		dispatch(push(FORGOT_PASSWORD_URI));
	};

	const cardBody = <>
		<Row className='h-100 justify-content-center align-items-center my-3'>
		{/* 	<Image src={logo} fluid /> */}
		</Row>

		<Row className='h-100 justify-content-center align-items-center my-3'>
		{/* 	<Image src={logoContaduria} fluid /> */}
		</Row>

		<Card.Title className='text-center mb-4 mt-1 text-main-color'>
			<span className='h4 text-main-color'>
				{config.appSettings.name} {config.appSettings.version}
			</span>
		</Card.Title>

		<hr />

		<h3 className='text-black-color text-center mb-3'>{login}</h3>

		<Form onSubmit={handleSubmit(onClickSubmitForm)}>
			<Form.Group className='mx-3' controlId='emailControl'>
				<Form.Label size='lg' className='text-main-color'>
					{email}
				</Form.Label>
				<Form.Control size='lg' type='email' placeholder={emailExample} name='email' ref={register(emailValidationObj)} className='placeholderOpacity' />
				<FormFieldError errors={errors.email} />
			</Form.Group>
			<Form.Group className='mx-3' controlId='passwordControl'>
				<Form.Label size='lg' className='text-main-color'>
					{password}
				</Form.Label>
				<Form.Control size='lg' type='password' placeholder='•••••••' name='password' ref={register(passwordValidationObj)} className='placeholderOpacity' />
				<FormFieldError errors={errors.password} />
			</Form.Group>
			<Form.Group className='mx-3'>
				<Button size='lg' variant='success' className='w-100 mt-3' type='submit' disabled={isFetching}>
					{
						isFetching ?
							<Spinner animation='border' />
							:
							acces
					}
				</Button>
			</Form.Group>
		</Form>

		<div className='text-center'>
			<a href='#' onClick={onClickGoToForgotPasswordPage}>
				¿{forgetPassword}?
			</a>
		</div>
	</>

	return <LoggedOutCard cardContent={cardBody} />;
};

export default LoginPage;