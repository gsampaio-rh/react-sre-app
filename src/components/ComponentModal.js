import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ComponentModal({ show, handleClose, componentData, problemData }) {
    if (!componentData) {
        return null;
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className={problemData ? 'warning' : ''}>
                <Modal.Title>Detalhes do Componente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {problemData && (
                    <div className="alert-icon-container">
                        <img src="/img/alert.png" className="alert-icon" alt="Alert Icon" />
                    </div>
                )}
                <div className="issue">
                    <strong>{componentData.name}</strong>
                    Localização: {componentData.location}<br />
                    Status: {componentData.status}<br />
                    Última revisão: {componentData.last_revision_date}<br />
                    Data de expiração: {componentData.expiration_date}
                </div>
                {problemData && (
                    <>
                        <div className="issue">
                            <strong>{problemData.issue}</strong>
                            {problemData.description}
                        </div>
                        <div className="impact">
                            <strong>Impacto:</strong> {problemData.impact}
                        </div>
                        <div className="suggestions">
                            <strong>Sugestões:</strong>
                            <ul>
                                {problemData.suggestions.map((suggestion, index) => (
                                    <li key={index}>{suggestion}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                {problemData && (
                    <a href="https://www.redhat.com/en/technologies/management/insights" target="_blank" rel="noopener noreferrer">
                        <img src="/img/redhat-insights.png" className="logo" alt="Red Hat Insights Logo" />
                    </a>
                )}
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ComponentModal;
