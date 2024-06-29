import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ComponentModal({ show, handleClose, componentData, problemData }) {
    if (!componentData) return null;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className={problemData ? "modal-header warning" : "modal-header"}>
                <Modal.Title>{componentData.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="issue">
                    <strong>{problemData ? problemData.issue : 'Detalhes do Componente'}</strong>
                    {problemData ? problemData.description : ''}
                </div>
                <div className="impact">
                    <strong>Impacto:</strong>
                    {problemData ? problemData.impact : 'Nenhum problema detectado.'}
                </div>
                <div className="suggestions">
                    <strong>Sugestões:</strong>
                    {problemData ? (
                        <ul>
                            {problemData.suggestions.map((suggestion, index) => (
                                <li key={index}>{suggestion}</li>
                            ))}
                        </ul>
                    ) : (
                        'Nenhuma'
                    )}
                </div>
                <div className="revision-dates">
                    <p>Última Revisão: {componentData.last_revision_date}</p>
                    <p>Data de Expiração: {componentData.expiration_date}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ComponentModal;
