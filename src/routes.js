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


import nuevaCircular from 'src/components/pages/circular/nuevaCircular'
import listadoCircular from 'src/components/pages/circular/listadoCircular'
import listadoTipoCircular from 'src/components/pages/TipoCircular/listadoTipoCircular'
import nuevoTipoCircular from 'src/components/pages/TipoCircular/nuevoTipoCircular'

import listadoTipoDestinatario from 'src/components/pages/TipoDestinatario/listadoTipoDestinatario'
import nuevoTipoDestinatario from 'src/components/pages/TipoDestinatario/nuevoTipoDestinatario'

import listadoEscuela from 'src/components/pages/Escuela/listadoEscuela'
import nuevaEscuela from 'src/components/pages/Escuela/nuevaEscuela'



export const INITIAL_URI = '/';
export const LOGIN_URI = '/login';
export const FORGOT_PASSWORD_URI = '/forgot-password';
export const RESET_PASSWORD_URI = '/reset-password';

export const NUEVA_CIRCULAR = '/nueva-circular'
export const LISTADO_CIRCULAR = '/lista-circular'

export const LISTADO_TIPO_CIRCULAR = '/lista-tipo-circular'
export const NUEVO_TIPO_CIRCULAR = '/nuevo-tipo-circular'

export const LISTADO_TIPO_DESTINATARIO = '/lista-tipo-destinatario'
export const NUEVO_TIPO_DESTINATARIO = '/nuevo-tipo-destinatario'

export const LISTADO_ESCUELA = '/lista-escuela'
export const NUEVA_ESCUELA = '/nueva-escuela'


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

			<Route path={PROFILE_EDIT} component={ProfileEditPage} />




			<Route path={NUEVA_CIRCULAR} component={nuevaCircular} />
			<Route path={LISTADO_CIRCULAR} component={listadoCircular} />

			<Route path={LISTADO_TIPO_CIRCULAR} component={listadoTipoCircular} />
			<Route path={NUEVO_TIPO_CIRCULAR} component={nuevoTipoCircular} />
			
			
			<Route path={LISTADO_ESCUELA} component={listadoEscuela} />
			<Route path={NUEVA_ESCUELA} component={nuevaEscuela} />

			<Route path={LISTADO_TIPO_DESTINATARIO} component={listadoTipoDestinatario} />
			<Route path={NUEVO_TIPO_DESTINATARIO} component={nuevoTipoDestinatario} />

			<Route render={() => (<div>Miss</div>)} />
		</Switch>

	</div>
)

export default routes;