import React from "react";
import { Container ,Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';


const TransCard = () => {
    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Some issues
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Curenntly not working</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
  return (
    <>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={require("../Assests/road.jpg")} />
            <Card.Body>
              <Card.Title>Truck Container</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
              <Button variant="primary"  onClick={() => setModalShow(true)}>Go somewhere</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={require("../Assests/train.jpg")} />
            <Card.Body>
              <Card.Title>Train</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
              <Button variant="primary"  onClick={() => setModalShow(true)}>Go somewhere</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={require("../Assests/air.jpg")} />
            <Card.Body>
              <Card.Title>Surface</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text >
              <div className="text-center">
              <Button variant="primary" onClick={() => setModalShow(true)}>Go somewhere</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TransCard;
