import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">Nucleo Icons</h2>
            <h4 className="description">
              BLK• Design System PRO comes with 100 custom icons made by our
              friends from NucleoApp. The official package contains over 2.100
              thin icons which are looking great in combination with BLK• Design
              System PRO Make sure you check all of them and use those that you
              like the most.
            </h4>
          </Col>
        </Row>
        <div className="blur-hover">
          <a>
            <div className="icons-container blur-item on-screen mt-5">
           <i><img  src={require("assets/img/chester-wade.jpg")}/>
            </i> 
            </div>
            <span className="blur-hidden h1 text-primary">
              CrosZK
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
}
