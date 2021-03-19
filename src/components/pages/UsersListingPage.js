import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Card, Table, Button, FormControl, Spinner, Row, Col, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faExclamationTriangle, faSearch, faRecycle } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

import ActionIcon from 'src/components/general/ActionIcon';
import PageTitle from 'src/components/general/PageTitle';
import { setAssignProfiles } from 'src/utils/usersProfiles';

import { getUserPermissionsUsers, getUserPermissionsSecurity, getEmail } from 'src/redux/login/loginReducer';
import { trySendRestorePasswordEmail } from 'src/redux/login/loginActionCreator';

import { tryGetUserList, tryDeleteUser, tryGetListUserProfile, tryGetListUserXApplicationXProfile } from 'src/redux/user/userActionCreator';
import { isNotEmptyArray } from 'src/services/validationService';
import { clearUserList } from 'src/redux/user/userActions';
import { getUserListData, getUserListIsFetching, getUserProfileListData, getListUsersXApplicationXProfileData } from 'src/redux/user/userReducer';
import { USER_NEW, USER_EDIT, USER_DETAIL } from 'src/routes';
import { setUserToEdit, setUserToDetails } from 'src/redux/user/userActions';
import { filterUser, questionDeleteUser, alert, noUser, seeMore, actions, userEmail, users, newUser, lastNameName } from 'src/utils/label';



