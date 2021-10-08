import React from 'react';

import { Row, Col } from 'react-bootstrap';
import logoProject from "../../../../assets/allgreenico1.png";

const UserInfo = () => {
  return (
    <div className="userinfo">
      <div className="contentuserinfo1">
        <Row>
          <Col>
            <div className="upper-container">
              <div className="image-container">
                <img src={logoProject} alt="Logo" height="100px" width="100px" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="contentuserinfo2">
              <Row>
                <Col>
                  <span className="bold">Titre du projet</span><br />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="contentuserinfo">
                    <span className="grey" >
                      10-08-2021
                    </span>
                    <span className="linePost"></span>
                    <span className="grey"> 12h00 </span>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="buttoncard">
        <i className="fas fa-sort-down"></i>
      </div>
    </div>
  )
}

export default UserInfo;
