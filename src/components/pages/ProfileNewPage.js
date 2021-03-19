import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Card, Form, Alert, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

import PageTitle from 'src/components/general/PageTitle';
import { tryPostUserProfile } from 'src/redux/user/userActionCreator';
import { PROFILE_LIST } from 'src/routes';
import { cancel, save, name, required, newGroup, group } from 'src/utils/label';

const ProfileNewPage = props => {

	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();

	const onFormSubmit = data => {
		dispatch(tryPostUserProfile(data.name));
	};

	return <Container>
		<Card>

			<PageTitle text={group} />

			<Container>

				<Card className='mb-3'>
					<Card.Header>
						<h6 className='mb-0'>{newGroup}</h6>
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
							<Form.Group as={Row} controlId='name'>
								<Form.Label className='text-right text-black-color pr-0' column sm={4}>
									* {name}:
								</Form.Label>
								<Col sm={4}>
									<Form.Control ref={register({ required: true })} type='text' placeholder={name} name='name' id='name' />
								</Col>
							</Form.Group>

							{/* <Form.Group as={Row} controlId='description'>
								<Form.Label className='text-right text-black-color pr-0' column sm={4}>
									* Descripción:
								</Form.Label>
								<Col sm={4}>
								<Form.Control ref={register({required: true})} type='text' placeholder={description} name='description' id='description' required />
								</Col>
							</Form.Group> */}

							<div class='d-flex justify-content-around'>
								<Button type='submit' variant='danger' onClick={() => dispatch(push(PROFILE_LIST))}>{cancel} </Button>

								<Button type='submit' variant='success'>{save}</Button>{' '}
							</div>

						</Form>
					</Card.Body>
				</Card>

			</Container>
		</Card>
	</Container>;
};

export default ProfileNewPage;