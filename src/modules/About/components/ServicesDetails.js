import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DetailsServices = (props) => {
    const { imageLeft, rightMessage, titreService } = props
    return (
        <Row>
            <Col>
                <div className="service-img d-flex justify-content-center align-items-start h-100">
                    <img className="img-fluid rounded shadow" src={imageLeft} alt={titreService} />
                </div>
            </Col>
            <Col>
                <div className="service-description">
                    {/* <h1>{titreService}</h1> */}
                    {rightMessage}
                </div>
            </Col>
        </Row>
    );
};

export default DetailsServices;