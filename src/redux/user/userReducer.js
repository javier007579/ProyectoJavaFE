import * as ACTION_TYPES from './userActionTypes';

export const userReducerInitialState = {
	//User
	userList: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	userNew: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	userDetail: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	userEdit: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	userDelete: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	userToEdit: {},
	userToDetails: {},

	//Profile
	profileList: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	profileNew: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	profileEdit: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	profileDelete: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	profileData: {},

	//User X Application X Profile
	addUserToProfile: {
		isFetching: false,
		hasError: false,
		error: undefined
	},
	editUserXApplicationXProfile: {
		isFetching: false,
		hasError: false,
		error: undefined
	},
	listUsersXApplicationXProfile: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
	userEditChangePassword: {
		data: undefined,
		isFetching: false,
		hasError: false,
		error: undefined
	},
};

export const userReducer = ( state=userReducerInitialState, action ) => {
	switch( action.type ) {
		//User
		case ACTION_TYPES.LIST_USER_REQUEST: {
			return {
				...state,
				userList: {
					...state.userList,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.userList.error
				}
			};
		}

		case ACTION_TYPES.LIST_USER_REQUEST_SUCCESS: {
			const { data } = action.payload;

			const previousRecords = state.userList.data?.records;

			if( previousRecords ) {
				data.records = previousRecords.concat( data.records );
			}
		
			return {
				...state,
				userList: {
					...state.userList,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.userList.error,
					data
				}
			};
		}

		case ACTION_TYPES.LIST_USER_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				userList: {
					...state.userList,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.userList.data,
					error
				}
			};
		}

		case ACTION_TYPES.SET_USER: {
			const { data } = action.payload;
			return {
				...state,
				userToDetails: data
			}
		}

		case ACTION_TYPES.CLEAR_LIST_USER: {
			return {
				...state,
				userList: userReducerInitialState.userList
			};
		}

		//Detail User
		case ACTION_TYPES.DETAIL_USER_REQUEST: {
			return {
				...state,
				userDetail: {
					...state.userDetail,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.userDetail.error
				}
			};
		}

		case ACTION_TYPES.DETAIL_USER_REQUEST_SUCCESS: {
			const { data } = action.payload;

			return {
				...state,
				userDetail: {
					...state.userDetail,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.userDetail.error,
					data
				}
			};
		}

		case ACTION_TYPES.DETAIL_USER_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				userDetail: {
					...state.userDetail,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.userDetail.data,
					error
				}
			};
		}

		//New User
		case ACTION_TYPES.NEW_USER_REQUEST: {
			return {
				...state,
				userNew: {
					...state.userNew,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.userNew.error
				}
			};
		}

		case ACTION_TYPES.NEW_USER_REQUEST_SUCCESS: {
			const { data } = action.payload;

			return {
				...state,
				userNew: {
					...state.userNew,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.userNew.error,
					data
				}
			};
		}

		case ACTION_TYPES.NEW_USER_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				userNew: {
					...state.userNew,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.userNew.data,
					error
				}
			};
		}

		//Edit User
		case ACTION_TYPES.EDIT_USER_REQUEST: {
			return {
				...state,
				userEdit: {
					...state.userEdit,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.userEdit.error
				}
			};
		}

		case ACTION_TYPES.EDIT_USER_REQUEST_SUCCESS: {
			const { data } = action.payload;

			return {
				...state,
				userEdit: {
					...state.userEdit,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.userEdit.error,
					data
				}
			};
		}

		case ACTION_TYPES.EDIT_USER_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				userEdit: {
					...state.userEdit,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.userEdit.data,
					error
				}
			};
		}

		case ACTION_TYPES.SET_USER_TO_EDIT: {
			const { data } = action.payload;
			return {
				...state,
				userToEdit: data
			}
		}

		//Delete User
		case ACTION_TYPES.DELETE_USER_REQUEST: {
			return {
				...state,
				userDelete: {
					...state.userDelete,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.userDelete.error
				}
			};
		}

		case ACTION_TYPES.DELETE_USER_REQUEST_SUCCESS: {
			const { data } = action.payload;

			return {
				...state,
				userDelete: {
					...state.userDelete,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.userDelete.error,
					data
				}
			};
		}

		case ACTION_TYPES.DELETE_USER_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				userDelete: {
					...state.userDelete,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.userDelete.data,
					error
				}
			};
		}

	
		//Profile
		case ACTION_TYPES.LIST_PROFILE_REQUEST: {
			return {
				...state,
				profileList: {
					...state.profileList,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.profileList.error
				}
			};
		}

		case ACTION_TYPES.LIST_PROFILE_REQUEST_SUCCESS: {
			const { data } = action.payload;

			return {
				...state,
				profileList: {
					...state.profileList,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.profileList.error,
					data
				}
			};
		}

		case ACTION_TYPES.LIST_PROFILE_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				profileList: {
					...state.profileList,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.profileList.data,
					error
				}
			};
		}

		//Profile New
		case ACTION_TYPES.NEW_PROFILE_REQUEST: {
			return {
				...state,
				profileNew: {
					...state.profileNew,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.profileNew.error
				}
			};
		}

		case ACTION_TYPES.NEW_PROFILE_REQUEST_SUCCESS: {
			const { data } = action.payload;

			return {
				...state,
				profileNew: {
					...state.profileNew,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.profileNew.error,
					data
				}
			};
		}

		case ACTION_TYPES.NEW_PROFILE_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				profileNew: {
					...state.profileNew,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.profileNew.data,
					error
				}
			};
		}

		//Profile Edit
		case ACTION_TYPES.EDIT_PROFILE_REQUEST: {
			return {
				...state,
				profileEdit: {
					...state.profileEdit,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.profileEdit.error
				}
			};
		}

		case ACTION_TYPES.EDIT_PROFILE_REQUEST_SUCCESS: {
			const { data } = action.payload;

			return {
				...state,
				profileEdit: {
					...state.profileEdit,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.profileEdit.error,
					data
				}
			};
		}

		case ACTION_TYPES.EDIT_PROFILE_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				profileEdit: {
					...state.profileEdit,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.profileEdit.data,
					error
				}
			};
		}

		case ACTION_TYPES.SET_PROFILE_TO_EDIT: {
			const { data } = action.payload;
			return {
				...state,
				profileData: data
			}
		}

		case ACTION_TYPES.CLEAR_PROFILE_TO_EDIT: {
			return {
				...state,
				profileEdit: userReducerInitialState.profileEdit
			}
		}

		//Profile Delete
		case ACTION_TYPES.DELETE_PROFILE_REQUEST: {
			return {
				...state,
				profileDelete: {
					...state.profileDelete,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.profileDelete.error
				}
			};
		}

		case ACTION_TYPES.DELETE_PROFILE_REQUEST_SUCCESS: {
			const { data } = action.payload;

			return {
				...state,
				profileDelete: {
					...state.profileDelete,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.profileDelete.error,
					data
				}
			};
		}

		case ACTION_TYPES.DELETE_PROFILE_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				profileDelete: {
					...state.profileDelete,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.profileDelete.data,
					error
				}
			};
		}



		// Add user to profile actions
		case ACTION_TYPES.CREATE_USER_X_APPLICATION_PROFILE_REQUEST: {
			return {
				...state,
				addUserToProfile: {
					...state.addUserToProfile,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.addUserToProfile.error
				}
			};
		}
		case ACTION_TYPES.CREATE_USER_X_APPLICATION_PROFILE_REQUEST_SUCCESS: {
			return {
				...state,
				addUserToProfile: {
					...state.addUserToProfile,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.addUserToProfile.error
				}
			};
		}
		case ACTION_TYPES.CREATE_USER_X_APPLICATION_PROFILE_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				addUserToProfile: {
					...state.addUserToProfile,
					isFetching: false,
					hasError: true,
					error
				}
			};
		}
		// END Add user to profile actions



		// Edit User X Application X Profile
		case ACTION_TYPES.EDIT_USER_X_APPLICATION_X_PROFILE_REQUEST: {
			return {
				...state,
				addUserToProfile: {
					...state.addUserToProfile,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.addUserToProfile.error
				}
			};
		}
		case ACTION_TYPES.EDIT_USER_X_APPLICATION_X_PROFILE_REQUEST_SUCCESS: {
			return {
				...state,
				addUserToProfile: {
					...state.addUserToProfile,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.addUserToProfile.error
				}
			};
		}
		case ACTION_TYPES.EDIT_USER_X_APPLICATION_X_PROFILE_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				addUserToProfile: {
					...state.addUserToProfile,
					isFetching: false,
					hasError: true,
					error
				}
			};
		}
		// END Edit User X Application X Profile



		// Get Users X Application X Profile
		case ACTION_TYPES.LIST_USERS_X_APPLICATION_X_PROFILE_REQUEST: {
			return {
				...state,
				listUsersXApplicationXProfile: {
					...state.listUsersXApplicationXProfile,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.listUsersXApplicationXProfile.error,
					data: userReducerInitialState.listUsersXApplicationXProfile.data
				}
			};
		}
		case ACTION_TYPES.LIST_USERS_X_APPLICATION_X_PROFILE_REQUEST_SUCCESS: {
			const { data } = action.payload;
			return {
				...state,
				listUsersXApplicationXProfile: {
					...state.listUsersXApplicationXProfile,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.listUsersXApplicationXProfile.error,
					data
				}
			};
		}
		case ACTION_TYPES.LIST_USERS_X_APPLICATION_X_PROFILE_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				listUsersXApplicationXProfile: {
					...state.listUsersXApplicationXProfile,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.listUsersXApplicationXProfile.data,
					error
				}
			};
		}
		// END Get Users X Application X Profile

		//Edit User Change Password
		case ACTION_TYPES.EDIT_USER_CHANGE_PASSWORD_REQUEST: {
			return {
				...state,
				userEditChangePassword: {
					...state.userEditChangePassword,
					isFetching: true,
					hasError: false,
					error: userReducerInitialState.userEditChangePassword.error
				}
			};
		}

		case ACTION_TYPES.EDIT_USER_CHANGE_PASSWORD_REQUEST_SUCCESS: {
			const { data } = action.payload;

			return {
				...state,
				userEditChangePassword: {
					...state.userEditChangePassword,
					isFetching: false,
					hasError: false,
					error: userReducerInitialState.userEditChangePassword.error,
					data
				}
			};
		}

		case ACTION_TYPES.EDIT_USER_CHANGE_PASSWORD_REQUEST_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				userEditChangePassword: {
					...state.userEditChangePassword,
					isFetching: false,
					hasError: true,
					data: userReducerInitialState.userEditChangePassword.data,
					error
				}
			};
		}


		
		default: {
			return state
		}
	}
};