const UsersListingPage = props => {

	const dispatch = useDispatch();

	// Permissions
	const usersPermissions = useSelector(state => getUserPermissionsUsers(state));

	const listUserData = useSelector(state => getUserListData(state));

	// Set config Users By Profile
	const profileNameArray = setAssignProfiles();
	const hasListUser = isNotEmptyArray(listUserData?.records);
	const hasMoreUsers = listUserData?.metadata?.hasMore;
	const listUserCurrentPage = listUserData?.metadata.page;
	const listUserIsFetching = useSelector(state => getUserListIsFetching(state));

	//Profile
	const listProfileData = useSelector(state => getUserProfileListData(state))?.sort((profileValue1, profileValue2) => {
		return (profileValue1.name?.toUpperCase() < profileValue2.name?.toUpperCase()) ? -1 : 1;
	});

	// Filter for type profile
	const profileNameArrayRecords = listProfileData?.filter(item => profileNameArray?.includes(item?.name));

	let profileUserIdArray = [];
	let i = 0;
	for (i in profileNameArrayRecords) {
		profileUserIdArray.push(profileNameArrayRecords[i]?.id)
	}


	// Filter for type profile
	let profileUserId = profileUserIdArray;
	const listUsersXApplicationXProfileData = useSelector(state => getListUsersXApplicationXProfileData(state));

	const listUsersXApplicationXProfileDataRecords = listUsersXApplicationXProfileData?.filter(item => profileUserId?.includes(item?.profileId));
	let UserIdArray = [];
	let item = 0;
	for (item in listUsersXApplicationXProfileDataRecords) {
		UserIdArray.push(listUsersXApplicationXProfileDataRecords[item]?.userId)
	}

	// Filter for type Profile of User
	const UserID = UserIdArray;
	const userListArrayRecords = listUserData?.records?.filter(item => UserID?.includes(item?.id)).sort( (a,b) => a.name>b.name ? 1 : -1 );

	const hasuserListArrayRecords = isNotEmptyArray(userListArrayRecords);

	const loadAllData = () => {
		dispatch(tryGetListUserXApplicationXProfile());
		dispatch(tryGetListUserProfile());
		dispatch(tryGetUserList()).then(
			response => {
				if (response?.status == 200) {
					dispatch(clearUserList());
					dispatch(tryGetUserList());
				}
			}
		);
	}

	useEffect(loadAllData, []);

	const onClickLoadMoreUsers = () => {
		dispatch(tryGetUserList(listUserCurrentPage + 1));
	};

	const onClickSeeDetails = user => {
		dispatch(setUserToDetails(user));
		dispatch(push(USER_DETAIL));
	};

	const onClickEdit = user => {
		dispatch(setUserToEdit(user));
		dispatch(push(USER_EDIT));
	};

	const onClickDelete = user => {
		let nameUser = user.name;
		swal({
			title: alert,
			text: '¿ ' + questionDeleteUser + nameUser + '?',
			icon: 'warning',
			buttons: ["Cancelar", "Aceptar"],
			dangerMode: true,
		})
			.then((willDelete) => {
				if (willDelete) {
					dispatch(tryDeleteUser(user.id));
					loadAllData();

					/* 	swal('Exito. Usuario ' + nameUser + ' eliminado correctamente.', {
						icon: 'success',
						}); */
				} else {
					/*   swal('El usuario esta a salvo!'); */
				}
			});
	};

	const onChangeFilter = event => {
		const value = event?.target?.value;

		if (!listUserIsFetching) {
			if (value || value === '') {
				dispatch(clearUserList());
				dispatch(tryGetUserList(1, value));
			}
		}
	};

	const onClickReset = user => {
		let emailUser = user.email;
		swal({
			title: 'Confirmación',
			text: '¿Realmente desea resetear la contraseña de: ' + emailUser + '?',
			icon: 'warning',
			buttons: ["Cancelar", "Aceptar"]
		})
			.then((willDelete) => {
				if (willDelete) {
					dispatch(trySendRestorePasswordEmail(user?.email)).then(
						response => {
							if (response?.status == 200) {
								loadAllData();
							}
						}
					);
				}
			});
	};




	return <Container className='mb-5'>
		<Card>
			<PageTitle text={users} />
			<Container>
				<Card className='mb-3'>
					<Card.Body>
						{
							usersPermissions?.canCreate
								?
								<Button size='sm' className='mb-3' variant='secondary' onClick={() => dispatch(push(USER_NEW))} >
									<FontAwesomeIcon icon={faPlus} className='mr-1' />
									{newUser}
								</Button>
								:
								null
						}
						<Table striped bordered hover size='sm'>
							<thead>
								<tr>
									<th className='text-center'>{lastNameName}</th>
									<th className='text-center'>{userEmail}</th>
									<th className='text-center'>{actions}</th>
								</tr>
								{/* <tr className='secondary'>
									<th className='text-center' colSpan='2'>
										<FormControl size='sm' type='text' minlength='5' id='search' placeholder={filterUser} onChange={onChangeFilter} />
									</th>
									<th>
										<Button size='sm' className='px-5' disable={listUserIsFetching}>
											{
												listUserIsFetching ?
													<Spinner animation='border' size='sm' />
													:
													<></>
											}
										</Button>
									</th>
								</tr> */}
							</thead>
							<tbody className='text-black-color'>
								{
									hasuserListArrayRecords ?
										userListArrayRecords?.map(user => <tr>
											<td className='text-center'>
												{user.name}
											</td>
											<td className='text-center'>
												{user.email}
											</td>
											<td className='d-flex justify-content-around'>
												{
													usersPermissions?.canView
														?
														<ActionIcon size='lg' id='details' toolTipText='Ver detalles' icon={faSearch} mr='2' onClick={() => onClickSeeDetails(user)} />
														:
														null
												}
												{
													usersPermissions?.canEdit
														?
														<ActionIcon size='lg' id='search' toolTipText='Editar' icon={faEdit} onClick={() => onClickEdit(user)} />
														:
														null
												}
												{
													usersPermissions?.canEdit
														?
														<ActionIcon size='lg' id='reset' toolTipText='Resetear contraseña' icon={faRecycle} onClick={() => onClickReset(user)} />
														:
														null
												}

												{
													usersPermissions?.canDelete
														?
														<ActionIcon size='lg' id='delete' toolTipText='Borrar' icon={faTrash} onClick={() => onClickDelete(user)} />
														:
														null
												}
											</td>
										</tr>)
										:
										<tr>
											<td colSpan='10' className='text-center'>
												{
													listUserIsFetching ?
														<Spinner animation='border' variant='success' className='my-3' />
														:
														<Alert variant='info' className='mb-0'>
															<FontAwesomeIcon icon={faExclamationTriangle} className='text-black-color mr-3' />
															{noUser}
														</Alert>
												}
											</td>
										</tr>
								}

							</tbody>
						</Table>

						<Row>
							<Col className='text-center'>
								{
									hasMoreUsers ?
										<Button size='sm' className='px-5' disable={listUserIsFetching} onClick={onClickLoadMoreUsers}>
											{
												listUserIsFetching ?
													<Spinner animation='border' size='sm' />
													:
													<>{seeMore}</>
											}
										</Button>
										:
										null
								}
							</Col>
						</Row>

					</Card.Body>
				</Card>
			</Container>
		</Card>
	</Container>;
};

export default UsersListingPage;