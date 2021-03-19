import React from 'react';
import { Container, Card, Form, Row, Col, Button, FormGroup, Label, Input, FormText } from 'react-bootstrap';

import {paymentBalance,acumuladorOblPago,saldoOblPago,preventiveAccumulator,preventiveBalance,preventiveAccumulator,currentCredit ,ultimateAccumulator} from 'src/utils/label';



const CreditDetailPageBalanceDetail = ( { 
	
}) => {
	return <Container>
			
		<div>
			<Card>
			<Row>
				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{currentCredit}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{preventiveAccumulator}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{preventiveBalance}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{preventiveAccumulator}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{ultimateAccumulator}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{finalBalance}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{ultimateAccumulator}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{acumuladorOblPago}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{saldoOblPago}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{acumuladorOblPago}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{paidAccumulator}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

				<Col xs={4}>

					<Form.Group as={Row} controlId="formPlaintextEmail">
						<Form.Label column sm="5">
						{paymentBalance}:
						</Form.Label>
						<Col sm="7">
							<Form.Control plaintext readOnly defaultValue="XXXXX" />
						</Col>
					</Form.Group>

				</Col>

			
			</Row>
			</Card>
		</div>

		</Container>

};

export default CreditDetailPageBalanceDetail;