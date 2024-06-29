// components/Floor.js
import React from 'react';
import Room from './Room';
import ExitArea from './ExitArea';

function Floor({ data, affectedEquipment, showComponentDetails, fireLocation }) {
    return (
        <div className="container mt-5">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="my-5" id="floor-title">SRE Firefighters</h1>
                    <div className="floor" id="floor-plan">
                        <div className="row justify-content-md-center">
                            {data.rooms.slice(0, 2).map((room) => (
                                <Room
                                    key={room.id}
                                    id={room.id}
                                    name={room.name}
                                    dimensions={room.dimensions}
                                    initialPeople={room.initialPeople}
                                    backgroundColor={room.backgroundColor}
                                    doorPosition={room.doorPosition}
                                    showComponentDetails={showComponentDetails}
                                    isAffected={affectedEquipment.includes(room.id)}
                                    hasFire={fireLocation === room.name}
                                />
                            ))}
                            <ExitArea
                                id={data.exitAreas[0].id}
                                position={data.exitAreas[0].position}
                                hasElevator={data.exitAreas[0].hasElevator}
                                hasFireExtinguisher={data.exitAreas[0].hasFireExtinguisher}
                                showComponentDetails={showComponentDetails}
                                affectedEquipment={affectedEquipment}
                            />
                            {data.rooms.slice(2, 4).map((room) => (
                                <Room
                                    key={room.id}
                                    id={room.id}
                                    name={room.name}
                                    dimensions={room.dimensions}
                                    initialPeople={room.initialPeople}
                                    backgroundColor={room.backgroundColor}
                                    doorPosition={room.doorPosition}
                                    showComponentDetails={showComponentDetails}
                                    isAffected={affectedEquipment.includes(room.id)}
                                    hasFire={fireLocation === room.name}
                                />
                            ))}
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-md-12 corridor" id={data.corridor.id}>
                                {data.corridor.name} ({data.corridor.dimensions})
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            {data.rooms.slice(4, 6).map((room) => (
                                <Room
                                    key={room.id}
                                    id={room.id}
                                    name={room.name}
                                    dimensions={room.dimensions}
                                    initialPeople={room.initialPeople}
                                    backgroundColor={room.backgroundColor}
                                    doorPosition={room.doorPosition}
                                    showComponentDetails={showComponentDetails}
                                    isAffected={affectedEquipment.includes(room.id)}
                                    hasFire={fireLocation === room.name}
                                />
                            ))}
                            <ExitArea
                                id={data.exitAreas[1].id}
                                position={data.exitAreas[1].position}
                                hasElevator={data.exitAreas[1].hasElevator}
                                hasFireExtinguisher={data.exitAreas[1].hasFireExtinguisher}
                                showComponentDetails={showComponentDetails}
                                affectedEquipment={affectedEquipment}
                            />
                            {data.rooms.slice(6, 8).map((room) => (
                                <Room
                                    key={room.id}
                                    id={room.id}
                                    name={room.name}
                                    dimensions={room.dimensions}
                                    initialPeople={room.initialPeople}
                                    backgroundColor={room.backgroundColor}
                                    doorPosition={room.doorPosition}
                                    showComponentDetails={showComponentDetails}
                                    isAffected={affectedEquipment.includes(room.id)}
                                    hasFire={fireLocation === room.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Floor;
