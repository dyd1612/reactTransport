import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoremIpsum from "react-lorem-ipsum";
import { Button } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from "react";

  

const AboutUs = () => {

    const [show, setShow] = useState(false);
  return (
    <section id="About">
      <div className="bg-warning py-3">
        <h2 className="text-center">
          <i className="bi  bi-truck text-info"></i> About Us{" "}
        </h2>
      </div>
      <Container className="my-5 p-3 border-warning border">
        <Row>
          <Col md={6}>
            <img src={require("../Assests/truckFac")} alt="Abbout"></img>
          </Col>
          <Col md={6} className="pt-3">
            <p className="h4 text-info">OUR COMPANY</p>
            <div className="text-justify">
              <LoremIpsum p={2} />
            </div>
            <Button onClick={()=>{setShow(true)}}>Read More</Button>
          </Col>
        </Row>
        <ToastContainer className = "position-fixed bottom-0 end-0 p-3" position= 'bottom-end'>
          <Toast onClose={()=>{setShow(false)}} show={show} delay={3000} autohide>  {/*This is auto hide purpose*/}
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Transport </strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! Thank you visit again</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default AboutUs;
