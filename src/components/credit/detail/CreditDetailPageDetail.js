import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';

import { getSubcodeDetailsPageData } from 'src/redux/subcode/subcodeReducer';
import { formatterPeso, numberNegativeRed } from 'src/utils/utils';
import { characterLabel, amount, subcode, code, creditPartial, creditInitial, sector, section, functio, cuentaCuentaEspecial, uOrganizaciónOrganismo, jurisdiction, nroCredit, detailsCredit, serviceLabel } from 'src/utils/label';

const CreditDetailPageDetail = props => {

	// Credit details
	const subcodeData = useSelector(state => getSubcodeDetailsPageData(state));
	const { service, organization, character, functionality, partialBudget, account } = subcodeData?.code?.credit;
	const purpose = functionality?.purpose;

	// Amount
	const subcodeAmount = formatterPeso.format(subcodeData?.balance?.currentBalance);
	return <Container>
		<div>
			<Card className='mb-3'>
				<Card.Header>
					<h6 className='mb-0'>
						{detailsCredit}
					</h6>
				</Card.Header>
				<Card.Body>
					<Container>
						<Row>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row} controlId='nroCredit'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{nroCredit}:
									</Form.Label>
									<Col sm='9'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={subcodeData?.completeNumber} />
									</Col>
								</Form.Group>
							</Col>
						</Row>
						<Row >
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row} controlId='service'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{serviceLabel}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${service?.number} - ${service?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row} controlId='jurisdiction'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{jurisdiction}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${organization?.jurisdiction?.number} - ${organization?.jurisdiction?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col xs={12} className='text-right'>

								<Form.Group className='mb-0' as={Row} controlId='organization'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{uOrganizaciónOrganismo}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${organization?.number} - ${organization?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row} controlId='character'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{characterLabel}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${character?.code} - ${character?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row}>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{cuentaCuentaEspecial}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${account?.number} - ${account?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row}>
									<Form.Label className='text-black-color px-0' column sm='3'>
										Finalidad:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${purpose?.number} - ${purpose?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row} controlId='functionality'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{functio}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${functionality?.number} - ${functionality?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>

						<Row >
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row} controlId='section'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{section}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${partialBudget?.principalBudget?.sector?.section?.number} - ${partialBudget?.principalBudget?.sector?.section?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>

						<Row >
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row} controlId='sector'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{sector}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${partialBudget?.principalBudget?.sector?.number} - ${partialBudget?.principalBudget?.sector?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>

						<Row >
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row} controlId='principalBudget'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{creditInitial}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${partialBudget?.principalBudget?.number} - ${partialBudget?.principalBudget?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row} controlId='partialBudget'>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{creditPartial}:
									</Form.Label>
									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${partialBudget?.number} - ${partialBudget?.name}`} />
									</Col>
								</Form.Group>
							</Col>
						</Row>
						<hr></hr>
						<Row className='mb-2'>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row}>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{code}:
									</Form.Label>

									<Col sm='8' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${subcodeData?.code?.number} - ${subcodeData?.code?.name || ''}`} />
									</Col>

									<Col sm='1' className='pl-0 d-flex align-items-center'>
									</Col>
								</Form.Group>
							</Col>
						</Row>
						<Row className='mb-2'>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row}>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{subcode}:
									</Form.Label>
									<Col sm='8' className='text-left'>
										<Form.Control plaintext readOnly className='px-0' defaultValue={`${subcodeData?.number} - ${subcodeData?.name || ''}`} />
									</Col>

									<Col sm='1' className='pl-0 d-flex align-items-center'></Col>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col xs={12} className='text-right'>
								<Form.Group className='mb-0' as={Row}>
									<Form.Label className='text-black-color px-0' column sm='3'>
										{amount}:
									</Form.Label>

									<Col sm='9' className='text-left'>
										<Form.Control plaintext readOnly className={numberNegativeRed(subcodeData?.balance?.currentBalance)} defaultValue={subcodeAmount} />
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

export default CreditDetailPageDetail;