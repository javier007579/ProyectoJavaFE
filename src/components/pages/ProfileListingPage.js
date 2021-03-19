import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Card, Table, Button, Spinner, Row, Col, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEdit, faTrash, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import ActionIcon from 'src/components/general/ActionIcon';

import { setProfileToEdit } from 'src/redux/user/userActions';
import { tryGetListUserProfile, tryDeleteUserProfile } from 'src/redux/user/userActionCreator';
import { isNotEmptyArray } from 'src/services/validationService';
import { clearUserList } from 'src/redux/user/userActions';
import { PROFILE_LIST, PROFILE_NEW, PROFILE_EDIT } from 'src/routes';
import { getUserProfileListData, getUserProfileListIsFetching } from 'src/redux/user/userReducer';
import PageTitle from 'src/components/general/PageTitle';
import {emptyCredit,name,groups} from 'src/utils/label';



const UsersListingPage = props => {

	const dispatch = useDispatch();

	const listProfileData = useSelector( state => getUserProfileListData(state) );
	const hasListProfile = isNotEmptyArray(listProfileData);

	const listProfileIsFetching = useSelector( state => getUserProfileListIsFetching(state) );

	useEffect( () => {
		dispatch( tryGetListUserProfile() );
	}, [] );

	const onClickSeeDetails = item => {
	};

	const onClickEdit = item => {
		dispatch( setProfileToEdit(item) );
		dispatch( push(PROFILE_EDIT) );
	};

	const onClickDelete = item => {
		dispatch( tryDeleteUserProfile ( item.id ) );
	};
	
	return <Container className='mb-5'>
		<Card>
			<PageTitle text={groups}/>

			<Container>
				<Card className='mb-3'>
					<Card.Body>

						{/* <Button size='sm' className='mb-3' variant='secondary' onClick={() => dispatch( push(PROFILE_NEW) )} >
							<FontAwesomeIcon icon={faPlus} className='mr-1'/>
							Nuevo Grupo
						</Button> */}

						<Table striped bordered hover size='sm'>
							<thead>
								<tr>
									<th className='text-center'>{name}</th>
									{/* <th className='text-center'>DESCRIPCIÓN</th>
									<th className='text-center'>ACCIONES</th> */}
								</tr>
							</thead>
							<tbody className='text-black-color'>
								{
									hasListProfile ?
										listProfileData?.map( item => <tr>
											<td className='text-center'>
												{item.name}
											</td>
											{/* <td className='text-center'></td>
											
											<td className='d-flex justify-content-around'>
												<ActionIcon size='lg' id='details' toolTipText='Ver detalles' icon={faSearch} mr='2' onClick={() => onClickSeeDetails(item)}/>
												<ActionIcon size='lg' id='search' toolTipText='Editar' icon={faEdit} onClick={() => onClickEdit(item)}/>
												<ActionIcon size='lg' id='delete' toolTipText='Borrar' icon={faTrash}  onClick={() => onClickDelete(item)}/>
											</td> */}
										</tr> )
									:
										<tr>
											<td className='text-center'>
												{
													listProfileIsFetching ?
														<Spinner animation='border' variant='success' className='my-3'/>
													:
														<Alert variant='info' className='mb-0'>
															<FontAwesomeIcon icon={faExclamationTriangle} className='text-black-color mr-3'/>										
															{emptyCredit}
														</Alert>
												}
											</td>
										</tr>
								}
								
							</tbody>
						</Table>
					</Card.Body>
				</Card>
			</Container>
		</Card>
	</Container>;
};

export default UsersListingPage;