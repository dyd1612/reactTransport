import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartList from './CartList';

function Cart() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={()=>{setShow(!show)}} className="me-2">
        Cart
      </Button>
      <Offcanvas show={show} onHide={()=>{setShow(!show)}} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartList/>
          <div className='text-end'>
            <Button variant='primary'>Check Out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart