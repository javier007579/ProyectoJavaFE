import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { getIsLoggedIn } from 'src/redux/login/loginReducer';
import { INITIAL_URI } from 'src/routes';

const LoggedOutCard = props => {
	const dispatch = useDispatch();
	const { cardContent } = props;

	const isLoggedIn = useSelector( state => getIsLoggedIn(state) );

	if( isLoggedIn ) {
		dispatch( push(INITIAL_URI) );
	}

	return (
		<Container>
			<Row>
				<Col>
					<Card className='login-card shadow-lg my-5'>
						<Card.Body>
							{cardContent}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default LoggedOutCard;