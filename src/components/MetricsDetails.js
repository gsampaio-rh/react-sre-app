import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHourglassHalf, faThumbsUp, faWrench } from '@fortawesome/free-solid-svg-icons';

const MetricsDetails = () => {
    return (
        <div className="metrics-details">
            <div className="metric">
                <FontAwesomeIcon icon={faHourglassHalf} className="icon" />
                <p className="metric-value">40</p>
                <p className="metric-label">Tempo de Resposta<br />(segundos)</p>
            </div>
            <div className="metric">
                <FontAwesomeIcon icon={faUsers} className="icon" />
                <p className="metric-value">200</p>
                <p className="metric-label">Quantidade de Pessoas por Dia</p>
            </div>
            <div className="metric">
                <FontAwesomeIcon icon={faThumbsUp} className="icon" />
                <p className="metric-value">75%</p>
                <p className="metric-label">Satisfação dos Usuários</p>
            </div>
            <div className="metric">
                <FontAwesomeIcon icon={faWrench} className="icon" />
                <p className="metric-value">5</p>
                <p className="metric-label">Manutenções Realizadas</p>
            </div>
        </div>
    );
};

export default MetricsDetails;
