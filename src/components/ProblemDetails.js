import React from 'react';

const ProblemDetails = ({ problemData, showCveDetails, toggleCveDetails }) => {
    if (!problemData) return null;

    const renderProblemInfo = () => (
        <>
            <div className="issue">
                <strong>{problemData.issue}</strong>
                {problemData.description}
            </div>
            <div className="impact">
                <strong>Impacto:</strong> {problemData.impact}
            </div>
            <div className="suggestions">
                <strong>Sugestões:</strong>
                <ul>
                    {problemData.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            </div>
        </>
    );

    const renderCveDetails = () => (
        <>
            <div className="issue">
                <strong>{problemData.cveDetails.synopsis}</strong>
                {problemData.cveDetails.description}
            </div>
            <div className="impact">
                <strong>Impacto:</strong> {problemData.cveDetails.impact}
            </div>
            <div className="suggestions">
                <strong>Sugestões:</strong>
                <ul>
                    {problemData.cveDetails.rules.map((rule, index) => (
                        <li key={index}>{rule.summary}</li>
                    ))}
                </ul>
            </div>
        </>
    );

    return (
        <>
            {problemData && !showCveDetails && renderProblemInfo()}
            {problemData && showCveDetails && problemData.cveDetails && renderCveDetails()}
        </>
    );
};

export default ProblemDetails;
