import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Form, Spinner, Row, Col, Button } from 'react-bootstrap';

import { LISTADO_ESCUELA } from 'src/routes';
import { push } from 'connected-react-router';
import PageTitle from 'src/components/general/PageTitle';

import { user } from 'src/utils/label';


const nuevaEscuela = props => {
    const dispatch = useDispatch();

    const onClickVolverListadoTipoCircular = () => {
        dispatch(push(LISTADO_ESCUELA));
    };

    return <Container className='mb-5'>
        <Card>

            <PageTitle text="Nueva Escuela" />

            <Container>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Escuela" />
                    </Form.Group>





                    <Button variant="secondary" type="submit" onClick={onClickVolverListadoTipoCircular}>
                        Cancelar
					  </Button>
                    <Button variant="primary">Guardar</Button>{' '}


                </Form>

            </Container>
        </Card>
    </Container>;
};

export default nuevaEscuela;