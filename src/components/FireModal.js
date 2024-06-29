import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ruleData from '../assets/data/rule.json';

const FireModal = ({ show, handleClose, roomId }) => {
    const [showDetailedInfo, setShowDetailedInfo] = useState(false);
    const ruleId = "abort_command_issued|ABORT_COMMAND_ISSUED";
    const rule = ruleData.data.find(rule => rule.rule_id === ruleId);

    if (!rule) {
        return null;
    }

    const handleLogoClick = (e) => {
        e.preventDefault(); // Prevent the default action to follow the link
        setShowDetailedInfo(true); // Show detailed info when the logo is clicked
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="warning">
                <Modal.Title>Alerta de Incêndio: {roomId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {showDetailedInfo ? (
                    <>
                        <div className="issue">
                            <strong>{rule.description}</strong>
                        </div>
                        <div className="impact">
                            <strong>Impacto:</strong> {rule.impact.name} - {rule.impact.impact}
                        </div>
                        <div className="likelihood">
                            <strong>Probabilidade:</strong> {rule.likelihood}
                        </div>
                        <div className="resolution">
                            <strong>Resolução:</strong>
                            {rule.resolution_set.map((resolution, index) => (
                                <div key={index}>
                                    <p>{resolution.resolution}</p>
                                    <p>Risco: {resolution.resolution_risk.name} - {resolution.resolution_risk.risk}</p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="initial-info">
                        <p>Há um incêndio nesta sala. Por favor, evacue imediatamente.</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <a
                    href="https://www.redhat.com/en/technologies/management/insights"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLogoClick}
                >
                    <img src="/img/redhat-insights.png" className="logo" alt="Red Hat Insights Logo" />
                </a>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FireModal;