export const getUserReducer = state => state.userReducer;

// Profile list
export const getUserProfileList = state => getUserReducer(state)?.profileList;
export const getUserProfileListData = state => getUserProfileList(state)?.data;
export const getUserProfileListIsFetching = state => getUserProfileList(state)?.isFetching;
export const getUserProfileListHasError = state => getUserProfileList(state)?.hasError;
export const getUserProfileListError = state => getUserProfileList(state)?.error;
export const getUserProfileListByUserId = (state, userId) => getUserProfileListData(state)?.find( item => item.id == userId );

// User list
export const getUserList = state => getUserReducer(state)?.userList;
export const getUserListData = state => getUserList(state)?.data;
export const getUserListIsFetching = state => getUserList(state)?.isFetching;
export const getUserListByUserEmail = (state, userEmail) => getUserListData(state)?.records.find( item => item.email == userEmail );

// User Detail
export const getUserDetail = state => getUserReducer(state)?.userDetail;
export const getUserDetailData = state => getUserDetail(state)?.data;
export const getUserDetailIsFetching = state => getUserDetail(state)?.isFetching;

// New User
export const getUserCreate = state => getUserReducer(state)?.userNew;
export const getUserCreateIsFetching = state => getUserCreate(state)?.isFetching;

// User to edit
export const getUserToEdit = state => getUserReducer(state)?.userToEdit;
export const getUserEdit = state => getUserReducer(state)?.userEdit;
export const getUserEditIsFetching = state => getUserEdit(state)?.isFetching;

