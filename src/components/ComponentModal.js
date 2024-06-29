import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useInsightsContext } from '../contexts/InsightsContext';
import ProblemDetails from './ProblemDetails';
import ComponentDetails from './ComponentDetails';

const ComponentModal = ({ show, handleClose, componentData, problemData }) => {
    const [showCveDetails, setShowCveDetails] = useState(false);
    const { isInsightsEnabled } = useInsightsContext();

    if (!componentData) return null;

    const toggleCveDetails = (e) => {
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
                <ComponentDetails componentData={componentData} />
                <ProblemDetails
                    problemData={problemData}
                    showCveDetails={showCveDetails}
                    toggleCveDetails={toggleCveDetails}
                />
            </Modal.Body>
            <Modal.Footer>
                {isInsightsEnabled && problemData && (
                    <a
                        href="https://www.redhat.com/en/technologies/management/insights"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleCveDetails}
                    >
                        <img src="/img/redhat-insights.png" className="logo" alt="Red Hat Insights Logo" />
                    </a>
                )}
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ComponentModal;
