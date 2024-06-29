import React from 'react';
import Hall from './Hall';
import Stairs from './Stairs';

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
                        <Hall
                            position={position}
                            hasElevator={hasElevator}
                            isElevatorAffected={isElevatorAffected}
                            hasFireExtinguisher={hasFireExtinguisher}
                            isExtinguisherAffected={isExtinguisherAffected}
                            handleClick={handleClick}
                        />
                    </div>
                    <div className="row justify-content-md-center">
                        <Stairs position={position} />
                    </div>
                </>
            ) : (
                <>
                    <div className="row justify-content-md-center">
                        <Stairs position={position} />
                    </div>
                    <div className="row justify-content-md-center">
                        <Hall
                            position={position}
                            hasElevator={hasElevator}
                            isElevatorAffected={isElevatorAffected}
                            hasFireExtinguisher={hasFireExtinguisher}
                            isExtinguisherAffected={isExtinguisherAffected}
                            handleClick={handleClick}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default ExitArea;
