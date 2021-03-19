import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Nav, NavDropdown, Accordion, Button } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faWallet, faFileAlt, faClipboard, faChevronDown, faCalendarAlt, faBuilding, faSitemap, faMoneyBill, faCode } from '@fortawesome/free-solid-svg-icons';
import { getUserPermissionsSecurity, getUserPermissionsControlBudget, getUserPermissionsExecutionBudget, getUserPermissionsPeriods,  getUserPermissionsBudgetItemControl, getUserPermissionsOrganisms, getProfileName } from 'src/redux/login/loginReducer';

import * as ROUTES from 'src/routes';

const Menus = props => {

	const { user } = props;

	//Profile User
	const profileName = useSelector(state => getProfileName(state));

	const profileNameHTC = profileName == 'Fiscalizador';

	const dispatch = useDispatch();

	const securityTitle = (<><FontAwesomeIcon icon={faLock} className='mr-1' />
	Seguridad</>);

	const executionBudgetTitle = (<><FontAwesomeIcon icon={faWallet} className='mr-1' />
	Ejecución de presupuesto</>);

	const securityPermissions = useSelector(state => getUserPermissionsSecurity(state));
	const controlBudgetPermissions = useSelector(state => getUserPermissionsControlBudget(state));

	const budgetItemControlPermissions = useSelector(state => getUserPermissionsBudgetItemControl(state));
	const organismsPermissions = useSelector(state => getUserPermissionsOrganisms(state));

	return (
		<Nav className='mr-auto'>
			{
				securityPermissions?.canView
					?
					<NavDropdown title={securityTitle}>
						{
							securityPermissions?.users?.canView
								?
								<NavDropdown.Item onClick={() => dispatch(push(ROUTES.USER_LIST))}>
									Usuarios
								</NavDropdown.Item>
								:
								null
						}
						{
							securityPermissions?.profiles?.canView
								?
								<NavDropdown.Item onClick={() => dispatch(push(ROUTES.PROFILE_LIST))}>
									Grupos
								</NavDropdown.Item>
								:
								null
						}
					</NavDropdown>
					:
					null
			}
						
			



		</Nav>
	);
};

export default Menus;