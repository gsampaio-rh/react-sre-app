import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useInsightsContext } from '../contexts/InsightsContext';
import ComponentDetails from './ComponentDetails';
import MetricsDetails from './MetricsDetails';

const InfoModal = ({ show, handleClose, componentData }) => {
    const { isInsightsEnabled } = useInsightsContext();
    const [showMetrics, setShowMetrics] = useState(false);

    if (!componentData) return null;

    const headerClass = 'info';

    const toggleMetrics = () => {
        setShowMetrics(!showMetrics);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className={headerClass}>
                <Modal.Title>Detalhes do Componente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="alert-icon-container" onClick={toggleMetrics}>
                    <img src="/img/lamp.png"
                        className="lamp-icon"
                        alt="Lamp Icon"
                    />
                </div>
                <ComponentDetails componentData={componentData} />
                {showMetrics && <MetricsDetails />}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default InfoModal;
