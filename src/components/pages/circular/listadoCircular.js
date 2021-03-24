import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Table, Button, FormControl, Spinner, Row, Col, Alert, Accordion, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { push } from 'connected-react-router';
import { faPlus, faEdit, faTrash, faExclamationTriangle, faSearch, faRecycle } from '@fortawesome/free-solid-svg-icons';
import ActionIcon from 'src/components/general/ActionIcon';
import PageTitle from 'src/components/general/PageTitle';

import { seeMore, actions, userEmail, users, newUser, lastNameName } from 'src/utils/label';

import { NUEVA_CIRCULAR } from 'src/routes';

const listadoCircular = props => {
    const dispatch = useDispatch();

    const onClickNuevaCircular = () => {
        dispatch(push(NUEVA_CIRCULAR));
    };


    return <Container className='mb-5'>
        <Card>
            <PageTitle text='Circular' />
            <Container>
                <Card className='mb-3'>
                    <Card.Body>

                        <Button size='sm' className='mb-3' variant='secondary' onClick={onClickNuevaCircular} >
                            <FontAwesomeIcon icon={faPlus} className='mr-1' />
									Nueva Circular
								</Button>
                        <Table striped bordered hover size='sm'>
                            <thead>
                                <tr>
                                    <th className='text-center'>Fecha</th>
                                    <th className='text-center'>Detalle</th>
                                    <th className='text-center'>Notificados</th>
                                    <th className='text-center align-middle'>Acciones</th>
                                </tr>

                            </thead>
                            <tbody className='text-black-color'>
                                <tr>
                                    <td>12/05/2021</td>
                                    <td>Nota de Salida</td>
                                    <td>SI</td>
                                    <td className='text-center align-middle p-0 m-0' className='table-responsive btn-group' >
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Detalle Circular' icon={faSearch} />
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Editar Circular' icon={faEdit} />
                                        <ActionIcon size='lg' id='delete' toolTipText='Eliminar Circular' icon={faTrash} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>13/05/2021</td>
                                    <td>Permiso salida parque</td>
                                    <td>SI</td>
                                    <td className='text-center align-middle p-0 m-0' className='table-responsive btn-group' >
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Detalle Circular' icon={faSearch} />
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Editar Circular' icon={faEdit} />
                                        <ActionIcon size='lg' id='delete' toolTipText='Eliminar Circular' icon={faTrash} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>14/05/2021</td>
                                    <td>Permiso Especial</td>
                                    <td>SI</td>
                                    <td className='text-center align-middle p-0 m-0' className='table-responsive btn-group' >
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Detalle Circular' icon={faSearch} />
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Editar Circular' icon={faEdit} />
                                        <ActionIcon size='lg' id='delete' toolTipText='Eliminar Circular' icon={faTrash} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>14/05/2021</td>
                                    <td>Salida anticipada</td>
                                    <td>NO</td>
                                    <td className='text-center align-middle p-0 m-0' className='table-responsive btn-group' >
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Detalle Circular' icon={faSearch} />
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Editar Circular' icon={faEdit} />
                                        <ActionIcon size='lg' id='delete' toolTipText='Eliminar Circular' icon={faTrash} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                    </Card.Body>
                </Card>
            </Container>
        </Card>
    </Container>;
};

export default listadoCircular;