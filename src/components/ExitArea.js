import React from 'react';

const ExitArea = ({ id }) => {
    return (
        <div className={`col-sm-2 exit-area`} id={id}>
            <div className="row justify-content-md-center">
                <div className="hall" id={`hall-${id}`}>
                    <img src="path/to/extinguisher.png" id="extinguisher" className="fire-extinguisher" alt="Extinguisher" />
                    <img src="path/to/exit-sign.jpg" className="exit-sign" alt="Exit Sign" />
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="stairs stairs-bottom" id={`stairs-${id}`}>
                    <div className="door-frame-top"></div>
                    <img src="path/to/stairs.png" className="stairs-icon" alt="Stairs" />
                </div>
            </div>
        </div>
    );
};

export default ExitArea;
