import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionIcon = props => {

	const { id='', toolTipText, icon = null, mr = 0, ml = 0, mb = 0, mt = 0, className='' } = props;

	let classes = `${className} mr-${mr} ml-${ml} mb-${mb} mt-${mt} action-icon`;

	return <>
		<OverlayTrigger
			key={`key-${id}`}
			placement='top'
			overlay={
				<Tooltip id={`tooltip-${id}`}>
					{toolTipText}
        		</Tooltip>
			}>
			<Button {...props} className={classes} variant='link'>
				<FontAwesomeIcon icon={icon}/>
			</Button>
		</OverlayTrigger>
		
	</>;
};

export default ActionIcon;