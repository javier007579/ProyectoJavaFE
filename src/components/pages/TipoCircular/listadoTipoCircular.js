import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Table, Button, FormControl, Spinner, Row, Col, Alert, Accordion, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faExclamationTriangle, faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { push } from 'connected-react-router';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
import ActionIcon from 'src/components/general/ActionIcon';
import PageTitle from 'src/components/general/PageTitle';

import { seeMore, actions, userEmail, users, newUser, lastNameName } from 'src/utils/label';

import { NUEVO_TIPO_CIRCULAR } from 'src/routes';

const listadoTipoCircular = props => {
    const dispatch = useDispatch();

    const onClickNuevaTipoCircular = () => {
        dispatch(push(NUEVO_TIPO_CIRCULAR));
    };


    return <Container className='mb-5'>
        <Card>
            <PageTitle text='Tipo de Circular' />
            <Container>
                <Card className='mb-3'>
                    <Card.Body>

                        <Button size='sm' className='mb-3' variant='secondary' onClick={onClickNuevaTipoCircular} >
                            <FontAwesomeIcon icon={faPlus} className='mr-1' />
									Nuevo Tipo Circular
								</Button>
                        <Table striped bordered hover size='sm'>
                            <thead>
                                <tr>
                                    <th className='text-center align-middle'>ID</th>
                                    <th className='text-center align-middle'>Nombre</th>
                                    <th className='text-center align-middle'>Acciones</th>
                                </tr>

                            </thead>
                            <tbody className='text-black-color'>
                                <tr>
                                    <td className='text-center align-middle'>1</td>
                                    <td className='text-center align-middle'>Mensaje</td>
                                    <td className='text-center align-middle p-0 m-0' className='table-responsive btn-group' >
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Detalle Tipo Circular' icon={faSearch} />
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Editar Tipo Circular' icon={faEdit} />
                                        <ActionIcon size='lg' id='delete' toolTipText='Eliminar Tipo Circular' icon={faTrash} />
                                    </td>

                                </tr>
                                <tr>
                                    <td className='text-center align-middle'>2</td>
                                    <td className='text-center align-middle'>Permisos</td>
                                    <td className='text-center align-middle p-0 m-0' className='table-responsive btn-group' >
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Detalle Tipo Circular' icon={faSearch} />
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Editar Tipo Circular' icon={faEdit} />
                                        <ActionIcon size='lg' id='delete' toolTipText='Eliminar Tipo Circular' icon={faTrash} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center align-middle'>3</td>
                                    <td className='text-center align-middle'>Permiso Especial</td>
                                    <td className='text-center align-middle p-0 m-0' className='table-responsive btn-group' >
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Detalle Tipo Circular' icon={faSearch} />
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Editar Tipo Circular' icon={faEdit} />
                                        <ActionIcon size='lg' id='delete' toolTipText='Eliminar Tipo Circular' icon={faTrash} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center align-middle'>4</td>
                                    <td className='text-center align-middle'>Salida anticipada</td>
                                    <td className='text-center align-middle p-0 m-0' className='table-responsive btn-group' >
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Detalle Tipo Circular' icon={faSearch} />
                                        <ActionIcon size='lg' id='credit-query' toolTipText='Editar Tipo Circular' icon={faEdit} />
                                        <ActionIcon size='lg' id='delete' toolTipText='Eliminar Tipo Circular' icon={faTrash} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        {/*    <Row>
                            <Col className='text-center'>
                                <Button size='sm' className='px-5' onClick="">
                                    <Spinner animation='border' size='sm' />
                                </Button>
                            </Col>
                        </Row> */}

                    </Card.Body>
                </Card>
            </Container>
        </Card>
    </Container>;
};

export default listadoTipoCircular;