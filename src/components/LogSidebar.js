import React, { useState } from 'react';
import logs from '../assets/data/logs.json';

function LogSidebar({ isVisible, handleClose }) {
    const [showServerLogs, setShowServerLogs] = useState(false);

    const handleAnalyzeWithAI = () => {
        // Add your AI analysis function here
        console.log("Analyzing logs with AI...");
    };

    const handleConvertToServerLogs = () => {
        setShowServerLogs(!showServerLogs);
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
                    Analyse with AI
                </button>
                {logs.map((log, index) => (
                    <div key={index} className="log-entry">
                        <strong>{log.time}</strong>
                        <span>{showServerLogs ? log.server_log : log.event}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogSidebar;
