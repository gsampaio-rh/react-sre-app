import React from 'react';

function Sidebar({ isVisible, handleClose }) {
    return (
        <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
            <div className="sidebar-header">
                <h3>Config</h3>
                <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>
            <div className="sidebar-content">
                {/* Add your sidebar content here */}
                <p>Here you can add your configuration settings.</p>
            </div>
        </div>
    );
}

export default Sidebar;