// User to details
export const getUserToDetail = state => getUserReducer(state)?.userToDetails;

// Create User X Application X Profile
export const getAddUserToProfile = state => getUserReducer(state)?.addUserToProfile;
export const getAddUserToProfileIsFetching = state => getAddUserToProfile(state)?.isFetching;

// Edit User X Application X Profile
export const getEditUserXApplicationXProfile = state => getUserReducer(state)?.editUserXApplicationXProfile;
export const getEditUserXApplicationXProfileIsFetching = state => getEditUserXApplicationXProfile(state)?.isFetching;

// List Users X Application X Profile
export const getListUsersXApplicationXProfile = state => getUserReducer(state)?.listUsersXApplicationXProfile;
export const getListUsersXApplicationXProfileData = state => getListUsersXApplicationXProfile(state)?.data;
export const getListUsersXApplicationXProfileIsFetching = state => getListUsersXApplicationXProfile(state)?.isFetching;
export const getListUsersXApplicationXProfileHasError = state => getListUsersXApplicationXProfile(state)?.hasError;
export const getListUsersXApplicationXProfileError = state => getListUsersXApplicationXProfile(state)?.error;
export const getUserXApplicationXProfileByUserId = (state, userId) => getListUsersXApplicationXProfileData(state)?.find( item => item.userId == userId );

// User edit Change Password
export const getUserEditChangePassword = state => getUserReducer(state)?.userEditChangePassword;
export const getUserEditChangePasswordIsFetching = state => getUserEditChangePassword(state)?.isFetching;