import React from 'react';
import Room from './Room';

function Floor() {
    return (
        <div className="floor" id="floor-plan">
            <div className="row justify-content-md-center">
                <Room id="room-sala-roxa" name="Sala Roxa" dimensions="4.76m x 4.76m" initialPeople={30} backgroundColor="sala-roxa" doorPosition="bottom" />
                <Room id="room-sala-azul" name="Sala Azul" dimensions="4.76m x 4.87m" initialPeople={30} backgroundColor="sala-azul" doorPosition="bottom" />
                <Room id="room-sala-rosa" name="Sala Rosa" dimensions="4.76m x 6.93m" initialPeople={30} backgroundColor="sala-rosa" doorPosition="bottom" />
                <Room id="room-sala-verde" name="Sala Verde" dimensions="3.94m x 4.06m" initialPeople={30} backgroundColor="sala-verde" doorPosition="bottom" />
            </div>
            <div className="row justify-content-md-center">
                <Room id="room-sala-marrom" name="Sala Marrom" dimensions="3.31m x 7.06m" initialPeople={30} backgroundColor="sala-marrom" doorPosition="top" />
                <Room id="room-sala-vermelha" name="Sala Vermelha" dimensions="3.94m x 3.94m" initialPeople={30} backgroundColor="sala-vermelha" doorPosition="top" />
                <Room id="room-sala-amarela" name="Sala Amarela" dimensions="3.31m x 7.06m" initialPeople={30} backgroundColor="sala-amarela" doorPosition="top" />
                <Room id="room-sala-laranja" name="Sala Laranja" dimensions="3.31m x 7.06m" initialPeople={30} backgroundColor="sala-laranja" doorPosition="top" />
            </div>
        </div>
    );
}

export default Floor;
