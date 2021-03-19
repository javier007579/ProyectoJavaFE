import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Card, Form, Spinner, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

import PageTitle from 'src/components/general/PageTitle';
import FormFieldError from 'src/components/general/FormFieldError';
import { validatePasswordFormat, PASSWORD_INVALID_MSG } from 'src/services/validationService';
import { LOGIN_URI } from 'src/routes';
import { newPassword,  required, cancel, save, confirmNewPassword, changePassword, currentPassword } from 'src/utils/label';

import { logout } from 'src/redux/login/loginActions';
import { tryCurrentPassword } from 'src/redux/login/loginActionCreator';

import { tryGetListUserProfile, tryGetListUserXApplicationXProfile, tryPutUserChangePassword, tryGetUserList } from 'src/redux/user/userActionCreator';
import { clearUserList, clearProfileToEdit } from 'src/redux/user/userActions';
import { getUserToEdit, getUserEditChangePasswordIsFetching, getUserListByUserEmail } from 'src/redux/user/userReducer';

const ResetPasswordPage = props => {

    const dispatch = useDispatch();
	const { register, handleSubmit, errors, getValues } = useForm();

	const doLogout = () => dispatch(logout());

	useEffect(() => {
		dispatch(clearUserList());
		dispatch(clearProfileToEdit());
		dispatch(tryGetListUserProfile());

		dispatch(tryGetListUserXApplicationXProfile());
		dispatch(tryGetListUserProfile());
		dispatch(tryGetUserList());
		
	}, []);


	// Form validation
	const passwordConfirmRequiredMsg = 'Debe ingresar una confirmación de contraseña.';
	const passwordConfirmSameMsg = 'Las contraseñas ingresadas no coinciden.';
	const samePasswordValidation = value => {
		const passwordInputValue = getValues('password');
		if (passwordInputValue) {
			return (value === passwordInputValue ? undefined : passwordConfirmSameMsg);
		}
		return true;
	};

	const passwordValidationObj = { validate: value => (validatePasswordFormat(value) ? undefined : PASSWORD_INVALID_MSG) };
	const passwordConfirmValidationObj = { required: passwordConfirmRequiredMsg, validate: samePasswordValidation };

	// User to edit data
	const userToEdit = useSelector(state => getUserToEdit(state));
	
	const userEditChangePasswordIsFetching = useSelector(state => getUserEditChangePasswordIsFetching(state));

	const userDataEmail = useSelector(state => getUserListByUserEmail(state, userToEdit) );

	const [currentPasswordLike, setCurrentPasswordLike] = useState(false);

	const [currentPasswordEmpty, setCurrentPasswordEmpty] = useState(false);
	
	// Form submit
	const onFormSubmit = data => {

		let currentPassword = data?.currentpassword;
		let newPassword = data?.password;

		if(currentPassword?.length === 0){
			setCurrentPasswordEmpty(true);
		}else{
			setCurrentPasswordEmpty(false);
		}

		if (currentPassword === newPassword){
			setCurrentPasswordLike(true)
			return 0;
		}else{
		
		let nameUserDataEmail = userDataEmail?.email;
		swal({
			title: 'Confirmación',
			text: '¿Confirma que realmente desea cambiar la contraseña del usuario: '  + nameUserDataEmail + '?',
			icon: 'warning',
			buttons: ["Cancelar", "Confirmar"]
		})
			.then((willDelete) => {
				if (willDelete) {

					const userData = {
						password: data?.password,
						id: userDataEmail?.id,
						name: userDataEmail?.alias,
						alias: userDataEmail?.alias,
						email: userDataEmail?.email,
						valid: userDataEmail?.valid,
					};

					const email = nameUserDataEmail;
					const password = data.currentpassword;
					dispatch( tryCurrentPassword(email, password) ).then(
						response => {
							if( !response.hasOwnProperty("error") ){
								
								dispatch( tryPutUserChangePassword(userData) ).then(
									response => {
										if (response?.status == 200 ){
											doLogout();
											return null;
										}
									}
								);

							}
						}

					);

				} else {
					/*   swal('El usuario esta a salvo!'); */
				}
			});
		}
		
	};


	return <Container className='mb-5'>
		<Card>

			<PageTitle text='Usuarios' />

			<Container>

				<Card className='mb-3'>
					<Card.Header>
						<h6 className='mb-0'>{changePassword}</h6>
					</Card.Header>
					<Card.Body >

						<Row>
							<Col xs={8}>
								<h6 className='mb-4 text-black-color'>

								</h6>
							</Col>

							<Col xs={4} className='text-right font-weight-bold font-italic'>
								<span className='text-danger d-flex mandatory-label'>
									<FontAwesomeIcon icon={faAsterisk} size='xs' className='mr-1 text-danger mandatory-asterisk' />
									{required}
								</span>
							</Col>
						</Row>

						<Form onSubmit={handleSubmit(onFormSubmit)}>

						<Form.Group as={Row} controlId='currentPassword'>
								<Form.Label className='text-right text-black-color pr-0 pl-0 d-flex mandatory-label' column sm={4}>
									<FontAwesomeIcon icon={faAsterisk} size='xs' className='mr-1 text-danger mandatory-asterisk' />
									{currentPassword}:
								</Form.Label>
								<Col sm={4}>
									<Form.Control 
										ref={register()} 
										type='password' 
										placeholder={currentPassword} 
										name='currentpassword' 
										id='currentpassword' 
									/>
									
									{
										currentPasswordEmpty
										?
										<>
											<div className='alert alert-danger form-field-error mb-0 py-1 mt-1' role='alert'>
												{'El campo no debe estar vacío.'}
											</div>
										</>
										:
										null
									}
								</Col>
								
							</Form.Group>

							<Form.Group as={Row} controlId='password'>
								<Form.Label className='text-right text-black-color pr-0 pl-0 d-flex mandatory-label' column sm={4}>
									<FontAwesomeIcon icon={faAsterisk} size='xs' className='mr-1 text-danger mandatory-asterisk' />
									{newPassword}:
								</Form.Label>
								<Col sm={4}>
									<Form.Control 
										ref={register(passwordValidationObj)} 
										type='password' 
										placeholder={newPassword} 
										name='password' 
										id='password' 
									/>
									<FormFieldError errors={errors?.password} />
									{
										currentPasswordLike
										?
										<>
											<div className='alert alert-danger form-field-error mb-0 py-1 mt-1' role='alert'>
												{'La nueva contraseña debe ser distinta a la anterior.'}
											</div>
										</>
										:
										null
									}
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId='passwordConfirm'>
								<Form.Label className='text-right text-black-color pr-0 pl-0 d-flex mandatory-label' column sm={4}>
									<FontAwesomeIcon icon={faAsterisk} size='xs' className='mr-1 text-danger mandatory-asterisk' />
									{confirmNewPassword}:
								</Form.Label>
								<Col sm={4}>
									<Form.Control 
										ref={register(passwordConfirmValidationObj)} 
										type='password' 
										placeholder={confirmNewPassword} 
										name='passwordConfirm' 
										id='passwordConfirm'
									/* 	onBlur={item =>onBlurCurrentPasswordLike(item.target.value)}  */
									/>
									<FormFieldError errors={errors?.passwordConfirm} />
									
								</Col>
							</Form.Group>


							<div class='d-flex justify-content-around mt-4 mb-3'>
								<Button variant='danger' size='lg' disabled={userEditChangePasswordIsFetching} onClick={() => dispatch(push(LOGIN_URI))}>
									{cancel}
								</Button>

								<span className={(userEditChangePasswordIsFetching ? '' : 'hidden')}>
									<Spinner animation='border' />
								</span>

								<Button type='submit' variant='success' size='lg' disabled={userEditChangePasswordIsFetching} >
									{save}
								</Button>
							</div>

						</Form>
					</Card.Body>
				</Card>

			</Container>
		</Card>
	</Container>;
	
};

export default ResetPasswordPage;