import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Form, Spinner, Row, Col, Button } from 'react-bootstrap';

import { LISTADO_CIRCULAR } from 'src/routes';
import { push } from 'connected-react-router';
import PageTitle from 'src/components/general/PageTitle';

import { user } from 'src/utils/label';


const nuevaCircular = props => {
	const dispatch = useDispatch();

	const onClickVolverListadoCircular = () => {
		dispatch(push(LISTADO_CIRCULAR));
	};

	return <Container className='mb-5'>
		<Card>

			<PageTitle text="Nueva Circular" />

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
						<Form.Label>Tipos Destinatarios</Form.Label>
						<Form.Control as="select" htmlSize={3} custom>
							<option>Administrativos</option>
							<option>Docentes</option>
							<option>Padres o Tutores</option>
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="exampleForm.SelectCustomHtmlSize">

						<Button variant="secondary" type="submit" onClick={onClickVolverListadoCircular}>
							Cancelar
					  </Button>
						<Button variant="primary">Guardar</Button>{' '}
					</Form.Group>

				</Form>

			</Container>
		</Card>
	</Container>;
};

export default nuevaCircular;