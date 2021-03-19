import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Card, Form, Alert, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

import { tryPutUserProfile } from 'src/redux/user/userActionCreator';
import { INITIAL_URI } from 'src/routes';
import {cancel,save,name,required,editGroup,groups} from 'src/utils/label';

const ProfileEditPage = props => {

	// Profile details
	const profileDetailsData = useSelector( state => state.userReducer.profileData );

	const dispatch = useDispatch();
	const { register, handleSubmit} = useForm();

	const onFormSubmit = data => {
		dispatch( tryPutUserProfile ( data.id, data.name ) );
	};

	return <Container> 
		<Card>
		<Container>
		
			<div className='pt-3'>
				<Alert variant='success'>
					<h5 className='mb-0 text-black-color'>{groups}</h5>
				</Alert>
			</div>

				<Card className='mb-3'>
					<Card.Header>
						<h6 className='mb-0'>{editGroup}</h6>
					</Card.Header>
					<Card.Body >

						<Row>
							<Col xs={8}>
								<h6 className='mb-4 text-black-color'>
								
								</h6>
							</Col>
						
							<Col xs={4} className='text-right font-weight-bold font-italic'>
								<span className='text-danger d-flex mandatory-label'>
									<FontAwesomeIcon icon={faAsterisk} size='xs' className='mr-1 text-danger mandatory-asterisk'/>
									{required}
								</span>
							</Col>
						</Row>

						<Form onSubmit={handleSubmit(onFormSubmit)}> 

						<Form.Group as={Row} controlId='id'>
								<Form.Label className='text-right text-black-color pr-0' column sm={4}>
									{/* * ID: */}
								</Form.Label>
								<Col sm={4}>
								<Form.Control readOnly ref={register({required: true})} type='hidden' placeholder='Id' name='id' id='id' defaultValue={`${profileDetailsData.id}`} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId='name'>
								<Form.Label className='text-right text-black-color pr-0' column sm={4}>
									* {name}:
								</Form.Label>
								<Col sm={4}>
								<Form.Control ref={register({required: true})} type='text' placeholder={name} name='name' id='name' defaultValue={`${profileDetailsData.name}`} />
								</Col>
							</Form.Group>

							{/* <Form.Group as={Row} controlId='description'>
								<Form.Label className='text-right text-black-color pr-0' column sm={4}>
									* Descripción:
								</Form.Label>
								<Col sm={4}>
								<Form.Control ref={register({required: true})} type='text' placeholder='Descripción' name='description' id='description' />
								
								</Col>
							</Form.Group> */}

								<div class='p-3  col text-center'>
									<Button type='submit' variant='success'>{save}</Button>
								
									<Button  variant='danger' onClick={() => dispatch( push(INITIAL_URI) )}>{cancel} </Button>
								</div>
							
						</Form>	
					</Card.Body>
				</Card>
				
			</Container>
			</Card>
			</Container>
};

export default ProfileEditPage;