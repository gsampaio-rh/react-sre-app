import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHourglassHalf, faThumbsUp, faWrench } from '@fortawesome/free-solid-svg-icons';

const MetricsDetails = ({ onMetricClick, selectedMetric }) => {
    const metrics = [
        { id: 'tempoResposta', value: '40', label: 'Tempo de Resposta (segundos)', icon: faHourglassHalf, sli: 99.99, description: '99.99% da resposta abaixo de 1 minuto.' },
        { id: 'quantidadePessoas', value: '200', label: 'Quantidade de Pessoas por Dia', icon: faUsers, sli: 95, description: '95% das pessoas atendidas.' },
        { id: 'satisfacaoUsuarios', value: '10', label: 'Satisfação dos Usuários', icon: faThumbsUp, sli: 40, description: '40% dos usuários satisfeitos.' },
        { id: 'manutencoesRealizadas', value: '5', label: 'Manutenções Realizadas', icon: faWrench, sli: 85, description: '85% das manutenções realizadas com sucesso' }
    ];

    return(
        <div className="metrics-details">
            {metrics.map(metric => (
                <div
                    key={metric.id}
                    className={`metric ${selectedMetric === metric.id ? 'selected' : ''}`}
                    onClick={() => onMetricClick(metric.id)}
                >
                    <FontAwesomeIcon icon={metric.icon} className="icon" />
                    <p className="metric-value">{metric.value}</p>
                    <p className="metric-label">{metric.label}</p>
                    {selectedMetric === metric.id && (
                        <div className={`metric-sli ${metric.sli >= 95 ? 'positive' : 'negative'}`}>
                            <strong>SLI:</strong> {metric.description}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MetricsDetails;
