import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Form, Spinner, Row, Col, Button } from 'react-bootstrap';

import { LISTADO_TIPO_DESTINATARIO } from 'src/routes';
import { push } from 'connected-react-router';
import PageTitle from 'src/components/general/PageTitle';

import { user } from 'src/utils/label';


const nuevoTipoDestinatario = props => {
    const dispatch = useDispatch();

    const onClickVolverListadoTipoDestinatario = () => {
        dispatch(push(LISTADO_TIPO_DESTINATARIO));
    };

    return <Container className='mb-5'>
        <Card>

            <PageTitle text="Nuevo Tipo Destinatario" />

            <Container>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tipo Destinatario" />
                    </Form.Group>





                    <Button variant="secondary" type="submit" onClick={onClickVolverListadoTipoDestinatario}>
                        Cancelar
					  </Button>
                    <Button variant="primary">Guardar</Button>{' '}


                </Form>

            </Container>
        </Card>
    </Container>;
};

export default nuevoTipoDestinatario;