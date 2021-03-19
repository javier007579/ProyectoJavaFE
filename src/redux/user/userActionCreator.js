import { push } from 'connected-react-router';

import * as SERVICES from 'src/services/userServices';
import * as ACTIONS from './userActions';
import * as ROUTES from 'src/routes';

import config from 'Config';
import { getAccessToken } from 'src/redux/login/loginReducer';

//User 
export const tryGetUserList = ( page=1, filter='', pageSize=1000 ) => {
	return async ( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.getUserListRequest() );

		if(accessToken){
		const response = await SERVICES.listUser( accessToken, page, pageSize, filter );

			if( response?.status == 200 ) {
				dispatch( ACTIONS.getUserListRequestSuccess( response?.data ) );
			}
			else {
				dispatch( ACTIONS.getUserListRequestFailure( response?.error ) );
			}
	
			return response;
		}
	};
};

//New User
export const tryPostUser = ( name='', alias='', password='', email='', description='description', profileId ) => {
	return async ( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.getNewUserRequest() );

		if(accessToken){
			
			const response = await SERVICES.newUser( accessToken, name, alias, password, email, description );
	
			if( response?.status == 200 ) {
				dispatch( ACTIONS.getNewUserRequestSuccess( response?.data ) );
				const userToProfileParam = {
					userId: response?.data?.id,
					applicationId: config.apis.authApi.APPLICATION_ID,
					profileId
				};
				dispatch( tryAddUserToProfile(userToProfileParam) );
			}
			else {
				dispatch( ACTIONS.getNewUserRequestFailure( response?.data?.error ) );
			}
			return response;
		}

	};
};

//Edit User
export const tryPutUser = userData => {
	return async ( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.editUserRequest() );

		if(accessToken){
			
			const response = await SERVICES.editUser( accessToken, userData );
			if( response?.status == 200 ) {
				dispatch( ACTIONS.editUserRequestSuccess( response?.data ) );
				dispatch( tryPutUserXApplicationXProfile(userData?.userXApplicationXProfile) );
			}
			else {
				dispatch( ACTIONS.editUserRequestFailure( response?.error||response ) );
			}
			return response;
		}

	};

};

//Delete User
export const tryDeleteUser = ( id=0) => {
	return async ( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.deleteUserRequest() );

		if(accessToken){
			
			const response = await SERVICES.deleteUser( accessToken, id );
			
			if( response?.status == 200 ) {
				dispatch( ACTIONS.deleteUserRequestSuccess( response?.data ) );
				dispatch( push(ROUTES.USER_LIST) );
			}
			else {
				dispatch( ACTIONS.deleteUserRequestFailure( response?.error || response ) );
			}
		}

	};
};

//Profile
export const tryGetListUserProfile = ( filter='' ) => {
	return async ( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.getUserProfileRequest() );

		if(accessToken){
			
			const response = await SERVICES.listProfile( accessToken, filter );
	
			if( response?.status == 200 ) {
				dispatch( ACTIONS.getUserProfileRequestSuccess( response?.data ) );
			}
			else {
				dispatch( ACTIONS.getUserProfileRequestFailure( response?.error ) );
			}
		}
	
	};
};

//Profile New
export const tryPostUserProfile = ( name='', permissionId=21, applicationId=4 ) => {
	return async ( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.getNewProfileRequest() );

		if(accessToken){
			
			const response = await SERVICES.newProfile( accessToken, name, permissionId, applicationId );
			if( response?.status == 200 ) {
				dispatch( ACTIONS.getNewProfileRequestSuccess( response?.data ) );
				dispatch( push(ROUTES.PROFILE_LIST) );
			}
			else {
				dispatch( ACTIONS.getNewProfileRequestFailure( response?.error ) );
			}
		}
	};
};

