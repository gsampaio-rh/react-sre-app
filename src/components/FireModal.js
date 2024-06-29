import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ruleData from '../assets/data/rule_impacting.json';
import { useInsightsContext } from '../contexts/InsightsContext';

const FireModal = ({ show, handleClose, roomId }) => {
    const [showDetailedInfo, setShowDetailedInfo] = useState(false);
    const { isInsightsEnabled, isAnsibleEnabled } = useInsightsContext();
    const ruleId = "hardening_logging_auditd|HARDENING_LOGGING_5_AUDITD";
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
                            <strong>
                                <a
                                    href={`https://console.redhat.com/insights/advisor/recommendations/${rule.rule_id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    {rule.description}
                                </a>
                            </strong>
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
                    <div className="initial-info" style={{ padding: '20px', fontSize: '16px', color: '#333' }}>
                        <p>Há um incêndio nesta sala. Por favor, evacue imediatamente.</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'space-between' }}>
                {isInsightsEnabled && (
                    <a
                        href="https://www.redhat.com/en/technologies/management/insights"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLogoClick}
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                        <img src="/img/redhat-insights.png" className="logo" alt="Red Hat Insights Logo" style={{ width: '150px', marginRight: '10px' }} />
                    </a>
                )}
                {isInsightsEnabled && isAnsibleEnabled && (
                    <a
                        href="https://console.redhat.com/insights/remediations/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                        <img src="/img/ansible.png" className="logo" alt="Ansible Logo" style={{ width: '150px', marginLeft: '10px' }} />
                    </a>
                )}
                <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FireModal;
