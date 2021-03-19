import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, Table, FormControl, Spinner, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';
import ActionIcon from 'src/components/general/ActionIcon';

import { getSubcodeDetailsData, getSubcodeDetailsPageData, getSubcodeDetailsIsFetching } from 'src/redux/subcode/subcodeReducer';
import { tryGetSubcodeDetails } from 'src/redux/subcode/subcodeActionCreator';
import { isNotEmptyArray } from 'src/services/validationService';
import { dateToStringFormatedToShowARG, numberNegativeRed, formatterPeso } from 'src/utils/utils';
import { typeLegalInstrument, notModifications, dowload, amount, numberlegalInstrument, dateLegalInstrument, creditModification } from 'src/utils/label';

import { tryDownloadFileOfLegalInstrument } from 'src/redux/legalInstrument/legalInstrumentActionCreator';


const SUB_CODE_DETAILS_FIELDS = {
	DATE_TO_SHOWN: 'DATE_TO_SHOWN',
	NUMBER: 'NUMBER',
	NAME: 'NAME',
	AMOUNT: 'AMOUNT'
}

const CreditDetailPageModifyDetail = props => {

	const dispatch = useDispatch();

	// Subcode details
	const subcodeDetailsPageData = useSelector(state => getSubcodeDetailsPageData(state));
	const subcodeDetailsData = useSelector(state => getSubcodeDetailsData(state));
	const [localSubcodeDetailsData, setLocalSubcodeDetailsData] = useState();
	const hasSubcodeDetailsData = isNotEmptyArray(localSubcodeDetailsData);
	const subcodeDetailsIsFetching = useSelector(state => getSubcodeDetailsIsFetching(state));

	const mapAddDateToShow = subcodeDetail => ({ ...subcodeDetail, dateToShown: dateToStringFormatedToShowARG(subcodeDetail?.legalInstrument?.date) });
	const filterModifications = subcodeDetail => (subcodeDetail?.subCodeDetailType?.id == 2);

	useEffect(() => {
		setLocalSubcodeDetailsData(subcodeDetailsData?.filter(filterModifications)?.map(mapAddDateToShow));
	}, [subcodeDetailsData]);

	useEffect(() => {
		dispatch(tryGetSubcodeDetails(subcodeDetailsPageData?.id));
	}, []);

	const onChangeFilter = (fieldName, fieldValue) => {
		if (fieldValue == '' && fieldValue == undefined || fieldValue == null) {
			setLocalSubcodeDetailsData(subcodeDetailsData?.filter(filterModifications)?.map(mapAddDateToShow));
		}
		else if (fieldName) {
			switch (fieldName) {
				case SUB_CODE_DETAILS_FIELDS.DATE_TO_SHOWN: {
					setLocalSubcodeDetailsData(subcodeDetailsData?.filter(filterModifications)?.map(mapAddDateToShow)?.filter(item => item?.dateToShown?.toString()?.includes(fieldValue)));
					break;
				}
				case SUB_CODE_DETAILS_FIELDS.NUMBER: {
					setLocalSubcodeDetailsData(subcodeDetailsData?.filter(filterModifications)?.filter(item => item?.legalInstrument?.number?.toString().includes(fieldValue))?.map(mapAddDateToShow));
					break;
				}
				case SUB_CODE_DETAILS_FIELDS.NAME: {
					setLocalSubcodeDetailsData(subcodeDetailsData?.filter(filterModifications)?.filter(item => item?.legalInstrument?.legalInstrumentType?.name?.toString().includes(fieldValue))?.map(mapAddDateToShow));
					break;
				}
				case SUB_CODE_DETAILS_FIELDS.AMOUNT: {
					setLocalSubcodeDetailsData(subcodeDetailsData?.filter(filterModifications)?.filter(item => item?.amount?.toString()?.includes(fieldValue))?.map(mapAddDateToShow));
					break;
				}
				default: { }
			}
		}
	};

	const onClickDownloadLegalInstrumentFile = value => {
		dispatch(tryDownloadFileOfLegalInstrument(value));
	};

	return <Container>
		<Card >
			<Card.Header>
				<h6 className='mb-0'>{creditModification}</h6>
			</Card.Header>
			<Card.Body >
				<Table className='mb-0' striped bordered hover size='sm'>
					<thead>
						<tr>
							<th className='text-center'>{dateLegalInstrument}</th>
							<th className='text-center'>{numberlegalInstrument}</th>
							<th className='text-center'>{typeLegalInstrument}</th>
							<th className='text-center'>{amount}</th>
							<th className='text-center'>{dowload}</th>
						</tr>
						<tr className='secondary'>
							<th>
								<FormControl size='sm' className='text-center' onChange={event => onChangeFilter(SUB_CODE_DETAILS_FIELDS.DATE_TO_SHOWN, event.target.value)} />
							</th>
							<th>
								<FormControl size='sm' className='text-center' onChange={event => onChangeFilter(SUB_CODE_DETAILS_FIELDS.NUMBER, event.target.value)} />
							</th>
							<th>
								<FormControl size='sm' className='text-center' onChange={event => onChangeFilter(SUB_CODE_DETAILS_FIELDS.NAME, event.target.value)} />
							</th>
							<th>
								<FormControl size='sm' className='text-center' onChange={event => onChangeFilter(SUB_CODE_DETAILS_FIELDS.AMOUNT, event.target.value)} />
							</th>
							<th>
							</th>
						</tr>
					</thead>
					<tbody className='text-black-color'>
						{
							hasSubcodeDetailsData
								?
								<>
									{
										localSubcodeDetailsData.map(item => {

											const instrumentLegalAmount = formatterPeso.format(item?.amount);

											return (<tr>
												<td className='text-center'>{item?.dateToShown}</td>
												<td className='text-center'>{item?.legalInstrument?.number}</td>
												<td className='text-center'>{item?.legalInstrument?.legalInstrumentType?.name}</td>
												<td className={`${numberNegativeRed(item?.amount)} text-right`}>{instrumentLegalAmount}</td>
												<td className='text-center'>
													{
														item?.legalInstrument?.fileName != null
															?
															<ActionIcon size='lg' id='download' toolTipText='Descargar instrumento legal' icon={faDownload} onClick={() => onClickDownloadLegalInstrumentFile(item?.legalInstrument)} />
															:
															null
													}
												</td>
											</tr>);
										})

									}
								</>
								:
								<tr>
									<td colSpan='6' className='text-center'>
										{
											subcodeDetailsIsFetching
												?
												<Spinner animation='border' size='sm' />
												:
												<Alert variant='info' className='mb-0'>
													<FontAwesomeIcon icon={faExclamationTriangle} className='text-black-color mr-3' />
													{notModifications}
												</Alert>
										}
									</td>
								</tr>
						}
					</tbody>
				</Table>
			</Card.Body>
		</Card>
	</Container>;

};

export default CreditDetailPageModifyDetail;