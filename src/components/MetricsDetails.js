import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHourglassHalf, faThumbsUp, faWrench } from '@fortawesome/free-solid-svg-icons';

const MetricsDetails = () => {
    const [flippedMetrics, setFlippedMetrics] = useState({});

    const metrics = [
        { id: 'tempoResposta', value: '40', label: 'Tempo de Resposta (segundos)', icon: faHourglassHalf, sli: 99.99, description: 'da resposta abaixo de 1 minuto.' },
        { id: 'quantidadePessoas', value: '200', label: 'Quantidade de Pessoas por Dia', icon: faUsers, sli: 95, description: 'das pessoas atendidas.' },
        { id: 'satisfacaoUsuarios', value: '20', label: 'Satisfação dos Usuários', icon: faThumbsUp, sli: 90, description: 'dos usuários satisfeitos.' },
        { id: 'manutencoesRealizadas', value: '5', label: 'Manutenções Realizadas', icon: faWrench, sli: 85, description: 'das manutenções realizadas com sucesso.' }
    ];

    const handleMetricClick = (id) => {
        setFlippedMetrics(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="metrics-details">
            {metrics.map(metric => (
                <div
                    key={metric.id}
                    className={`metric ${flippedMetrics[metric.id] ? 'flipped' : ''}`}
                    onClick={() => handleMetricClick(metric.id)}
                >
                    <div className="metric-inner">
                        <div className="metric-front">
                            <FontAwesomeIcon icon={metric.icon} className="icon" />
                            <p className="metric-value">{metric.value}</p>
                            <p className="metric-label">{metric.label}</p>
                        </div>
                        <div className={`metric-back ${metric.sli >= 95 ? 'positive' : 'negative'}`}>
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
