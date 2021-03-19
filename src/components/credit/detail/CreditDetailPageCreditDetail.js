import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';

import { getCreditDetailsData } from 'src/redux/credit/creditReducer';
import {balances,paymentBalance,paidAccumulator,acumuladorOblPago,saldoOblPago,finalBalance,ultimateAccumulator,preventiveAccumulator,preventiveBalance,preventiveAccumulator,creditCurrent,pay,obligationPay,definitive,totalMonth,balancePartial,creditOrigin,creditPar,preventiveAccumulator } from 'src/utils/label';


const CreditDetailPageCreditDetail  = props => {

	const creditDetailsData = useSelector( state => getCreditDetailsData(state) );

	const { originalCredit, modificacionCredit, currentCredit } = creditDetailsData;
	

	useEffect( () => {
		
	}, []);

	return <Container>
			
		<div>
			<Card className='mb-3'>
				<Card.Header>
					<h6 className='mb-0'>
						{creditPar}
					</h6>
				</Card.Header>
				<Card.Body>

					<Container>

						<Row>
							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="originalCredit">
									<Form.Label className="text-black-color" column sm="5">
									{creditOrigin}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue={`${originalCredit}`} />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
									{balancePartial}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="Saldo de Partida:??" />
									</Col>
								</Form.Group>

							</Col>
						
						</Row>
						<Row>
							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="modificacionCredit">
									<Form.Label className="text-black-color" column sm="5">
									{modifications}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue={`${modificacionCredit}`} />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
									{/* Sector: */}
									</Form.Label>
									<Col sm="7">
										{/* <Form.Control plaintext readOnly defaultValue="XXXXX" /> */}
									</Col>
								</Form.Group>

							</Col>

						</Row>
						<Row>

							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="currentCredit">
									<Form.Label className="text-black-color" column sm="5">
									{creditCurrent}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue={`${currentCredit}`} />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail" c>
									<Form.Label className="text-black-color" column sm="5">
									{/* Partida primaria: */}
									</Form.Label>
									<Col sm="7">
										{/* <Form.Control plaintext readOnly defaultValue="XXXXX" /> */}
									</Col>
								</Form.Group>

							</Col>

						</Row>
						
						<hr></hr>
						<div>
							<h5 className='text-center text-black-color'>{totalMonth}</h5>
						</div>
						<Row>
							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{preventive}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{definitive}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>
						
						</Row>

						<Row>
							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{obligationPay}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={6} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{pay}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>
						
						</Row>

						<hr></hr>
						<div>
							<h5 className='text-center text-black-color'>{balances}</h5>
						</div>
						<Row>
							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{creditCurrent}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{preventiveAccumulator}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{preventiveBalance}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>
						
						</Row>

						<Row>
							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{preventiveAccumulator}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{ultimateAccumulator}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{finalBalance}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>
						
						</Row>

						<Row>
							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{ultimateAccumulator}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{saldoOblPago}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{saldoOblPago}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>
						
						</Row>

						<Row>
							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
											{acumuladorOblPago}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{paidAccumulator}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>

							<Col xs={4} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId="formPlaintextEmail">
									<Form.Label className="text-black-color" column sm="5">
										{paymentBalance}:
									</Form.Label>
									<Col sm="7">
										<Form.Control plaintext readOnly defaultValue="XXXXX" />
									</Col>
								</Form.Group>

							</Col>
						
						</Row>

				

					</Container>
				</Card.Body>
			</Card>
		</div>

		</Container>

};

export default CreditDetailPageCreditDetail;