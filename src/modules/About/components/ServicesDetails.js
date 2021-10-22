import React from 'react';

const DetailsServices = (props) => {
    const { button, imageLeft, rightMessage, titreService } = props
    return (
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="service-img d-flex justify-content-start flex-column align-items-center h-100">
                    <img className="img-fluid rounded shadow" src={imageLeft} alt={titreService} />
                    <div className="service-img d-flex justify-content-center align-items-start mt-5 w-100">
                        {button}
                    </div>
                </div>
            </div>
            <div className="col-md-6 p-2 p-md-1">
                <div className="service-description">
                    {rightMessage}
                </div>
            </div>
        </div>
    );
};

export default DetailsServices;