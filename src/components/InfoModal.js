import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useInsightsContext } from '../contexts/InsightsContext';
import ComponentDetails from './ComponentDetails';
import MetricsDetails from './MetricsDetails';

const InfoModal = ({ show, handleClose, componentData }) => {
    const { isInsightsEnabled } = useInsightsContext();
    const [hoveredMetric, setHoveredMetric] = useState(null);
    const [flippedMetrics, setFlippedMetrics] = useState({});

    if (!componentData) return null;

    const headerClass = 'info';

    const handleMetricClick = (metricId) => {
        setFlippedMetrics(prevState => ({
            ...prevState,
            [metricId]: !prevState[metricId]
        }));
    };

    const handleChartIconHover = (metricId) => {
        setHoveredMetric(metricId);
    };

    const handleChartIconLeave = () => {
        setHoveredMetric(null);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className={headerClass}>
                <Modal.Title>Detalhes do Componente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!hoveredMetric && <ComponentDetails componentData={componentData} />}
                {hoveredMetric && (
                    <div className="chart-container">
                        <img src={`/img/${hoveredMetric}.png`} alt="Chart" />
                    </div>
                )}
                {isInsightsEnabled && (
                    <MetricsDetails
                        flippedMetrics={flippedMetrics}
                        onMetricClick={handleMetricClick}
                        onChartIconHover={handleChartIconHover}
                        onChartIconLeave={handleChartIconLeave}
                    />
                )}
            </Modal.Body>
            <Modal.Footer>
                {isInsightsEnabled && (
                    <a
                        href="https://www.redhat.com/en/technologies/management/insights"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                        <img src="/img/redhat-insights.png" className="logo" alt="Red Hat Insights Logo" style={{ width: '150px', marginRight: '10px' }} />
                    </a>
                )}
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default InfoModal;
