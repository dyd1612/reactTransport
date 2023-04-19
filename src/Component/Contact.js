import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
   <section id="Contact" className="mt-5">
    <h1 className="text-center bg-dark text-light p-3"><i class="bi bi-person-lines-fill"></i> Contact</h1>
     <Container fluid>
      <Row>
        <Col className="bg-light  display-5 text-center p-3 m-2">
          <i className="bi bi-telephone-fill text-success"></i>
          <h2> Phone</h2>
          <h5 className="text-warning">9566465782</h5>
        </Col>
        <Col className="bg-light  display-5 text-center p-3 m-2">
        <i className="bi bi-envelope-fill text-primary"></i>
          <h2>Email</h2>
          <h5 className="text-warning">yesudass1612@gmail.com</h5>
        </Col>
        <Col className="bg-light text-center p-3 m-2">
          <i className="bi bi-geo-alt-fill display-5 text-danger"></i>
          <h2>Location</h2>
          <h5 className="text-warning">
            Sesurajapuram (po), Anchetty Taluk ,Krishnagiri District Tamilnadu
            Pin code - 635102
          </h5>
        </Col>
      </Row>
    </Container>
   </section>
  );
};

export default Contact;
