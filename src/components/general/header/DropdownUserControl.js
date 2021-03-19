import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faKey } from '@fortawesome/free-solid-svg-icons';
import { push } from 'connected-react-router';

import { getAlias, getProfileName, getEmail } from 'src/redux/login/loginReducer';
import { EDIT_PASSWORD } from 'src/routes';

import { setUserToEdit } from 'src/redux/user/userActions';
import { getUserListData } from 'src/redux/user/userReducer';
import { tryGetUserList } from 'src/redux/user/userActionCreator';

const DropdownUserControl = props => {

	const dispatch = useDispatch();

	const { onClickLogout } = props;

	const alias = useSelector( state => getAlias(state) );
	const profileName = useSelector( state => getProfileName(state) );
	const email = useSelector( state => getEmail(state) );

	//User Id
	const listUserData = useSelector(state => getUserListData (state));
	const userId = listUserData?.records?.find(item => item.email == email);

	const onClickChangePassword = email => {
		dispatch( setUserToEdit(email) );
		dispatch( push(EDIT_PASSWORD) );
	}

	useEffect(() => {
		dispatch(tryGetUserList());

	}, []);

	return <Dropdown {...props} alignRight>
		<Dropdown.Toggle id='user-menu' variant='success'>
			<FontAwesomeIcon icon={faUser} />
		</Dropdown.Toggle>

		<Dropdown.Menu>
			<div className='text-center'>
				<span className='text-black-color font-weight-bold my-2'>
					{alias}
				</span>
				<br/>
				<div>
					<small className='text-muted'>
						{profileName}
					</small>
				</div>
				<div>
					<small className='text-muted mx-3'>
						{email}
					</small>
				</div>
			</div>
			
			<Dropdown.Divider />
			<Dropdown.Item className='text-black-color justify-content-start' onClick={ () => onClickChangePassword(email) } >
				<FontAwesomeIcon className='mr-3' icon={faKey} />
				Cambiar contraseña
			</Dropdown.Item>

			<Dropdown.Divider />
			<Dropdown.Item className='text-black-color justify-content-start' onClick={onClickLogout}>
				<FontAwesomeIcon className='mr-3' icon={faSignOutAlt} />
				Cerrar sesión
			</Dropdown.Item>
		
		</Dropdown.Menu>
	</Dropdown>;
};

export default DropdownUserControl;