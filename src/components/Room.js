import React, { useState } from 'react';

function Room({ id, name, dimensions, initialPeople, backgroundColor, doorPosition, showComponentDetails, isAffected, hasFire }) {
    const [peopleCount, setPeopleCount] = useState(initialPeople);

    const changePersonCount = (change) => {
        setPeopleCount(prevCount => Math.max(0, prevCount + change));
    };

    return (
        <div
            className={`col-sm-2 room ${backgroundColor}`}
            id={id}
            data-room-name={name}
            data-dimensions={dimensions}
            data-people={peopleCount}
            onClick={() => showComponentDetails(id)}
        >
            {doorPosition === 'top' ? <div className="door-frame-top"></div> : <div className="door-frame-bottom"></div>}
            <div className="person-counter-top">🧑 <span id={`count-${id}`}>{peopleCount}</span> pessoas</div>
            {name}<br />{dimensions}
            {/* {isAffected && <div className="affected">Affected</div>} */}
            {hasFire && (
                <img
                    src="/img/fire-icon.png"
                    className="fire-icon"
                    alt="Fire"
                />
            )}
            <div className="button-container">
                <button
                    className="btn btn-primary"
                    onClick={(e) => {
                        e.stopPropagation();
                        changePersonCount(1);
                    }}
                >
                    +
                </button>
                <button
                    className="btn btn-danger"
                    onClick={(e) => {
                        e.stopPropagation();
                        changePersonCount(-1);
                    }}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default Room;
