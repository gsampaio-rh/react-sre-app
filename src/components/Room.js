import React, { useState } from 'react';
import FireModal from './FireModal'; // Import the FireModal component

function Room({ id, name, dimensions, initialPeople, backgroundColor, doorPosition, showComponentDetails, isAffected, hasFire }) {
    const [peopleCount, setPeopleCount] = useState(initialPeople);
    const [showFireModal, setShowFireModal] = useState(false);

    const changePersonCount = (change) => {
        setPeopleCount(prevCount => Math.max(0, prevCount + change));
    };

    const handleFireIconClick = (e) => {
        e.stopPropagation();
        setShowFireModal(true);
    };

    const handleCloseFireModal = () => setShowFireModal(false);

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
                    onClick={handleFireIconClick}
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
                
                </button>
                <button
                    className="btn btn-danger"
                    onClick={(e) => {
                        e.stopPropagation();
                        changePersonCount(-1);
                    }}
                >
                
                </button>
            </div>
            <FireModal
                show={showFireModal}
                handleClose={handleCloseFireModal}
                roomId={id}
            />
        </div>
    );
}

export default Room;
