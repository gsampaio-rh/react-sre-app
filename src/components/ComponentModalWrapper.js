import React from 'react';
import InfoModal from './InfoModal';
import WarningModal from './WarningModal';

const ComponentModalWrapper = ({ show, handleClose, componentData, problemData }) => {
    if (!componentData) return null;

    return problemData ? (
        <WarningModal show={show} handleClose={handleClose} componentData={componentData} problemData={problemData} />
    ) : (
        <InfoModal show={show} handleClose={handleClose} componentData={componentData} />
    );
};

export default ComponentModalWrapper;
