import React from 'react';

const MetricsSection = ({ currentSection }) => {
    const renderMetricsContent = () => {
        switch (currentSection) {
            case 'metrics':
                return (
                    <div className="metrics-section">
                        <img src="/img/satisfacao_elevador.png" alt="User Satisfaction" />
                        <img src="/img/tempo_de_resposta_elevador.png" alt="Response Time" />
                    </div>
                );
            case 'slis':
                return (
                    <div className="slis-section">
                        <img src="/img/incidentes_manutencao_elevador.png" alt="Incidents and Maintenance" />
                    </div>
                );
            case 'slos':
                return (
                    <div className="slos-section">
                        <img src="/img/elevador_tempo_medio.png" alt="Average Waiting Time" />
                    </div>
                );
            default:
                return null;
        }
    };

    return <>{renderMetricsContent()}</>;
};

export default MetricsSection;
