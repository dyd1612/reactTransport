import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';


function HeaderNav() {
  return (
    <Navbar className="sticky-top"  bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-danger'><span><i className ="bi bi-truck-front text-secondary"></i> Transport Express</span></h2> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link href="#home" className='fw-bold ps-3 pe-3 bg-warning rounded me-3'  >Home</Nav.Link>
            <Nav.Link href="#About" className='fw-bold  ps-3 pe-3 bg-warning rounded me-3'>About Us</Nav.Link>
            <Nav.Link href="#Services" className='fw-bold  ps-3 pe-3 bg-warning rounded me-3'>Our Services </Nav.Link>
            <Nav.Link href="#Contact" className='fw-bold  ps-3 pe-3 bg-warning rounded me-3'>Contact Us</Nav.Link>
            <Nav.Link href="#Customer" className='fw-bold  ps-3 pe-3 bg-warning rounded me-3'>Customer Login</Nav.Link>
            <Cart/>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;