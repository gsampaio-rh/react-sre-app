import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHourglassHalf, faThumbsUp, faWrench, faChartLine } from '@fortawesome/free-solid-svg-icons';
import metricsData from '../assets/data/sli_slo.json';

// Create a mapping of icon names to FontAwesome icon objects
const iconMapping = {
    faHourglassHalf: faHourglassHalf,
    faUsers: faUsers,
    faThumbsUp: faThumbsUp,
    faWrench: faWrench
};

const MetricsDetails = () => {
    const [flippedMetrics, setFlippedMetrics] = useState({});

    const handleMetricClick = (id) => {
        setFlippedMetrics(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="metrics-details">
            {metricsData.map(metric => (
                <div
                    key={metric.id}
                    className={`metric ${flippedMetrics[metric.id] ? 'flipped' : ''}`}
                    onClick={() => handleMetricClick(metric.id)}
                >
                    <div className="metric-inner">
                        <div className="metric-front">
                            <FontAwesomeIcon icon={iconMapping[metric.icon]} className="icon" />
                            <p className="metric-value">{metric.value}</p>
                            <p className="metric-label">{metric.label}</p>
                        </div>
                        <div className={`metric-back ${metric.sli >= metric.slo ? 'positive' : 'negative'}`}>
                            <div className="chart-icon-container">
                                <FontAwesomeIcon icon={faChartLine} className="chart-icon" />
                                <div className="chart-tooltip">
                                    <img src={`/img/${metric.id}.png`} alt="Chart" />
                                </div>
                            </div>
                            <div className="metric-sli">SLI:</div>
                            <div className="metric-percentage">{metric.sli}%</div>
                            <div className="metric-description">{metric.description}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MetricsDetails;
