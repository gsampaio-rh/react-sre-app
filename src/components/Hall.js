// components/Hall.js
import React from 'react';

const Hall = ({ position, hasElevator, isElevatorAffected, hasFireExtinguisher, isExtinguisherAffected, handleClick }) => (
  <div className={`hall ${position}`} id={`hall-${position}`}>
    {hasElevator && (
      <img
        src="/img/elevator.png"
        className={`elevator ${isElevatorAffected ? 'flash' : ''}`}
        alt="Elevador"
        onClick={(e) => handleClick(e, 'elevator')}
      />
    )}
    {hasFireExtinguisher && (
      <img
        src="/img/extinguisher.png"
        className={`fire-extinguisher ${isExtinguisherAffected ? 'flash' : ''}`}
        alt="Extintor de Incêndio"
        onClick={(e) => handleClick(e, 'fire_extinguisher')}
      />
    )}
    <img src="/img/exit-sign.jpg" className="exit-sign" alt="Sinal de Saída" />
  </div>
);

export default Hall;
