// components/Stairs.js
import React from 'react';

const Stairs = ({ position }) => (
    <div className={`stairs stairs-${position}`} id={`stairs-${position}`}>
        <img src="/img/stairs.png" className="stairs-icon" alt="Escadas" />
        <div className={`door-frame-${position === 'top' ? 'bottom' : 'top'}`}></div>
    </div>
);

export default Stairs;
