import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Nav, NavDropdown, Accordion, Button } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faWallet, faSchool, faShieldCheck, faFileAlt, faAddressCard, faClipboard, faClipboardList, faChevronDown, faCalendarAlt, faBuilding, faSitemap, faMoneyBill, faCode } from '@fortawesome/free-solid-svg-icons';
import { getUserPermissionsSecurity, getUserPermissionsControlBudget, getUserPermissionsExecutionBudget, getUserPermissionsPeriods, getUserPermissionsBudgetItemControl, getUserPermissionsOrganisms, getProfileName } from 'src/redux/login/loginReducer';

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

			<NavDropdown title="Seguridad" >
				<NavDropdown.Item onClick={() => dispatch(push(ROUTES.USER_LIST))}>
					Usuarios
				</NavDropdown.Item>
				<NavDropdown.Item onClick={() => dispatch(push(ROUTES.PROFILE_LIST))}>
					Grupos
				</NavDropdown.Item>
			</NavDropdown>
			<Nav.Item>
				<Nav.Link className='nav-level-1 ' onClick={() => dispatch(push(ROUTES.LISTADO_CIRCULAR))}>
					<FontAwesomeIcon icon={faClipboardList} className='mr-1' />
							Circular
						</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link className='nav-level-1 ' onClick={() => dispatch(push(ROUTES.LISTADO_TIPO_CIRCULAR))}>
					<FontAwesomeIcon icon={faClipboard} className='mr-1' />
							Tipo de Circular
						</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link className='nav-level-1 ' onClick={() => dispatch(push(ROUTES.LISTADO_TIPO_DESTINATARIO))}>
					<FontAwesomeIcon icon={faAddressCard} className='mr-1' />
						Tipo de Destinatario
						</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link className='nav-level-1 ' onClick={() => dispatch(push(ROUTES.LISTADO_ESCUELA))}>
					<FontAwesomeIcon icon={faSchool} className='mr-1' />
						Escuela
						</Nav.Link>
			</Nav.Item>




		</Nav>
	);
};

export default Menus;