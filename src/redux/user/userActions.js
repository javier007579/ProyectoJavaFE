import * as ACTION_TYPES from './userActionTypes';

export const getUserListRequest = () => ({
	type: ACTION_TYPES.LIST_USER_REQUEST
});

export const getUserListRequestSuccess = data => ({
	type: ACTION_TYPES.LIST_USER_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const getUserListRequestFailure = error => ({
	type: ACTION_TYPES.LIST_USER_REQUEST_FAILURE,
	payload: {
		error
	}
});

export const clearUserList = () => ({
	type: ACTION_TYPES.CLEAR_LIST_USER
});

// User Detail
export const getUserDetailRequest = () => ({
	type: ACTION_TYPES.DETAIL_USER_REQUEST
});

export const getUserDetailRequestSuccess = data => ({
	type: ACTION_TYPES.DETAIL_USER_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const getUserDetailRequestFailure = error => ({
	type: ACTION_TYPES.DETAIL_USER_REQUEST_FAILURE,
	payload: {
		error
	}
});
export const setUserToDetails = data => ({
	type: ACTION_TYPES.SET_USER,
	payload: {
		data
	}
});


//Profile
export const getUserProfileRequest = () => ({
	type: ACTION_TYPES.LIST_PROFILE_REQUEST
});

export const getUserProfileRequestSuccess = data => ({
	type: ACTION_TYPES.LIST_PROFILE_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const getUserProfileRequestFailure = error => ({
	type: ACTION_TYPES.LIST_PROFILE_REQUEST_FAILURE,
	payload: {
		error
	}
});


// User New
export const getNewUserRequest = () => ({
	type: ACTION_TYPES.NEW_USER_REQUEST
});

export const getNewUserRequestSuccess = data => ({
	type: ACTION_TYPES.NEW_USER_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const getNewUserRequestFailure = error => ({
	type: ACTION_TYPES.NEW_USER_REQUEST_FAILURE,
	payload: {
		error
	}
});

//User Edit
export const editUserRequest = () => ({
	type: ACTION_TYPES.EDIT_USER_REQUEST
});

export const editUserRequestSuccess = data => ({
	type: ACTION_TYPES.EDIT_USER_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const editUserRequestFailure = error => ({
	type: ACTION_TYPES.EDIT_USER_REQUEST_FAILURE,
	payload: {
		error
	}
});

export const setUserToEdit = data => ({
	type: ACTION_TYPES.SET_USER_TO_EDIT,
	payload: {
		data
	}
});

//Delete User
export const deleteUserRequest = () => ({
	type: ACTION_TYPES.DELETE_USER_REQUEST
});

export const deleteUserRequestSuccess = data => ({
	type: ACTION_TYPES.DELETE_USER_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const deleteUserRequestFailure = error => ({
	type: ACTION_TYPES.DELETE_USER_REQUEST_FAILURE,
	payload: {
		error
	}
});


//New Profile
export const getNewProfileRequest = () => ({
	type: ACTION_TYPES.NEW_PROFILE_REQUEST
});

export const getNewProfileRequestSuccess = data => ({
	type: ACTION_TYPES.NEW_PROFILE_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const getNewProfileRequestFailure = error => ({
	type: ACTION_TYPES.NEW_PROFILE_REQUEST_FAILURE,
	payload: {
		error
	}
});

//Edit Profile
export const editProfileRequest = () => ({
	type: ACTION_TYPES.EDIT_PROFILE_REQUEST
});

export const editProfileRequestSuccess = data => ({
	type: ACTION_TYPES.EDIT_PROFILE_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const editProfileRequestFailure = error => ({
	type: ACTION_TYPES.EDIT_PROFILE_REQUEST_FAILURE,
	payload: {
		error
	}
});

export const setProfileToEdit = data => ({
	type: ACTION_TYPES.SET_PROFILE_TO_EDIT,
	payload: {
		data
	}
});

export const clearProfileToEdit = () => ({
	type: ACTION_TYPES.CLEAR_PROFILE_TO_EDIT
});

//Delete Profile
export const deleteProfileRequest = () => ({
	type: ACTION_TYPES.DELETE_PROFILE_REQUEST
});

export const deleteProfileRequestSuccess = data => ({
	type: ACTION_TYPES.DELETE_PROFILE_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const deleteProfileRequestFailure = error => ({
	type: ACTION_TYPES.DELETE_PROFILE_REQUEST_FAILURE,
	payload: {
		error
	}
});



// Add User to Profile
export const addUserToProfileRequest = () => ({
	type: ACTION_TYPES.CREATE_USER_X_APPLICATION_PROFILE_REQUEST
});

export const addUserToProfileRequestSucces = () => ({
	type: ACTION_TYPES.CREATE_USER_X_APPLICATION_PROFILE_REQUEST_SUCCESS
});

export const addUserToProfileRequestFailure = error => ({
	type: ACTION_TYPES.CREATE_USER_X_APPLICATION_PROFILE_REQUEST_FAILURE,
	payload: {
		error
	}
});
// END Add User to Profile



// Edit User X Application X Profile
export const editUserXApplicationXProfileRequest = () => ({
	type: ACTION_TYPES.EDIT_USER_X_APPLICATION_X_PROFILE_REQUEST
});

export const editUserXApplicationXProfileRequestSuccess = () => ({
	type: ACTION_TYPES.EDIT_USER_X_APPLICATION_X_PROFILE_REQUEST_SUCCESS
});

export const editUserXApplicationXProfileRequestFailure = error => ({
	type: ACTION_TYPES.EDIT_USER_X_APPLICATION_X_PROFILE_REQUEST_FAILURE,
	payload: {
		error
	}
});
// END Edit User X Application X Profile



// Get Users X Application X Profile
export const listUsersXApplicationXProfile = () => ({
	type: ACTION_TYPES.LIST_USERS_X_APPLICATION_X_PROFILE_REQUEST
});

export const listUsersXApplicationXProfileSucces = data => ({
	type: ACTION_TYPES.LIST_USERS_X_APPLICATION_X_PROFILE_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const listUsersXApplicationXProfileFailure = error => ({
	type: ACTION_TYPES.LIST_USERS_X_APPLICATION_X_PROFILE_REQUEST_FAILURE,
	payload: {
		error
	}
});
// END Get Users X Application X Profile

//User Edit Change Password
export const editUserChangePasswordRequest = () => ({
	type: ACTION_TYPES.EDIT_USER_CHANGE_PASSWORD_REQUEST
});

export const editUserChangePasswordRequestSuccess = data => ({
	type: ACTION_TYPES.EDIT_USER_CHANGE_PASSWORD_REQUEST_SUCCESS,
	payload: {
		data
	}
});

export const editUserChangePasswordRequestFailure = error => ({
	type: ACTION_TYPES.EDIT_USER_CHANGE_PASSWORD_REQUEST_FAILURE,
	payload: {
		error
	}
});