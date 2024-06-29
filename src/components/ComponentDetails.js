import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faInfoCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const ComponentDetails = ({ componentData }) => (
    <div className="component-details">
        <strong className="component-name">{componentData.name}</strong>
        <div className="detail-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="detail-icon" />
            <span>Localização: {componentData.location}</span>
        </div>
        <div className="detail-item">
            <FontAwesomeIcon icon={faInfoCircle} className="detail-icon" />
            <span>Status: {componentData.status}</span>
        </div>
        <div className="detail-item">
            <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
            <span>Última revisão: {componentData.last_revision_date}</span>
        </div>
        <div className="detail-item">
            <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
            <span>Data de expiração: {componentData.expiration_date}</span>
        </div>
    </div>
);

export default ComponentDetails;
