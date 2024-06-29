import React from 'react';

const Sidebar = () => {
    return (
        <div id="sidebar" className="sidebar">
            <div className="sidebar-header">
                <h2>Notifications</h2>
                <button id="close-sidebar">×</button>
            </div>
            <ul id="notifications-list" className="sidebar-content"></ul>
        </div>
    );
};

export default Sidebar;
