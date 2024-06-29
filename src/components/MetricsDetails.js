import React from 'react';
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

const MetricsDetails = ({ onMetricClick, selectedMetric, onChartIconHover, onChartIconLeave }) => {

    return (
        <div className="metrics-details">
            {metricsData.map(metric => (
                <div
                    key={metric.id}
                    className={`metric ${selectedMetric === metric.id ? 'flipped' : ''}`}
                    onClick={() => onMetricClick(metric.id)}
                >
                    <div className="metric-inner">
                        <div className="metric-front">
                            <FontAwesomeIcon icon={iconMapping[metric.icon]} className="icon" />
                            <p className="metric-value">{metric.value}</p>
                            <p className="metric-label">{metric.label}</p>
                        </div>
                        <div className={`metric-back ${metric.sli >= metric.slo ? 'positive' : 'negative'}`}>
                            <div
                                className="chart-icon-container"
                                onMouseEnter={() => onChartIconHover(metric.id)}
                                onMouseLeave={onChartIconLeave}
                            >
                                <FontAwesomeIcon icon={faChartLine} className="chart-icon" />
                            </div>
                            <div className="metric-sli">
                                SLI:
                            </div>
                            <div className="metric-percentage">
                                {metric.sli}%
                            </div>
                            <div className="metric-description">
                                {metric.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MetricsDetails;
