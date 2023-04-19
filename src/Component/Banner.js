import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";


const Banner = () => {
  return (
   <section id="home">
         <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../Assests/truckFac') }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Express - BREAKING THE BARRIERS OF DISTANCE</h3>
                <p>
                .Efficient. Safe. Reliable.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={require('../Assests/truck1')} 
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Express - BREAKING THE BARRIERS OF SPEED </h3>
                <p >• The moving service you can trust.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../Assests/trContainer')}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3> EXPRESS - BREAKING THE BARRIERS OF TIME</h3>
                <p>
                •	Serving with heart.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      </Container>
      <Container>
      <div className=" text-center">
        <h2 className="mt-3 display-5">Request a call back rigt now</h2>
        <p className="lead text-muted">Lorem ipsum odor amet, consectetuer adipiscing elit</p>
        
      </div>
      </Container>
    
   </section>
  );
};

export default Banner;
