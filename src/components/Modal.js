import React from 'react';

const Modal = () => {
    return (
        <div className="modal fade" id="componentModal" tabIndex="-1" role="dialog" aria-labelledby="componentModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div id="modalHeader" className="modal-header">
                        <h5 className="modal-title" id="componentModalLabel">Component Problem</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" id="componentDetails">
                        <div className="issue">
                            <strong>Fire Extinguisher Problem</strong>
                            The fire extinguisher may not be functioning properly due to outdated microcode.
                        </div>
                        <div className="impact">
                            <strong>Impact:</strong>
                            The fire extinguisher may not work in case of an emergency, leading to potential safety risks.
                        </div>
                        <div className="suggestions">
                            <strong>Suggestions:</strong>
                            <ul>
                                <li>Check the microcode of the fire extinguisher.</li>
                                <li>Update the microcode to the latest version.</li>
                                <li>Ensure regular maintenance and testing of the fire extinguisher.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="https://www.redhat.com/en/technologies/management/insights" target="_blank" rel="noopener noreferrer">
                            <img src="path/to/redhat-insights.png" className=" logo" alt="Red Hat Insights Logo" />
                        </a>
                        <img src="path/to/alert.png" className="alert-icon flash" alt="Alert Icon" style={{ display: 'none' }} />
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
