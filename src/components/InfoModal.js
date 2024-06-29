import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ComponentDetails from './ComponentDetails';
import MetricsSection from './MetricsSection';

const InfoModal = ({ show, handleClose, componentData }) => {
    const [currentSection, setCurrentSection] = useState('details');

    const handleNextSection = () => {
        if (currentSection === 'details') {
            setCurrentSection('metrics');
        } else if (currentSection === 'metrics') {
            setCurrentSection('slis');
        } else if (currentSection === 'slis') {
            setCurrentSection('slos');
        }
    };

    const handlePreviousSection = () => {
        if (currentSection === 'slos') {
            setCurrentSection('slis');
        } else if (currentSection === 'slis') {
            setCurrentSection('metrics');
        } else if (currentSection === 'metrics') {
            setCurrentSection('details');
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="info">
                <Modal.Title>Detalhes do Componente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="alert-icon-container">
                    <img src="/img/lamp.png" className="lamp-icon" alt="Lamp Icon" />
                </div>
                {currentSection === 'details' && (
                    <ComponentDetails componentData={componentData} />
                )}
                {currentSection !== 'details' && <MetricsSection currentSection={currentSection} />}
            </Modal.Body>
            <Modal.Footer>
                <div className="footer-buttons">
                    {currentSection !== 'details' && (
                        <Button variant="secondary" onClick={handlePreviousSection}>
                            Voltar
                        </Button>
                    )}
                    <Button variant="primary" onClick={currentSection === 'slos' ? handleClose : handleNextSection}>
                        {currentSection === 'slos' ? 'Fechar' : 'Próximo'}
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default InfoModal;
