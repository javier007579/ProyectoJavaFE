import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Container, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { push } from 'connected-react-router';
import config from 'Config';

import { logout } from 'src/redux/login/loginActions';
import { getIsFetching, getIsLoggedIn, getUserProfile, getExpiresDate } from "src/redux/login/loginReducer";

import * as ROUTES from 'src/routes';

import Menus from './Menus';


const Navigation = props => {

	const dispatch = useDispatch();
	
	const isLoggedIn = useSelector( state => getIsLoggedIn(state) );
	const pathname = useSelector( state => state.router.location.pathname );
	const expiresDate = useSelector( state => getExpiresDate(state) );

	const goToLogin = () => dispatch(push(ROUTES.LOGIN_URI));
	const goToResetPassword = () => dispatch(push(ROUTES.RESET_PASSWORD_URI));
	const goToForgotPassword = () => dispatch(push(ROUTES.FORGOT_PASSWORD_URI));
	const doLogout = () => dispatch(logout());

	const expireDate = new Date(expiresDate);
	const todayDate = new Date();
	const isTokenExpired = (expireDate<todayDate);
	
	const isInitialPath = path => path == ROUTES.INITIAL_URI;
	const isLoginPath = path => path?.includes(ROUTES.LOGIN_URI);
	const isForgotPasswordPath = path => path == ROUTES.FORGOT_PASSWORD_URI;
	const isResetPasswordPath =  path => path?.includes( ROUTES.RESET_PASSWORD_URI );
	const isLoggedOutPath = path => (isInitialPath(path) || isLoginPath(path) || isForgotPasswordPath(path) || isResetPasswordPath(path));

	if( isLoggedIn && isTokenExpired && !isLoggedOutPath(pathname) ) {
		doLogout();
		goToLogin();
		return null;
	}

	if( !isLoggedIn && isForgotPasswordPath(pathname) ) {
		goToForgotPassword();
		return null;
	}

	if( !isLoggedIn && isResetPasswordPath(pathname) ) {
		return null;
	}

	if( !isLoggedIn ) {
		goToLogin();
		return (null);
	}
	
	
	return (
		<Container className="nav-menu">
			<Navbar expand="lg" id='safi-navbar' className='navbar-dark py-0 mb-3 mt-2 shadow-sm'>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">

					<Menus user={props.userProfile} />
					
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default Navigation;