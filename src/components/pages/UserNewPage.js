import React, { useEffect, useState } from 'react';

import { Container, Card, Form, Spinner, Row, Col, Button } from 'react-bootstrap';


import PageTitle from 'src/components/general/PageTitle';

import { user} from 'src/utils/label';


const UserNewPage = props => {


	return <Container className='mb-5'>
		<Card>

			<PageTitle text={user} />

			<Container>
				
		
			</Container>
		</Card>
	</Container>;
};

export default UserNewPage;