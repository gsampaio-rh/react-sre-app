import React from 'react';

const ComponentDetails = ({ componentData }) => (
    <div className="component-details">
        <strong>{componentData.name}</strong>
        <div>Localização: {componentData.location}</div>
        <div>Status: {componentData.status}</div>
        <div>Última revisão: {componentData.last_revision_date}</div>
        <div>Data de expiração: {componentData.expiration_date}</div>
    </div>
);

export default ComponentDetails;
