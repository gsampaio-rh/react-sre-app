import React, { useState } from 'react';
import logs from '../assets/data/logs.json';

function LogSidebar({ isVisible, handleClose }) {
    const [showServerLogs, setShowServerLogs] = useState(false);
    const [showAILabels, setShowAILabels] = useState(false);

    const handleAnalyzeWithAI = () => {
        setShowAILabels(!showAILabels);
    };

    const handleConvertToServerLogs = () => {
        setShowServerLogs(!showServerLogs);
    };

    const getAILabelClass = (label) => {
        switch (label) {
            case 'Warning':
                return 'ai-label warning';
            case 'Critical':
                return 'ai-label critical';
            case 'Info':
                return 'ai-label info';
            case 'Security':
                return 'ai-label security';
            case 'Emergency':
                return 'ai-label emergency';
            case 'Error':
                return 'ai-label error';
            default:
                return 'ai-label';
        }
    };

    return (
        <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
            <div className="sidebar-header">
                <h3>Incident Logs</h3>
                <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>
            <div className="sidebar-content">
                <button className="sidebar-btn server-btn" onClick={handleConvertToServerLogs}>
                    {showServerLogs ? "Show Incident Logs" : "Convert to Server Logs"}
                </button>
                <button className="sidebar-btn ai-btn" onClick={handleAnalyzeWithAI}>
                    {showAILabels ? "Hide AI Analysis" : "AI Log Bert Analysis"}
                </button>
                {logs.map((log, index) => (
                    <div key={index} className="log-entry">
                        <strong>{log.time}</strong>
                        <span>{showServerLogs ? log.server_log : log.event}</span>
                        {showAILabels && (
                            <span className={getAILabelClass(log.ai_log_label)}>{log.ai_log_label}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogSidebar;
