import React from 'react';

function ExitArea({ id, position, hasElevator, hasFireExtinguisher, showComponentDetails, affectedEquipment }) {
    const handleClick = (event, componentId) => {
        event.stopPropagation(); // Prevent the click event from bubbling up
        if (showComponentDetails) {
            showComponentDetails(componentId);
        }
    };

    const isElevatorAffected = affectedEquipment.includes('elevator');
    const isExtinguisherAffected = affectedEquipment.includes('fire_extinguisher');

    return (
        <div className={`col-sm-2 exit-area ${position}`} id={id}>
            {position === 'bottom' ? (
                <>
                    <div className="row justify-content-md-center">
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
                    </div>
                    <div className="row justify-content-md-center">
                        <div className={`stairs stairs-${position}`} id={`stairs-${position}`}>
                            <img src="/img/stairs.png" className="stairs-icon" alt="Escadas" />
                            <div className={`door-frame-${position === 'top' ? 'bottom' : 'top'}`}></div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="row justify-content-md-center">
                        <div className={`stairs stairs-${position}`} id={`stairs-${position}`}>
                            <img src="/img/stairs.png" className="stairs-icon" alt="Escadas" />
                            <div className={`door-frame-${position === 'top' ? 'bottom' : 'top'}`}></div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
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
                    </div>
                </>
            )}
        </div>
    );
}

export default ExitArea;
