import React from 'react';

const Room = ({ id, name, dimensions, peopleCount, incrementCount, decrementCount }) => {
    return (
        <div className={`col-sm-2 room ${id}`} id={id} data-room-name={name} data-dimensions={dimensions}
            data-people={peopleCount}>
            <div className="door-frame-bottom"></div>
            {name}<br />{dimensions}<br />
            <div className="person-counter-top">🧑 <span id={`count-${id}`}>{peopleCount}</span> pessoas</div>
            <div className="button-container">
                <button className="btn btn-primary" onClick={() => incrementCount(id)}></button>
                <button className="btn btn-danger" onClick={() => decrementCount(id)}></button>
            </div>
        </div>
    );
};

export default Room;
