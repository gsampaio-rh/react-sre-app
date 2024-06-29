import React from 'react';
import Room from './Room';
import ExitArea from './ExitArea';

function Floor({ data, affectedEquipment, showComponentDetails }) {
    return (
        <div className="container mt-5">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="my-5" id="floor-title">SRE Firefighters</h1>
                    <div className="floor" id="floor-plan">
                        <div className="row justify-content-md-center">
                            <Room id="room-sala-roxa" name="Sala Roxa" dimensions="4.76m x 4.76m" initialPeople={30} backgroundColor="sala-roxa" doorPosition="bottom" showComponentDetails={showComponentDetails} isAffected={affectedEquipment.includes('room-sala-roxa')} />
                            <Room id="room-sala-azul" name="Sala Azul" dimensions="4.76m x 4.87m" initialPeople={30} backgroundColor="sala-azul" doorPosition="bottom" showComponentDetails={showComponentDetails} isAffected={affectedEquipment.includes('room-sala-azul')} />
                            <ExitArea id="exit-area-top" position="top" hasElevator hasFireExtinguisher={false} showComponentDetails={showComponentDetails} affectedEquipment={affectedEquipment} />
                            <Room id="room-sala-rosa" name="Sala Rosa" dimensions="4.76m x 6.93m" initialPeople={30} backgroundColor="sala-rosa" doorPosition="bottom" showComponentDetails={showComponentDetails} isAffected={affectedEquipment.includes('room-sala-rosa')} />
                            <Room id="room-sala-verde" name="Sala Verde" dimensions="3.94m x 4.06m" initialPeople={30} backgroundColor="sala-verde" doorPosition="bottom" showComponentDetails={showComponentDetails} isAffected={affectedEquipment.includes('room-sala-verde')} />
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-md-12 corridor" id="main-corridor">
                                Corredor Principal (11.47m, 7.45m, 11.48m)
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <Room id="room-sala-marrom" name="Sala Marrom" dimensions="3.31m x 7.06m" initialPeople={30} backgroundColor="sala-marrom" doorPosition="top" showComponentDetails={showComponentDetails} isAffected={affectedEquipment.includes('room-sala-marrom')} />
                            <Room id="room-sala-vermelha" name="Sala Vermelha" dimensions="3.94m x 3.94m" initialPeople={30} backgroundColor="sala-vermelha" doorPosition="top" showComponentDetails={showComponentDetails} isAffected={affectedEquipment.includes('room-sala-vermelha')} />
                            <ExitArea id="exit-area-bottom" position="bottom" hasElevator={false} hasFireExtinguisher showComponentDetails={showComponentDetails} affectedEquipment={affectedEquipment} />
                            <Room id="room-sala-amarela" name="Sala Amarela" dimensions="3.31m x 7.06m" initialPeople={30} backgroundColor="sala-amarela" doorPosition="top" showComponentDetails={showComponentDetails} isAffected={affectedEquipment.includes('room-sala-amarela')} />
                            <Room id="room-sala-laranja" name="Sala Laranja" dimensions="3.31m x 7.06m" initialPeople={30} backgroundColor="sala-laranja" doorPosition="top" showComponentDetails={showComponentDetails} isAffected={affectedEquipment.includes('room-sala-laranja')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Floor;
