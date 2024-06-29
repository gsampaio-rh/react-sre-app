import React from 'react';

function ExitArea({ id, position, hasElevator, hasFireExtinguisher }) {
    return (
        <div className={`col-sm-2 exit-area ${position}`} id={id}>
            {position === 'bottom' ? (
                <>
                    <div className="row justify-content-md-center">
                        <div className={`hall hall-${position}`} id={`hall-${position}`}>
                            {hasElevator && <img src="/img/elevator.png" className="elevator" alt="Elevator" />}
                            {hasFireExtinguisher && <img src="/img/extinguisher.png" className="fire-extinguisher" alt="Fire Extinguisher" />}
                            <img src="/img/exit-sign.jpg" className="exit-sign" alt="Exit Sign" />
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className={`stairs ${position}`} id={`stairs-${position}`}>
                            <img src="/img/stairs.png" className="stairs-icon" alt="Stairs" />
                            <div className={`door-frame-${position === 'top' ? 'bottom' : 'top'}`}></div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="row justify-content-md-center">
                        <div className={`stairs ${position}`} id={`stairs-${position}`}>
                            <img src="/img/stairs.png" className="stairs-icon" alt="Stairs" />
                            <div className={`door-frame-${position === 'top' ? 'bottom' : 'top'}`}></div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className={`hall hall-${position}`} id={`hall-${position}`}>
                            {hasElevator && <img src="/img/elevator.png" className="elevator" alt="Elevator" />}
                            {hasFireExtinguisher && <img src="/img/extinguisher.png" className="fire-extinguisher" alt="Fire Extinguisher" />}
                            <img src="/img/exit-sign.jpg" className="exit-sign" alt="Exit Sign" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ExitArea;
