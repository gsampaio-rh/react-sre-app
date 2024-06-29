import React from 'react';

function ExitArea({ id, position, hasElevator, hasFireExtinguisher, showComponentDetails }) {
    const handleClick = () => {
        if (showComponentDetails) {
            showComponentDetails(id);
        }
    };

    return (
        <div className={`col-sm-2 exit-area ${position}`} id={id} onClick={handleClick}>
            {position === 'bottom' ? (
                <>
                    <div className="row justify-content-md-center">
                        <div className={`hall ${position}`} id={`hall-${position}`}>
                            {hasElevator && <img src="/img/elevator.png" className="elevator" alt="Elevador" />}
                            {hasFireExtinguisher && <img src="/img/extinguisher.png" className="fire-extinguisher" alt="Extintor de Incêndio" />}
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
                            {hasElevator && <img src="/img/elevator.png" className="elevator" alt="Elevador" />}
                            {hasFireExtinguisher && <img src="/img/extinguisher.png" className="fire-extinguisher" alt="Extintor de Incêndio" />}
                            <img src="/img/exit-sign.jpg" className="exit-sign" alt="Sinal de Saída" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ExitArea;
