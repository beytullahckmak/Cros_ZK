import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container >
        <Row>
          <Col md="12">
            <h1 className="title">CrosZK</h1>
          </Col>
          <hr className="new-hr"/>
          <Col md="12" className="title">
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-simple"
                color="default"
                href=""
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button 
                className="btn-icon btn-neutral btn-simple"
                color="default"
                href=""
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-simple"
                color="default"
                href="https://github.com/Block-Fellas/CrosZk"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
