import React from 'react';
import { Container, Image } from 'react-bootstrap';

import logo from 'App/assets/images/background_waterfalls.jpg';

const IndexPage = props => {
	return (
		<Container id='index-page'>
			<div className='overlay'></div>
			<Image src={logo} fluid className='background-page'/>
		</Container>
	);
};

export default IndexPage;