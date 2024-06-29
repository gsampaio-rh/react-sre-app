import React, { useState } from 'react';

function Room({ id, name, dimensions, initialPeople, backgroundColor, doorPosition }) {
    const [peopleCount, setPeopleCount] = useState(initialPeople);

    const changePersonCount = (change) => {
        setPeopleCount(prevCount => Math.max(0, prevCount + change));
    };

    return (
        <div className={`col-sm-2 room ${backgroundColor}`} id={id} data-room-name={name} data-dimensions={dimensions} data-people={peopleCount}>
            {doorPosition === 'top' ? <div className="door-frame-top"></div> : <div className="door-frame-bottom"></div>}
            <div className="person-counter-top">🧑 <span id={`count-${id}`}>{peopleCount}</span> pessoas</div>
            {name}<br />{dimensions}
            <div className="button-container">
                <button className="btn btn-primary" onClick={() => changePersonCount(1)}>+</button>
                <button className="btn btn-danger" onClick={() => changePersonCount(-1)}>-</button>
            </div>
        </div>
    );
}

export default Room;
