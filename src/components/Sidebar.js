import React from 'react';

function Sidebar({ isVisible, handleClose, isInsightsEnabled, toggleInsights }) {
    return (
        <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
            <div className="sidebar-header">
                <h3>Config</h3>
                <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>
            <div className="sidebar-content">
                <label className="switch">
                    <input type="checkbox" checked={isInsightsEnabled} onChange={toggleInsights} />
                    <span className="slider round"></span>
                </label>
                <span>Enable Red Hat Insights</span>
            </div>
        </div>
    );
}

export default Sidebar;
