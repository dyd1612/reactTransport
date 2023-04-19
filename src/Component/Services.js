import React from "react";
import { Container, Row ,Col } from "react-bootstrap";
import TransCard from "./TransCard";

const Services = () => {
  return (
    <section id="Services" className="bg-light">
      <Container fluid>
        <div>
          <h1 className="text-center bg-warning py-3">
            <i className="bi bi-truck-flatbed text-info"></i> Our
            <span>Services</span>
          </h1>
          <h3 className="my-3 text-center">
            We Pack it, Move it & Track it but never ever Crack It
          </h3>
        </div>
        <Row>
            <Col><TransCard/> </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
