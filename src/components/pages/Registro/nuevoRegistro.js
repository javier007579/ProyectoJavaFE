import React, { useEffect, useState } from 'react';

import { Container, Card, Form, Spinner, Row, Col, Button } from 'react-bootstrap';


import PageTitle from 'src/components/general/PageTitle';

import { user } from 'src/utils/label';


const nuevoRegistro = props => {


    return <Container className='mb-5'>
        <Card>

            <PageTitle text="Nuevo Registro" />

            <Container>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder="Titulo" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Detalle</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form>
                        <Form.Group>
                            <Form.File id="formcheck-api-regular">
                                <Form.Label>Archivo Adjunto</Form.Label>
                                <Form.File.Label>Archivo Adjunto</Form.File.Label>
                                <Form.File.Input />
                            </Form.File>
                        </Form.Group>
                    </Form>
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label>Destinatarios</Form.Label>
                        <Form.Control as="select" htmlSize={3} custom>
                            <option>Administrativos</option>
                            <option>Docentes</option>
                            <option>Padres o Tutores</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Button variant="secondary">Cancelar</Button>{' '}
                        <Button variant="primary" type="submit">
                            Guardar
					  </Button>
                    </Form.Group>

                </Form>

            </Container>
        </Card>
    </Container>;
};

export default nuevoRegistro;