//Profile Edit
export const tryPutUserProfile = ( id=0, name='', permissionId=21, applicationId=4 ) => {
	return async ( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.editProfileRequest() );

		if(accessToken){
			
			const response = await SERVICES.editProfile( accessToken, id, name, permissionId, applicationId );
			if( response?.status == 200 ) {
				dispatch( ACTIONS.editProfileRequestSuccess( response?.data ) );
				dispatch( push(ROUTES.PROFILE_LIST) );
			}
			else {
				dispatch( ACTIONS.editProfileRequestFailure( response?.error||response ) );
			}
		}

	};
};

//Profile Delete
export const tryDeleteUserProfile = ( id=0) => {
	return async ( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.deleteProfileRequest() );

		if(accessToken){
			
			const response = await SERVICES.deleteProfile( accessToken, id );
			
			if( response?.status == 200 ) {
				dispatch( ACTIONS.deleteProfileRequestSuccess( response?.data ) );
				dispatch( push(ROUTES.PROFILE_LIST) );
			}
			else {
				dispatch( ACTIONS.deleteProfileRequestFailure( response?.error || response ) );
			}
		}

	};
};

// Add User X Application X Profile
export const tryAddUserToProfile = params => {
	return async( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.addUserToProfileRequest() );

		if(accessToken){
			
			const response = await SERVICES.postUserXApplicationXProfile( accessToken, params );
	
			if( response?.status == 200 ) {
				dispatch( ACTIONS.addUserToProfileRequestSucces() );
				dispatch( push(ROUTES.USER_LIST) );
			}
			else {
				dispatch( ACTIONS.addUserToProfileRequestFailure(response?.error||response) );
			}
		}

	};
};

//Edit User X Application X Profile
export const tryPutUserXApplicationXProfile = data => {

	return async( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.editUserXApplicationXProfileRequest() );

		if(accessToken){
			const response = await SERVICES.editUserXApplicationXProfile( accessToken, data );

			if( response?.status == 200 ) {
				dispatch( ACTIONS.editUserXApplicationXProfileRequestSuccess() );
				dispatch( push(ROUTES.USER_LIST) );
			}
			else {
				dispatch( ACTIONS.editUserXApplicationXProfileRequestFailure(response?.error||response) );
			}

			return response;
		}

		
	};
};

// List Users X Application X Profile
export const tryGetListUserXApplicationXProfile = () => {
	return async( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.listUsersXApplicationXProfile() );

		if(accessToken){
			
			const response = await SERVICES.listUsersXApplicationXProfile( accessToken );
	
			if( response?.status == 200 ) {
				dispatch( ACTIONS.listUsersXApplicationXProfileSucces(response?.data) );
			}
			else {
				dispatch( ACTIONS.listUsersXApplicationXProfileFailure(response?.error||response) );
				/* showError( dispatch, `Error al obtener el listado de relaciones de perfiles por usuario. Detalle: ${response?.error||response}`  ); */
				console.log('Error al obtener el listado de relaciones de perfiles por usuario. Detalle:', response?.error);
			}
		}

	};
};

// User Data
export const tryGetUserDetail = idUser => {
	return async( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.getUserDetailRequest() );
		
		if(accessToken){
			
			const response = await SERVICES.getUserData( accessToken, idUser );
	
			if( response?.status == 200 ) {
				dispatch( ACTIONS.getUserDetailRequestSuccess(response?.data) );
			}
			else {
				dispatch( ACTIONS.getUserDetailRequestFailure(response?.error||response) );
			}
		}

	};
};


//Edit User
export const tryPutUserChangePassword = userData => {
	return async ( dispatch, getState ) => {
		const state = getState();
		const accessToken = getAccessToken( state );

		dispatch( ACTIONS.editUserChangePasswordRequest() );

		if(accessToken){
			
			const response = await SERVICES.editUserChangePassword( accessToken, userData );
			if( response?.status == 200 ) {
				dispatch( ACTIONS.editUserChangePasswordRequestSuccess( response?.data ) );
			}
			else {
				dispatch( ACTIONS.editUserChangePasswordRequestFailure( response?.error||response ) );
			}
			return response;
		}

	};

};