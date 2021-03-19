import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Navigation from 'src/components/general/Navigation';

import LoginPage from 'src/components/pages/LoginPage';
import ForgotPasswordPage from 'src/components/pages/ForgotPasswordPage';

import IndexPage from 'src/components/pages/IndexPage';




import UsersListingPage from 'src/components/pages/UsersListingPage';
import UserNewPage from './components/pages/UserNewPage';
import UserEditPage from './components/pages/UserEditPage';
import UserEditPasswordPage from 'src/components/pages/UserEditPasswordPage';
import UserDetailsPage from './components/pages/UserDetailsPage';
import ProfileListingPage from 'src/components/pages/ProfileListingPage';
import ProfileNewPage from 'src/components/pages/ProfileNewPage';
import ProfileEditPage from 'src/components/pages/ProfileEditPage';




export const INITIAL_URI = '/';
export const LOGIN_URI = '/login';
export const FORGOT_PASSWORD_URI = '/forgot-password';
export const RESET_PASSWORD_URI = '/reset-password';



export const USER_LIST = '/user-list';
export const USER_NEW = '/user-new';
export const USER_EDIT = '/user-edit';
export const EDIT_PASSWORD = '/edit-password';
export const USER_DETAIL = '/user-detail';

export const PROFILE_LIST = '/profile-list';
export const PROFILE_NEW = '/profile-new';
export const PROFILE_EDIT = '/profile-edit';




export const INDEX_PAGE = '/index';

const routes = (
	<div>
		<Navigation></Navigation>
		<Switch>
			<Route path={FORGOT_PASSWORD_URI} component={ForgotPasswordPage} />
			<Route path={LOGIN_URI} component={LoginPage} />
			<Route path={INDEX_PAGE} component={IndexPage} />


			<Route path={USER_LIST} component={UsersListingPage} />
			<Route path={USER_NEW} component={UserNewPage} />
			<Route path={USER_EDIT} component={UserEditPage} />
			<Route path={EDIT_PASSWORD} component={UserEditPasswordPage} />
			<Route path={USER_DETAIL} component={UserDetailsPage} />
			<Route path={PROFILE_LIST} component={ProfileListingPage} />
			<Route path={PROFILE_NEW} component={ProfileNewPage} />
			<Route path={PROFILE_EDIT} component={ProfileEditPage} />






			<Route path={INITIAL_URI} component={IndexPage} />

			<Route render={() => (<div>Miss</div>)} />
		</Switch>

	</div>
)

export default routes;