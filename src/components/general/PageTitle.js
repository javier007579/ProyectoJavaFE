import React from 'react';
import { Container,  Card  } from 'react-bootstrap';

const PageTitle = props => {

	const text = props.text;

	return <Container>
		<Card variant='success' className='mt-3 mb-2'>
			<Card.Header>
				<h5 className='mb-0'>
					{text}
				</h5>
			</Card.Header>
		</Card>
	</Container>;
};

export default PageTitle;