import React, { useDispatch, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserPermissionsSecurity } from 'src/redux/login/loginReducer';
import { getUserListData, getUserProfileListData, getListUsersXApplicationXProfileData } from 'src/redux/user/userReducer';


// Set Asign of Profiles
export const setAssignProfiles = () => {	

    //Verifity type de assign Profiles
    const securityPermissionsAssignProfiles = useSelector( state => getUserPermissionsSecurity(state) )?.assignProfiles;
    let profileNameArray = [];

    if (securityPermissionsAssignProfiles?.Administrador_de_Presupuesto){
        let nameProfileString = 'Administrador de Presupuesto';
        profileNameArray.push(nameProfileString);
    } 
    
    if (securityPermissionsAssignProfiles?.Dirección_de_Análisis_e_Informática){
        let nameProfileString = 'Dirección de Análisis e Informática';
        profileNameArray.push(nameProfileString);
    } 
    
    if (securityPermissionsAssignProfiles?.Dirección_de_Presupuesto){
        let nameProfileString = 'Dirección de Presupuesto';
        profileNameArray.push(nameProfileString);
    } 
    
    if (securityPermissionsAssignProfiles?.Empleado_de_Presupuesto){
        let nameProfileString = 'Empleado de Presupuesto';
        profileNameArray.push(nameProfileString);
    } 
    
    if (securityPermissionsAssignProfiles?.Reportes_de_Control_de_Presupuesto){
        let nameProfileString = 'Reportes de Control de Presupuesto';
        profileNameArray.push(nameProfileString);
    } 
    
    if (securityPermissionsAssignProfiles?.Super_Admin){
        let nameProfileString = 'Super Admin';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Operador_de_Servicio_de_Presupuesto){
        let nameProfileString = 'Operador de Servicio de Presupuesto';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Reportes_de_Ejecución_de_Presupuesto){
        let nameProfileString = 'Reportes de Ejecución de Presupuesto';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Fiscalizador){
        let nameProfileString = 'Fiscalizador';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Jefe_de_Contabilidad_de_SA){
        let nameProfileString = 'Jefe de Contabilidad de SA';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Jefe_de_Tesoreria_de_SA){
        let nameProfileString = 'Jefe de Tesoreria de SA';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Operador_de_Tesoreria){
        let nameProfileString = 'Operador de Tesoreria';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Responsable_de_transferencia_de_fondos){
        let nameProfileString = 'Responsable de transferencia de fondos';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Contador_General){
        let nameProfileString = 'Contador General';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Delegado_Fiscal_de_SA){
        let nameProfileString = 'Delegado Fiscal de SA';
        profileNameArray.push(nameProfileString);
    }

    if (securityPermissionsAssignProfiles?.Director_de_SA){
        let nameProfileString = 'Director de SA';
        profileNameArray.push(nameProfileString);
    }
    //End Verfity type de assign Profiles

    return profileNameArray;
}

// List set Users x Profiles
export const listUsersByProfile = () => {	

    // Set config Users By Profile
   	const profileNameArray = setAssignProfiles();

	//List Users
	const listUserData = useSelector(state => getUserListData(state));
	
	//Profile
	const listProfileData = useSelector(state => getUserProfileListData(state))?.sort((profileValue1, profileValue2) => {
		return (profileValue1.name?.toUpperCase() < profileValue2.name?.toUpperCase()) ? -1 : 1;
	});

	// Filter for type profile
	const profileNameArrayRecords = listProfileData?.filter( item => profileNameArray?.includes( item?.name ) );

	let profileUserIdArray = [];
	let i = 0;
	for (i in profileNameArrayRecords){
		profileUserIdArray.push(profileNameArrayRecords[i]?.id)
	}

	// Filter for type profile
	let profileUserId = profileUserIdArray;
	const listUsersXApplicationXProfileData = useSelector( state => getListUsersXApplicationXProfileData(state) );
	
	const listUsersXApplicationXProfileDataRecords  = listUsersXApplicationXProfileData?.filter( item => profileUserId?.includes( item?.profileId ) );
	let UserIdArray = [];
	let item = 0;
	for (item in listUsersXApplicationXProfileDataRecords){
		UserIdArray.push(listUsersXApplicationXProfileDataRecords[item]?.userId)
	}

	// Filter for type Profile of User
	const UserID = UserIdArray;
	const userListArrayRecords = listUserData?.records?.filter( item => UserID?.includes( item?.id ) );

	//END type de assign Profiles

	return userListArrayRecords;
}


