import React, {Component} from 'react'
import config from 'Config';

const Footer = props => {
	
	//Year Current
	const yearCurrent = new Date();

	return(
		<footer id='footer' className='row page-footer font-weight-light footer-container fixed-bottom'>
			<div className='col-md-12'>
				<div className='footer-copyright text-right py-1 px-3'>
				{/* 	© {yearCurrent.getFullYear()} Copyright: {config.appSettings.name} {config.appSettings.version} empowered by Marandu */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;