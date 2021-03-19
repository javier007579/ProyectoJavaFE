import React from 'react';
import { Modal } from 'react-bootstrap';

const LegalInstrumentSearchModal = props => {

	const [ isModalVisible, setIsModalVisible ] = useState(props.show);
	const handleModalClose = () => {
		setIsModalVisible(false);
	};

	return <Modal show={isModalVisible} onHide={handleModalClose}>
		<Modal.Header closeButton>
			<Modal.Title>Instrumentos legales existentes</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			Woohoo, you're reading this text in a modal!
		</Modal.Body>
		<Modal.Footer>
			<Button variant="secondary" onClick={handleModalClose}>
				Cerrar
			</Button>
			<Button variant="primary" onClick={handleModalClose}>
				Seleccionar
			</Button>
		</Modal.Footer>
	</Modal>;
};

export default LegalInstrumentSearchModal;