import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ComponentModal({ show, handleClose, componentData, problemData }) {
    const [showCveDetails, setShowCveDetails] = useState(false);

    if (!componentData) {
        return null;
    }

    const handleLogoClick = (e) => {
        e.preventDefault(); // Prevent the default action to follow the link
        setShowCveDetails(!showCveDetails); // Toggle the CVE details visibility
    };

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
                        {showCveDetails && problemData.cveDetails && (
                            <div className="cve-details">
                                <strong>CVE Detalhes:</strong><br />
                                CVSS3 Score: {problemData.cveDetails.cvss3_score}<br />
                                Descrição: {problemData.cveDetails.description}<br />
                                Impacto: {problemData.cveDetails.impact}<br />
                                Reboot Required: {problemData.cveDetails.rules.some(rule => rule.reboot_required) ? 'Yes' : 'No'}<br />
                            </div>
                        )}
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                {problemData && (
                    <a href="https://www.redhat.com/en/technologies/management/insights" target="_blank" rel="noopener noreferrer" onClick={handleLogoClick}>
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
