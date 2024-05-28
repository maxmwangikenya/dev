import { useState } from 'react';
import logo from '../assets/logo.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <div className='header'>
            <img src={logo} alt="" className='logo'/>
            {/*<p type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Sign In</p>
            <p className='signup'data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Sign Up</p>*/}
     
        </div>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}
